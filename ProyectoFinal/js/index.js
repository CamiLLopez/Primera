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
     
    function guardarViaje(viaje){
        localStorage.setItem("viajes", JSON.stringify(viaje));
    }

    $('#extra').change(function (e) { 
        e.preventDefault();
        let resultadoContador = comprobarCampos();
        if(resultadoContador>=5){
            $('#enviar').attr('disabled', false);
        }else{
            $('#enviar').attr('disabled', true);
        }
    });

    function comprobarCampos(){
        let contador=0; 
        $('#formularioViajes').find(':input').each(function() {
        var controlar = $('input').val();
        if (controlar.length>1){
            contador +=1;
        }
    });
    return contador;
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
        $('#enviar').attr('disabled', true);
        $('#formularioViajes')[0].reset();        
    })

    function borrarLista(id){
        $(id).empty();
    }
    $('#borrarViajes').click(function(){
        window.localStorage.clear();
        borrarLista('#resultados');
    })

    

});




    
  