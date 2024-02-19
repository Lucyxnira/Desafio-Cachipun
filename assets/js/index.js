// Solicitar al jugador cuantas rondas quiere jugar
var juego = prompt("¿Cuántas rondas desea jugar?")
for(var i = 0; i < juego; i++){

// Opciones    
    var opciones = ["piedra", "papel", "tijeras"];

// Solicitar al jugador que ingrese su opción
    var jugador = prompt("Elige: piedra, papel o tijeras")

// Opciones aleatorias de la computadora entre las 3 opciones anteriores
    var computadora = opciones[Math.floor(Math.random() * 3)];

// Verificar resultados con la computadora
    var resultado = "";

// Operaciones
if (!opciones.includes(jugador)) {
    resultado = "Por favor, escribe una opción válida (piedra, papel o tijeras).";
} else if (jugador === computadora) {
    resultado = "Empate! 😐";
} else if (
    (jugador === "piedra" && computadora === "tijeras") ||
    (jugador === "papel" && computadora === "piedra") ||
    (jugador === "tijeras" && computadora === "papel")
) {
    resultado = "¡Ganaste! 🎉";
} else {
    resultado = "¡Perdiste! 😢";
}

alert("Elegiste " + jugador + ", la computadora eligió " + computadora + ". " + resultado);
}
    