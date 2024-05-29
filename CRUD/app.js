let listaEmpleados = [];

const objEmpleado = {
    id :"",
    nombre : "" ,
    puesto : ""
}

let editando = false;

const formulario = document.querySelector("#formulario");
const nombreInput = document.querySelector("#nombre");
const puestoInput = document.querySelector("#puesto");
const btnAgregar = document.querySelector("#btnAgregar");

formulario.addEventListener("submit", validarFormulario);


function validarFormulario(e)
{   
    e.preventDefault();

    if(nombreInput.value === "" || puestoInput.value === "")
    {
        alert("Todos los campos son obligatorio");        
        return;
    }

    if(editando)
    {
        
    }else{
        objEmpleado.id = Date.now();
        objEmpleado.nombre = nombreInput.value;
        objEmpleado.puesto = puestoInput.value;

        agregarEmpleado();
    }


}

function agregarEmpleado()
{
    listaEmpleados.push({...objEmpleado});
    mostrarEmpleado();
}

function mostrarEmpleado()
{
    const divEmpleado = document.querySelector('.div-empleados 
    
    listaEmpleados.forEach(empleado => {
        const {id , nombre , puesto } = empleado;

        const parrafo = document.createElement('p');
        parrafo.textContent 
    })
    );

    
    
}






