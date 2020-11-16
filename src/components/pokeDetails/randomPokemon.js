import React, { useEffect, useCallback } from 'react'
import { observer } from 'mobx-react'
import './pokeDetails.css'

const RandomPokemon = observer(({ store }) => {
  const updateRandomPokemon = useCallback(() => {
    const id = Math.floor(Math.random() * 300 + 30)
    store
      .getPokemon(id)
      .then((data) => store.setPokeStats(data))
      .catch((e) => console.log(e))
  }, [store.pokeStats])

  useEffect(() => {
    updateRandomPokemon()
    let itemId = setInterval(() => updateRandomPokemon(), 5000)
    return () => {
      clearInterval(itemId)
    }
  }, [])

  const { name, abilities, types, height, weight, sprite } = store.pokeStats

  const renderTypes = () => {
    if (!types) {
      return
    }
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
    if (!abilities) {
      return
    }

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
      <h1>Random pokemon</h1>
      {!store.pokeStats && <span>Loading...</span>}
      <h3>Name: {name}</h3>
      <h3>Height: {height}</h3>
      <h3>Weight: {weight}</h3>
      <ul>Types: {pokeTypes}</ul>
      <ul>Abilities: {pokeAbilities}</ul>
      <img src={sprite} alt=""></img>
    </div>
  )
})

export default RandomPokemon
