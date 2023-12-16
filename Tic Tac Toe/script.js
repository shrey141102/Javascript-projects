const playerOne = 'X';
const playerTwo = 'O';
const lineColor = "#445069";

const canvas = document.getElementById('tic-tac-toe-board');
const context = canvas.getContext('2d');

const canvasSize = 500;
const sectionSize = canvasSize / 3;
canvas.width = canvasSize;
canvas.height = canvasSize;
context.translate(0.5, 0.5);

let currentPlayer = playerOne;
const board = getInitialBoard("");

let winningLine = null;

function getInitialBoard(defaultValue) {
  return Array.from({ length: 3 }, () => Array(3).fill(defaultValue));
}

function addPlayingPiece(mouse) {
  const { x, y } = mouse;

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const xCoordinate = row * sectionSize;
      const yCoordinate = col * sectionSize;

      if (
        x >= xCoordinate && x <= xCoordinate + sectionSize &&
        y >= yCoordinate && y <= yCoordinate + sectionSize &&
        board[row][col] === ""
      ) {
        clearPlayingArea(xCoordinate, yCoordinate);

        if (currentPlayer === playerOne) {
          drawX(xCoordinate, yCoordinate);
          board[row][col] = playerOne;
        } else {
          drawO(xCoordinate, yCoordinate);
          board[row][col] = playerTwo;
        }

        currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
        const winner = checkForWinner();
        if (winner) {
          winningLine = getWinningLine();
          setTimeout(() => {
            alert(`Player ${winner} wins!`);
            resetGame();
          }, 100);
        } else if (isBoardFull()) {
          setTimeout(() => {
            alert("It's a draw!");
            resetGame();
          }, 100);
        }
      }
    }
  }
}

function clearPlayingArea(xCoordinate, yCoordinate) {
  context.fillStyle = "#fff";
  context.fillRect(
    xCoordinate,
    yCoordinate,
    sectionSize,
    sectionSize
  );
}

function drawO(xCordinate, yCordinate) {
  var halfSectionSize = (0.5 * sectionSize);
  var centerX = xCordinate + halfSectionSize;
  var centerY = yCordinate + halfSectionSize;
  var radius = (sectionSize - 100) / 2;
  var startAngle = 0 * Math.PI;
  var endAngle = 2 * Math.PI;

  context.lineWidth = 10;
  context.strokeStyle = "#A8DF8E";
  context.beginPath();
  context.arc(centerX, centerY, radius, startAngle, endAngle);
  context.stroke();
}

function drawX(xCordinate, yCordinate) {
  context.strokeStyle = "#FFC7EA";

  context.beginPath();

  var offset = 50;
  context.moveTo(xCordinate + offset, yCordinate + offset);
  context.lineTo(xCordinate + sectionSize - offset, yCordinate + sectionSize - offset);

  context.moveTo(xCordinate + offset, yCordinate + sectionSize - offset);
  context.lineTo(xCordinate + sectionSize - offset, yCordinate + offset);

  context.stroke();
}

function drawLines(lineWidth, strokeStyle) {
  const lineStart = 4;
  const lineLength = canvasSize - 5;
  context.lineWidth = lineWidth;
  context.lineCap = 'round';
  context.strokeStyle = strokeStyle;
  context.beginPath();

  for (let y = 1; y <= 2; y++) {
    context.moveTo(lineStart, y * sectionSize);
    context.lineTo(lineLength, y * sectionSize);
  }

  for (let x = 1; x <= 2; x++) {
    context.moveTo(x * sectionSize, lineStart);
    context.lineTo(x * sectionSize, lineLength);
  }

  context.stroke();
}

drawLines(10, lineColor);

function getCanvasMousePosition(event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}

function checkForWinner() {
  if (
    (board[0][0] !== "" && board[0][0] === board[1][1] && board[1][1] === board[2][2]) ||
    (board[0][2] !== "" && board[0][2] === board[1][1] && board[1][1] === board[2][0])
  ) {
    return board[1][1];
  }
  for (let i = 0; i < 3; i++) {
    if (
      (board[i][0] !== "" && board[i][0] === board[i][1] && board[i][1] === board[i][2])
    ) {
      return board[i][0];
    }
    if (
      (board[0][i] !== "" && board[0][i] === board[1][i] && board[1][i] === board[2][i])
    ) {
      return board[0][i];
    }
  }

  return null;
}

function getWinningLine() {
  if (
    (board[0][0] !== "" && board[0][0] === board[1][1] && board[1][1] === board[2][2])
  ) {
    return { type: "diagonal", index: 0 };
  } else if (
    (board[0][2] !== "" && board[0][2] === board[1][1] && board[1][1] === board[2][0])
  ) {
    return { type: "diagonal", index: 1 };
  }
  for (let i = 0; i < 3; i++) {
    if (
      (board[i][0] !== "" && board[i][0] === board[i][1] && board[i][1] === board[i][2])
    ) {
      return { type: "row", index: i };
    }
    else if (
      (board[0][i] !== "" && board[0][i] === board[1][i] && board[1][i] === board[2][i])
    ) {
      return { type: "column", index: i };
    }
  }

  return null;
}

function drawWinningLine() {
  if (winningLine) {
    context.strokeStyle = "#FF0000";
    context.lineWidth = 8;

    if (winningLine.type === "column") {
      const y = (winningLine.index + 0.5) * sectionSize;
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(canvasSize, y);
      context.stroke();
    } else if (winningLine.type === "row") {
      const x = (winningLine.index + 0.5) * sectionSize;
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, canvasSize);
      context.stroke();
    } else if (winningLine.type === "diagonal") {
      if (winningLine.index === 0) {
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(canvasSize, canvasSize);
        context.stroke();
      } else if (winningLine.index === 1) {
        context.beginPath();
        context.moveTo(0, canvasSize);
        context.lineTo(canvasSize, 0);
        context.stroke();
      }
    }
  } else {
    console.error("No winning line detected!");
  }
}

function isBoardFull() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === "") {
        return false;
      }
    }
  }
  return true;
}
bu
function resetGame() {
  context.clearRect(0, 0, canvasSize, canvasSize);
  currentPlayer = playerOne;
  winningLine = null;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      board[i][j] = "";
    }
  }
  drawLines(10, lineColor);
}

canvas.addEventListener('mouseup', function (event) {
  const canvasMousePosition = getCanvasMousePosition(event);
  addPlayingPiece(canvasMousePosition);
  drawWinningLine();
});