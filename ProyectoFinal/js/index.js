$( document ).ready(function() {

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
        
     
    if (localStorage.getItem('viajes')){
        arrayViajes = JSON.parse(localStorage.getItem('viajes'));
    }
    
    function guardarViaje(viaje){
        localStorage.setItem("viajes", JSON.stringify(viaje));
    }

    $('#formularioViajes').submit(function(event){
        event.preventDefault();
        let lugar = $('#lugar').val();  
        let pasajeros = parseInt($('#pasajeros').val());
        let gasolina = parseInt($('#gasolina').val());
        let peajes = parseInt($('#peajes').val());
        let extra = parseInt($('#extra').val());
        let viaje = new Viaje(lugar,pasajeros,gasolina,peajes, extra);
        let resumen = viaje.resumenViaje();
        let viajeUnitario = [viaje, resumen];
        arrayViajes.push(viajeUnitario);
        guardarViaje(arrayViajes);
    })

  
    function obtenerViajesStorage(key) {
        if(localStorage.getItem(key)){
          return JSON.parse(localStorage.getItem(key));
        }
      }
    
    if(!localStorage.getItem('viajes')){
        crearLista('body', 'listaViajes');
    }else{
        crearLista('body', 'listaViajes');
        crearItemsLista(obtenerViajesStorage('viajes'), '#listaItem');
    }
    
    function crearLista(element, id){
        const lista = `<li id=${id}></li>`;
        $(element).append(lista);
    }

    function crearItemsLista(viajes, id){
        for (let index = 0; index < viajes.length; index++) {
            let element = viajes;
            let mensajeValido = `<ul id=${id}>${element[index][1]}</ui>`;
            $('#resultados').append(mensajeValido);
        }
    }

    function borrarLista(id){
        $(id).empty();
    }

    $('#borrarViajes').click(function(){
        window.localStorage.clear();
        borrarLista('#resultados');
    })
    $('#consultarViajes').click(function(){
        if(localStorage.getItem('viajes')){
            crearLista('body', 'listaViajes');
            crearItemsLista(obtenerViajesStorage('viajes'), '#listaItem');
        }      
    })


});




    
  