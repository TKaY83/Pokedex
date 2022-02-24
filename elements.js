function aboutHTML(){
    document.getElementById('table').innerHTML =`
    <table class="table">
    <tr>
        <td><b>Species:</b></td>
        <td id="species"></td>
    </tr>
    <tr>
        <td><b>Height:</b></td>
        <td id="height"></td>
    </tr>
    <tr>
        <td><b>Weight:</b></td>
        <td id="weight"></td>
    </tr>
    <tr>
        <td><b>Abilities:</b></td>
        <td id="abilities"></td>
    </tr>
    </table>
    `;
}

function baseStatsHTML(){
    document.getElementById('table').innerHTML = `
    <table class="table">
    <tr>
        <td><b>HP:</b></td>
        <td id="hp"></td>
    </tr>
    <tr>
        <td><b>Attack:</b></td>
        <td id="attack"></td>
    </tr>
    <tr>
        <td><b>Defense:</b></td>
        <td id="defense"></td>
    </tr>
    <tr>
        <td><b>Special Attack:</b></td>
        <td id="special-attack"></td>
    </tr>
    </table>
    `;
}

function movesHTML(){
    document.getElementById('table').innerHTML = `
    <table class="table">
    <tr>
        <td><b>Moves:</b></td>
        <td id="move"></td>
    </tr>
    </table>
    `;
}