
let paciente = prompt("Ingrese su nombre o esc para salir").toLowerCase()

while(paciente !== "esc"){
    for( turno = 1 ; turno <= 20 ; turno++){
        alert("hola " + paciente + " tu turno es el nro: " + turno)
        paciente = prompt("Ingrese su nombre o esc para salir").toLowerCase()

        if(paciente == "esc"){
            break
        }
    }
}