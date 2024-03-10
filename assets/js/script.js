
let numeroIngresado = parseInt(prompt(`Ingrese un número del 1 al 20`));

const validarNumero = (numero) => {
    if(numero < 1 || numero > 20){
        console.log(`Número fuera de rango`);
        return false;
    }
}

const crearMultiplicacion = (numero) => {
    for(let i=1; i<=numero;i++){
        let resultado = i * numero;
        console.log(`${i} x ${numero} = ${resultado}`);
    }
}

const generarFactorial = (numero) => {
    for(let i = 1; i<=numero; i++){
        let resultado = 1;
        for(let j = 1; j<=i; j++){
            resultado *= j;
        }
        console.log(`Factorial de ${i} es: ${resultado}`);
    }
}

validarNumero(numeroIngresado);
crearMultiplicacion(numeroIngresado);
generarFactorial(numeroIngresado);