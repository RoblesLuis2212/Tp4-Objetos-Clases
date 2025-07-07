//Nos piden realizar una agenda telefónica de contactos.
//Un contacto está definido por un nombre y un teléfono. Se considera que un
//contacto es igual a otro cuando sus nombres son iguales.
//Una agenda de contactos está formada por un conjunto de contactos. Se podrá
//crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10)
//Los métodos de la agenda serán los siguientes:
//aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda
//no puede almacenar más contactos indicar por pantalla.
//existeContacto(Contacto): indica si el contacto pasado existe o no.
//listarContactos(): Lista toda la agenda
//buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
//eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se
// ha eliminado o no por pantalla
//agendaLlena(): indica si la agenda está llena.
//huecosLibres(): indica cuántos contactos más podemos ingresar.
//Crea un menú con opciones que serán seleccionadas por el usuario usando un
//prompt, las salidas de las operaciones seleccionadas por el usuario se pueden
//mostrar en pantalla y  por consola.

class Agenda {
  //Encapsulacion de las propiedades
  #nombre;
  #numeroTelefono;
  #tamanio;
  #contactos;
  constructor(nombre, numeroTelefono) {
    this.#nombre = nombre;
    this.#numeroTelefono = numeroTelefono;
    this.#tamanio = 10; //Definimos un tamaño por defecto
    this.#contactos = [{ contacto: "Luis", numTelefono: "3863401405" }]; //Los contactos los almacenamos en un array de objetos
  }
  //Metodos getters y setters
  get getNombre() {
    return this.#nombre;
  }
  set setNombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  get getNumeroTelefono() {
    return this.#numeroTelefono;
  }
  set setNumeroTelefono(nuevoNumero) {
    this.#numeroTelefono = nuevoNumero;
  }
  get getTamanio() {
    return this.#tamanio;
  }
  set setTamanio(nuevoTamanio) {
    this.#tamanio = nuevoTamanio;
  }
  get getContactos() {
    return this.#contactos;
  }
  set setContactos(nuevoContacto) {
    this.#contactos = nuevoContacto;
  }
  //Metodo para agregar contactos a al agenda
  agregarContacto(contacto, numTelefono) {
    //Primero se verifica que la agenda no este llena
    if (this.#contactos.length === this.#tamanio) {
      alert("La agenda esta llena!");
      return; //Evitamos que el programa se siga ejecutando
    }
    //Invocamos al metodo "exiseContacto" para saber si el contacto existe o no en la agenda
    const contacto_valido = this.existeContacto(contacto, numTelefono);
    this.#contactos.push(contacto_valido); //Si no existe lo agregamos
    alert("Contacto agregado exitosamente");
    console.log(this.#contactos); //Linea para verificar que se agrego el elemento al array
  }
  //Metodo para verificar la existencia de los contactos en la agenda
  existeContacto(contacto, numTelefono) {
    //Si el telefono o el contacto esta dentro del array mostraremos el mensaje
    while (
      this.#contactos.some(
        (conct) =>
          conct.contacto === contacto || conct.numTelefono === numTelefono
      )
    ) {
      alert(
        `El contacto ${contacto} o el numero ${numTelefono} ya existe en la agenda`
      );
      //Si el contacto no esta en la agenda solicitamos que los cargue
      contacto = prompt("Ingrese un nuevo contacto: ");
      numTelefono = prompt("Ingrese su numero de telefono: ");
    }
    return { contacto, numTelefono };
  }
  //Este metodo es para verificar la existencia del contacto dentro del menu
  existe(nombre, numTelefono) {
    return this.#contactos.some(
      (c) => c.contacto === nombre || c.numTelefono === numTelefono
    );
  }
  //Metodo para listar los contactos
  listarContactos() {
    document.writeln(`<h2>Lista Contactos</h2>`);
    document.writeln(`<ul>`);
    for (let i = 0; i < this.#contactos.length; i++) {
      let c = this.#contactos[i];
      document.writeln(`<li>Nombre: ${c.contacto}</li>`);
      document.writeln(`<li>Numero: ${c.numTelefono}</li>`);
      document.writeln(`<br>`);
    }
    document.writeln(`</ul>`);
  }
  //Metodo para buscar el contacto, lo haremos por nombre
  buscarContacto(nombre) {
    const buscar = this.#contactos.find((c) => c.contacto === nombre); //Find busca el contacto en el array
    //Si lo encuentra mostramos su nombre y el numero de telefono
    if (buscar) {
      document.writeln(
        `<p>Numero de telefono de ${buscar.contacto} es ${buscar.numTelefono}</p>`
      );
      //Caso contrario le avisamos al usuario que no existe
    } else {
      document.writeln(`<p>El contacto ingresado no existe</p>`);
    }
  }
  //Metodo para eliminar contacto, por nombre
  eliminarContacto(contacto) {
    const indice = this.#contactos.findIndex((c) => c.contacto === contacto); //Primero buscamos el indice
    //Si se encontro devuelve indice -1 y procede a eliminarlo
    if (indice !== -1) {
      this.#contactos.splice(indice, 1);
      alert("Contacto eliminado correctamente");
    } else {
      alert("El contacto ingresado no existe en la agenda");
    }
    console.log(this.#contactos);
  }
  //Metodo para verificar si la agenda esta llena
  AgendaLlena() {
    if (this.#contactos.length > 10) {
      document.writeln(`<p>Agenda llena!</p>`);
    }
  }
  //Metodo para verificar los huecos libres
  huecosLibres() {
    const huecosDisponibles = this.#tamanio - this.#contactos.length; //Calculamos huecos libres
    document.writeln(
      `<p>Huecos disponibles en la agenda: ${huecosDisponibles}</p>`
    );
  }
}

//Programa principal
function Menu() {
  const obj1 = new Agenda("Luis", "3863401405"); //Creamos un objeto para poder acceder a los metodos
  let opcion; //Declaramos variable
  do {
    //Ilustramos un menu
    opcion = prompt(
      "-------------------------------Agenda-----------------------------\n" +
        "1.Agregar Contacto\n" +
        "2.Verificar si existe un contacto\n" +
        "3.Listar contactos\n" +
        "4.Buscar contacto\n" +
        "5.Eliminar contacto\n" +
        "6.Verificar Estado de agenda\n" +
        "7.Veficar espacio libre en agenda\n" +
        "8.Salir"
    );
    //Utilizamos un switch para ir ejecutando las diferentes opciones segun lo ingresado por el usuario
    switch (opcion) {
      case "1":
        const nombre = prompt("Ingrese el nombre del contacto: ");
        const telefono = prompt("Ingrese el telefono del contato: ");
        obj1.agregarContacto(nombre, telefono);
        break;

      case "2":
        const nombre_e = prompt(
          "Ingrese el nombre del contacto para ver si existen en la agenda: "
        );
        const telefono_e = prompt(
          "Ingrese el telefono del contacto para ver si existe en la agenda: "
        );
        if (obj1.existe(nombre_e, telefono_e)) {
          alert(`El contacto ya existe en la agenda`);
        } else {
          alert(`El contacto no existe la agenda`);
        }
        break;
      case "3":
        obj1.listarContactos();
        break;
      case "4":
        const contacto_buscar = prompt(
          "Ingrese el nombre del contacto a buscar: "
        );
        obj1.buscarContacto(contacto_buscar);
        break;
      case "5":
        const contacto_eliminar = prompt(
          "Ingrese el nombr del contacto a eliminar: "
        );
        obj1.eliminarContacto(contacto_eliminar);
        break;
      case "6":
        obj1.AgendaLlena();
        break;
      case "7":
        obj1.huecosLibres();
        break;
      default:
        alert("Opcion invalida");
    }
  } while (opcion !== "8");
}

Menu(); //Llamada al metodo
