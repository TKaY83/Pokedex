function renderPokemonCard(i){
    document.getElementById('main').innerHTML += `
    <div class="pokemonCard">
    <div class="pokedex" id="pokedex${i}">
        <h1 id="pokemonName${i}">Name</h1>
        <span class="type" id="type${i}">Type</span>
        <img id="pokemonImage${i}">
    </div>

    <div class="info-container">
        <div class="tabs">
            <span id="about${i}" onclick="about(${i})" class="tab">About</span>
            <span id="base-stats${i}"  onclick="baseStats(${i})" class="tab">Base Stats</span>
            <span id="moves${i}"  onclick="moves(${i})" class="tab">Moves</span>
        </div>

        <div id="table${i}"></div>


    </div>
    </div>`;

}
function aboutHTML(i){
    document.getElementById('table' + i).innerHTML =`
    <table class="table">
    <tr>
        <td><b>Species:</b></td>
        <td id="species${i}"></td>
    </tr>
    <tr>
        <td><b>Height:</b></td>
        <td id="height${i}"></td>
    </tr>
    <tr>
        <td><b>Weight:</b></td>
        <td id="weight${i}"></td>
    </tr>
    <tr>
        <td><b>Abilities:</b></td>
        <td id="abilities${i}"></td>
    </tr>
    </table>
    `;
}

function baseStatsHTML(i){
    document.getElementById('table' + i).innerHTML = `
    <table class="table">
    <tr>
        <td><b>HP:</b></td>
        <td id="hp${i}"></td>
    </tr>
    <tr>
        <td><b>Attack:</b></td>
        <td id="attack${i}"></td>
    </tr>
    <tr>
        <td><b>Defense:</b></td>
        <td id="defense${i}"></td>
    </tr>
    <tr>
        <td><b>Special Attack:</b></td>
        <td id="special-attack${i}"></td>
    </tr>
    </table>
    `;
}

function movesHTML(i){
    document.getElementById('table' + i).innerHTML = `
    <table class="table">
    <tr>
        <td><b>Moves:</b></td>
        <td id="move${i}"></td>
    </tr>
    </table>
    `;
}