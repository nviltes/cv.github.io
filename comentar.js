

/*function boton() {
    document.getElementById("demo").innerHTML = 
    console.log("POTENCIAL EMPLEADO PARA LA EJECUCION DE TAREAS MULTIPLES");
}*/

document.getElementById('boton').onclick = function () {
    console.log("trabajo");
    document.getElementById("demo").innerHTML = "POTENCIAL EMPLEADO PARA LA EJECUCION DE TAREAS MULTIPLES";
}