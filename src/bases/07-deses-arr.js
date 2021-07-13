const personajes = ['Hinata', 'Kageyama', 'Sakuragi'];
const [ ,,p2 ] = personajes;
console.log(p2);

const retornaArreglo = () => {
    return ['ABC',123];
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros)

// Tarea
//1. EL primer valor del arreglo se llamará nombre
//2. EL segundo setNombre
const useState = ( valor ) => {
    return [ valor, () => {console.log('Hola Mundo')}];
}

const [nombre, setNombre] = useState('Esteban');

console.log(nombre)
setNombre();