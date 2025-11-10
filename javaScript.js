// ejercicio 3
const ex3 = () =>{
let precio = parseFloat(prompt("Ingrese el precio del producto: "));
alert("Redondeo hacia abajo: "+Math.floor(precio));
alert("Redondeo hacia arriba: "+Math.ceil(precio));
alert("Redondeo normal:" +Math.round(precio));
}

//ejercicio 4
const ex4 =()=>{
let min = prompt("Ingrese el minimo: ");
let max = prompt("Ingrese el maximo: ");
const numeroAleatorio = (min,max) => {
    min = Number(min);
    max = Number(max);
    return Math.floor(Math.random()*(max-min+1))+min;
}
alert(numeroAleatorio(min,max));
}

//ejercicio 5
const ex5 =()=> {
const Dado = () => {
    let aleatorio =Math.floor(Math.random()*6 +1);
    return aleatorio;
}
let dado1 = Dado();
let dado2 = Dado();
alert("Suma: "+(dado1+dado2));
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
    alert("Seno: "+Math.sin(gradosRadianes(angulo)));
    alert("Coseno: "+Math.cos(gradosRadianes(angulo)));
}
// ejercicio 8
const ex8 =()=> {
    function contraseña() {
    let pass = "";
    for (let i = 0; i < 6; i++) { 
      let num = Math.floor(Math.random() * 10);
      pass += num;
    }
    return pass;
  }
  alert("Contraseña generada: " + contraseña());      
}
// ejercicio 9
const ex9 =()=> {
    function distancia (a,b,c,d) {
        let distancia = Math.sqrt(Math.pow(a-c,2)+Math.pow(b-d,2));
        return distancia;
    }
    let x1 = parseFloat(prompt("Ingrese x1:"));
    let y1 = parseFloat(prompt("Ingrese y1:"));
    let x2 = parseFloat(prompt("Ingrese x2:"));
    let y2 = parseFloat(prompt("Ingrese y2:"));
    alert("Distancia entre puntos:"+distancia(x1,y1,x2,y2));
    alert("Suma de distancias al origen "+(distancia(x1,y1,0,0)+distancia(x2,y2,0,0)));
}
// ejercicio 10
const ex10 =()=> {
    function normalizarCalificaciones(calificaciones) {
  let max = Math.max(...calificaciones); 
  let normalizadas = [];
  for (let i = 0; i < calificaciones.length; i++) {
    normalizadas.push(calificaciones[i] / max);
  }
  return normalizadas;
}

let notas = [15, 18, 12, 20, 10];
let notasNormalizadas = normalizarCalificaciones(notas);

alert("Calificaciones originales:", notas);
alert("Calificaciones normalizadas:", notasNormalizadas);
}
// ejercicio 11
const ex11 =()=> {
    class Producto {
        #nombre;
        #precio;
        #stock;

        constructor(nombre,precio,stock) {
            this.#nombre = nombre;
            this.setPrecio(precio);
            this.setStock(stock);
        }
        getNombre() {
            return this.#nombre;
        }
        getPrecio() {
            return this.#precio;
        }
        getStock () {
            return this.#stock;
        }
        setPrecio(precio) {
            if (precio>0) {
                this.#precio = precio;
            } else {
                console.log("Error, el precio debe ser mayor a 0");
            }
        }
        setStock (stock) {
            if (stock>=0) {
                this.#stock = stock;
            } else {
                console.log("Error el stock no puede ser negativo");
            }
        }
        toString () {
            console.log(`Producto: ${this.#nombre}\nPrecio: $${this.#precio}\nStock: ${this.#stock}`)
        }
    }
    let producto1 = new Producto ("celular",2560,12);
    producto1.toString();
    producto1.setPrecio(-20);
    producto1.setStock(5);
    producto1.toString();
}
// ejercicio 12
const ex12 =()=> {
    class Producto {
        #nombre;
        #precio;
        #stock;

        constructor(nombre,precio,stock) {
            this.#nombre = nombre;
            this.setPrecio(precio);
            this.setStock(stock);
        }
        getNombre() {
            return this.#nombre;
        }
        getPrecio() {
            return `$${this.#precio.toFixed(2)}`;
        }
        getStock () {
            return this.#stock;
        }
        setPrecio(precio) {
            let valor = Number(precio);

            if (!isNaN(valor) && valor > 0) {
                this.#precio = valor;
            } else {
                console.log("Error, el precio debe ser un número mayor a 0");
            }
        }
        setStock (stock) {
            if (stock>=0) {
                this.#stock = stock;
            } else {
                console.log("Error el stock no puede ser negativo");
            }
        }
        toString () {
            console.log(`Producto: ${this.#nombre}\nPrecio: $${this.#precio}\nStock: ${this.#stock}`);
        }
    }
    let producto1 = new Producto ("celular",2560,12);
    producto1.toString();
    producto1.setPrecio(-20);
    producto1.setStock(5);
    producto1.toString();    
}
// ejercicio 13 
const ex13 =()=> {
    class Figura {
        area () {
            return 0;
        }
        perimetro () {
            return 0;
        }
    }
    class Cuadrado extends Figura {
        constructor(lado) {
            super();
            this.lado;
        }
        area () {
            return this.lado*this.lado;
        }
        perimetro () {
            return 4*this.lado;
        }
    }
    class Triangulo extends Figura {
        constructor(base,altura, lado1,lado2) {
            super();
            this.base;
            this.altura;
            this.lado1;
            this.lado2;
        }
        area () {
            return this.base*this.altura/2;
        }
        perimetro () {
            return this.lado1+this.lado2+this.base;
        }
    }
    const cuadrado = new Cuadrado (5);
    alert("Cuadrado:\nArea: "+cuadrado.area()+"Perimetro: "+cuadrado.perimetro());
    const triangulo = new Triangulo(4,6,2,4);
}
// ejercicio 14
const ex14 =()=> {
    class Usuario {
        constructor (nombre,email) {
            this.nombre=nombre;
            this.email=email;
        }
        mostrarInfo() {
            alert(`Nombre: ${this.nombre}\nEmail: ${this.email}`);
        }
    }
    class Cliente extends Usuario {
        constructor(nombre,email,nivelFidelidad) {
            super(nombre,email);
            this.nivelFidelidad=nivelFidelidad;
        }
        mostrarInfo() {
            alert(`Cliente:\nNombre:${this.nombre}\nEmail: ${this.email}\nNivel de fidelidad: +${this.nivelFidelidad}`);
        }
    }
    class Administrador extends Usuario {
        constructor(nombre,email,permisos) {
            super(nombre,email);
            this.permisos=permisos;
        }
         mostrarInfo() {
    alert(`Administrador:\nNombre: ${this.nombre}\nEmail: ${this.email}\nPermisos: ${this.permisos.join(", ")}`);
    }
}
}
// ejercicio 15
const ex15 =()=> {
    class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }

  mostrarInfo() {
    console.log(`Nombre: ${this.nombre}\nEmail: ${this.email}`);
  }
}
class Cliente extends Usuario {
  constructor(nombre, email, nivelFidelidad) {
    super(nombre, email);
    this.nivelFidelidad = nivelFidelidad;
  }

  mostrarInfo() {
    alert(`Cliente:\nNombre: ${this.nombre}\nEmail: ${this.email}\nNivel de fidelidad: ${this.nivelFidelidad}/5`);
  }
}
class Administrador extends Usuario {
  constructor(nombre, email, permisos) {
    super(nombre, email);
    this.permisos = permisos;
  }

  mostrarInfo() {
    alert(`Administrador:\nNombre: ${this.nombre}\nEmail: ${this.email}\nPermisos: ${this.permisos.join(", ")}`);
  }
}
let usuarios = [new Cliente("Ana Manrique", "ana@gmail.com", 4),
  new Administrador("Carlos Sainz", "carlos@example.com", ["crear", "editar", "eliminar"]),
  new Cliente("Luis Ramos", "luis@hotmail.com", 2),
];

usuarios.forEach(usuario => {
    usuario.mostrarInfo();
    alert("-------------------");
});
}
// ejercicio 16
const ex16 =()=> {
    class Empleado {
        constructor(nombre, sueldoBase) {
            this.nombre = nombre;
            this.sueldoBase = sueldoBase;
        }
        calcularSueldo() {
            return this.sueldoBase;
        }
    }

    class Programador extends Empleado {
        constructor(nombre, sueldoBase, lenguaje) {
            super(nombre, sueldoBase);
            this.lenguaje = lenguaje;
        }
        calcularSueldo() {
            return this.sueldoBase * 1.1;
        }
    }

    class ProgramadorSenior extends Programador {
        calcularSueldo() {
            return this.sueldoBase * 1.25;
        }
    }

    let emp = new Empleado("Sofía", 1500);
    let prog = new Programador("Luis", 2000, "JavaScript");
    let senior = new ProgramadorSenior("María", 2500, "Python");

    alert(`Empleado: ${emp.nombre}\nSueldo: S/ ${emp.calcularSueldo()}`);
    alert(`Programador: ${prog.nombre}\nSueldo: S/ ${prog.calcularSueldo()}`);
    alert(`Programador Senior: ${senior.nombre}\nSueldo: S/ ${senior.calcularSueldo()}`);    
}
// ejercicio 17
const ex17 =()=> {
    class Cuenta {
        #saldo;
        constructor(saldoInicial) {
            this.#saldo = saldoInicial;
        }
        depositar(monto) {
            this.#saldo += monto;
        }
        retirar(monto) {
            if (monto > this.#saldo) {
                alert("Fondos insuficientes");
            } else {
                this.#saldo -= monto;
            }
        }
        getSaldo() {
            return this.#saldo;
        }
        transferir(destino, monto) {
            if (monto <= this.#saldo) {
                this.retirar(monto);
                destino.depositar(monto);
                alert("Transferencia realizada");
            } else {
                alert("No se pudo realizar la transferencia");
            }
        }
    }
    class CuentaAhorro extends Cuenta {
        retirar(monto) {
            if (monto > this.getSaldo()) {
                alert("No puedes retirar más de tu saldo.");
            } else {
                super.retirar(monto);
                alert("Retiro exitoso (Cuenta Ahorro).");
            }
        }
    }
    class CuentaCorriente extends Cuenta {
        constructor(saldoInicial, limite) {
            super(saldoInicial);
            this.limite = limite;
        }
        retirar(monto) {
            if (monto > this.getSaldo() + this.limite) {
                alert("Has superado tu límite de sobregiro.");
            } else {
                alert("Retiro con sobregiro permitido (Cuenta Corriente).");
            }
        }
    }
    let ahorro = new CuentaAhorro(500);
    let corriente = new CuentaCorriente(300, 200);
    ahorro.retirar(100);
    corriente.retirar(400);
    ahorro.transferir(corriente, 100);
    alert(`Saldo Ahorro: ${ahorro.getSaldo()}\nSaldo Corriente: ${corriente.getSaldo()}`);
}
const ex18 =()=> {
    class Producto {
        constructor(nombre, precio) {
            this.nombre = nombre;
            this.precio = precio;
        }
    }

    class Carrito {
        constructor() {
            this.productos = [];
        }

        agregarProducto(producto) {
            this.productos.push(producto);
        }

        calcularTotal() {
            return this.productos.reduce((acc, p) => acc + p.precio, 0);
        }

        mostrarResumen() {
            let lista = this.productos.map(p => `- ${p.nombre}: S/ ${p.precio}`).join("\n");
            alert(`Productos en carrito:\n${lista}\n\nTotal: S/ ${this.calcularTotal()}`);
        }
    }

    let carrito = new Carrito();
    carrito.agregarProducto(new Producto("Pan", 2.5));
    carrito.agregarProducto(new Producto("Leche", 4.5));
    carrito.agregarProducto(new Producto("Huevos", 6));

    carrito.mostrarResumen();
};


const ejer19 = () => {
    class Notificacion {
        enviar() {
            alert("Enviando notificación...");
        }
    }

    class Egmail extends Notificacion {
        enviar() {
            alert("Enviando notificación por Egmail...");
        }
    }

    class SMS extends Notificacion {
        enviar() {
            alert("Enviando notificación por SMS...");
        }
    }

    class Push extends Notificacion {
        enviar() {
            alert("Enviando notificación Push...");
        }
    }

    const notificaciones = [new Egmail(), new SMS(), new Push()];
    notificaciones.forEach(n => n.enviar());
}
