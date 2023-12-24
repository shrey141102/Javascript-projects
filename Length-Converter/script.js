function MtF(valNum) {
    document.getElementById("outputFeet").innerHTML = valNum * 3.2808;
  }
  
  function FtM(valNum) {
    document.getElementById("outputMeters").innerHTML = valNum / 3.2808;
  }
  
  function CtI(valNum) {
    document.getElementById("outputInches").innerHTML = valNum * 0.39370;
  }
  
  function ItC(valNum) {
    document.getElementById("outputcm").innerHTML = valNum / 0.39370;
  }
  
  function MilesToKm(valNum) {
    document.getElementById("outputKm").innerHTML = valNum * 1.60934;
  }
  
  function KmToMiles(valNum) {
    document.getElementById("outputMiles").innerHTML = valNum / 1.60934;
  }
  
  function MetersToYards(valNum) {
    document.getElementById("outputYards").innerHTML = valNum * 1.09361;
  }
  
  function YardsToMeters(valNum) {
    document.getElementById("outputMetersYard").innerHTML = valNum / 1.09361;
  }
  
  document.getElementById("inputFeet").addEventListener("input", function() {
    FtM(this.value);
  });
  
  document.getElementById("inputMetres").addEventListener("input", function() {
    MtF(this.value);
  });
  
  document.getElementById("inputcm").addEventListener("input", function() {
    CtI(this.value);
  });
  
  document.getElementById("inputInches").addEventListener("input", function() {
    ItC(this.value);
  });
  
  document.getElementById("inputMiles").addEventListener("input", function() {
    MilesToKm(this.value);
  });
  
  document.getElementById("inputKm").addEventListener("input", function() {
    KmToMiles(this.value);
  });
  
  document.getElementById("inputMetersYard").addEventListener("input", function() {
    MetersToYards(this.value);
  });
  
  document.getElementById("inputYards").addEventListener("input", function() {
    YardsToMeters(this.value);
  });
  