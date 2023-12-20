function KgToPounds(valNum) {
  document.getElementById("outputPounds").innerHTML = valNum * 2.20462;
}

function PoundsToKg(valNum) {
  document.getElementById("outputKg").innerHTML = valNum / 2.20462;
}

function KgToOunces(valNum) {
  document.getElementById("outputOz").innerHTML = valNum * 35.274;
}

function OuncesToKg(valNum) {
  document.getElementById("outputKgOz").innerHTML = valNum / 35.274;
}

function KgToStones(valNum) {
  document.getElementById("outputStones").innerHTML = valNum * 0.157473;
}

function StonesToKg(valNum) {
  document.getElementById("outputKgStones").innerHTML = valNum / 0.157473;
}

document.getElementById("inputKg").addEventListener("input", function() {
  KgToPounds(this.value);
});

document.getElementById("inputPounds").addEventListener("input", function() {
  PoundsToKg(this.value);
});

document.getElementById("inputKgOz").addEventListener("input", function() {
  KgToOunces(this.value);
});

document.getElementById("inputOzKg").addEventListener("input", function() {
  OuncesToKg(this.value);
});

document.getElementById("inputKgStones").addEventListener("input", function() {
  KgToStones(this.value);
});

document.getElementById("inputStonesKg").addEventListener("input", function() {
  StonesToKg(this.value);
});

function PoundsToOunces(valNum) {
  document.getElementById("outputPoundsOz").innerHTML = valNum * 16;
}

function OuncesToPounds(valNum) {
  document.getElementById("outputOzPounds").innerHTML = valNum / 16;
}

function PoundsToStones(valNum) {
  document.getElementById("outputPoundsStones").innerHTML = valNum / 14;
}

function StonesToPounds(valNum) {
  document.getElementById("outputStonesPounds").innerHTML = valNum * 14;
}

function OuncesToStones(valNum) {
  document.getElementById("outputOzStones").innerHTML = valNum / 224;
}

function StonesToOunces(valNum) {
  document.getElementById("outputStonesOz").innerHTML = valNum * 224;
}

document.getElementById("inputPoundsOz").addEventListener("input", function() {
  PoundsToOunces(this.value);
});

document.getElementById("inputOzPounds").addEventListener("input", function() {
  OuncesToPounds(this.value);
});

document.getElementById("inputPoundsStones").addEventListener("input", function() {
  PoundsToStones(this.value);
});

document.getElementById("inputStonesPounds").addEventListener("input", function() {
  StonesToPounds(this.value);
});

document.getElementById("inputOzStones").addEventListener("input", function() {
  OuncesToStones(this.value);
});

document.getElementById("inputStonesOz").addEventListener("input", function() {
  StonesToOunces(this.value);
});
