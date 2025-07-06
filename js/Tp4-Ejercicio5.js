// Crea una clase llamada Persona que siga las siguientes condiciones:
//Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura,
//año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
//Los métodos que se debe poder utilizar  son:
//mostrarGeneracion: este método debe mostrar un mensaje indicando a qué
//generación pertenece la persona creada y cual es el rasgo característico de esta generación
//esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
//mostrarDatos: devuelve toda la información del objeto.
//generaDNI(): genera un número aleatorio de 8 cifras.

//Creamos la clase persona
class Persona {
  //Encapsulamiento de las propiedades
  #nombre;
  #edad;
  #dni;
  #sexo;
  #peso;
  #altura;
  #yearNacimiento;
  #fechaNacimiento;
  constructor(
    nombre,
    edad,
    dni,
    sexo,
    peso,
    altura,
    yearNacimiento,
    fechaNacimiento //Propiedad extra agregada por mi
  ) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#dni = dni;
    this.#sexo = sexo;
    this.#peso = peso;
    this.#altura = altura;
    this.#yearNacimiento = yearNacimiento;
    this.#fechaNacimiento = fechaNacimiento;
  }
  //Metodos getters y setters para manipular las propiedades
  get getNombre() {
    return this.#nombre;
  }
  set setNombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  get getEdad() {
    return this.#edad;
  }
  set setEdad(nuevaEdad) {
    this.#edad = nuevaEdad;
  }
  get getDni() {
    return this.#dni;
  }
  set setDni(nuevodni) {
    this.#dni = nuevodni;
  }
  get getSexo() {
    return this.#sexo;
  }
  set setSexo(nuevoSexo) {
    this.#sexo = nuevoSexo;
  }
  get getPeso() {
    return this.#peso;
  }
  set setPeso(nuevoPeso) {
    this.#peso = nuevoPeso;
  }
  get getAltura() {
    return this.#altura;
  }
  set setAltura(nuevaAltura) {
    this.#altura = nuevaAltura;
  }
  get yearNacimiento() {
    return this.#yearNacimiento;
  }
  set setYearNacimiento(newYear) {
    this.#yearNacimiento = newYear;
  }
  get getFechaNacimiento() {
    return this.#fechaNacimiento;
  }
  set setFechaNacimiento(newFechaNacimiento) {
    this.#fechaNacimiento = newFechaNacimiento;
  }
  //Metodo mostrar generacion
  mostrarGeneracion() {
    //Comprobamos a que generacion pertenece la persona dependiendo de su año de nacimiento

    if (this.#yearNacimiento >= 1994 && this.#yearNacimiento <= 2010) {
      return document.writeln(
        `<p>${
          this.#nombre
        } pertenece a la Generacion Z, Su rasgo caracteristico es: IRREVERENCIA😋</p>`
      ); //Mostramos los rasgos caracteristicos de cada generacion
    }
    if (this.#yearNacimiento >= 1981 && this.#yearNacimiento <= 1993) {
      return document.writeln(
        `<p>${
          this.#nombre
        } pertenece a la Generacion Y millenials, Su rasgo caracteristico es: FRUSTRACION 😨</p>`
      );
    }
    if (this.#yearNacimiento >= 1969 && this.#yearNacimiento <= 1980) {
      return document.writeln(
        `<p>${
          this.#nombre
        } pertenece a la Generacion X, Su rasgo caracteristico es: OBSESIÓN POR EL EXITO 😎</p>`
      );
    }
    if (this.#yearNacimiento >= 1949 && this.#yearNacimiento <= 1968) {
      return document.writeln(
        `<p>${
          this.#nombre
        } pertenece a la Baby Boom, Su rasgo caracteristico es: AMBICION 🤑</p>`
      );
    }
    if (this.#yearNacimiento >= 1930 && this.#yearNacimiento <= 1948) {
      return document.writeln(
        `<p>${
          this.#nombre
        } pertenece a la Silent Generation los niños de la post guerra, Su rasgo caracteristico es: AUSTERIDAD 😑</p>`
      );
    }
  }
  //Metodo para verificar si es mayor de edad
  esMayorEdad() {
    const hoy = new Date(); //Obtenemos la fecha actual
    const fecha_Nacimiento = new Date(this.#fechaNacimiento); //Usamos el atributo extra "fechaNacimiento"
    //Restamos el año actual y el año de nacimiento de la persona
    let edad = hoy.getFullYear() - fecha_Nacimiento.getFullYear();
    //Obtenemos los meses actuales,dias actuales y de nacimiento de persona para determinar si ya cumplio o no años, este año
    const mesActual = hoy.getMonth();
    const diaActual = hoy.getDate();
    const mesNacimiento = fecha_Nacimiento.getMonth();
    const diaNacimiento = fecha_Nacimiento.getDate();
    //Condicion para verificar si ya cumplio años
    if (
      mesActual < mesNacimiento ||
      (mesActual === mesNacimiento && diaActual < diaNacimiento)
    ) {
      edad -= 1; //Si todavia no cumplio le restamos 1
    }
    //Veficamos si la persona es mayor o menor de edad y retornamos el mensaje
    if (edad >= 18) {
      return document.writeln(`<p>${this.#nombre} es mayor de edad</p>`);
    } else {
      return document.writeln(`<p>${this.#nombre} es menor de edad</p>`);
    }
  }
  mostrarDatos() {
    document.writeln(`<h2>Datos Personales</h2>`);
    document.writeln(`<ul>`);
    document.writeln(`<li>Nombre: ${this.#nombre}</li>`);
    document.writeln(`<li>Edad: ${this.#edad}</li>`);
    document.writeln(`<li>DNI: ${this.#dni}</li>`);
    document.writeln(`<li>Sexo: ${this.#sexo}</li>`);
    document.writeln(`<li>Peso: ${this.#peso}</li>`);
    document.writeln(`<li>Altura: ${this.#altura}</li>`);
    document.writeln(`<li>Año de Nacimiento: ${this.#yearNacimiento}</li>`);
    document.writeln(`<li>Fecha de Nacimiento: ${this.#fechaNacimiento}</li>`);
    document.writeln(`</ul>`);
  }
  //Metodo para generar DNI aleatorio
  generarDNI() {
    let dni_Aleatorio = ""; //Se declara un string vacio
    for (let i = 0; i < 8; i++) {
      const numRandom = Math.floor(Math.random() * 10); //Generamos un numero aleatorio entre 0 y 9
      dni_Aleatorio += numRandom; //Se concatena los numeros generados con la cadena
    }
    this.#dni = dni_Aleatorio; //Asignamos el nuevo DNI al atributo
    return document.writeln(
      `<p>El nuevo DNI de ${this.#nombre} es: ${this.#dni}</p>`
    );
  }
}

//Creamos un objeto persona
const persona1 = new Persona(
  "Luis",
  "21",
  "45127747",
  "H",
  80.5,
  1.58,
  2003,
  "11-11-2003"
);
//Llamada al metodo mostrarGeneracion
persona1.mostrarGeneracion();

//Segundo objeto persona
const persona2 = new Persona("Sergio", "44", "29088323", "H", 100.0, 1.7, 1991);
persona2.mostrarGeneracion();

const persona3 = new Persona(
  "Ramona",
  70,
  "11333637",
  "M",
  70.0,
  1.55,
  1955,
  "1955-02-18"
);
persona3.mostrarGeneracion();

const persona4 = new Persona(
  "Micaela",
  11,
  "23564789",
  "M",
  50.5,
  1.21,
  2014,
  "2014-01-12"
);
//Uso de los diferentes metodos utilizando diferentes objetos
persona4.esMayorEdad();

persona3.esMayorEdad();

persona1.generarDNI();

persona4.generarDNI();
persona4.esMayorEdad();

persona1.esMayorEdad();

persona1.mostrarDatos();
persona4.mostrarDatos();
