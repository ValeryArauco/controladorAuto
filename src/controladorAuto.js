class ControladorAuto{

  obtenerPosicionInicial(comandos){
    const partes = comandos.split('/');
    return partes[1];
  }

  validarPosicionInicial(comandos){
    return false;
  }
}
  
  
export default ControladorAuto;