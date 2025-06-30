//Crea un objeto alumno con propiedades nombre, curso y calificaciones (un array de números).
//Escribe una función que reciba un objeto alumno y un número,
//y que añada la calificación al array de calificaciones del alumno.
//Calcula la calificación más alta del alumno y
//clasifica al alumno según su calificación más alta
//(A para 9-10, B para 7-8, C para 5-6, D para 0-4).

//Se crea un objeto alumno
const Alumno = {
  Nombre: prompt("Ingrese el nombre del alumno: "),
  Curso: prompt("Ingrese el curso al que pertenece el alumno: "),
  Calificaciones: [7, 6], //Se defininen calificaciones por defecto como atributos
};
let nota; //Se incializa una variable nota

//Se declara la funcion para poder clasificar al alumno
function Calificacion_Alumno(objAlumno, calificacion) {
  //Agregamos la nota pasada como parametro a la propiedad (Calificaciones) del objeto
  objAlumno.Calificaciones.push(calificacion);
  console.log(objAlumno);

  let notaMayor = 0; //Declaramos un auxiliar que guardara la nota mayor
  //Usamos un bucle para recorrer el array y encontrar la nota mayor
  for (let i = 0; i < objAlumno.Calificaciones.length; i++) {
    if (objAlumno.Calificaciones[i] > notaMayor) {
      notaMayor = objAlumno.Calificaciones[i]; //Al encontrarlo lo guardamos en el auxiliar
    }
  }
  console.log("La calificacion mas alta es: " + notaMayor);
  //Verificamos cual es la nota para poder calificar al alumno, retornamos los mensajes que se mostraran
  if (notaMayor === 10 || notaMayor === 9) {
    return document.writeln(`<p>La calificacion del alumno es: A`);
  }
  if (notaMayor === 7 || notaMayor === 8) {
    return document.writeln(`<p>La calificacion del alumno es: B`);
  }
  if (notaMayor === 5 || notaMayor === 6) {
    return document.writeln(`<p>La calificacion del alumno es: C`);
  }
  if (notaMayor >= 0 || notaMayor <= 4) {
    return document.writeln(`<p>La calificacion del alumno es: D`);
  }
}

//Solicitamos una nota al usuario
const Numero = parseFloat(prompt("Ingrese la nota del alumno: "));
//Invocamos a la funcion el objeto y el numero (nota)
Calificacion_Alumno(Alumno, Numero);
