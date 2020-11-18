import React, { useCallback, useEffect } from 'react'
import { observer } from 'mobx-react'
import './pokeList.styl'

const PokeList = observer(({ store }) => {
  const setPagination = useCallback(
    (move, count) => {
      if (!store.filter.length) {
        if (count > 0) store.setLimit(count)
        if (move === 1) store.setOffset(store.limit, 1)
        if (move === -1) store.setOffset(store.limit, -1)
        if (store.offset < 0) store.setOffset(store.offset, 0)
        store
          .getAllPokemons(store.limit, store.offset)
          .then((data) => {
            store.setPokeList(data)
          })
          .catch((e) => console.log(e))
      }
    },
    [store.pokeList]
  )

  useEffect(() => {
    setPagination()
  }, [])

  const renderItems = (arr) => {
    if (!arr.length) return
    return arr.map((pokemon, i) => {
      const { id, name } = pokemon
      const pokeName = name[0].toUpperCase() + name.slice(1)
      const field = `${id.slice(1)}. ${pokeName}`
      return (
        <li
          key={id}
          className="pokelist-item"
          onClick={() => store.onPokemonSelected(id.slice(1))}
        >
          {field}
        </li>
      )
    })
  }

  const filtered = store.filter.length
    ? renderItems(store.filteredFullList)
    : renderItems(store.pokeList)

  return (
    <div className="pokemon-list">
      <h2>Select pokemon</h2>
      <div className="pokemons">
        {!store.pokeList.length && <span>Loading...</span>}
        <ul>{filtered}</ul>
      </div>
      <div className="pagination-menu">
        <div className="pagination-arrow">
          <button
            className="pagination-button"
            onClick={() => setPagination(-1, 0)}
          >
            <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
          </button>
          <button
            className="pagination-button"
            onClick={() => setPagination(1, 0)}
          >
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
        <div className="pagination-list">
          <button
            className="limit-list-item"
            onClick={() => setPagination(0, 10)}
          >
            10
          </button>
          <button
            className="limit-list-item"
            onClick={() => setPagination(0, 20)}
          >
            20
          </button>
          <button
            className="limit-list-item"
            onClick={() => setPagination(0, 50)}
          >
            50
          </button>
        </div>
      </div>
    </div>
  )
})

export default PokeList
