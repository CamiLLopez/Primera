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
    resumenViaje(){
        return "Para realizar el viaje a: "+ this.destino +": el gasto total es de " + this.gastos() + " euros y para realizar el viaje cada pasajero deberá abonarle: " + Math.round(this.costePasajero()) + " euros.";
    }

}


function main(){ 
    var lugar = prompt("A que destino vas a viajar?");  
    var pasajeros = parseInt(prompt("Cuantos pasajeros van a viajar?"));
    var gasolina = parseInt(prompt("Cuanto pagaran por la gasolina?"));
    var peajes = parseInt(prompt("Cuanto pagarán por el peaje?"));
    let arrayViajes = []
    
    //ciclo while para instanciar tantos objetos como viajes quieran hacerse
    while (pasajeros!="" && lugar!=""){
        var viaje = new Viaje(lugar,pasajeros,gasolina,peajes);
        arrayViajes.push(viaje);
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

//funcion para mostrar resumen de todos los viajes realizados. 
function mostrarViaje(arrayViajes){
    let opcion = prompt("Quiere ver el listado de viajes guardados?");

    switch(opcion){
        case "si":
            for (var i=0; i<arrayViajes.length; i++){
                var mostrar = arrayViajes[i].resumenViaje();
                console.log(mostrar);
            }
            break;
        case "no":
            console.log("Gracias por utilizar nuestra aplicación, lo esperamos pronto!");
            break;
        default:
            console.log("Opcion no valida, responda con si o no. Saliendo de la aplicación");
            
    };
}

mostrarViaje(main());