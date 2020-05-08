const app = new Vue({
    el: '#app', // Nuestra app
    data: { // Nuestro datos para interactuar con HTML
        titulo: "Lista de Estudiantes y sus calificaciones",
        estudiantes:[
            {
                nombre: "Damarys",
                nota: "12"
            },
            {
                nombre: "donna",
                nota: "14"
            },
            {
                nombre: "Diego",
                nota: "10"
            }
        ],
        estudiante: '',
        nota: ''
    },
    methods: { // Los metodos que me permiten interactuar con HTML
        agregaEstudiante (){
            this.estudiantes.push({
                nombre: this.estudiante, nota: this.nota
            })
        }
    }
})
