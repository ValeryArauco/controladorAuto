class ControladorAuto{

  obtenerPosicionInicial(comandos){
    const partes = comandos.split('/');
    return partes[1];
  }

  validarPosicionInicial(comandos){
    const formatoValido = /^\d+,\d+[NEOSneos]$/;
    const partes = comandos.split('/');
    return formatoValido.test(partes[1]);
  }
}
  
  
export default ControladorAuto;