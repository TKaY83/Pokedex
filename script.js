let currentPokemon;
// let $ = document.getElementById;

async function loadPokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon/charmander`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    console.log('Loaded Pokemon', currentPokemon);
    about();
    renderPokemonInfo();

}


function renderPokemonInfo() {
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('pokemonImage').src = currentPokemon['sprites']['other']['dream_world']['front_default'];
    document.getElementById('type').innerHTML = currentPokemon['types'][0]['type']['name'];

}

function about() {
    aboutHTML();
    document.getElementById('species').innerHTML = currentPokemon['types'][0]['type']['name'];
    document.getElementById('height').innerHTML = currentPokemon['height'] + '0 cm';
    document.getElementById('weight').innerHTML = currentPokemon['weight'] + ' kg';
    for (let i = 0; i < currentPokemon['abilities'].length; i++) {
        const element = currentPokemon['abilities'][i];
        let ability = element['ability'];
        document.getElementById('abilities').innerHTML += `<div class="abilities-child">${ability['name']},</div>`;
    }
}

function baseStats() {
    baseStatsHTML();
    document.getElementById('hp').innerHTML = currentPokemon['stats'][0]['base_stat'];
    document.getElementById('attack').innerHTML = currentPokemon['stats'][1]['base_stat'];
    document.getElementById('defense').innerHTML = currentPokemon['stats'][2]['base_stat'];
    document.getElementById('special-attack').innerHTML = currentPokemon['stats'][3]['base_stat'];
}

function moves(){
    movesHTML();
    for (let i = 0; i < 10; i++) {
        const element = currentPokemon['moves'][i];
        let move = element['move']['name'];
        document.getElementById('move').innerHTML += move + ', ';
        
    }
}