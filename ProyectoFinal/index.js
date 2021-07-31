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
        return "Para realizar el viaje a: "+ this.destino +", el gasto total es de " + this.gastos() + " euros y para realizar el viaje cada pasajero deberá abonarle: " + Math.round(this.costePasajero()) + " euros.";
    }

}


function main(){ 
    var lugar = prompt("A que destino vas a viajar?");  
    var pasajeros = parseInt(prompt("Cuantos pasajeros van a viajar?"));
    var gasolina = parseInt(prompt("Cuanto pagaran por la gasolina?"));
    var peajes = parseInt(prompt("Cuanto pagarán por el peaje?"));
    let arrayViajes = [];
    let continuarViaje;
    //ciclo while para instanciar tantos objetos como viajes quieran hacerse
    while (pasajeros!="" && lugar!=""){
        var viaje = new Viaje(lugar,pasajeros,gasolina,peajes);
        arrayViajes.push(viaje);
        localStorage.setItem("viajes", JSON.stringify(arrayViajes));
        continuarViaje = prompt("Quiere añadir otro viaje?");
        let respuesta = continuarViaje.toLowerCase();
        if(respuesta==="no"){
            alert("Gracias por planificar sus viajes con nosostros!");
            return arrayViajes;
        }else{
            lugar = prompt("A que destino vas a viajar?");
            pasajeros = parseInt(prompt("Cuantos pasajeros van a viajar?"));
            gasolina = parseInt(prompt("Cuanto pagaran por la gasolina?"));
            peajes = parseInt(prompt("Cuanto pagarán por el peaje?"));
        } 
    }
}

//funcion para mostrar resumen de todos los viajes realizados. 
function mostrarViaje(arrayViajes){
    let opcion = prompt("Quiere ver el listado de viajes guardados?");
    let opcion1 = opcion.toLowerCase();

    switch(opcion1){
        case "si":
            for (var i=0; i<arrayViajes.length; i++){
                var mostrar = arrayViajes[i].resumenViaje();
                let mensajeValido = document.createElement("p");
                mensajeValido.innerHTML = `<h3 class="text-success text-justify">${mostrar}</h3>`;
                document.getElementById("resultados").appendChild(mensajeValido);
            }
            break;
        case "no":
            let mensaje = document.createElement("p");
            mensaje.innerHTML = '<h3 class="text-info text-justify">Gracias por utilizar nuestra aplicación, lo esperamos pronto!</h3>';
            document.getElementById("resultados").appendChild(mensaje);
            break;
        default:
            let mensajeInvalido = document.createElement("p");
            mensajeInvalido.innerHTML ='<h3 class="text-warning text-justify">Opcion no valida, responda con si o no. Saliendo de la aplicación</h3>';
            document.getElementById("resultados").appendChild(mensajeInvalido);
    };
}

mostrarViaje(main());