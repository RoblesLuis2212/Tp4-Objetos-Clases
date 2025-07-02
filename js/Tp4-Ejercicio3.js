//Escribe una clase que permita crear distintos objetos “rectángulos”, con las
//propiedades de alto y ancho, mas los métodos necesarios para modificar y
//mostrar sus propiedades, calcular el perímetro y el área

//Creamos la clase rectangulo
class Rectangulo {
  //Encapsulamos las propiedades
  #alto;
  #ancho;
  //Definimos propiedades alto y ancho
  constructor(alto, ancho) {
    this.#alto = alto;
    this.#ancho = ancho;
  }
  //Creamos los metodos getters y setters para acceder ymodificar las propiedades
  get getAlto() {
    return this.#alto;
  }
  get getAncho() {
    return this.#ancho;
  }
  set setAlto(newAlto) {
    this.#alto = newAlto;
  }
  set setAncho(newAncho) {
    this.#ancho = newAncho;
  }
  //Metodo para calcular el perimetro del rectangulo
  Calcular_Perimetro() {
    //Aplicamos la formula
    const Perimetro = 2 * (this.#alto + this.#ancho);
    return Perimetro; //Retornamos el dato
  }
  //Metodo para calcular el area
  Calcular_Area() {
    const Area = this.#alto * this.#ancho;
    return Area;
  }
}

//Programa principal
//Solicitamos un alto y un ancho al usuario
const alto = parseFloat(prompt("Ingrese el alto del rectangulo: "));
const ancho = parseFloat(prompt("Ingrese el ancho del rectangulo: "));
const rectangulo1 = new Rectangulo(alto, ancho); //Creamos un objeto y pasamos los valores ingresados

//Calculamos y mostramos el Perimetro invocando al metodo
document.writeln(
  `<p>El perimetro del rectangulo es: ${rectangulo1.Calcular_Perimetro()}</p>`
);
document.writeln(
  `<p>El area del rectangulo es: ${rectangulo1.Calcular_Area()}</p>`
); //Calculamos mostramos el area

//Creamos un segundo objeto
const rectangulo2 = new Rectangulo(10, 5); //Le agregamos valores por defecto
//Asignamos nuevos valores utilizando el metodo set
rectangulo2.setAlto = 8;
rectangulo2.setAncho = 4;

//Calculamos el perimetro y al area del segundo rectangulo
document.writeln(
  `<p>El perimetro del segundo rectangulo es: ${rectangulo2.Calcular_Perimetro()}</p>`
);
document.writeln(
  `<p>El area del segundo rectangulo es: ${rectangulo2.Calcular_Area()}</p>`
);

//Mostramos la informacion de ambos rectangulos accediendo a los metodos get correspondientes
document.writeln(
  `<p>El ancho <strong>(Rectangulo1)</strong> es: ${rectangulo1.getAncho}, Alto: ${rectangulo1.getAlto}</p>`
);
document.writeln(
  `<p>El ancho <strong>(Rectangulo2)</strong> es: ${rectangulo2.getAncho}, Alto: ${rectangulo2.getAlto}</p>`
);
