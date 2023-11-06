const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('Character', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM,
      values: ['Alive', 'Dead', 'unknown'],
      allowNull: false,
      validate: {
        isIn: {
          args: [['Alive', 'Dead', 'unknown']],
          msg: 'Status must be Alive, Dead or unknown'
        }
      }
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.ENUM,
      values: ['Female', 'Male', 'Genderless', 'unknown'],
      allowNull: false,
      validate: {
        isIn: {
          args: [['Female', 'Male', 'Genderless', 'unknown']],
          msg: 'Gender must be Female, Male, Genderless or Unknown'
        }
      }
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false
  })
}
