import React, { useCallback, useEffect } from 'react'
import { observer } from 'mobx-react'
import './pokeDetails.css'
// import { toJS } from "mobx"

const PokeDetails = observer(({ store }) => {
  const updatePokemon = useCallback(() => {
    store
      .getPokemon(store.pokeID)
      .then((data) => store.setPokeStats(data))
      .catch((e) => console.log(e))
  }, [store.pokeID])

  useEffect(() => {
    if (store.pokeID) updatePokemon()
  }, [store.pokeID])

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
      return <li key={item.ability.url}>- {item.ability.name}</li>
    })
    return res
  }

  const pokeTypes = renderTypes()
  const pokeAbilities = renderAbilities()

  return (
    <div className="poke-info">
      <h1>Poke details</h1>
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

export default PokeDetails
