// 0. Iniciar el juego 
alert('inicia el juego')
alert('elegir tu ataque')
//1. Eelegir ataque de los jugadores
let player = prompt('Escribe 0 para piedra, 1 para papel y 2 para tijera')
if (player == 0){
    
    alert('elegist2 piedra')
} else if(player == 1){
    alert('Elegist2 papel')
} else if (player == 2){
    alert('Elegist2 tijera')
}
// 2. Elegir ataque aleatorio del enemigo

let enemy = Math.round(Math.random() * 2)
if (enemy == 0){
    
    alert('el enemigo elegio piedra')
} else if(enemy == 1){
    alert('el enemigo elegio papel')
} else if (enemy == 2){
    alert('el enemigo elegio tijera')
}

// 3. resultado
if (player== enemy){
alert('Empate :/')
}else if (player == 0 && enemy ==2){
    alert ('GANASTEEEEE woo')
}else if (player == 1 && enemy == 2){
    alert ('GANASTEEEEE woo')
}else if (player == 1 && enemy == 0){
    alert ('GANASTEEEEE woo')
} else if (player == 2 && enemy == 1){
    alert ('GANASTEEEEE woo')
}else {
    alert('PERDISTE :(')
}