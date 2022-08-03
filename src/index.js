//Ejemplo de CallBack
function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(5, 10, sum))

//Segundo caso de uso del uso de callback

setTimeout(function() {
    console.log("Hola Javascript");
}, 5000)

function grettin(name){
    console.log(`Hola ${name}`)
}

setTimeout(grettin, 5000, 'Alejandro')

//Tercer caso de uso del uso de callback, llamando Apis