import React, { useCallback, useEffect } from 'react'
import { observer } from 'mobx-react'
import './pokeDetails.scss'
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
      {!store.pokeStats && <span>Loading...</span>}
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
  )
})

export default PokeDetails
