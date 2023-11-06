const { Character } = require('../db/connection')

const getApiData = async () => {
  const characters = []
  let iteration = 1
  while (iteration <= 5) {
    await fetch(`https://rickandmortyapi.com/api/character?page=${iteration}`)
      .then(res => res.json())
      .then(data => {
        data.results?.forEach(char => {
          characters.push({
            id: char.id,
            name: char.name,
            status: char.status,
            species: char.species,
            gender: char.gender,
            origin: char.origin.name,
            image: char.image
          })
        })
      })
    iteration++
  }
  return characters
}

const saveApiData = async () => {
  const characters = await getApiData()
  characters.forEach((char) => {
    Character.findOrCreate({
      where: char
    })
  })
}

module.exports = saveApiData
