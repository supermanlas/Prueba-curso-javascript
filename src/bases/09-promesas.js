import {getHeroeById} from './bases/08-imp-exp'

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout(() => {
//         //Tarea
//         // importar 
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         // resolve();
//     }, 2000);

// } );

// promesa.then( (heroe) => {
//     console.log('heroe', heroe)
// } )
// .catch( err => console.warn ( err ))

const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout(() => {
            //Tarea
            // importar 
            const heroe = getHeroeById(id);
            // console.log(heroe)
            if(heroe){
                resolve(heroe);
            } else {
                reject('No se pudo encontrar heroe')
            }
            // resolve();
        }, 2000);
    
    } );

}

getHeroeByIdAsync(1)
    .then( console.log )
    .catch( console.warn )