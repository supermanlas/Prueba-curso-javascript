const activo = true;

// let mensaje = '';

// if( !activo ){
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }

// const mensaje = ( activo ) ? 'Activo' : 'Inactivo'; Operador ternario
const mensaje = !activo  && 'Activo' //Operador ternario reducido
console.log(mensaje)