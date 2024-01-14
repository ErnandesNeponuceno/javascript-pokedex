const pokemonList = document.getElementById('pokemonList')
const loadMore = document.getElementById('loadMore')
const limit = 15
let offset = 0;

function converterPokemonToHtml(pokemon) {
    return `
      <li class="pokemon ${pokemon.type}">
      <span class="number">#${pokemon.number}</span>
      <span class="name">${pokemon.name}</span>

        <div class="details ${pokemon.type}">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            <div class="imagem_pokemon">
                <img src="${pokemon.photo}"
                alt="${pokemon.name}">
            </div>
        </div>
      </li>
`
}

function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(converterPokemonToHtml).join('')
        pokemonList.innerHTML += newHtml 
    })
}

loadPokemonItens(offset, limit)


loadMore.addEventListener('click', () =>{
    offset += limit
    loadPokemonItens(offset, limit)
})

