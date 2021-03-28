(function () {
    window.addEventListener(`DOMContentLoaded`, executeScript);

    const POKEMON_URL = `https://pokeapi.co/api/v2/pokemon?offset=1000&limit=118`;
    let pokemons = [];

    async function executeScript() {
        let resp = await fetch(POKEMON_URL)
        let json = await resp.json();
        /* .then(resp => resp.json())
         .then(json => {
             console.log(json);*/

        pokemons = json.results;
        pokemons.forEach(addPokemonEl); //forEach calling addPokemonEl function and giving the needed parameter pokemonObj


        document.querySelectorAll(`.pokemon .name`).forEach(el => {
            el.addEventListener(`click`, async (e) => {
                let resp = await fetch(e.target.getAttribute(`data-url`))
                let json = await resp.json()
                document.getElementById(`current-pokemon`).setAttribute(`src`, json.sprites.front_default);

            })
        })


    };
    function addPokemonEl(pokemonObj) {
        let newPokemonEl = document.createElement(`div`);
        newPokemonEl.className = `pokemon`;
        newPokemonEl.innerHTML = `
                <div class= "name" data-url="${pokemonObj.url}">
                ${pokemonObj.name}
            </div > `;
        document.getElementById("pokemon-list").appendChild(newPokemonEl)

    }

})()