import { observable, action, makeObservable, configure, computed } from 'mobx'
import axios from 'axios'

configure({ enforceActions: `observed` })
class PokeStore {
	constructor() {
		this._apiURL = 'https://pokeapi.co/api/v2'
		this.pokeList = []
		this.pokeStats = []
		this.pokeTypesOptions = []
		this.pokeTypeList = []
		this.pokeTypeID = ''
		this.pokeID = ''
		this.filteredList = []
		this.limit = 10
		this.offset = 0
		this.filter = ''

		makeObservable(this, {
			filteredList: observable,
			pokeList: observable,
			pokeID: observable,
			pokeTypeID: observable,
			pokeStats: observable,
			filter: observable,
			pokeTypesOptions: observable,
			pokeTypeList: observable,
			limit: observable,
			offset: observable,
			onPokemonSelected: action,
			setPokeStats: action,
			setPokeList: action,
			setPokeTypesOptions: action,
			setPokeTypeList: action,
			onTypeSelected: action,
			setLimit: action,
			setOffset: action,
			updateFilter: action,
			setFilteredFullList: action,
			filteredFullList: computed,
			filteredTypesList: computed,
			// _apiURL: observable,
			// getResource: action,
			// getAllPokemons: action,
			// getPokemon: action,
		})
	}

	getResource = async (url) => {
		try {
			const res = await axios.get(`${this._apiURL}${url}`)
			return res.data.results
		} catch (error) {
			console.error(error)
		}
	}

	getCurrentResource = async (url) => {
		try {
			const res = await axios.get(`${this._apiURL}${url}`)
			return res.data
		} catch (error) {
			console.log(error)
		}
	}

	getAllPokemons = async (limit, offset) => {
		const pokeList = await this.getResource(
			`/pokemon?limit=${limit}&offset=${offset}`
		)
		return pokeList.map(this.transformPokeList)
	}

	getPokemon = async (id) => {
		const pokemon = await this.getCurrentResource(`/pokemon/${id}`)
		return this.transformPokemon(pokemon)
	}

	getAllTypes = async () => {
		try {
			const types = await this.getResource(`/type/`)
			return types.map(this.transformPokeList)
		} catch (error) {
			console.error(error)
		}
	}

	getPokemonWithCurrentType = async (id) => {
		const pokeList = await this.getCurrentResource(`/type/${id}`)
		return pokeList.pokemon
	}

	get filteredFullList() {
		const matchesFilter = new RegExp(this.filter, 'i')
		return this.filteredList.filter(
			({ name }) => !this.filter || matchesFilter.test(name)
		)
	}

	get filteredTypesList() {
		const matchesFilter = new RegExp(this.filter, 'i')
		return this.pokeTypeList.filter(
			({ pokemon: { name } }) => !this.filter || matchesFilter.test(name)
		)
	}

	setLimit = (data) => {
		this.limit = data
	}

	setOffset = (data, value) => {
		if (value === 1) {
			this.offset += data
		} else if (value === -1) {
			this.offset -= data
		} else if (value === 0) {
			this.offset = 0
		}
	}

	setFilteredFullList = (data) => {
		this.filteredList = data
	}

	updateFilter = (value) => {
		this.filter = value
	}

	setPokeStats = (data) => {
		this.pokeStats = data
	}

	setPokeTypeList = (data) => {
		this.pokeTypeList = data
	}

	setPokeTypesOptions = (data) => {
		this.pokeTypesOptions = data
	}

	setPokeList = (data) => {
		this.pokeList = data
	}

	onTypeSelected = (id) => {
		this.pokeTypeID = id
	}

	onPokemonSelected = (id) => {
		this.pokeID = id
	}

	extractId = (item) => {
		const idRegExp = /\/([0-9]*)$/
		return item.url.slice(0, -1).match(idRegExp)[0]
	}

	transformPokemon = (pokemon) => {
		return {
			name: pokemon.name,
			id: pokemon.id,
			sprite: pokemon.sprites.front_default,
			abilities: pokemon.abilities,
			types: pokemon.types,
			height: pokemon.height,
			weight: pokemon.weight,
		}
	}

	transformPokeList = (pokemonList) => {
		return {
			id: this.extractId(pokemonList),
			name: pokemonList.name,
		}
	}
}

// transfromPokeTypeList = (pokemonList) => {
// const arrNames = pokemonList.pokemon.map((item) => {
//   return item.pokemon.name
// })
// const arrId = pokemonList.pokemon.map((item) => {
//   return this.extractId(item.pokemon)
// })

// const br = Object.assign({}, arrNames)
// const bb = Object.assign({}, arrId)

// function renameObjectKey(oldObj, newName) {
//   const newObj = {}

//   Object.keys(oldObj).forEach((key) => {
//     const value = oldObj[key]

//     console.log(value)
//   })

//   return newObj
// }

// const name = renameObjectKey(br)

//   return
// }

const pokeState = new PokeStore()
pokeState.getAllPokemons(1050, 0).then((data) => {
	pokeState.setFilteredFullList(data)
})

export default pokeState
