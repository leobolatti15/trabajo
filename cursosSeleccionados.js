const cursos = [

    ['html5', 4000],

    ['css3', 5000],

    ['javascript', 10000],

    ['react', 7000],

    ['nodejs', 15000]

];

 

const cursosAlumno = [

    'HTML5', 

    'CSS3', 

    'JAVASCRIPT', 

    'REACT', 

    'NODEJS'

];

 

function calcularMontoAPagar(informacionCursos, cursosSeleccionados) {

    let total = 0;

    for (let index = 0; index < informacionCursos.length; index++) {

        const element = informacionCursos[index];

        if (cursosSeleccionados.includes(element[0].toUpperCase())) {

            total += element[1];

        }

    }

    return total;

}

function msjFinalUser(nombreApellido,informacionCursos,cursosSeleccionados,callback){

    let resultado = callback(informacionCursos,cursosSeleccionados) 

    console.log("Estimado " +nombreApellido +" en función de los cursos seleccionados: ")

    for (let i = 0; i < cursosSeleccionados.length; i++) {

    console.log(i+1 + ".- " + cursosSeleccionados[i])

    }

    return  "El monto total a pagar es de: "  + resultado + "\nBienvenido a la gran aventura Digital House"

 

}

 

console.log(msjFinalUser("Matias Leglise",cursos, cursosAlumno,calcularMontoAPagar))