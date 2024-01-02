const pagoMes = 12300;
const consumoKWH = 450;

const montoPago = consumoKWH > 300 ? (pagoMes + (pagoMes * 0.20)) : pagoMes;

console.log('Debido a que su hogar tuvo un consumo de ' + consumoKWH + 'Kwh, en base al ajuste tarifario (hogares con consumo mayor a 300Kwh por mes tendrán un aumento del 20%), cumplimos en informarle que se ha ajustado el total a pagar, que será de $' + montoPago)

