document.write("Ejemplo de IF");
document.write("<br>");

var fecha = new Date();
document.write("<br>");
document.write(fecha);

var diaSemana = fecha.getDay();
document.write("<br>");
document.write(diaSemana);

document.write("<br>");
var lunes = new Date(2020, 07, 03);
document.write("<br>");
document.write(lunes);
document.write("<br>");
document.write(lunes.getDay());

document.write("<br>");
var domingo = new Date(2020, 07, 09);
document.write("<br>");
document.write(domingo);
document.write("<br>");
document.write(domingo.getDay());

var a = 5;
a = '5';

var b = 'Carlos';
document.write("<br>");
document.write("<br>");
document.write("<br>");

//= Asignar valores
//== Compara contenido
//=== Comparar contenido + tipo de dato

if (a === 5) {
    document.write("El valor es 5")
}
if (b == 'Carlos') {
    document.write("El nombre es Carlos")
} else {
    document.write("Es otro valor")
}

// EJERCICIO
//variable que tenga la fecha actual
//variable que sea sabado pero despues de las 2
//var que sea domingo

// Dependiendo de la hora y el dia

// si el dia es sabado y la hora es entre las 9 y las 2 de la tarde
// Imprimir estoy en clase
//la hora es entre las 11:30 y 12:00
//imprimir, es la hora de la comida
//Lahora es despues de las 2 de la tarde decir (ya acabe el curso)
//si es otro dia imprimir (Hoy no es dia de curso)
document.write("<br>");

//programa que dice la fecha del dia
var fecha_actual = new Date();
document.write("<br>");
document.write(fecha_actual);

var fecha_fecha1 = fecha_actual.getDay();
document.write("<br>");
document.write(fecha_fecha1);

var fecha_sabado_break = new Date();
document.write("<br>");

var fecha_break = fecha_sabado_break.getHours();
document.write(fecha_break)



document.write("<br>");

if (fecha_fecha1 == 0) {
    document.write("Hoy es domingo")
}
if (fecha_fecha1 == 6) {
    document.write("Hoy es sabado")
}
if (fecha_fecha1 == 1) {
    document.write("Hoy es lunes")
}
if (fecha_fecha1 == 2) {
    document.write("Hoy es martes")
}
if (fecha_fecha1 == 3) {
    document.write("Hoy es miercoles")
}
if (fecha_fecha1 == 4) {
    document.write("Hoy es jueves")
}
if (fecha_fecha1 == 5) {
    document.write("Hoy es viernes")
}