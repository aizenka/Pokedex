import React from 'react'
import { observer } from 'mobx-react'
import './searchPanel.scss'

const SearchPanel = observer(({ store }) => {
  const filterNames = (value) => {
    store.updateFilter(value)
  }
  return (
    <div className="filter-panel">
      <input
        className="filter-input"
        value={store.filter}
        onChange={(e) => filterNames(e.target.value)}
        type="text"
        placeholder="Enter pokemon name"
      ></input>
    </div>
  )
})

export default SearchPanel
