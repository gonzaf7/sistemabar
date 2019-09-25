
export class Bar{
    nombre: string;  //atributo
    capacidad: number; // atributo
    constructor(_nombre, _capacidad){
        this.nombre = _nombre;
        this.capacidad = _capacidad;
    }
    nombreBar(){
        console.log(this.nombre);
    }
    capacidadBar(){
        console.log(this.capacidad);
    }
}

export class Barman{
    nombre: string;
    apellido: string;
    constructor(_nombre, _apellido){
        this.nombre = _nombre;
        this.apellido = _apellido;
    }
    nombreBarman(){
        console.log(this.nombre);
    }
    apellidoBarman(){
        console.log(this.apellido);
    }
}

export class Tragos{
    nombre: string;
    color: string;
    cantidad: any;
    constructor(_nombre, _color, _cantidad){
        this.nombre = _nombre;
        this.color = _color;
        this.cantidad = _cantidad;
    }
    nombreTrago(){
        console.log(this.nombre);
    }
    colorTrago(){
        console.log(this.color);
    }
    cantidadTrago(){
        console.log(this.cantidad);
        
    }


}

/***********************************/

let bar1 : Bar = new Bar ('Nueva Era', 50);

let bar2 : Bar = new Bar ('Los Casquitos', 200);

bar1.nombreBar();
bar1.capacidadBar();

bar2.nombreBar();
bar2.capacidadBar();

let barman1 : Barman = new Barman ('Ruben', 'Peñarrieta')

barman1.nombreBarman();
barman1.apellidoBarman();

let tragos1 : Tragos = new Tragos ('Mojito', 'Transparente', '18% grado Alcoholico ')
tragos1.nombreTrago();
tragos1.colorTrago();
tragos1.cantidadTrago();