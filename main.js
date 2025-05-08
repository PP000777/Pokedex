let searchInput = document.querySelector("#search")
let button = document.querySelector("#search-button")

function getInputValue() {
    let inputValue = searchInput.value;
    return inputValue;
}

function searchPokemon() {
    let linkApi = `https://pokeapi.co/api/v2/pokemon/${getInputValue()}`;
    let namePokemon = document.querySelector("#name");
    let tipoPokemon = document.querySelector("#type");
    let numberPokemon = document.querySelector("#number");
    let imagePokemon = document.querySelector(".imagee");
    let container = document.querySelector(".container");
    tipoPokemon.innerHTML = "";
    fetch(linkApi)
        .then(response => response.json())
        .then(data => {
            console.log('Nome:', data.name);
            namePokemon.innerHTML = data.name;
            console.log('Number: ', data.id);
            numberPokemon.innerHTML = data.id;
            console.log('Tipos:', data.types.map(type => type.type.name).join(', '));
            let imageUrl = data.sprites.front_default
            console.log('Imagem:', imageUrl);
            imagePokemon.src = imageUrl;
            data.types.forEach(typeInfo => {
                let tipo = typeInfo.type.name;
                let span = document.createElement("span");
                span.textContent = tipo;
                span.classList.add("type", tipo);
                tipoPokemon.appendChild(span);
                container.className = "container " + tipo;
            });

        })
        .catch(error => console.error('Erro:', error));
}

button.addEventListener("click", searchPokemon);