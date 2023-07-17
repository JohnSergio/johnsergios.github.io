//variables
const boton= document.querySelector('#boton');
const foto= document.querySelector('#foto');
const nombre= document.querySelector('#nombre');
const correo= document.querySelector('#correo');
const telefono= document.querySelector('#telefono');
//console.log(boton)
//Funciones

const generarusuario = async() => {
   try {
    const url= 'https://randomuser.me/api/';
    const respuesta =await fetch(url);
    const {results}=await respuesta.json();
    const datos= results[0];

    foto.src= datos.picture.medium;
    nombre.textContent= datos.name.first;
    correo.textContent=datos.email;
    telefono.textContent=datos.phone;
    console.log(datos);
   } catch (error) {
    console.log(error)
   }
    

    //console.log('generando usuario');
}
boton.addEventListener('click',generarusuario);
document.addEventListener('DOMContentLoaded',generarusuario)

