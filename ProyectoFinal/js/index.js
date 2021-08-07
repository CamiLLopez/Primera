class Viaje{
    constructor (destino,pasajeros, gasolina, peajes, extra=0){
        this.destino = destino;
        this.pasajeros = pasajeros;
        this.gasolina = gasolina;
        this.peajes = peajes;
        this.extra = extra;
    }
    
    gastos() {
        var suma = this.gasolina + this.peajes + this.extra;
        return suma; 
    } 
    
    costePasajero(){
        var costePasajero =  (this.gastos()) /this.pasajeros;
        return costePasajero
    }
    resumenViaje(){
        return "Para realizar el viaje a: "+ this.destino +", el gasto total es de " + this.gastos() + " euros y para realizar el viaje cada pasajero deberá abonarle: " + Math.round(this.costePasajero()) + " euros.";
    }

}

let arrayViajes = [];
function main(event){ 
    event.preventDefault();
    let lugar = document.getElementById("lugar").value;  
    let pasajeros =parseInt(document.getElementById("pasajeros").value);
    let gasolina = parseInt(document.getElementById("gasolina").value);
    let peajes = parseInt(document.getElementById("peajes").value);
    let extra = parseInt(document.getElementById("extra").value);
    let viaje = new Viaje(lugar,pasajeros,gasolina,peajes, extra);
    let resumen = viaje.resumenViaje();
    let viajeUnitario = [viaje, resumen];
    arrayViajes.push(viajeUnitario);
    localStorage.setItem("viajes", JSON.stringify(arrayViajes));
    
}

function mostrarViaje(){
    
    var mostrar = JSON.parse(localStorage.getItem("viajes"));
    for (let index = 0; index < mostrar.length; index++) {
        let element = mostrar;
        let mensajeValido = document.createElement("p");
        mensajeValido.innerHTML = `<h3 class="text-success text-justify">${element[index][1]}</h3>`;
        document.getElementById("resultados").appendChild(mensajeValido);
    }       
 }


let boton = document.getElementById("enviar");
boton.addEventListener("click", main);

let verViajes = document.getElementById("consultarViajes");
verViajes.addEventListener("click", mostrarViaje);

    
  