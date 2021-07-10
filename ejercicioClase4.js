function destino(lugar){
    var lugar = lugar.toLowerCase();
    while(lugar===" " || lugar>=0){
        alert("Destino no disponible o nombre erroneo");
        lugar = prompt("Ingrese otro destino"); 
    }
    alert ("Iniciando viaje a: " +  lugar);
    
}


function gastos(gasolina, peajes) {
    var suma = gasolina + peajes;
    return suma; 
} 

function costePasajero(coste, pasajeros){
    var costePasajero =  coste/pasajeros;
    return costePasajero
    
}
 
function main(){ 
    var lugar = prompt("A que destino vas a viajar?");   
    destino(lugar);
    var gasolina = parseInt(prompt("Cuanto pagaran por la gasolina?"));
    var peajes = parseInt(prompt("Cuanto pagarán por el peaje?"));
    var pasajeros = parseInt(prompt("Cuantos pasajeros van a viajar?"));
    var gastos2 =gastos(gasolina, peajes);
    var resultado = costePasajero(gastos2, pasajeros);
    
    alert("Para realizar el viaje cada pasajero deberá abonarle: " + Math.round(resultado));
}

main();