import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import './pokeList.scss'

const PokeTypeList = observer(({ store }) => {
  useEffect(() => {
    store.getPokemonWithCurrentType(store.pokeTypeID).then((data) => {
      store.setPokeTypeList(data)
    })
  }, [store.pokeTypeID])

  const extractId = (item) => {
    const idRegExp = /\/([0-9]*)$/
    return item.url.slice(0, -1).match(idRegExp)[0]
  }

  const updateList = (arr) => {
    if (!arr) {
      return
    }

    return arr.map((item) => {
      const id = extractId(item.pokemon)
      const name =
        item.pokemon.name[0].toUpperCase() + item.pokemon.name.slice(1)
      return (
        <li
          className="pokelist-item"
          key={id}
          onClick={() => store.onPokemonSelected(id.slice(1))}
        >
          {id.slice(1)}.{name}
        </li>
      )
    })
  }

  const filtered = updateList(store.filteredTypesList)

  return (
    <div className="pokemon-list">
      <h2>Poke list</h2>
      <div className="pokemons">
        <ul>{filtered}</ul>
      </div>
      <button
        className="go-back-button"
        onClick={() => store.onTypeSelected('')}
      >
        Go to full list <i className="fa fa-home"></i>
      </button>
    </div>
  )
})

export default PokeTypeList
