class Producto {
    constructor(id,tipo,cantidad, nombre, medida, precio,img) {
      this.id=id
      this.tipo = tipo;
      this.cantidad=cantidad
      this.nombre = nombre;
      this.medida = medida;
      this.precio = precio;
      this.img=img
    }
  }
  //Array de objetos producto
  const baseDeDatos = [
    new Producto(1,"DESAYUNOS Y MERIENDAS",1, "ALMOHADITAS", "250g", 190,"../asset/desayunos_y_meriendas/almuhaditas__granix.jpg"),
    new Producto(2,"DESAYUNOS Y MERIENDAS",1, "QUINOA POP", "100g", 90,"../asset/desayunos_y_meriendas/quinoa_pop.jpg"),
    new Producto(3,"DESAYUNOS Y MERIENDAS",1, "PASTA DE MANI", "500g", 90,"../Asset/desayunos_y_meriendas/mantequilla_de_mani.jpg"),
    new Producto(7,"LECHES VEGETALES",1, "LECHE DE ALMENDRAS", "1L", 320,"../asset/leche_vegetales/leche_almendras_tratenfux1lt.jpg"),
    new Producto(8,"LECHES VEGETALES",1, "LECHE DE COCO", "1L", 350,"../Asset/leche_vegetales/leche_coco_greenfood.jpg"),
    new Producto(9,"LECHES VEGETALES",1, "LECHE DE COCO", "910ml", 250,"../Asset/leche_vegetales/leche_coco_greenfood.jpg"),
    new Producto(10,"LECHES VEGETALES",1, "LECHE DE ARROZ", "1L", 350,"../Asset/leche_vegetales/leche_arroz_x1lt_tratenfu.jpg"),
    new Producto(11,"FRUTOS SECOS",1, "ALMENDRAS", "1KG", 1700,"../asset/frutos_secos/Almendras_non_pareil.jpg"),
    new Producto(12,"FRUTOS SECOS",1, "NUEZ", "100G", 200,"../asset/frutos_secos/Nuez_maripos.jpg"),
    new Producto(13,"LEGUMBRES Y SEMILLAS",1, "LENTEJAS", "500g", 160,"../asset/legumbres_y_semillas/lenteja-x-500-grs.jpg"),
    new Producto(14,"LEGUMBRES Y SEMILLAS",1, "GARBANZO", "500g", 160,"../asset/legumbres_y_semillas/garbanzo_organicos.jpg"),
    new Producto(15,"LEGUMBRES Y SEMILLAS",1, "POROTO ADUKI", "500g", 160,"../asset/legumbres_y_semillas/porotos_aduki_organicos.jpg"),
    new Producto(16,"LEGUMBRES Y SEMILLAS",1, "POROTO DE SOJA", "500g", 190,"../asset/legumbres_y_semillas/porotos_de_soja.jpg"),
    new Producto(17,"LEGUMBRES Y SEMILLAS",1, "POROTO BLANCO", "500g", 190,"../asset/legumbres_y_semillas/porotos_blancos.jpg" ),
    new Producto(18,"ACEITES Y CONDIMENTOS",1, "ACEITE DE COCO", "360ml", 450,"../asset/aceites/aceite_de_coco.jpg"),
    new Producto(19,"ACEITES Y CONDIMENTOS",1, "ACEITE DE OLIVA", "500ml", 850,"../asset/aceites/aceite_de_oliva.jpg"),
    new Producto(20,"ACEITES Y CONDIMENTOS",1, "ACETO", "250ml", 350,"../asset/aceites/aceto-balsamico.jpg" ),
    new Producto(21,"MIX",1, "MIX PREMIUM", "500g", 750,"../asset/mix/mix__almendra_nuez_arandanos.jpg"),
    new Producto(22,"MIX",1, "MIX NEMU", "500g", 850,"../asset/mix/mix_clasico.jpg"),
    new Producto(23,"MIX",1, "MIX SALADO", "500g", 400,"../asset/mix/mix_salado.jpg"),
    new Producto(24,"MIX",1, "MIX BASICO", "500g", 400,"../asset/mix/mix_clasico.jpg"),
    new Producto(25,"MIX",1, "MIX TROPICAL", "500g", 450,"../asset/mix/mix_tropical.jpg"),]

    const contenedorProductosDesaYmerie=document.getElementById("desayu_merienda")
    const contenedorProdcutoFrutosSecos=document.getElementById("frutos__secos")
    const contenedorProductoLechesVegetales=document.getElementById("Leches__vegetales")
    const contendorProductosLegumbreYSemillas=document.getElementById("Semillas__y__legumbres")
    const contendorProductoseAceitesCondimentos=document.getElementById("aceites__y__condimentos")
    const contenedorMixs=document.getElementById("Mixs")
    const contenedorCarrito=document.getElementById("contenedorCarrito")
    const botonVaciar=document.getElementById("vaciar-carrito")
    const contadorCarrito=document.getElementById("contadorCarrito")
    const precioTotal=document.getElementById("precioTotal")

    //
    document.addEventListener('DOMContentLoaded ',()=>{
      if(localStorage.getItem("carrito")){
        carrito=JSON.parse(localStorage.getItem("carrito"))
        actualizarCarrito()
      }
    })

  let carrito = [];
  
 botonVaciar.addEventListener("click",()=>{
  //Para vaciar logitud = 0
  carrito.length=0
  actualizarCarrito()

 })

 function cardProduct(){
  
 }
 //crear las cards
 baseDeDatos.forEach((producto)=>{
  if (producto.tipo ==="DESAYUNOS Y MERIENDAS"){
  const contenodorCard=document.createElement("div")
  contenodorCard.classList.add("contenedor__tarjetas")
  contenodorCard.innerHTML =`
  <div class="card" style="width: 18rem; height:23rem;">
                  <img src=${producto.img} class="card-img-top" alt=>
                  <h5 class="${producto.nombre}"></h5>
                  <p class="card-text">${producto.medida} </p>
                  <p class="precios">$${producto.precio} </p>
                 <button id="agregar${producto.id}" class="boton-agregar btn btn-primary">Agregar</button>
                  
              </div>
  `
  contenedorProductosDesaYmerie.appendChild(contenodorCard)
  
  //Capturar accion del boton ID
  const boton=document.getElementById(`agregar${producto.id}`)

  boton.addEventListener('click',()=>{
     agregarAlCarrito(producto.id)
  
  })
}else if(producto.tipo==="FRUTOS SECOS"){
  const contenodorCard=document.createElement("div")
  contenodorCard.classList.add("contenedor__tarjetas")
  contenodorCard.innerHTML =`
  <div class="card" style="width: 18rem; height:23rem;">
                  <img src=${producto.img} class="card-img-top" alt=>
                  <h5 class="${producto.nombre}"></h5>
                  <p class="card-text">${producto.medida} </p>
                  <p class="precios">$${producto.precio} </p>
                 <button id="agregar${producto.id}" class="boton-agregar btn btn-primary">Agregar</button>
                  
              </div>
  `
  contenedorProdcutoFrutosSecos.appendChild(contenodorCard)
  
  //Capturar accion del boton ID
  const boton=document.getElementById(`agregar${producto.id}`)

  boton.addEventListener('click',()=>{
     agregarAlCarrito(producto.id)
  
  })
}else if(producto.tipo === "LECHES VEGETALES"){
  const contenodorCard=document.createElement("div")
  contenodorCard.classList.add("contenedor__tarjetas")
  contenodorCard.innerHTML =`
  <div class="card" style="width: 18rem; height:23rem;">
                  <img src=${producto.img} class="card-img-top" alt=>
                  <h5 class="${producto.nombre}"></h5>
                  <p class="card-text">${producto.medida} </p>
                  <p class="precios">$${producto.precio} </p>
                 <button id="agregar${producto.id}" class="boton-agregar btn btn-primary">Agregar</button>
                  
              </div>
  `
  contenedorProductoLechesVegetales.appendChild(contenodorCard)
  
  //Capturar accion del boton ID
  const boton=document.getElementById(`agregar${producto.id}`)

  boton.addEventListener('click',()=>{
     agregarAlCarrito(producto.id)
  
  })
}else if (producto.tipo === "LEGUMBRES Y SEMILLAS" ){

  const contenodorCard=document.createElement("div")
  contenodorCard.classList.add("contenedor__tarjetas")
  contenodorCard.innerHTML =`
  <div class="card" style="width: 18rem; height:23rem;">
                  <img src=${producto.img} class="card-img-top" alt=>
                  <h5 class="${producto.nombre}"></h5>
                  <p class="card-text">${producto.medida} </p>
                  <p class="precios">$${producto.precio} </p>
                 <button id="agregar${producto.id}" class="boton-agregar btn btn-primary">Agregar</button>
                  
              </div>
  `
  contendorProductosLegumbreYSemillas.appendChild(contenodorCard)
  
  //Capturar accion del boton ID
  const boton=document.getElementById(`agregar${producto.id}`)

  boton.addEventListener('click',()=>{
     agregarAlCarrito(producto.id)
  
  })
}else if (producto.tipo==="ACEITES Y CONDIMENTOS") { 
  const contenodorCard=document.createElement("div")
contenodorCard.classList.add("contenedor__tarjetas")
contenodorCard.innerHTML =`
<div class="card" style="width: 18rem; height:23rem;">
                <img src=${producto.img} class="card-img-top" alt=>
                <h5 class="${producto.nombre}"></h5>
                <p class="card-text">${producto.medida} </p>
                <p class="precios">$${producto.precio} </p>
               <button id="agregar${producto.id}" class="boton-agregar btn btn-primary">Agregar</button>
                
            </div>
`
contendorProductoseAceitesCondimentos.appendChild(contenodorCard)

//Capturar accion del boton ID
const boton=document.getElementById(`agregar${producto.id}`)

boton.addEventListener('click',()=>{
   agregarAlCarrito(producto.id)

})
  
}else if(producto.tipo==="MIX"){

 
    const contenodorCard=document.createElement("div")
  contenodorCard.classList.add("contenedor__tarjetas")
  contenodorCard.innerHTML =`
  <div class="card" style="width: 18rem; height:23rem;">
                  <img src=${producto.img} class="card-img-top" alt=>
                  <h5 class="${producto.nombre}"></h5>
                  <p class="card-text">${producto.medida} </p>
                  <p class="precios">$${producto.precio} </p>
                 <button id="agregar${producto.id}" class="boton-agregar btn btn-primary">Agregar</button>
                  
              </div>
  `
  contenedorMixs.appendChild(contenodorCard)
  
  //Capturar accion del boton ID
  const boton=document.getElementById(`agregar${producto.id}`)
  
  boton.addEventListener('click',()=>{
     agregarAlCarrito(producto.id)
  
  })

}


 })


 //agregar al carrito 

 const agregarAlCarrito = (prodId)=>{
  
   const item =baseDeDatos.find((producto) =>producto.id === prodId)
    
  
   carrito.push(item)
  
   
   actualizarCarrito()
   

  
  
 }
 

//eliminar del carrito
const eliminarDelCarrito=(prodId)=>{
  

  const item=carrito.find((producto)=>producto.id === prodId)
  //Metodo indexof , busca el indice en que se encuentra
  const indice=carrito.indexOf(item)
  //se utiliza metodo slice para elminiar por parmetro indice y la cantidad de elementos 1
  carrito.splice(indice,1)
  actualizarCarrito()
}



//infor del carrito Modal
 const actualizarCarrito=()=>{
  //evitar que se duplique info del carrito
  contenedorCarrito.innerHTML=""
  carrito.forEach((producto)=>{
    const contenodorCard=document.createElement("div")
    contenodorCard.classList.add("contenedor-Carrito")
    contenodorCard.innerHTML =`
    <p>${producto.nombre}</p>
    <p class="card-text">${producto.medida} </p>
    <p class="card-text">Precio $${producto.precio  } </p>
    <p >Cantidad <span id="cantidad">${producto.cantidad}</span> </p>
   <button onclick="eliminarDelCarrito(${producto.id})" class="botoneliminar fas fa-trash-alt btn btn-danger">Eliminar</button>
   `
   contenedorCarrito.appendChild(contenodorCard)
  
   localStorage.setItem('carrito',JSON.stringify(carrito))
   })
   //para que cuente la cantidad de productos en el carrito igualamos a su logitud

   contadorCarrito.innerText=carrito.length
   //Calcular el precio total con metodo reduce, valor inicial de 0 
   precioTotal.innerHTML=carrito.reduce((acc,produ)=> acc + produ.precio,0)
 }
 
