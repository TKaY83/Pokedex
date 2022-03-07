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
    document.getElementById('main').innerHTML = ``;
    for (let i = 0; i < searchedPokemons.length; i++) {
        const pokemon = searchedPokemons[i];
        renderPokemonCard(pokemon, i);
        renderPokemonInfo(pokemon, i);
        types(pokemon, i);
        about(pokemon, i);
        // baseStats(pokemon);
        // moves(pokemon);
    }
}


function searchPokemon() {
    let searchedPokemon = document.getElementById('input').value;
    loadPokemon(searchedPokemon);
    document.getElementById('input').value = ``;
}


function renderPokemonInfo(pokemon, i) {
    document.getElementById('pokemonName' + pokemon[i]).innerHTML = pokemon['name'];
    document.getElementById('pokemonImage' + pokemon[i]).src = pokemon['sprites']['other']['dream_world']['front_default'];
    document.getElementById('type' + pokemon[i]).innerHTML = pokemon['types'][0]['type']['name'];
    // console.log(searchedPokemons)
}


function about(pokemon, i) {
    aboutHTML(pokemon, i);
    document.getElementById('species' + pokemon[i]).innerHTML = pokemon['types'][0]['type']['name'];
    document.getElementById('height' + pokemon[i]).innerHTML = pokemon['height'] + '0 cm';
    document.getElementById('weight' + pokemon[i]).innerHTML = pokemon['weight'] + ' kg';
    for (let i = 0; i < pokemon['abilities'].length; i++) {
        const element = pokemon['abilities'][i];
        let ability = element['ability']['name'];
        document.getElementById('abilities' + pokemon[i]).innerHTML += `<div class="abilities-child">${ability},</div>`;
    }
}

function baseStats(pokemon, i) {
    baseStatsHTML(pokemon, i);
    document.getElementById('hp' + pokemon[i]).innerHTML = pokemon['stats'][0]['base_stat'];
    document.getElementById('attack' + pokemon[i]).innerHTML = pokemon['stats'][1]['base_stat'];
    document.getElementById('defense' + pokemon[i]).innerHTML = pokemon['stats'][2]['base_stat'];
    document.getElementById('special-attack' + pokemon[i]).innerHTML = pokemon['stats'][3]['base_stat'];
}


function moves(pokemon, i) {
    movesHTML(pokemon, i);
    for (let i = 0; i < 4; i++) {
        const element = pokemon['moves'][i];
        let move = element['move']['name'];
        document.getElementById('move' + pokemon[i]).innerHTML += move + ', ';
    }
}