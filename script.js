let currentPokemon;
let pokemoncards = [];
let searchedPokemons = [];

let card = {

    "pokemonName" : currentPokemon['name'],
    "pokemonImage" : currentPokemon['sprites']['other']['dream_world']['front_default'],
    "type" : currentPokemon['types'][0]['type']['name'],
    "species" : currentPokemon['types'][0]['type']['name'],
    "height" : currentPokemon['height'],
    "weight" : currentPokemon['weight'],
    // "abilities" : "",
    "hp" : currentPokemon['stats'][0]['base_stat'],
    "attack" : currentPokemon['stats'][1]['base_stat'],
    "defense" : currentPokemon['stats'][2]['base_stat'],
    "specialAttack" : currentPokemon['stats'][3]['base_stat'],
    // "move" : ""

}

async function loadPokemon(pokemon) {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    // console.log('Loaded Pokemon', currentPokemon);
    
    renderPokemonCard();
    renderPokemonInfo();
    types();
    about(currentPokemon['id']);
    searchedPokemons.push(card);
}


function searchPokemon() {
    let pokemon = document.getElementById('input').value;
    loadPokemon(pokemon);
    document.getElementById('input').value = ``;
}


function renderPokemonInfo() {
    document.getElementById('pokemonName' + currentPokemon['id']).innerHTML = currentPokemon['name'];
    document.getElementById('pokemonImage' + currentPokemon['id']).src = currentPokemon['sprites']['other']['dream_world']['front_default'];
    document.getElementById('type' + currentPokemon['id']).innerHTML = currentPokemon['types'][0]['type']['name'];
    // searchedPokemons.push([0]['pokemonName'] = currentPokemon['name']);
    // searchedPokemons.push([0]['pokemonImage'] = currentPokemon['sprites']['other']['dream_world']['front_default']);
    // searchedPokemons.push([0]['type'] = currentPokemon['types'][0]['type']['name']);
    // console.log(searchedPokemons)
}


function about(id) {
    aboutHTML();
    document.getElementById('species' + id).innerHTML = currentPokemon['types'][0]['type']['name'];
    document.getElementById('height' + id).innerHTML = currentPokemon['height'] + '0 cm';
    document.getElementById('weight' + id).innerHTML = currentPokemon['weight'] + ' kg';
    for (let i = 0; i < currentPokemon['abilities'].length; i++) {
        const element = currentPokemon['abilities'][i];
        let ability = element['ability'];
        document.getElementById('abilities' + id).innerHTML += `<div class="abilities-child">${ability['name']},</div>`;
    }
}

function baseStats(id) {
    baseStatsHTML(id);
    document.getElementById('hp' + id).innerHTML = currentPokemon['stats'][0]['base_stat'];
    document.getElementById('attack' + id).innerHTML = currentPokemon['stats'][1]['base_stat'];
    document.getElementById('defense' + id).innerHTML = currentPokemon['stats'][2]['base_stat'];
    document.getElementById('special-attack' + id).innerHTML = currentPokemon['stats'][3]['base_stat'];
}


function moves(id) {
    movesHTML(id);
    for (let i = 0; i < 4; i++) {
        const element = currentPokemon['moves'][i];
        let move = element['move']['name'];
        document.getElementById('move' + id).innerHTML += move + ', ';
    }
}