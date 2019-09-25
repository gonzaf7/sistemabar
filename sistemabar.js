"use strict";
exports.__esModule = true;
var Bar = /** @class */ (function () {
    function Bar(_nombre, _capacidad) {
        this.nombre = _nombre;
        this.capacidad = _capacidad;
    }
    Bar.prototype.nombreBar = function () {
        console.log(this.nombre);
    };
    Bar.prototype.capacidadBar = function () {
        console.log(this.capacidad);
    };
    return Bar;
}());
exports.Bar = Bar;
var Barman = /** @class */ (function () {
    function Barman(_nombre, _apellido) {
        this.nombre = _nombre;
        this.apellido = _apellido;
    }
    Barman.prototype.nombreBarman = function () {
        console.log(this.nombre);
    };
    Barman.prototype.apellidoBarman = function () {
        console.log(this.apellido);
    };
    return Barman;
}());
exports.Barman = Barman;
var Tragos = /** @class */ (function () {
    function Tragos(_nombre, _color, _cantidad) {
        this.nombre = _nombre;
        this.color = _color;
        this.cantidad = _cantidad;
    }
    Tragos.prototype.nombreTrago = function () {
        console.log(this.nombre);
    };
    Tragos.prototype.colorTrago = function () {
        console.log(this.color);
    };
    Tragos.prototype.cantidadTrago = function () {
        console.log(this.cantidad);
    };
    return Tragos;
}());
exports.Tragos = Tragos;
/***********************************/
var bar1 = new Bar('Nueva Era', 50);
var bar2 = new Bar('Los Casquitos', 200);
bar1.nombreBar();
bar1.capacidadBar();
bar2.nombreBar();
bar2.capacidadBar();
var barman1 = new Barman('Ruben', 'Peñarrieta');
barman1.nombreBarman();
barman1.apellidoBarman();
var tragos1 = new Tragos('Mojito', 'Transparente', '18% grado Alcoholico ');
tragos1.nombreTrago();
tragos1.colorTrago();
tragos1.cantidadTrago();
