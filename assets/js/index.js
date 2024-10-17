precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = new Intl.NumberFormat('es-CL',{ style:'currency',currency:'CLP'}).format(precio,);

valorTotal = document.querySelector('.valor-total');
valorTotal.innerHTML = new Intl.NumberFormat('es-CL',{ style:'currency',currency:'CLP'}).format(0,)


function sumar1(){
    cantidad = document.querySelector('.cantidad');
    valorTotal = document.querySelector('.valor-total');

    cantidad.innerHTML = Number(cantidad.innerHTML)+1
    total = (Number(cantidad.innerHTML)) * precio

    valorTotal.innerHTML = new Intl.NumberFormat('es-CL',{ style:'currency',currency:'CLP'}).format(total,)
    btnRestar = document.getElementById('restar').disabled = false;
}

function restar1(){
    cantidad = document.querySelector('.cantidad');
    valorTotal = document.querySelector('.valor-total');

    if (Number(cantidad.innerHTML) === 1){
        btnRestar = document.getElementById('restar').disabled = true;}

    cantidad.innerHTML = Number(cantidad.innerHTML)-1;
    total = (Number(cantidad.innerHTML)) * precio;
    valorTotal.innerHTML = new Intl.NumberFormat('es-CL',{ style:'currency',currency:'CLP'}).format(total,)

    
    
}
  