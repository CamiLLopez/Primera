class Viaje{
    constructor (destino,pasajeros, gasolina, peajes){
        this.destino = destino;
        this.pasajeros = pasajeros;
        this.gasolina = gasolina;
        this.peajes = peajes;
    }
    
    gastos() {
        var suma = this.gasolina + this.peajes;
        return suma; 
    } 
    
    costePasajero(){
        var costePasajero =  (this.gasolina + this.peajes) /this.pasajeros;
        return costePasajero
    }

}


function main(){ 
    var lugar = prompt("A que destino vas a viajar?");  
    var pasajeros = parseInt(prompt("Cuantos pasajeros van a viajar?"));
    var gasolina = parseInt(prompt("Cuanto pagaran por la gasolina?"));
    var peajes = parseInt(prompt("Cuanto pagarán por el peaje?"));
    let arrayViajes = []
    
    while (pasajeros!="" && lugar!=""){
        var viaje = new Viaje(lugar,pasajeros,gasolina,peajes);
        arrayViajes.push(viaje);
        var parcial = viaje.gastos();
        var total = viaje.costePasajero();
        alert("El gasto total es de " + parcial + " euros y para realizar el viaje cada pasajero deberá abonarle: " + Math.round(total) + " euros.");
        lugar = prompt("A que destino vas a viajar?");
        if(lugar===""){
            alert("Gracias por planificar sus viajes con nosostros!");
        }else{
            pasajeros = parseInt(prompt("Cuantos pasajeros van a viajar?"));
            gasolina = parseInt(prompt("Cuanto pagaran por la gasolina?"));
            peajes = parseInt(prompt("Cuanto pagarán por el peaje?"));
        } 
    };
    return arrayViajes;
}

function mostrarViaje(arrayViajes){
    let opcion = prompt("Quiere ver el listado de viajes guardados?");

    switch(opcion){
        case "si":
            for (var i=0; i<arrayViajes.length; i++){
                var mostrar = arrayViajes[i];
                console.log(mostrar);
            }
            break;
        case "no":
            console.log("Gracias por utilizar nuestra aplicación, lo esperamos pronto!");
            break;
        default:
            console.log("Opcion no valida, responda con si o no");
    };
}

let array = main();
mostrarViaje(array);