const hourElement = document.getElementById("hour");
const daysElement = document.getElementById("days");
const music = document.getElementById("music");
const now = new Date();  
const day = new Date("2023-12-03T22:00:00");

function diferencaHoras(data1, data2) {
  let diff = Math.abs(data2 - data1);

  const horas = Math.floor(diff / (1000 * 60 * 60));
  diff -= horas * 1000 * 60 * 60;

  const minutos = Math.floor(diff / (1000 * 60));
  diff -= minutos * 1000 * 60;

  const segundos = Math.floor(diff / 1000);

  return `${horas}h ${minutos}m ${segundos}s`;
}

function diferencaDias(data1, data2) {
  let diff = Math.abs(data2 - data1);

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

  return `${dias}`;
}

hourElement.innerText = `Juntos à ${diferencaHoras(day, now)}`;

daysElement.innerText = diferencaDias(day, now);

music.volume = 0.03
  