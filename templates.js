function renderPokemonCard(){
    document.getElementById('main').innerHTML += `
    <div class="pokemonCard">
    <div class="pokedex" id="pokedex${currentPokemon['id']}">
        <h1 id="pokemonName${currentPokemon['id']}">Name</h1>
        <span class="type" id="type${currentPokemon['id']}">Type</span>
        <img id="pokemonImage${currentPokemon['id']}">
    </div>

    <div class="info-container">
        <div class="tabs" id="tabs${currentPokemon['id']}">
            <span id="about${currentPokemon['id']}" onclick="about(${currentPokemon['id']})" class="tab">About</span>
            <span id="base-stats${currentPokemon['id']}"  onclick="baseStats(${currentPokemon['id']})" class="tab">Base Stats</span>
            <!-- <span class="tab">Evolution</span> -->
            <span id="moves${currentPokemon['id']}"  onclick="moves(${currentPokemon['id']})" class="tab">Moves</span>
        </div>

        <div id="table${currentPokemon['id']}"></div>


    </div>
    </div>`;

}
function aboutHTML(){
    document.getElementById('table' + currentPokemon['id']).innerHTML =`
    <table class="table">
    <tr>
        <td><b>Species:</b></td>
        <td id="species${currentPokemon['id']}"></td>
    </tr>
    <tr>
        <td><b>Height:</b></td>
        <td id="height${currentPokemon['id']}"></td>
    </tr>
    <tr>
        <td><b>Weight:</b></td>
        <td id="weight${currentPokemon['id']}"></td>
    </tr>
    <tr>
        <td><b>Abilities:</b></td>
        <td id="abilities${currentPokemon['id']}"></td>
    </tr>
    </table>
    `;
}

function baseStatsHTML(id){
    document.getElementById('table' + id).innerHTML = `
    <table class="table">
    <tr>
        <td><b>HP:</b></td>
        <td id="hp${currentPokemon['id']}"></td>
    </tr>
    <tr>
        <td><b>Attack:</b></td>
        <td id="attack${currentPokemon['id']}"></td>
    </tr>
    <tr>
        <td><b>Defense:</b></td>
        <td id="defense${currentPokemon['id']}"></td>
    </tr>
    <tr>
        <td><b>Special Attack:</b></td>
        <td id="special-attack${currentPokemon['id']}"></td>
    </tr>
    </table>
    `;
}

function movesHTML(id){
    document.getElementById('table' + id).innerHTML = `
    <table class="table">
    <tr>
        <td><b>Moves:</b></td>
        <td id="move${currentPokemon['id']}"></td>
    </tr>
    </table>
    `;
}