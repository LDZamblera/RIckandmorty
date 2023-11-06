module.exports = async function (res, id) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data = await response.json()
    const { error } = data
    if (error) {
      throw new Error(error)
    }
    const characterResponse = {
      name: data.name,
      image: data.image,
      gender: data.gender,
      species: data.species,
      status: data.status,
      origin: data.origin
    }
    res.status(200).json(characterResponse)
  } catch (error) {
    res.status(400).json({ error })
  }
}
