function resumen(){
    var cantidad = document.getElementById("cantidad").value;
    var categoria = document.getElementById("categoria").value;
    var total;
    console.log(categoria);
    console.log(cantidad);
    if(categoria == 1){
        total= (200*cantidad)-(200*cantidad)*.8;
        document.getElementById("totalAPagar").innerHTML = "Total a Pagar: $" + total;

    }
    if(categoria == 2){
        total= (200*cantidad)-(200*cantidad)*.5;
        document.getElementById("totalAPagar").innerHTML = "Total a Pagar: $" + total;

    }
    if(categoria == 3){
        total= (200*cantidad)-(200*cantidad)*.15;
        document.getElementById("totalAPagar").innerHTML = "Total a Pagar: $" + total;

    }
    
}
