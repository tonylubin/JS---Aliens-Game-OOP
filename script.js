// DOM elements
const enemySection = document.querySelector(".enemy-section");
const motherShipPoints = document.querySelector(".mother-box");
const defencePoints = document.querySelector(".defence-box");
const attackPoints = document.querySelector(".attack-box");
const spaceshipDomId = document.querySelector('#space-rocket');

class Game {
  constructor(numberOfGridSquares, domPlacement) {
    this.domPlacement = domPlacement;
    // make div grid system board
    for (let i = 0; i < numberOfGridSquares; i++) {
      const gridSquare = document.createElement("div");
      gridSquare.id = `grid${i}`;
      this.domPlacement.appendChild(gridSquare);
    }
  }
  winCheck(){
    if(motherShip.points == 0){
        this.getGameboardNodeList().forEach(gridItem => gridItem.style.backgroundColor = "unset");
        alert("Well done soldier! Earth is saved....you've destroyed the alien army!!!");
  }
  }
  getGameboardNodeList() {
    return this.domPlacement.childNodes; // nodelist of game-board children (the ships)
  }
  updateGameStatus(index){
    this.getGameboardNodeList()[index].style.backgroundImage = "url('./images/explosion.png')";
    this.getGameboardNodeList()[index].classList.add("blink-2");
  }
}

class Ship {
    constructor(name, color, points, startingPoints, hitPoints, length, divStartPosition) {
        this.name = name;
        this.color = color;
        this.points = points;
        this.startingPoints = startingPoints;
        this.hitPoints = hitPoints;
        this.length = length;
        this.divStartPosition = divStartPosition;
    }    
    pointsReset(){
        this.points = this.startingPoints;
    }
    updateShipStatus(shipPointsBoard) {
      this.points -= this.hitPoints;
      shipPointsBoard.innerHTML = `${this.name}: ${this.points}`.toUpperCase();
    }    
    positionShip() {
        const calculateDivStartAndEnd = this.divStartPosition + (this.length - 1);
        for (let i = this.divStartPosition; i <= calculateDivStartAndEnd; i++) {
            document.querySelector(`#grid${i}`).style.backgroundImage = this.color;
            document.querySelector(`#grid${i}`).className = this.name;
        }
    }
}

//  Instance of Game
const hostileAlienGame = new Game(270, enemySection);

const motherImgUrl = "url('./images/spaceship.png')";
const attackImgUrl = "url('./images/rocket.png')";
const defenceImgUrl = "url('./images/spaceship2.png')";

// Instance of Ships
const motherShip = new Ship("mother-ship", motherImgUrl, 180, 180, 15, 12, 9);
const defenceShip2 = new Ship("defence-ship2", defenceImgUrl, 80, 80, 10, 8, 71);
const defenceShip3 = new Ship("defence-ship3", defenceImgUrl, 80, 80, 10, 8, 81);
const defenceShip1 = new Ship("defence-ship1", defenceImgUrl, 80, 80, 10, 8, 61);
const defenceShip4 = new Ship("defence-ship4", defenceImgUrl, 80, 80, 10, 8, 126);
const defenceShip5 = new Ship("defence-ship5", defenceImgUrl, 80, 80, 10, 8, 136);
const attackShip1 = new Ship("attack-ship1", attackImgUrl, 48, 48, 12, 4, 181);
const attackShip2 = new Ship("attack-ship2", attackImgUrl, 48, 48, 12, 4, 187);
const attackShip3 = new Ship("attack-ship3", attackImgUrl, 48, 48, 12, 4, 193);
const attackShip4 = new Ship("attack-ship4", attackImgUrl, 48, 48, 12, 4, 199);
const attackShip5 = new Ship("attack-ship5", attackImgUrl, 48, 48, 12, 4, 205);
const attackShip6 = new Ship("attack-ship6", attackImgUrl, 48, 48, 12, 4, 248);
const attackShip7 = new Ship("attack-ship7", attackImgUrl, 48, 48, 12, 4, 254);
const attackShip8 = new Ship("attack-ship8", attackImgUrl, 48, 48, 12, 4, 263);
const shipsArray = [motherShip, defenceShip1, defenceShip2, defenceShip3, defenceShip4, defenceShip5, attackShip1, attackShip2, attackShip3, attackShip4, attackShip5, attackShip6, attackShip7, attackShip8];

// Initial start/restart
document.querySelector("#start").addEventListener("click", () => {
    shipsArray.forEach(ship => ship.pointsReset());
    motherShipPoints.innerText = "Mother Ship: ";
    defencePoints.innerText = "Defence Ship: ";
    attackPoints.innerText = "Attack Ship: ";
    // Placing ships on grid/board
    shipsArray.forEach(ship => ship.positionShip());
    spaceshipDomId.style.visibility = "visible";
});

// SHOOTING --> Picking randon number of grid
document.querySelector("#shoot").addEventListener("click", () => {
  let getRandomGridNumber = Math.floor(Math.random() * (267 - 8 + 1)) + 8;
  const hostileAlienGameNodeList = hostileAlienGame.getGameboardNodeList();
  if (hostileAlienGameNodeList[getRandomGridNumber].classList.length === 1) {
    let conditionCheck = hostileAlienGameNodeList[getRandomGridNumber].className;
    switch (conditionCheck) {
      case "mother-ship":
        motherShip.updateShipStatus(motherShipPoints);
        hostileAlienGame.updateGameStatus(getRandomGridNumber, motherShip.name);
        break;
      case "defence-ship1":
        defenceShip1.updateShipStatus(defencePoints);
        hostileAlienGame.updateGameStatus(getRandomGridNumber, defenceShip1.name);    
        break;
      case "defence-ship2":
        defenceShip2.updateShipStatus(defencePoints);
        hostileAlienGame.updateGameStatus(getRandomGridNumber, defenceShip2.name);    
        break;
      case "defence-ship3":
        defenceShip3.updateShipStatus(defencePoints);
        hostileAlienGame.updateGameStatus(getRandomGridNumber, defenceShip3.name);    
        break;
      case "defence-ship4":
        defenceShip4.updateShipStatus(defencePoints);
        hostileAlienGame.updateGameStatus(getRandomGridNumber, defenceShip4.name);    
        break;
      case "defence-ship5":
        defenceShip5.updateShipStatus(defencePoints);
        hostileAlienGame.updateGameStatus(getRandomGridNumber, defenceShip5.name);
        break;
      case "attack-ship1":
        attackShip1.updateShipStatus(attackPoints);
        hostileAlienGame.updateGameStatus(getRandomGridNumber, attackShip1.name);
        break;
      case "attack-ship2":
        attackShip2.updateShipStatus(attackPoints);
        hostileAlienGame.updateGameStatus(getRandomGridNumber, attackShip2.name);
        break;
      case "attack-ship3":
        attackShip3.updateShipStatus(attackPoints);
        hostileAlienGame.updateGameStatus(getRandomGridNumber, attackShip3.name);
        break;
      case "attack-ship4":
        attackShip4.updateShipStatus(attackPoints);
        hostileAlienGame.updateGameStatus(getRandomGridNumber, attackShip4.name);
        break;
      case "attack-ship5":
        attackShip5.updateShipStatus(attackPoints);
        hostileAlienGame.updateGameStatus(getRandomGridNumber, attackShip5.name);
        break;
      case "attack-ship6":
        attackShip6.updateShipStatus(attackPoints);
        hostileAlienGame.updateGameStatus(getRandomGridNumber, attackShip6.name);
        break;
      case "attack-ship7":
        attackShip7.updateShipStatus(attackPoints);
        hostileAlienGame.updateGameStatus(getRandomGridNumber, attackShip7.name);
        break;
      case "attack-ship8":
        attackShip8.updateShipStatus(attackPoints);
        hostileAlienGame.updateGameStatus(getRandomGridNumber, attackShip8.name);
        break;
    }
  }
  hostileAlienGame.winCheck();
});


