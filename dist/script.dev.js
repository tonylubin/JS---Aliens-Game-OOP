"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var enemySection = document.querySelector(".enemy-section");
var motherShipPoints = document.querySelector(".mother-box");
var defencePoints = document.querySelector(".defence-box");
var attackPoints = document.querySelector(".attack-box");

var Game =
/*#__PURE__*/
function () {
  function Game(numberOfGridSquares, domPlacement) {
    _classCallCheck(this, Game);

    this.domPlacement = domPlacement; // make div grid system board

    for (var i = 0; i < numberOfGridSquares; i++) {
      var gridSquare = document.createElement("div");
      gridSquare.id = "grid".concat(i);
      this.domPlacement.appendChild(gridSquare);
    }
  }

  _createClass(Game, [{
    key: "winCheck",
    value: function winCheck() {
      if (motherShip.points < 0) {
        this.getGameboardNodeList().forEach(function (gridItem) {
          return gridItem.style.backgroundColor = "unset";
        });
        alert("Well done soldier! Earth is saved....you've destroyed the alien army!!!");
      }
    }
  }, {
    key: "getGameboardNodeList",
    value: function getGameboardNodeList() {
      return this.domPlacement.childNodes; // nodelist of game-board children (the ships)
    }
  }, {
    key: "updateGameStatus",
    value: function updateGameStatus(index, className) {
      this.getGameboardNodeList()[index].classList.add("blink-2"); //this.getGameboardNodeList()[index].classList.remove(className);
      //this.getGameboardNodeList()[index].style.backgroundColor = "unset";
    }
  }]);

  return Game;
}();

var Ship =
/*#__PURE__*/
function () {
  function Ship(name, color, points, startingPoints, hitPoints, length, divStartPosition) {
    _classCallCheck(this, Ship);

    this.name = name;
    this.color = color;
    this.points = points;
    this.startingPoints = startingPoints;
    this.hitPoints = hitPoints;
    this.length = length;
    this.divStartPosition = divStartPosition;
  }

  _createClass(Ship, [{
    key: "pointsReset",
    value: function pointsReset() {
      this.points = this.startingPoints;
    }
  }, {
    key: "updateShipStatus",
    value: function updateShipStatus(shipPointsBoard) {
      this.points -= this.hitPoints;
      shipPointsBoard.innerHTML = "".concat(this.name, ": ").concat(this.points).toUpperCase();
    }
  }, {
    key: "positionShip",
    value: function positionShip() {
      var calculateDivStartAndEnd = this.divStartPosition + (this.length - 1);

      for (var i = this.divStartPosition; i <= calculateDivStartAndEnd; i++) {
        document.querySelector("#grid".concat(i)).style.backgroundColor = this.color;
        document.querySelector("#grid".concat(i)).className = this.name;
      }
    }
  }]);

  return Ship;
}(); //  Instance of Game


var hostileAlienGame = new Game(270, enemySection); // Instance of Ships

var defenceShip1 = new Ship("defence-ship1", "rgb(22, 22, 180)", 80, 80, 10, 8, 61);
var motherShip = new Ship("mother-ship", "rgb(184, 16, 16)", 100, 100, 9, 12, 9);
var defenceShip2 = new Ship("defence-ship2", "rgb(22, 22, 180)", 80, 80, 10, 8, 71);
var defenceShip3 = new Ship("defence-ship3", "rgb(22, 22, 180)", 80, 80, 10, 8, 81);
var defenceShip4 = new Ship("defence-ship4", "rgb(22, 22, 180)", 80, 80, 10, 8, 126);
var defenceShip5 = new Ship("defence-ship5", "rgb(22, 22, 180)", 80, 80, 10, 8, 136);
var attackShip1 = new Ship("attack-ship1", "rgb(201, 201, 15)", 45, 45, 12, 4, 181);
var attackShip2 = new Ship("attack-ship2", "rgb(201, 201, 15)", 45, 45, 12, 4, 187);
var attackShip3 = new Ship("attack-ship3", "rgb(201, 201, 15)", 45, 45, 12, 4, 193);
var attackShip4 = new Ship("attack-ship4", "rgb(201, 201, 15)", 45, 45, 12, 4, 199);
var attackShip5 = new Ship("attack-ship5", "rgb(201, 201, 15)", 45, 45, 12, 4, 205);
var attackShip6 = new Ship("attack-ship6", "rgb(201, 201, 15)", 45, 45, 12, 4, 245);
var attackShip7 = new Ship("attack-ship7", "rgb(201, 201, 15)", 45, 45, 12, 4, 254);
var attackShip8 = new Ship("attack-ship8", "rgb(201, 201, 15)", 45, 45, 12, 4, 263);
var shipsArray = [motherShip, defenceShip1, defenceShip2, defenceShip3, defenceShip4, defenceShip5, attackShip1, attackShip2, attackShip3, attackShip4, attackShip5, attackShip6, attackShip7, attackShip8]; // Initial start/restart

document.querySelector("#start").addEventListener("click", function () {
  shipsArray.forEach(function (ship) {
    return ship.pointsReset();
  });
  motherShipPoints.innerHTML = "Mother Ship: ";
  defencePoints.innerHTML = "Defence Ship: ";
  attackPoints.innerHTML = "Attack Ship: "; // Placing ships on grid/board

  shipsArray.forEach(function (ship) {
    return ship.positionShip();
  });
}); // SHOOTING --> Picking randon number of grid

document.querySelector("#shoot").addEventListener("click", function () {
  var getRandomGridNumber = Math.floor(Math.random() * 270);
  var hostileAlienGameNodeList = hostileAlienGame.getGameboardNodeList();

  if (hostileAlienGameNodeList[getRandomGridNumber].classList.length === 1) {
    var conditionCheck = hostileAlienGameNodeList[getRandomGridNumber].className;

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