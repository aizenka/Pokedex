import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
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
        <li key={id} onClick={() => store.onPokemonSelected(id.slice(1))}>
          {name}
        </li>
      )
    })
  }

  const filtered = updateList(store.filteredTypesList)

  console.log(toJS(store.filteredTypesList))

  return (
    <div className="poke_container">
      <h1>Poke list</h1>
      <div className="list">
        <ul>{filtered}</ul>
      </div>
      <button onClick={() => store.onTypeSelected('')}>Go to full list</button>
    </div>
  )
})

export default PokeTypeList
