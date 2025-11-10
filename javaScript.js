// ejercicio 3
const ex3 = () =>{
let precio = parseInt(prompt("Ingrese el precio del producto: "));
console.log("Redondeo hacia abajo: "+Math.floor(precio));
console.log("Redondeo hacia arriba: "+Math.ceil(precio));
console.log("Redondeo normal:" +Math.round(precio));
}

//ejercicio 4
const ex4 =()=>{
let min = prompt("Ingrese el minimo: ");
let max = prompt("Ingrese el maximo: ");
const numeroAleatorio = (min,max) => {
    let aleatorio = Math.floor(Math.random()*max +min);
    return aleatorio;
}
console.log(numeroAleatorio(min,max));
}

//ejercicio 5
const ex5 =()=> {
const Dado = () => {
    let aleatorio =Math.floor(Math.random()*6 +1);
    return aleatorio;
}
let dado1 = Dado();
let dado2 = Dado();
console.log("Suma: "+(dado1+dado2));
}
// ejercicio 6
const ex6 =()=> {
    let numero = parseInt(prompt("Ingrese un número: "));
    let cuadrado = Math.pow(numero,2);
    let cubo = Math.pow(numero,3);
    let raiz = Math.sqrt(numero);
    console.log("Cuadrado: "+cuadrado+"\nCubo: "+cubo+"\nRaiz: "+raiz);
}

//ejercicio 7
const ex7 =()=> {
    function gradosRadianes (grados) {
        let radianes = grados*(Math.PI/180);
        return radianes;
    }
    function radianesAGrados (radianes) {
        let grados = radianes*(180/Math.PI);
        return grados;
    }
    let angulo = parseInt(prompt("Ingrese el angulo: "));
    console.log("Seno: "+Math.sin(gradosRadianes(angulo)));
    console.log("Coseno: "+Math.cos(gradosRadianes(angulo)));
}
// ejercicio 8
const ex8 =()=> {
    function constraseña () {
        let constraseña;
        for (let i=0;i<=6;i++) {
            let num = Math.floor(Math.random()*10);
            constraseña +=num;
        }
        return contraseña;
    }
    console.log(contraseña());        
}
// ejercicio 9
const ex9 =()=> {
    function distancia (a,b,c,d) {
        
    }
}
