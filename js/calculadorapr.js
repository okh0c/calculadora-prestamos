function calcularCuota(monto, tasaInteres, plazo) {
  const tasaMensual = (tasaInteres / 12) / 100;
  const cuota = monto * ((tasaMensual * Math.pow(1 + tasaMensual, plazo)) / (Math.pow(1 + tasaMensual, plazo) - 1));
  return cuota.toFixed(2);
}

function calcularTotal(monto, tasaInteres, plazo) {
  const cuota = calcularCuota(monto, tasaInteres, plazo);
  const total = cuota * plazo;
  return total.toFixed(2);
}

const form = document.querySelector('form');
const resultadoDiv = document.getElementById('resultado');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const monto = Number(document.getElementById('monto').value);
  const tasaInteres = Number(document.getElementById('tasaInteres').value);
  const plazo = Number(document.getElementById('plazo').value);
  const cuotaMensual = calcularCuota(monto, tasaInteres, plazo);
  const totalAPagar = calcularTotal(monto, tasaInteres, plazo);
  resultadoDiv.innerHTML = `El monto de la cuota mensual es de $${cuotaMensual}. El monto total a pagar es de $${totalAPagar}.`;
});
