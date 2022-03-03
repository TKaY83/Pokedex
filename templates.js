function renderPokemonCard(pokemon){
    document.getElementById('main').innerHTML += `
    <div class="pokemonCard">
    <div class="pokedex" id="pokedex${pokemon['id']}">
        <h1 id="pokemonName${pokemon['id']}">Name</h1>
        <span class="type" id="type${pokemon['id']}">Type</span>
        <img id="pokemonImage${pokemon['id']}">
    </div>

    <div class="info-container">
        <div class="tabs">
            <span id="about${pokemon['id']}" onclick="about(${pokemon['id']})" class="tab">About</span>
            <span id="base-stats${pokemon['id']}"  onclick="baseStats(${pokemon['id']})" class="tab">Base Stats</span>
            <span id="moves${pokemon['id']}"  onclick="moves(${pokemon['id']})" class="tab">Moves</span>
        </div>

        <div id="table${pokemon['id']}"></div>


    </div>
    </div>`;

}
function aboutHTML(pokemon){
    document.getElementById('table' + pokemon['id']).innerHTML =`
    <table class="table">
    <tr>
        <td><b>Species:</b></td>
        <td id="species${pokemon['id']}"></td>
    </tr>
    <tr>
        <td><b>Height:</b></td>
        <td id="height${pokemon['id']}"></td>
    </tr>
    <tr>
        <td><b>Weight:</b></td>
        <td id="weight${pokemon['id']}"></td>
    </tr>
    <tr>
        <td><b>Abilities:</b></td>
        <td id="abilities${pokemon['id']}"></td>
    </tr>
    </table>
    `;
}

function baseStatsHTML(pokemon){
    document.getElementById('table' + pokemon['id']).innerHTML = `
    <table class="table">
    <tr>
        <td><b>HP:</b></td>
        <td id="hp${pokemon['id']}"></td>
    </tr>
    <tr>
        <td><b>Attack:</b></td>
        <td id="attack${pokemon['id']}"></td>
    </tr>
    <tr>
        <td><b>Defense:</b></td>
        <td id="defense${pokemon['id']}"></td>
    </tr>
    <tr>
        <td><b>Special Attack:</b></td>
        <td id="special-attack${pokemon['id']}"></td>
    </tr>
    </table>
    `;
}

function movesHTML(pokemon){
    document.getElementById('table' + pokemon['id']).innerHTML = `
    <table class="table">
    <tr>
        <td><b>Moves:</b></td>
        <td id="move${pokemon['id']}"></td>
    </tr>
    </table>
    `;
}