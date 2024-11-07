
let puntosUsuario = 0;
let puntosOrdenador = 0;


const opciones = ['piedra', 'papel', 'tijera'];


const botonesJugada = document.querySelectorAll('.boton-jugada');
const divResultados = document.getElementById('resultados');
const contadorUsuario = document.getElementById('contador-usuario');
const contadorOrdenador = document.getElementById('contador-ordenador');


function obtenerJugadaOrdenador() {
  const jugadaAleatoria = Math.floor(Math.random() * opciones.length); 
  return opciones[jugadaAleatoria];
}


function obtenerResultado(jugadaUsuario, jugadaOrdenador) {
  if (jugadaUsuario === jugadaOrdenador) {
    return 'Empate';
  } else if (
    (jugadaUsuario === 'piedra' && jugadaOrdenador === 'tijera') ||
    (jugadaUsuario === 'papel' && jugadaOrdenador === 'piedra') ||
    (jugadaUsuario === 'tijera' && jugadaOrdenador === 'papel')
  ) {
    return '¡Ganaste!';
  } else {
    return '¡Perdiste!';
  }
}


function actualizarPuntuacion(resultado) {
  if (resultado === '¡Ganaste!') {
    puntosUsuario++;
  } else if (resultado === '¡Perdiste!') {
    puntosOrdenador++;
  }

  
  contadorUsuario.textContent = `Tus puntos: ${puntosUsuario}`;
  contadorOrdenador.textContent = `Puntos de la máquina: ${puntosOrdenador}`;
}


function mostrarResultado(resultado, jugadaUsuario, jugadaOrdenador) {
  divResultados.innerHTML = `
    <p>Tu jugada: ${jugadaUsuario}</p>
    <p>Jugada del ordenador: ${jugadaOrdenador}</p>
    <p>Resultado: ${resultado}</p>
  `;
}


botonesJugada.forEach(boton => {
  boton.addEventListener('click', () => {
    const jugadaUsuario = boton.dataset.jugada;  
    const jugadaOrdenador = obtenerJugadaOrdenador();  
    const resultado = obtenerResultado(jugadaUsuario, jugadaOrdenador);  
    mostrarResultado(resultado, jugadaUsuario, jugadaOrdenador);  
    actualizarPuntuacion(resultado);  
  });
});
