import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import './pokeDetails.styl'

const RandomPokemon = observer(({ store }) => {
  const updateRandomPokemon = () => {
    const id = Math.floor(Math.random() * 160 + 50)
    store
      .getPokemon(id)
      .then((data) => store.setPokeStats(data))
      .catch((e) => console.log(e))
  }

  useEffect(() => {
    updateRandomPokemon()
    let itemId = setInterval(() => updateRandomPokemon(), 5000)
    return () => {
      clearInterval(itemId)
    }
  }, [])

  const { name, abilities, types, height, weight, sprite } = store.pokeStats

  const renderTypes = () => {
    if (!types) return
    const res = types.map((item) => {
      return (
        <li key={item.type.url} className="pokelist-item">
          - {item.type.name}
        </li>
      )
    })
    return res
  }

  const renderAbilities = () => {
    if (!abilities) return

    const res = abilities.map((item) => {
      return (
        <li key={item.ability.url} className="pokelist-item">
          - {item.ability.name}
        </li>
      )
    })
    return res
  }

  const pokeTypes = renderTypes()
  const pokeAbilities = renderAbilities()

  return (
    <div className="poke-info">
      {store.pokeStats.length && <span>Loading...</span>}
      <div className="wrapper-info">
        <h2>{name} card</h2>
        <p>Height: {height}</p>
        <p>Weight: {weight}</p>
        <br />
        <div className="wrapper">
          <ul>Types:{pokeTypes}</ul>
        </div>
        <br />
        <div className="wrapper">
          <ul>Abilities: {pokeAbilities}</ul>
        </div>
        <img src={sprite} alt=""></img>
      </div>
    </div>
  )
})

export default RandomPokemon
