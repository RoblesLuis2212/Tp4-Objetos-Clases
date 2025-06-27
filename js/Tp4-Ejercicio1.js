//Crea un objeto llamado auto que tenga algunas características como el color,
//marca, modelo y si está encendido o apagado. Crea los métodos necesarios para
//permitir encender y apagar el auto.

//Creamos la clase auto con sus propiedades
const Auto = {
  Color: "Rojo",
  Marca: "Toyota",
  Modelo: "Corolla",
  Estado: false, //El estado del auto por defecto es apagado (false)

  //Creamos un metodo para encender el auto
  Encender: function () {
    this.Estado = true; //Al encenderse el auto el estado cambia a true
    document.writeln(`<p>Se encendio el auto🔥</p>`);
  },
  //Cremos otro metodo para apagar el auto
  Apagar: function () {
    this.Estado = false;
    document.writeln(`<p>Se apagó el auto💧</p>`);
  },
};

//Utilizamos el objeto para llamar a los metodos
Auto.Encender();
Auto.Apagar();
