import pokemon from "./data/pokemon_4x3.js";

const liste_des_pokemons = pokemon;
console.log("Variable liste_des_pokemons: \n", liste_des_pokemons);
const liste_des_buissons = document.querySelectorAll(".bush");

liste_des_buissons.forEach((cacher_les_buissons) => {
  cacher_les_buissons.addEventListener("click", () => {
    cacher_les_buissons.style.display = "none";
  });
});

console.log("Variable liste_des_buissons: ", liste_des_buissons);

const liste_des_cases_de_la_grille = document.querySelectorAll(".box");

console.log("liste_des_cases_de_la_grille \n", liste_des_cases_de_la_grille);

liste_des_cases_de_la_grille.forEach((afficher_les_pokemons) => {
  afficher_les_pokemons = generation_aleatoire_des_pokemons(liste_des_pokemons);
  console.log(liste_des_pokemons);
  afficher_les_pokemons.setAttribute(); // TROUVER ALTERNATIVE
  console.log(afficher_les_pokemons);
});

function generation_aleatoire_des_pokemons(dictionnaire) {
  var pokemon_choisi_aléatoirement =
    dictionnaire[Math.floor(Math.random() * dictionnaire.length)];
  console.log("Pokemon choisir par la fonction", pokemon_choisi_aléatoirement);
  return pokemon_choisi_aléatoirement;
}
