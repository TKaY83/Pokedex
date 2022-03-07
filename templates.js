function renderPokemonCard(pokemon, i){
    document.getElementById('main').innerHTML += `
    <div class="pokemonCard">
    <div class="pokedex" id="pokedex${pokemon[i]}">
        <h1 id="pokemonName${pokemon[i]}">Name</h1>
        <span class="type" id="type${pokemon[i]}">Type</span>
        <img id="pokemonImage${pokemon[i]}">
    </div>

    <div class="info-container">
        <div class="tabs">
            <span id="about${pokemon[i]}" onclick="about(${pokemon[i]})" class="tab">About</span>
            <span id="base-stats${pokemon[i]}"  onclick="baseStats(${pokemon[i]})" class="tab">Base Stats</span>
            <span id="moves${pokemon[i]}"  onclick="moves(${pokemon[i]})" class="tab">Moves</span>
        </div>

        <div id="table${pokemon[i]}"></div>


    </div>
    </div>`;

}
function aboutHTML(pokemon, i){
    document.getElementById('table' + pokemon[i]).innerHTML =`
    <table class="table">
    <tr>
        <td><b>Species:</b></td>
        <td id="species${pokemon[i]}"></td>
    </tr>
    <tr>
        <td><b>Height:</b></td>
        <td id="height${pokemon[i]}"></td>
    </tr>
    <tr>
        <td><b>Weight:</b></td>
        <td id="weight${pokemon[i]}"></td>
    </tr>
    <tr>
        <td><b>Abilities:</b></td>
        <td id="abilities${pokemon[i]}"></td>
    </tr>
    </table>
    `;
}

function baseStatsHTML(pokemon, i){
    document.getElementById('table' + pokemon[i]).innerHTML = `
    <table class="table">
    <tr>
        <td><b>HP:</b></td>
        <td id="hp${pokemon[i]}"></td>
    </tr>
    <tr>
        <td><b>Attack:</b></td>
        <td id="attack${pokemon[i]}"></td>
    </tr>
    <tr>
        <td><b>Defense:</b></td>
        <td id="defense${pokemon[i]}"></td>
    </tr>
    <tr>
        <td><b>Special Attack:</b></td>
        <td id="special-attack${pokemon[i]}"></td>
    </tr>
    </table>
    `;
}

function movesHTML(pokemon, i){
    document.getElementById('table' + pokemon[i]).innerHTML = `
    <table class="table">
    <tr>
        <td><b>Moves:</b></td>
        <td id="move${pokemon[i]}"></td>
    </tr>
    </table>
    `;
}