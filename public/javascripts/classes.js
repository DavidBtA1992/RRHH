const date = require("date-and-time");

class Empleado {
  constructor(
    id,
    nombre,
    apellido,
    salario,
    eps,
    arl,
    fingreso,
    fegreso,
    fnacimiento
  ) {
    //*Propiedades
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.salario = salario;
    this.eps = eps;
    this.arl = arl;
    this.fingreso = fingreso;
    this.fegreso = fegreso;
    this.fnacimiento = fnacimiento;
  }
  //*Metodos
  // Edad en años
  CalcularEdad() {
    let hoy = new Date();
    let fnacimiento = new Date(this.fnacimiento);

    let edad = date.subtract(hoy, fnacimiento).toDays();
    return Math.floor(edad / 365) ;
  }
  // Tiempo trabajado en años
  CalcularTiempoTrabajado() {
    let hoy = new Date();
    let fingreso = new Date(this.fingreso);
    let fegreso = new Date(this.fegreso);
    let tiempotrabajado = 0;

    fegreso.getTime() != 0
      ? (tiempotrabajado = date.subtract(fegreso, fingreso).toDays())
      : (tiempotrabajado = date.subtract(hoy, fingreso).toDays());

    return Math.floor(tiempotrabajado / 365);
  }
}

module.exports = Empleado
