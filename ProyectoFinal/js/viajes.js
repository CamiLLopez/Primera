$(document).ready(function(){

    
    function obtenerViajesStorage(key) {
          return JSON.parse(localStorage.getItem(key));
        
      }
    
    function crearLista(element, id){
        const lista = `<ul class="list-group list-group-flush" id=${id}></ul>`;
        $(element).append(lista);
    }

    function crearItemsLista(viajes){
        for (let index = 0; index < viajes.length; index++) {
            let element = viajes;
            
            let mensajeValido =  `<li class="list-group-item list-group-item-action list-group-item-dark" id=${index}>${element[index][1]}
                                <button class='btn btn-dark btn-m' id="btn${index}" >Delete</button></li>`;
            
            $('#resultados').append(mensajeValido);
             $(`#btn${index}`).click(function(e){
                e.preventDefault();
                removerViaje(index);
                $('#consultarViajes').click();
                })
        }
    }
    function removerViaje(index){
        let viajesLocal = obtenerViajesStorage('viajes');
        viajesLocal.pop(index);
        localStorage.removeItem('viajes');
        viajesLocal = JSON.stringify(viajesLocal);
        localStorage.setItem('viajes', viajesLocal);
    }
 
   
    $('#consultarViajes').click(function(){
        if(JSON.parse(localStorage.getItem('viajes')).length<1){
            const mensaje = `<p>No hay viajes guardados por aqui!</p>`;
            $('#resultados').append(mensaje);
        }else{
            $('#resultados').empty();
            crearLista('body', 'listaViajes');
            crearItemsLista(obtenerViajesStorage('viajes'));
            
        }   
    })


    $('#verHoteles').click(function(){
        let viajesGuardados = obtenerViajesStorage('viajes');
        if (viajesGuardados != " "){
            for (let index=0; index<viajesGuardados.length; index++){
                let destinos = viajesGuardados[index][0];
                const settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": `https://hotels4.p.rapidapi.com/locations/search?query=${destinos.destino}&locale=en_US`,
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "hotels4.p.rapidapi.com",
                        "x-rapidapi-key": "3e515ffa67mshd759b56c4fea8d2p1215a3jsnb55607932fff"
                    }
                };
        
                $.ajax(settings).done(function (response) {
                    let misDatos = response;
                    for (const dato of misDatos.suggestions) {
                        if(dato.group =="HOTEL_GROUP"){
                            for (const entidad of dato.entities){
                                $("#resultados").prepend(`<div><h3>${entidad.name}</h3>
                                <p> ${entidad.caption}</p>
                                </div>`)
                            }
                       }
                    }
            }
            );
            
            }
        }

        
        
    })

});