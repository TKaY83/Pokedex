let currentPokemon;

async function loadPokemon(pokemon) {

    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    console.log('Loaded Pokemon', currentPokemon);
    renderPokemonCard();
    types();
    about();
    renderPokemonInfo();
}

function searchPokemon() {
    let pokemon = document.getElementById('input').value;
    loadPokemon(pokemon);
    document.getElementById('input').value = ``;
}

function types() {
    if (currentPokemon['types'][0]['type']['name'] == 'fire') {
        document.getElementById('pokedex').style = 'background-color: rgb(251, 108, 109);'
        document.getElementById('type').style = 'background-color: rgb(214, 94, 95);'
    }

    if (currentPokemon['types'][0]['type']['name'] == 'electric') {
        document.getElementById('pokedex').style = 'background-color: rgb(255, 215, 111);'
        document.getElementById('type').style = 'background-color: rgb(209, 177, 92);'
    }

    if (currentPokemon['types'][0]['type']['name'] == 'grass') {
        document.getElementById('pokedex').style = 'background-color: rgb(72, 207, 175);'
        document.getElementById('type').style = 'background-color: rgb(58, 161, 136);'
    }

    if (currentPokemon['types'][0]['type']['name'] == 'water') {
        document.getElementById('pokedex').style = 'background-color: rgb(108, 175, 251);'
        document.getElementById('type').style = 'background-color: rgb(82, 133, 191);'

    }

    if (currentPokemon['types'][0]['type']['name'] == 'bug') {
        document.getElementById('pokedex').style = 'background-color: rgb(255, 170, 51);'
        document.getElementById('type').style = 'background-color: rgb(209, 141, 46);'

    }

    if (currentPokemon['types'][0]['type']['name'] == 'poison') {
        document.getElementById('pokedex').style = 'background-color: rgb(43, 135, 35);'
        document.getElementById('type').style = 'background-color: rgb(34, 105, 27);'

    }

    if (currentPokemon['types'][0]['type']['name'] == 'ground') {
        document.getElementById('pokedex').style = 'background-color: rgb(163, 107, 51);'
        document.getElementById('type').style = 'background-color: rgb(140, 92, 43);'

    }
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

function moves() {
    movesHTML();
    for (let i = 0; i < 10; i++) {
        const element = currentPokemon['moves'][i];
        let move = element['move']['name'];
        document.getElementById('move').innerHTML += move + ', ';

    }
}