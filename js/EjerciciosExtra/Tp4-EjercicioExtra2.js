//Crea un array de objetos, donde cada objeto represente a un estudiante
//con propiedades nombre y nota. Luego, escribe una función que reciba este array
//y calcule la nota media de los estudiantes. Usa prompt para ingresar los datos de los estudiantes.

const Estudiantes = []; //Se declara un array vacio
let nota;
//Solicitamos la cantidad de estudiantes a ingresar
const cantidad = parseInt(
  prompt("Ingrese la cantidad de estudiantes a cargar: ")
);

//Creamos un bucle para cargar los datos de los estudiantes
for (let i = 0; i < cantidad; i++) {
  const Notas = []; //Se declara un array donde se almacenaran las notas ingresadas
  const nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}`);
  //Se solicita las cantidad de notas a ingresar del estudiante
  const cantidad_notas = parseInt(prompt("Ingrese la cantidad de notas: "));
  for (let j = 0; j < cantidad_notas; j++) {
    nota = parseFloat(prompt("Ingrese la nota: "));
    Notas.push(nota); //Agregamos la notas al array
  }
  //Agregamos los objetos al array
  Estudiantes.push({
    Nombre: nombre,
    Notas: Notas,
  });
  console.log(Estudiantes); //Esta linea es solo para verificar si los datos fueron cargados con exito
}

//Funcion para calcular el promedio (media)
function Calcular_Media(objEstudiante) {
  //Utilizamos la funcion reduce para sumar las notas de el/los estudiante/s
  const suma = objEstudiante.Notas.reduce((acum, nota) => acum + nota, 0);
  const promedio = suma / objEstudiante.Notas.length; //Calculamos la media
  return promedio; //Retornamos el promedio
}
//Por ultimo recorremos el arreglo, y mostramos los datos de los estudiantes
Estudiantes.forEach((est) => {
  const promedio = Calcular_Media(est); //"est" actua como objeto y permite acceder a las propiedades
  document.writeln(
    `<p>El promedio de las notas del estudiante ${est.Nombre} es ${promedio}</p>`
  );
});
