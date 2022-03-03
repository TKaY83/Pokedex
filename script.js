let currentPokemon;
let searchedPokemons = [];

async function loadPokemon(searchedPokemon) {
    let url = `https://pokeapi.co/api/v2/pokemon/${searchedPokemon}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    console.log('Loaded Pokemon', currentPokemon);
    searchedPokemons.push(currentPokemon);
    renderPokemon();
}

function renderPokemon() {
    for (let i = 0; i < searchedPokemons.length; i++) {
        const pokemon = searchedPokemons[i];
        renderPokemonCard(pokemon);
        renderPokemonInfo(pokemon);
        types(pokemon);
        about(pokemon);
        // baseStats(pokemon);
        // moves(pokemon);
    }
}


function searchPokemon() {
    let searchedPokemon = document.getElementById('input').value;
    loadPokemon(searchedPokemon);
    document.getElementById('input').value = ``;
}


function renderPokemonInfo(pokemon) {
    document.getElementById('pokemonName' + pokemon['id']).innerHTML = pokemon['name'];
    document.getElementById('pokemonImage' + pokemon['id']).src = pokemon['sprites']['other']['dream_world']['front_default'];
    document.getElementById('type' + pokemon['id']).innerHTML = pokemon['types'][0]['type']['name'];
    // console.log(searchedPokemons)
}


function about(pokemon) {
    aboutHTML(pokemon);
    document.getElementById('species' + pokemon['id']).innerHTML = pokemon['types'][0]['type']['name'];
    document.getElementById('height' + pokemon['id']).innerHTML = pokemon['height'] + '0 cm';
    document.getElementById('weight' + pokemon['id']).innerHTML = pokemon['weight'] + ' kg';
    for (let i = 0; i < pokemon['abilities'].length; i++) {
        const element = pokemon['abilities'][i];
        let ability = element['ability']['name'];
        document.getElementById('abilities' + pokemon['id']).innerHTML += `<div class="abilities-child">${ability},</div>`;
    }
}

function baseStats(pokemon) {
    baseStatsHTML(pokemon);
    document.getElementById('hp' + pokemon['id']).innerHTML = pokemon['stats'][0]['base_stat'];
    document.getElementById('attack' + pokemon['id']).innerHTML = pokemon['stats'][1]['base_stat'];
    document.getElementById('defense' + pokemon['id']).innerHTML = pokemon['stats'][2]['base_stat'];
    document.getElementById('special-attack' + pokemon['id']).innerHTML = pokemon['stats'][3]['base_stat'];
}


function moves(pokemon) {
    movesHTML(pokemon);
    for (let i = 0; i < 4; i++) {
        const element = pokemon['moves'][i];
        let move = element['move']['name'];
        document.getElementById('move' + pokemon['id']).innerHTML += move + ', ';
    }
}