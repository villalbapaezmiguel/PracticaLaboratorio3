document.getElementById("idCantidad").addEventListener("input" , (event)=>{

    let contenido = '';

    const cantidad = event.target.value;

    for (let i = 0; i < cantidad; i++) {
        
        contenido += `<div>
        <label>Invitado ${i +1}</label>
        <input type="text" id="name[${i}]" >
        <label>Email ${i +1}</label>
        <input type="email" id="email[${i}]" >
        </div>`;
    }

    document.getElementById("divObtener").innerHTML = contenido;

});



document.getElementById("idForm").addEventListener("submit", (event)=>{

    event.preventDefault();//para que no se refresque la pantalla cuando le demos guardar

    const cantidad = document.getElementById("idCantidad").value;

});