import React, { useCallback, useEffect } from 'react'
import { observer } from 'mobx-react'
import './pokeList.css'

const PokeList = observer(({ store }) => {
  const setPagination = useCallback(
    (move, count) => {
      if (store.filter === '') {
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
    if (!arr) {
      return
    }
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

  const filtered =
    store.filter !== ''
      ? renderItems(store.filteredFullList)
      : renderItems(store.pokeList)

  return (
    <div className="poke-container">
      <h1>Choose pokemon</h1>
      <div className="list">
        {/* {!store.pokeList && <span>Loading...</span>} */}
        <ul>{filtered}</ul>
      </div>
      <div className="pagination-menu">
        <div className="pagination-arrow">
          <div className="pagination-prev" onClick={() => setPagination(-1, 0)}>
            prev
          </div>
          <div className="pagination-next" onClick={() => setPagination(1, 0)}>
            next
          </div>
        </div>
        <div className="pagination-list">
          <span
            className="pagination-list-item"
            onClick={() => setPagination(0, 10)}
          >
            10
          </span>
          <span
            className="pagination-list-item"
            onClick={() => setPagination(0, 20)}
          >
            20
          </span>
          <span
            className="pagination-list-item"
            onClick={() => setPagination(0, 50)}
          >
            50
          </span>
        </div>
      </div>
    </div>
  )
})

export default PokeList
