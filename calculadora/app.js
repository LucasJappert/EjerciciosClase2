var app = new Vue({
    el: "#appCalculadora",
    data: {
        numero1: 0,
        numero2: 0,
        operacion: 1, // 1--> suma, 2--> resta, 3--> mult, 4--> div
        resultado: 0
    },
    methods: {
        CalcularResultado() {
            this.numero1 = Number(this.numero1);
            this.numero2 = Number(this.numero2);
            if (this.operacion == 1) this.resultado = this.numero1 + this.numero2;
            if (this.operacion == 2) this.resultado = this.numero1 - this.numero2;
            if (this.operacion == 3) this.resultado = this.numero1 * this.numero2;
            if (this.operacion == 4) this.resultado = this.numero1 / this.numero2;
            this.resultado = this.resultado.toFixed(2);
            this.resultado = this.resultado.replace(".00", "");
        }
    },
    computed:{
        operador(){
            if (this.operacion == 1) return "+";
            if (this.operacion == 2) return "-";
            if (this.operacion == 3) return "*";
            return "/";
        }
    }
});