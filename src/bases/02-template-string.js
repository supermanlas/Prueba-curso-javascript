const nombre = 'Esteban';
const apellido = 'Alvarado';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido } `;

console.log( nombreCompleto );

function getSaludo() {
    return 'Hola mundo';
}

console.log(`Este es un texto: ${ getSaludo() } `);