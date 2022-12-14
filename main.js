document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
})

function iniciarApp(){
    reloj();
};

   
function reloj(){

    let momentoActual = new Date();
    let hora = momentoActual.getHours();
    let minuto = momentoActual.getMinutes();
    let segundo = momentoActual.getSeconds();

       if(minuto <=9){
        minuto = "0"+minuto
       } 
       if(segundo <= 9){
        segundo= "0"+segundo;
       }

    let horaImprimible = hora + " : " + minuto + " : " + segundo;
    document.form_reloj.reloj.value = horaImprimible;
    /*MOVER RELOJ A TIEMPO ACTUAL*/
    setTimeout("reloj()",1000)
    /*                          */
    let horaSinSegundos = (hora + "." + minuto);
    let horaDecimal = parseFloat(horaSinSegundos)
    document.form_reloj2.reloj2.value = horaDecimal;
    
}


const boton = document.getElementById('boton');

boton.addEventListener('click', function(){
    let momentoActual = new Date();
    let hora = momentoActual.getHours();
    let minutos = momentoActual.getMinutes();

    let horaEnEnteros = (hora * 60) + minutos;
    let horariosFloPo = [14,15,16];
    for(horario of horariosFloPo){
        let difHoraHorario = (horaEnEnteros - (horario*60));
        let difHorarioHora = ((horario*60) - horaEnEnteros)
        if(horaEnEnteros > (horario * 60)){ 
            document.form_reloj3.reloj3.value = `Tu colectivo pasó hace ${difHoraHorario} minutos`;
        }
        else{
            document.form_reloj3.reloj3.value = `Tu próximo colectivo pasa en ${difHorarioHora} minutos`;
        }
    }
    
    
})







