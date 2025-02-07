import pokemon from "./data/pokemon_4x3.js";

const liste_des_pokemons = pokemon;
console.log("Variable liste_des_pokemons: \n", liste_des_pokemons);
const liste_des_buissons = document.querySelectorAll(".bush");
const liste_des_cases_de_la_grille = document.querySelectorAll(".box");

liste_des_cases_de_la_grille.forEach((caseElement) => {
  let nouveau_pokémon = generation_aleatoire_des_pokemons(liste_des_pokemons);
  console.log(nouveau_pokémon);
  const { name, sprite } = nouveau_pokémon;
  let nomElement = document.createElement("span");
  nomElement.textContent = name;
  let imgElement = document.createElement("img");
  imgElement.src = sprite;
  imgElement.className = "pokemon";
  imgElement.style.display = "none";
  imgElement.alt = name;
  caseElement.appendChild(imgElement);
  caseElement.addEventListener("click", () => {
    imgElement.style.display = "";
  });
  console.log(`Pokémon affiché : ${name}`);
});

liste_des_buissons.forEach((cacher_les_buissons) => {
  cacher_les_buissons.addEventListener("click", () => {
    cacher_les_buissons.style.display = "none";
  });
});

liste_des_cases_de_la_grille.forEach((afficher_les_pokemons) => {
  afficher_les_pokemons.addEventListener("click", () => {
    afficher_les_pokemons.style.display = "";
  });
});

console.log("Variable liste_des_buissons: ", liste_des_buissons);
console.log(
  "Variable liste_des_cases_de_la_grille \n",
  liste_des_cases_de_la_grille
);

function generation_aleatoire_des_pokemons(dictionnaire) {
  var pokemon_choisi_aléatoirement =
    dictionnaire[Math.floor(Math.random() * dictionnaire.length)];
  return pokemon_choisi_aléatoirement;
}
function distribution_des_pokemons(grille) {}
