//Crea un objeto persona que contenga las propiedades nombre, edad y hobbies (un array de strings).
//Luego, escribe una función que reciba un objeto persona y un nuevo hobby
// y añada este hobby a la lista de hobbies de la persona.
//Finalmente, imprime los hobbies de la persona usando un bucle.
//Usa prompt para ingresar los datos de la persona y el nuevo hobby.

const Persona = {
  Nombre: prompt("Ingrese su nombre"),
  Edad: prompt("Ingrese su edad: "),
  Hobbies: ["Cantar", "Bailar"],
};

function Añardir_hobbie(objPersona, hobbie) {
  objPersona.Hobbies.push(hobbie);
}

const Hobbie = prompt("Ingrese su hobbie: ");
Añardir_hobbie(Persona, Hobbie);

document.writeln(`<h2>Hobbies de la persona: </h2>`);
document.writeln(`<ul>`);
for (let i = 0; i < Persona.Hobbies.length; i++) {
  document.writeln(`<li>${Persona.Hobbies[i]}</li>`);
}
document.writeln(`</ul>`);
