import ControladorAuto from "./controladorAuto.js";

const constroladorAuto = new ControladorAuto();

describe("Permitir que el usuario ingrese la posición inicial del auto y mostrarla", () => {
  it("Deberia devolver la posición inicial ingresada por el usuario", () => {
    
    const comando = "5,5/1,2N/IAIAIAIAA";
    const posicionInicial = constroladorAuto.obtenerPosicionInicial(comando);
    expect(posicionInicial).toEqual("1,2N");
  });

  it("Deberia devolver cualquier posición inicial ingresada por el usuario", () => {
    
    const comando = "5,5/2,2N/IAIAIAIAA";
    const posicionInicial = constroladorAuto.obtenerPosicionInicial(comando);
    expect(posicionInicial).toEqual("2,2N");
  });
});

describe("Validar que la posicion inicial siga el formato de la cadena -> mostrar un mensaje al usuario", () => {
  it("Deberia devolver false si el formato de la posicion inicial es incorrecto", () => {
    
    const comando = "5,5/1,2XYZ/IAIAIAIAA";
    const resultado = constroladorAuto.validarPosicionInicial(comando);
    expect(resultado).toEqual(false);
  });


});