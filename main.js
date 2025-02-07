import pokemon from "./data/pokemon_4x3.js";

const liste_des_cases_de_la_grille = document.querySelectorAll(".box");

let nomsDesPokemons = pokemon.map((pokemon) => pokemon);
const listeDePaireDePokemon = nomsDesPokemons.concat(nomsDesPokemons);
listeDePaireDePokemon.sort((pokemon) => 0.5 - Math.random());

function createPokemon_ImageText(InfoPkmnACreer) {
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
  infos_parents.classList.add("pokemon_affiche");
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

function clique_sur_evenement(liste_grille_element, liste_pokemon_random) {
  let dernierPokemonClique = false;
  liste_grille_element.forEach((box_element, index) => {
    box_element.addEventListener("click", () => {
      const bushImgElement = box_element.querySelector(".bush");
      bushImgElement.style.display = "none";

      const pokemonActuel = giveMePokemonAt(liste_pokemon_random, index);
      const imagePokemonElement = createPokemon_ImageText(pokemonActuel);

      box_element.appendChild(imagePokemonElement);
      console.log(imagePokemonElement);
      if (dernierPokemonClique) {
        if (pokemonActuel === dernierPokemonClique) {
          box_element.appendChild(pokeball.png);
        } else {
          setTimeout(cacherLesPokemonsNonCaptureDesBuissons, 2000);
          console.log("Les Pokémon sont différents.");
        }
      }

      // Met à jour le dernier Pokémon cliqué
      dernierPokemonClique = pokemonActuel;
    });
  });
}

clique_sur_evenement(liste_des_cases_de_la_grille, listeDePaireDePokemon);
