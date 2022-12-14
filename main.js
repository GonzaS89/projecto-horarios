function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

   if(minuto <=9){
    minuto = "0"
   } 
   if(segundo <= 9){
    segundo= "0"+segundo;
   }

    horaImprimible = hora + " : " + minuto + " : " + segundo;

    document.form_reloj.reloj.value = horaImprimible

    setTimeout("mueveReloj()",1000)
}

