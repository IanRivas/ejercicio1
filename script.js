/* Cantidad de huéspedes
 Crear un programa que pida al usuario ingresar, de a uno por vez, cuántas habitaciones tiene un hotel para 2, 3 y 4 personas, y muestre el máximo de huéspedes que puede albergar.
*/

// 2 personas x 10 habitaciones 20
// 3 personas x 6 habitaciones 18
// 4 personas x 3 habitaciones 12 
// total de huespedes que podemos albergar 50

// camelCase
// = asignar valor
// las 3 variables son tipo string o si ponemos cancel es null
var habitacionParaDosPersonas = prompt('Ingrese cuantas habitaciones para 2 personas hay disponibles: ');
var habitacionParaTresPersonas = prompt('Ingrese cuantas habitaciones para 3 personas hay disponibles: ');
var habiatacionParaCuatroPersonas = prompt('Ingrese cuantas habitaciones para 4 personas hay disponibles: ');
console.log(habitacionParaDosPersonas, habitacionParaTresPersonas, habiatacionParaCuatroPersonas);

// las 3 variables son tipo number
var huespedesHabitacionParaDos = Number(habitacionParaDosPersonas) * 2;
var huespedesHabitacionParaTres = Number(habitacionParaTresPersonas) * 3;
var huespedesHabitacionParaCuatro = Number(habiatacionParaCuatroPersonas) * 4;
console.log(huespedesHabitacionParaDos, huespedesHabitacionParaTres, huespedesHabitacionParaCuatro);

var total = huespedesHabitacionParaDos + huespedesHabitacionParaTres + huespedesHabitacionParaCuatro;
// alert('Total de Huespedes que podemos albergar es ' + total);
alert(`Total de Huespedes que podemos albergar es ${total}`);
