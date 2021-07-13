// Desestructuracion o
// Asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan',
};

// const { nombre, edad, clave } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const useContext = ( {nombre, edad, rango = 'Capitán', clave} ) => {
    // console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.5234,
            lng: -53.543
        }
    }
}

const { nombreClave, anios, latlng:{lat, lng} } = useContext(persona);

console.log(nombreClave, anios)
console.log(lat, lng)