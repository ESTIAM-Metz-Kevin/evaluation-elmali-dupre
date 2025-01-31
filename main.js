import pokemon from "./data/pokemon_4x3.js";

const liste_des_pokemons = pokemon;
const liste_des_buissons = document.querySelectorAll(".bush");

const liste_des_cases_de_la_grille =
  document.querySelectorAll(".row row-cols-4");
console.log(liste_des_cases_de_la_grille);

liste_des_cases_de_la_grille.forEach((afficher_les_pokemons) => {
  pokemon_choisi = generation_aleatoire_des_pokemons(liste_des_pokemons);
  console.log(liste_des_pokemons);
  console.log(pokemon_choisi);
  afficher_les_pokemons.setAttribute();
});

liste_des_buissons.forEach((cacher_les_buissons) => {
  cacher_les_buissons.addEventListener("click", () => {
    cacher_les_buissons.style.display = "none";
  });
});

function generation_aleatoire_des_pokemons(dictionnaire) {
  var pokemon_choisi_aléatoirement =
    dictionnaire[Math.floor(Math.random() * dictionnaire.length)];
  return pokemon_choisi_aléatoirement;
}
