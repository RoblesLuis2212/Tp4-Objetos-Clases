//Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la
//cantidad como parámetro
//Un método extraer() que permita retirar la cantidad pasada como parámetro.
//Un método informar() que retorne la información del estado de la cuenta.
//Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a
//mostrar la descripción del estado de la cuenta.

//Creamos la clase cuenta
class Cuenta {
  //Se definen el titular, y un saldo por defecto como propiedades de la clase
  constructor() {
    this.Titular = "Alex";
    this.Saldo = 0;
  }
  //Este metodo se encarga de poder depositar dinero la cuenta
  IngresarDinero(montoDeposito) {
    //Establecemos un monto minimo de Deposito de $100.000
    if (montoDeposito < 100000) {
      alert("El monto a depositar debe ser superior a $100.000");
    } else {
      //Si el monto supera el minimo establecido se añade a la cuenta
      this.Saldo = montoDeposito; //Manipulamos el atributo usando this
      document.writeln(
        `<p>Dinero ingresado exitosamente, su saldo actual es: ${this.Saldo}</p>`
      ); //Mensaje de deposito exitoso
    }
  }
  //Metodo para extraer dinero
  ExtraerDinero(montoExtraccion) {
    //Verificamos que el monto que desea extraer no sea mayor al que tiene disponible
    if (montoExtraccion > this.Saldo) {
      alert("Fondos insuficientes"); //Si el monto es mayor mostramos un mensaje
    } else {
      this.Saldo -= montoExtraccion; //Caso contrario debitamos el monto del saldo disponible en la cuenta
      document.writeln(
        `<p>Extraccion exitosa, su saldo actual es: ${this.Saldo}</p>`
      );
    }
  }
  //Este metodo muestra la informacion de la cuenta
  InformacionCuenta() {
    document.writeln(`<h2>Datos de la cuenta</h2>`);
    return document.writeln(
      `<p><strong>Titular</strong>: ${this.Titular} <br> <strong>Saldo Disponible</strong>: ${this.Saldo}</p>`
    );
  }
}
//Programa principal
const objTitular = new Cuenta(); //Instanciamos la clase y creamos un objeto
//Solicitamos un monto para depositar el usuario
const montoIngresar = parseFloat(prompt("Ingrese el monto a depositar: "));
objTitular.IngresarDinero(montoIngresar); //Una vez ingresado invocamos al metodo y pasamos el dato
//Solicitamos un monto de extraccion
const montoExtraer = parseFloat(
  prompt("Ingrese el monto de dinero a extraer: ")
);
objTitular.ExtraerDinero(montoExtraer); //Pasamos el monto de extraccion al metodo
//Por ultimo mostramos la informacion de la cuenta
objTitular.InformacionCuenta();
