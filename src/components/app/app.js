import React from 'react'
import { observer } from 'mobx-react'
import Header from '../header'
import { PokeList, PokeTypesList } from '../pokeList'
import pokeState from '../Store'
import { PokeDetails, RandomPokemon } from '../pokeDetails'
import PokeTypeOptions from '../pokeTypeOptions'
import SearchPanel from '../searchPanel'
import './App.scss'

const App = () => {
  const showPokeDetailsComponent = pokeState.pokeID ? (
    <PokeDetails store={pokeState} />
  ) : (
    <RandomPokemon store={pokeState} />
  )

  const showFilteredListByType = pokeState.pokeTypeID ? (
    <PokeTypesList store={pokeState} />
  ) : (
    <PokeList store={pokeState} />
  )

  return (
    <div className="App">
      <Header />
      <div className="filter">
        <SearchPanel store={pokeState} />
        <PokeTypeOptions store={pokeState} />
      </div>
      <div className="main-menu">
        {showFilteredListByType}
        {showPokeDetailsComponent}
      </div>
    </div>
  )
}

export default observer(App)
