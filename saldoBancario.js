const operaciones = [5000, -250, -1500, 2000, -700, -600, -2500]

function calculoSaldo(operaciones) {
    let depositos = 0
    let retiros = 0  

    for (let i = 0; i < operaciones.length; i++) {
        if (operaciones[i] >=0) {
            depositos = depositos + operaciones[i]
        } else {
            retiros = retiros + operaciones[i]
        }
    }
    
    const saldoActual = depositos + retiros;

    return {
    depositos,
    retiros,
    saldoActual,
    };

}

const informacionCliente = obtenerInformacionCliente("Juan", "Perez", operaciones);

 
console.log("Información del cliente:");

console.log("Nombre:", informacionCliente.nombre);

console.log("Apellido:", informacionCliente.apellido);

console.log("Saldo de depósitos:", informacionCliente.depositos);

console.log("Saldo de retiros:", informacionCliente.retiros);

console.log("Saldo actual:", informacionCliente.saldoActual);





