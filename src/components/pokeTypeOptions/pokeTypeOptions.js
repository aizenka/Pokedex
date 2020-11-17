import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import './pokeTypeOptions.scss'

const PokeTypeOptions = observer(({ store }) => {
  useEffect(() => {
    store.getAllTypes().then((data) => {
      store.setPokeTypesOptions(data)
    })
  }, [store])

  const getPokeOptions = (arr) => {
    if (!arr) {
      return
    }
    if (store.pokeTypeId === 0) {
      return
    }
    return arr.map((optionItem, i) => {
      const { id, name } = optionItem
      return (
        <option value={id.slice(1)} key={i}>
          {name}
        </option>
      )
    })
  }

  const opt = getPokeOptions(store.pokeTypesOptions)

  return (
    <div className="poke-options">
      <span>Type: </span>
      <select onChange={(e) => store.onTypeSelected(e.target.value)}>
        {opt}
      </select>
    </div>
  )
})

export default PokeTypeOptions
