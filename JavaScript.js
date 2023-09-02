function guardardatos(){
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.apellido = document.getElementById("apellido").value;
    localStorage.email = document.getElementById("email").value; 
 }
 
 function recuperardatos(){
  if((localStorage.nombre != "") && (localStorage.apellido != "") && (localStorage.email != "")) {
   document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + "<br/> apellido: " + localStorage.apellido + "<br/> email: " + localStorage.email;
    } 
    else {
        document.getElementById("datos").innerHTML = "Completa tu información";
    }
    }
