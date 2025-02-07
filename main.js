import pokemon from "./data/pokemon_4x3.js";

const liste_des_cases_de_la_grille = document.querySelectorAll(".box");

let nomsDesPokemons = pokemon.map((pokemon) => pokemon);
const listeDePaireDePokemon = nomsDesPokemons.concat(nomsDesPokemons);
listeDePaireDePokemon.sort((pokemon) => 0.5 - Math.random());

function createPokemon_ImageText(InfoPkmnACreer, pokemonAffiche = true) {
  const { name, sprite } = InfoPkmnACreer;

  let nomElement = document.createElement("span");
  nomElement.textContent = name;
  nomElement.style.display = "none";

  let imgElement = document.createElement("img");
  imgElement.src = sprite;
  imgElement.className = "pokemon";
  imgElement.style.display = "";
  imgElement.alt = name;

  let infos_parents = document.createElement("div");
  pokemonAffiche && infos_parents.classList.add("pokemon_affiche");
  infos_parents.appendChild(nomElement);
  infos_parents.appendChild(imgElement);

  return infos_parents;
}

function cacherLesPokemonsNonCaptureDesBuissons() {
  document
    .querySelectorAll(".pokemon_affiche")
    .forEach((pokemon_affiche_element) => {
      const parent = pokemon_affiche_element.parentElement;
      parent.querySelector(".bush").style.display = "";
      pokemon_affiche_element.remove();
    });
}

function giveMePokemonAt(liste_pair, index) {
  let Pokemon = liste_pair[index];
  return Pokemon;
}

function AttribuerPokeballSiIdentiques() {
  document
    .querySelectorAll(".pokemon_affiche")
    .forEach((pokemon_affiche_element) => {
      const img = document.createElement("img");
      img.src = "./assets/pokeball.png";
      img.classList.add("pokeball");

      pokemon_affiche_element.parentElement.appendChild(img);
      pokemon_affiche_element.remove();
    });
}

function init_game(liste_grille_element, liste_pokemon_random) {
  let premierPokemonAffiche;
  let stopClick = false;

  liste_grille_element.forEach((box_element, index) => {
    box_element.addEventListener("click", () => {
      if (stopClick) return;
      // Si on clique sur le même buisson deux fois
      if (premierPokemonAffiche && premierPokemonAffiche.index === index)
        return;
      // Si pokeball on ne fait rien car pokemon capturé
      if (box_element.querySelector(".pokeball")) return;

      const bushImgElement = box_element.querySelector(".bush");
      bushImgElement.style.display = "none";

      const pokemonActuel = giveMePokemonAt(liste_pokemon_random, index);
      const imagePokemonElement = createPokemon_ImageText(pokemonActuel);

      box_element.appendChild(imagePokemonElement);

      if (!premierPokemonAffiche) {
        premierPokemonAffiche = {
          name: pokemonActuel,
          index,
        };
        return;
      }

      if (pokemonActuel === premierPokemonAffiche.name) {
        AttribuerPokeballSiIdentiques();
        console.log(pokemonActuel);
        let pkmncapture = document.querySelector(".liste_pokemons_captures");

        console.log(pkmncapture);

        pkmncapture.appendChild(createPokemon_ImageText(pokemonActuel, false));
      } else {
        stopClick = true;

        setTimeout(() => {
          cacherLesPokemonsNonCaptureDesBuissons();
          stopClick = false;
        }, 2000);
      }
      premierPokemonAffiche = undefined;
    });
  });
}

init_game(liste_des_cases_de_la_grille, listeDePaireDePokemon);
