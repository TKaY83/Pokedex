function types() {
    if (currentPokemon['types'][0]['type']['name'] == 'fire') {
        document.getElementById('pokedex' + next).style = 'background-color: rgb(251, 108, 109);'
        document.getElementById('type' + next).style = 'background-color: rgb(214, 94, 95);'
    }

    if (currentPokemon['types'][0]['type']['name'] == 'electric') {
        document.getElementById('pokedex' + next).style = 'background-color: rgb(255, 215, 111);'
        document.getElementById('type' + next).style = 'background-color: rgb(209, 177, 92);'
    }

    if (currentPokemon['types'][0]['type']['name'] == 'grass') {
        document.getElementById('pokedex' + next).style = 'background-color: rgb(72, 207, 175);'
        document.getElementById('type' + next).style = 'background-color: rgb(58, 161, 136);'
    }

    if (currentPokemon['types'][0]['type']['name'] == 'water') {
        document.getElementById('pokedex' + next).style = 'background-color: rgb(108, 175, 251);'
        document.getElementById('type' + next).style = 'background-color: rgb(82, 133, 191);'

    }

    if (currentPokemon['types'][0]['type']['name'] == 'bug') {
        document.getElementById('pokedex' + next).style = 'background-color: rgb(255, 170, 51);'
        document.getElementById('type' + next).style = 'background-color: rgb(209, 141, 46);'

    }

    if (currentPokemon['types'][0]['type']['name'] == 'poison') {
        document.getElementById('pokedex' + next).style = 'background-color: rgb(43, 135, 35);'
        document.getElementById('type' + next).style = 'background-color: rgb(34, 105, 27);'

    }

    if (currentPokemon['types'][0]['type']['name'] == 'ground') {
        document.getElementById('pokedex' + next).style = 'background-color: rgb(163, 107, 51);'
        document.getElementById('type' + next).style = 'background-color: rgb(140, 92, 43);'

    }
}