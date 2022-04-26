var app = new Vue({
    el: "#app",
    data:{
        mensaje1: "Mensaje 1 inicial",
        mensaje2: "Mensaje 2 inicial"
    },
    methods: {
        ActualizarVariable(event){
            this.mensaje1 = event.target.value;
        },
    },
});