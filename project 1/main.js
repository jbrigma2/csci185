const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const player = {
    x: 50,
    y: 50,
    speed: 5,
    color: "red"
  };
  
  const enemy = {
    x: 200,
    y: 100,
    speed: 3,
    color: "blue"
  };

  function update() {
    // Move the player and enemy
    player.x += player.speed;
    enemy.x += enemy.speed;
    
    // Check for collisions between the player and enemy
    if (player.x < enemy.x + 20 &&
        player.x + 20 > enemy.x &&
        player.y < enemy.y + 20 &&
        player.y + 20 > enemy.y) {
      alert("Game over!");
    }
    
    // Clear the canvas and draw the game objects
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, 20, 20);
    ctx.fillStyle = enemy.color;
    ctx.fillRect(enemy.x, enemy.y, 20, 20);
    
    // Call the update function again in 30 milliseconds
    setTimeout(update, 30);
  }
  
  // Call the update function to start the game loop
  update();

  document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
      player.x -= player.speed;
    } else if (event.key === "ArrowRight") {
      player.x += player.speed;
    } else if (event.key === "ArrowUp") {
      player.y -= player.speed;
    } else if (event.key === "ArrowDown") {
      player.y += player.speed;
    }
  });