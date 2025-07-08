//crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de
//aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un
//objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre
//de un avión y devolverá información en caso de encontrarlo, si no lo encontró
//indicar con un mensaje.
//Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista
//de pasajeros. Los aviones tienen el método abordar el cual permite que un
//pasajero suba al avión solo si hay capacidad disponible en el mismo, caso
//contrario mostrar un mensaje que indique que el avión está lleno.
//Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3
//objetos aviones con diferentes destinos. A

class Avion {
  constructor(nombre, capacidad, destino) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.destino = destino;
    this.lista_pasajeros = [];
  }
  Abordar(pasajero) {
    if (this.lista_pasajeros.length < this.capacidad) {
      document.writeln(`<p>El pasajero ${pasajero} abordó el avion</p>`);
      this.lista_pasajeros.push(pasajero);
    } else {
      document.writeln(
        `<p>El avion esta lleno, no se admiten mas pasajeros!</p>`
      );
    }
  }
}

class Aeropuerto {
  //Encapsulacion de las propiedades
  #nombreAeropuerto;
  #lista_Aviones;
  constructor(nombreAeropuerto) {
    this.#nombreAeropuerto = nombreAeropuerto;
    this.#lista_Aviones = [];
  }
  //Metodos para acceder a las propiedades
  get getnombreAeropuerto() {
    return this.#nombreAeropuerto;
  }
  set setnombreAeropuerto(nuevoNombre) {
    this.#nombreAeropuerto = nuevoNombre;
  }
  get getLista() {
    return this.#lista_Aviones;
  }
  set setLista(nuevoElementLista) {
    this.#lista_Aviones = nuevoElementLista;
  }
  agregarAvion(objAvion) {
    if (objAvion.length === 0) {
      alert("Error,por favor ingrese datos a cargar");
      return;
    }
    this.#lista_Aviones.push(objAvion);
    alert("Datos agregados correctamente");
    console.log(this.#lista_Aviones);
  }
  buscarAvion(nombreAvion) {
    if (nombreAvion === "") {
      alert("Por favor ingrese el nombre de un avion!");
      return;
    }
    const resultado = this.#lista_Aviones.find(
      (avion) => avion.nombre === nombreAvion
    );
    if (resultado) {
      document.writeln(`<h2>Informacion de Avion</h2>`);
      document.writeln(`<ul>`);
      document.writeln(`<li>Nombre Avion: ${resultado.nombre}</li>`);
      document.writeln(`<li>Capacidad: ${resultado.capacidad}</li>`);
      document.writeln(`<li>Destino: ${resultado.destino}</li>`);
      document.writeln(
        `<li>Cant.Pasajeros: ${resultado.lista_pasajeros.length}</li>`
      );
      document.writeln(`</ul>`);
    } else {
      document.writeln(`<p>Avion no encontrado!</p>`);
    }
  }
}
//Programa principal
const objAeropuerto = new Aeropuerto("Aeropuerto Internacional");
const avion = new Avion("Airbus 320 Family", 50, "Las Vegas");
const avion2 = new Avion("Bombardier CRJ Series", 70, "Bolivia");
const avion3 = new Avion("Harold", 5, "Busan");

objAeropuerto.agregarAvion(avion);
objAeropuerto.agregarAvion(avion2);
objAeropuerto.agregarAvion(avion3);

avion2.Abordar("Chuck");
avion2.Abordar("Pedro");
avion2.Abordar("Maria");
avion2.Abordar("Claudio");
avion2.Abordar("Sofía");

objAeropuerto.buscarAvion(avion2.nombre);
