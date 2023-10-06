const contenedorFormulario=document.getElementById("contendroFormularioIniciarsesion")
const usarname=document.getElementById("usarname")
const password=document.getElementById("passwordLogin")
const aceptar=document.getElementById("iniciarsesion")

aceptar.addEventListener('click',(e)=>{
    //para que no se vuelva a iniciar la pagina cada vez que precionamos aceptar
    e.preventDefault()
    const data = {
        //tomamos los datos de los input
        usarname: usarname.value,
        password:password.value


    
    }
  const dataSrc=JSON.stringify(data)
  localStorage.setItem("ingreso",dataSrc)
    
})

//Formulario de registracion



const formulario=document.getElementById("formulario")
const input=document.querySelectorAll("#formulario input")

//Funcion para validar el formulario 

const validarFormulario= (e)=>{
    //comprar que se registre en el input
    switch(e.target.name){
      
        
           
      
        case "password2":
         validarPassword2()
        break;
       
          
         
        
    }

}


//validar ambas consetraseñas sean iguales 
const validarPassword2=()=>{
 const inputPassword1= document.getElementById("password")
 const inputPassword2=document.getElementById("password2")
 //comparamos los datos ingresador de ambos input
 if(inputPassword1.value !== inputPassword2.value){
    document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto')
    document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correscto')
    document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-erro-activo')
   
 }else{
    document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto')
    document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correscto')
    document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-erro-activo')
   
 }
}

//para que el usuario registre todo los campos Metodo keyup
//Recorre todos los imputs que se encuentra en la variable 
input.forEach((input)=>{
    //llamamos a la funcion valudar formulario
    input.addEventListener("keyup",validarFormulario)
    input.addEventListener("blur",validarFormulario)

})
//boton enviar

const enviar =document.getElementById("enviar")
const usuario=document.getElementById("usuario")
const nombre=document.getElementById("nombre")
const contrasenaRegistro=document.getElementById("password")
const correo=document.getElementById("correo")
const telefono=document.getElementById("telefono")
enviar.addEventListener('click',(e)=>{
    //para que no se vuelva a iniciar la pagina cada vez que precionamos aceptar
    e.preventDefault()
    const registracion = {
        //tomamos los datos de los input
        usuario:usuario.value,
        nombre:nombre.value,
        contrasenaRegistro:password.value,
        correo:correo.value,
        telefono:telefono.value


    
    }
  const dataSrx=JSON.stringify(registracion)
  localStorage.setItem("Datos ingresados en el resgitro",dataSrx)
    
})

/*
const formulario=document.querySelector("form");
const eMail=document.querySelector(".email");
const contrasenia=document.querySelector(".password");

formulario.addEventListener("submit",validarFormulario);
function validarFormulario(e){
    //para cuando ponga enviar no se actalice la pagina 
    e.preventDefault()
    
    console.log(`${eMail.value} ${contrasenia.value}`)
}
let registrarse=document.querySelector("#registrarse")
registrarse.addEventListener("click",()=>{
    let mail=prompt("Para registrarse de ingresar mail")
    let usuario = prompt("Ingresar usuario");
    let password = prompt("Ingresar password");
    alert (`Usted a ingresado los siguientes
    e-mail ${mail}
    Usuario: ${usuario}
    Se le enviara mail para confirmar`)
})
let olvidarContrasena=document.querySelector("#olvido_contraseña")
olvidarContrasena.addEventListener("click",()=>{
    
    let olvido=prompt(`Para poder restablecer la contraseña debe ingrasar un mail.
    Ingresar e-mail:`)
    alert(`Se le enviara mail a ${olvido}`)
})
*/