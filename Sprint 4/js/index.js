const canvas = document.getElementById("canvas");
const canvas2 = document.getElementById("canvas2");
const context = canvas.getContext("2d");
const context2 = canvas2.getContext("2d");
const width = canvas.width = 300;
const height = canvas.height = 200;
const width2 = canvas2.width = 300;
const height2 = canvas2.height = 200;

let colisoes = 0;

let health = 100;
const healthBarWidth = 200;
const healthBarHeight = 30;
const x = width / 2 - healthBarWidth / 2;
const y = height / 5 - healthBarHeight / 2;

const healthBar = new HealthBar(x, y, healthBarWidth, healthBarHeight, health, "green");
const healthBar2 = new HealthBar(x, y, healthBarWidth, healthBarHeight, health, "green");

const frame = function () {
  context.clearRect(0, 0, width, height);
  context2.clearRect(0, 0, width, height);
  healthBar.show(context);
  healthBar2.show(context2);
  requestAnimationFrame(frame);
}

function dano() {

  healthBar.health -= (Math.random() * 20);
  
  healthBar.updateHealth(healthBar.health);

  healthBar2.health -= (Math.random() * 20);
  healthBar2.updateHealth(healthBar2.health);


  colisoes++

  if (colisoes == 5) {
    if (healthBar.health > healthBar2.health) {
      alert('PLAYER 1 VENCEU');
      location.reload();
    } else {
      alert('PLAYER 2 VENCEU');
      location.reload();
    }
  }

  if (healthBar.health <= 0) {
    health = 100;
    healthBar.color = "black";
    alert("PLAYER 1 VENCEU!");
    location.reload()
  }
  if (healthBar2.health <= 0){
    health = 100;
    healthBar.color = "black";
    alert("PLAYER 2 VENCEU!");
    location.reload()
  }
};


frame();












