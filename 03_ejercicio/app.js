// Variables Globales

const formularioUI = document.querySelector("#formulario")
const listaActividadesUI = document.querySelector("#listaActividaes")

let arrayActividades = []

// Funciones

const CrearItem = (actividad) => {
    let item = {
        actividad,
        estado: false,
    };

    arrayActividades.push(item)

    return item
};

const GuardarDB = () => {
    // Guardar en el localStorage
    localStorage.setItem("rutina", JSON.stringify(arrayActividades))
    PintarDB()
};

const PintarDB = () => {
    listaActividadesUI.innerHTML = ""

    arrayActividades = JSON.parse(localStorage.getItem("rutina"))

    if (arrayActividades === null) {
        arrayActividades = []
    } else {
        arrayActividades.forEach((element) => {
            listaActividadesUI.innerHTML += `

        <div class="alert alert-danger" role="alert">
          <span class="material-icons float-left mr-2">
            directions_run
          </span>
          <b>${element.actividad}</b> - ${element.estado}
          <span class="float-right">
            <span class="material-icons">
              done
            </span>
            <span class="material-icons">
              delete
            </span>
          </span>
        </div>

      `;
        })
    }
    console.log(arrayActividades);
};

// EventListener

formularioUI.addEventListener("submit", (e) => {
    e.preventDefault();
    let actividadUI = document.querySelector("#actividad").value
    //console.log(actividadUI)

    CrearItem(actividadUI)
    GuardarDB()

    formularioUI.reset()
});

document.addEventListener("DOMContentLoaded", PintarDB);

listaActividadesUI.addEventListener('click', (e) => {

    e.preventDefault()
    console.log(e)

})
