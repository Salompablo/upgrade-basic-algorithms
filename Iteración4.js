//1.1
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

//1.2
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers.shift();
avengers.unshift("IRON-MAN");
console.log(avengers);

//1.3
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
alert(avengers.length);

//1.4
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.pop("Morty", "Summer");
console.log(rickAndMortyCharacters[4]);

//1.5
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[0]);
console.log(rickAndMortyCharacters[4]);

//1.6
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.splice(1, 1);
console.log(rickAndMortyCharacters);
