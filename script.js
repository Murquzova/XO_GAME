const container = document.querySelector('.container');
const win = document.querySelector('.win');
const btn = document.querySelector('button');
btn.addEventListener('click', function () {
  document.querySelector('.start').style.marginTop = '-100vh';
});
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    container.innerHTML += `
        <div x_yer="${i}" y_yer='${j}' onclick="Jmi(this)" class="box"></div>
        `;
  }
}
const boxs = document.querySelectorAll('.box');

let bool = true;
let maas = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

function Jmi(t) {
  let x = t.getAttribute('x_yer');
  let y = t.getAttribute('y_yer');

  if (maas[x][y] == 0) {
    t.innerHTML = `X`;
    for (let k = 0; k < 3; k++) {
      for (let l = 0; l < 3; l++) {
        if (x == k && y == l) maas[k][l] = 1;
      }
    }
    t.style.backgroundColor = 'white';

    Rand();
  
  if (
    (maas[0][0] == 1 && maas[0][1] == 1 && maas[0][2] == 1) ||
    (maas[1][0] == 1 && maas[1][1] == 1 && maas[1][2] == 1) ||
    (maas[2][0] == 1 && maas[2][1] == 1 && maas[2][2] == 1) ||
    (maas[0][0] == 1 && maas[1][1] == 1 && maas[2][2] == 1) ||
    (maas[0][2] == 1 && maas[1][1] == 1 && maas[2][0] == 1) ||
    (maas[0][1] == 1 && maas[1][1] == 1 && maas[2][1] == 1) ||
    (maas[0][2] == 1 && maas[1][2] == 1 && maas[2][2] == 1) ||
    (maas[0][0] == 1 && maas[1][0] == 1 && maas[2][0] == 1) ||
    (maas[0][1] == 1 && maas[1][1] == 1 && maas[2][1] == 1)
  ) {
    container.style.marginTop = '-100vh';
    document.querySelector('.win').innerHTML = `<p>X qalib oldu!</p>`;
    document.querySelector('.win').marginTop = '-100vh';
  }

 else if(
    (maas[0][0] == 2 && maas[0][1] == 2 && maas[0][2] == 2) ||
    (maas[1][0] == 2 && maas[1][1] == 2 && maas[1][2] == 2) ||
    (maas[2][0] == 2 && maas[2][1] == 2 && maas[2][2] == 2) ||
    (maas[0][0] == 2 && maas[1][1] == 2 && maas[2][2] == 2) ||
    (maas[0][2] == 2 && maas[1][1] == 2 && maas[2][0] == 2) ||
    (maas[0][1] == 2 && maas[1][1] == 2 && maas[2][1] == 2) ||
    (maas[0][2] == 2 && maas[1][2] == 2 && maas[2][2] == 2) ||
    (maas[0][0] == 2 && maas[1][0] == 2 && maas[2][0] == 2) ||
    (maas[0][1] == 2 && maas[1][1] == 2 && maas[2][1] == 2)
  ) {
    container.style.marginTop = '-100vh';
    document.querySelector('.win').innerHTML = `<p>O qalib oldu!</p>`;
    document.querySelector('.win').marginTop = '-100vh';
  }
  
  }
}

function Rand() {
  let c = true;
  let count = 0;
  while (c) {
    let x = Math.floor(Math.random() * 3);
    let y = Math.floor(Math.random() * 3);
    if (maas[x][y] == 0) {
      maas[x][y] = 2;
      boxs.forEach((box) => {
        if (box.getAttribute('x_yer') == x && box.getAttribute('y_yer') == y) {
          box.innerHTML = `O`;
          box.style.backgroundColor = 'white';
        }
      });
      c = false;
    }
    count++;
    if (count > 10000) {
      c = false;
    }
  }
}
