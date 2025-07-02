// Escribe una clase Producto para crear objetos. Estos objetos, deben presentar
//las propiedades código, nombre y precio, además del método imprime datos, el
//cual escribe por pantalla los valores de sus propiedades.
//Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
//Por último, utilice el método imprime datos para mostrar por pantalla los valores
//de los tres objetos instanciados.

//Creamos la clase producto
class Producto {
  //Definimos las propiedades de la clase
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }
  //Metodo para imprimir los datos del producto
  ImprimirDatos() {
    document.writeln(`<h2>Informacion del producto</h2>`);
    document.writeln(`<ul>`);
    document.writeln(`<li>Codigo: ${this.codigo}</li>`);
    document.writeln(`<li>Nombre: ${this.nombre}</li>`);
    document.writeln(`<li>Precio: ${this.precio}</li>`);
    document.writeln(`</ul>`);
  }
}

//Programa principal
const Productos = []; //Creamos un array vacio

//Utilizamos un bucle para cargar tres productos
for (let i = 0; i < 3; i++) {
  //Solicitamos los datos del producto al usuario
  const codigo = prompt("Ingrese el codigo del producto: ");
  const nombre = prompt("Ingrese el nombre del producto: ");
  const precio = parseFloat(prompt("Ingrese el precio del producto: "));
  //Crearemos un objeto en cada interacion del bucle
  const obj = new Producto(codigo, nombre, precio);
  Productos.push(obj); //Agregamos el objeto al array
}
console.log(Productos); //Verificamos que se agregaron correctamente por consola

//Bucle para mostrar la informacion de los productos
for (let i = 0; i < Productos.length; i++) {
  Productos[i].ImprimirDatos();
}
