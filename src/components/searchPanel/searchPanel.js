import React from 'react'
import { observer } from 'mobx-react'
const SearchPanel = observer(({ store }) => {
	const filterNames = (value) => {
		store.updateFilter(value)
	}
	return (
		<div>
			<input
				value={store.filter}
				onChange={(e) => filterNames(e.target.value)}
				type="text"
				placeholder="Search..."
			></input>
		</div>
	)
})

export default SearchPanel
