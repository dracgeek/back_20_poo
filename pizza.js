'use strict';

class Pizza {
    constructor(masa,tamano,ingredientes){
        this.masa = masa;
        this.tamano = tamano;
        this.ingredientes = ingredientes;
    }

    preparar(){
        console.log(`Preparando pizza ${this.tamano}, ${this.masa}, 
        Ingredientes: ${this.ingredientes}
        `);
    }

    hornear(){
        console.log(`La pizza se esta horneando.`);
        return this;
    }

   empacar(){
       console.log(`Empacando la pizza...`);
       console.log(`Pizza lista para ser enviada... :)`);
       return this;
   } 

}

const pizzaChampinones = new Pizza("Masa Gruesa","Mediana",["Champiñones","pollo","queso"]);

console.log(pizzaChampinones.preparar());
console.log(pizzaChampinones.hornear());
console.log(pizzaChampinones.empacar());

const pizzaCarnes = new Pizza("Masa Delgada","Mediana",["carne","queso"]);
console.log(pizzaCarnes.preparar());
console.log(pizzaCarnes.hornear());
console.log(pizzaCarnes.empacar());


class Combos extends Pizza{

    constructor(combo,cantidad,tamano,masa,ingredientes,bebida,postre){
        super(tamano,masa,ingredientes);
        this.combo = combo;
        this.cantidad = cantidad;
        this.bebida = bebida;
        this.postre = postre;
    }

    elegirCombo(){
        this.preparar();
        this.hornear();
        this.empacar();

        console.log(` Pedido: Combo ${this.combo} - ${this.cantidad}
        Pizza ${this.tamano}, ${this.masa}, ${this.ingredientes} + ${this.bebida}
        ${this.postre}
        `);

        return this;
    }
}

const Pedido = new Combos("Personal",1,"Mediana","Masa tradicional",["queso","peperoni"],"Coca-cola","Rollitos de canela");

console.log(Pedido.elegirCombo());