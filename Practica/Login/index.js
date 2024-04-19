const usuario = document.getElementById('username');
const contrasenia = document.getElementById('idpassword');
const boton = document.getElementById('btn_login');

boton.addEventListener('click',(e)=>{

    e.preventDefault();
    const dato = {
        usuario : usuario.value,
        contrasenia : contrasenia.value        
    }

    console.log("Usuario : "+ dato.usuario);
    console.log("Contraseña : "+ dato.contrasenia);

    document.getElementById('username').value = "";
    document.getElementById('idpassword').value = "";
});

