var app = new Vue({
    el: "#app",
    data:{
        mensajeBienvenida: "Hola Coders, hola MUNDO!",
        numeroA: 12,
        numeroB: 24,
        asd: [1, 2, 3]
    },
    methods: {
        SumarAyB(){
            console.log("SumarAyB");
            return this.numeroA + this.numeroB;
        },
        SumarAyB1(){
            console.log("SumarAyB1");
            console.log(this.sumarAyB);
        },
    },
    computed: {
        sumarAyB(){
            console.log("sumarAyB");
            return this.numeroA + this.numeroB;
        },
    },
    // template: ``,
});