function renderPokemonCard(){
    document.getElementById('main').innerHTML += `
    <div class="pokemonCard">
    <div class="pokedex" id="pokedex${next}">
        <h1 id="pokemonName${next}">Name</h1>
        <span class="type" id="type${next}">Type</span>
        <img id="pokemonImage${next}">
    </div>

    <div class="info-container">
        <div class="tabs" id="tabs${next}">
            <span id="about${next}" onclick="about(${next})" class="tab">About</span>
            <span id="base-stats${next}"  onclick="baseStats(${next})" class="tab">Base Stats</span>
            <!-- <span class="tab">Evolution</span> -->
            <span id="moves${next}"  onclick="moves(${next})" class="tab">Moves</span>
        </div>

        <div id="table${next}"></div>


    </div>
    </div>`;

}
function aboutHTML(){
    document.getElementById('table' + next).innerHTML =`
    <table class="table">
    <tr>
        <td><b>Species:</b></td>
        <td id="species${next}"></td>
    </tr>
    <tr>
        <td><b>Height:</b></td>
        <td id="height${next}"></td>
    </tr>
    <tr>
        <td><b>Weight:</b></td>
        <td id="weight${next}"></td>
    </tr>
    <tr>
        <td><b>Abilities:</b></td>
        <td id="abilities${next}"></td>
    </tr>
    </table>
    `;
}

function baseStatsHTML(){
    document.getElementById('table' + next).innerHTML = `
    <table class="table">
    <tr>
        <td><b>HP:</b></td>
        <td id="hp${next}"></td>
    </tr>
    <tr>
        <td><b>Attack:</b></td>
        <td id="attack${next}"></td>
    </tr>
    <tr>
        <td><b>Defense:</b></td>
        <td id="defense${next}"></td>
    </tr>
    <tr>
        <td><b>Special Attack:</b></td>
        <td id="special-attack${next}"></td>
    </tr>
    </table>
    `;
}

function movesHTML(){
    document.getElementById('table' + next).innerHTML = `
    <table class="table">
    <tr>
        <td><b>Moves:</b></td>
        <td id="move${next}"></td>
    </tr>
    </table>
    `;
}