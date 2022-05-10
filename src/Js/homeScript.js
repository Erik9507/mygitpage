window.onload = function () {
  document.getElementById("hiddenMeme").addEventListener("click", showmeme);
  
};

function showmeme() {
  document.getElementById("meme").style.display = "block";
  window.setTimeout(
    "document.getElementById('meme').style.display='none';",
    200
  );
}


let x = ["E", "R", "I", "K"];
let combination = [];
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyE") {
    combination = [];
    document.getElementById("easterEgg").innerText = "";
    addText("E");
    document.getElementById("easterEgg").style.display = "block";
  } else if (event.code === "KeyR") {
    addText("R");
  } else if (event.code === "KeyI") {
    addText("I");
  } else if (event.code === "KeyK") {
    addText("K");
  } else {
    clear();
  }
  console.log(combination);

  if (combination.join("") === "ERIK") {
    window.setTimeout("alert('Grattis')", 200);
    window.setTimeout("document.getElementById('easterEgg').innerText='';", 200
    );
    window.setTimeout("document.getElementById('easterEgg').style.display='none';", 200
    );
  }
  for (let i = 0; i < combination.length; i++) {
    if (combination[i] !== x[i]) {
      clear();
    }
  }
});
function clear() {
  combination = [];
  document.getElementById("easterEgg").innerText = "";
  document.getElementById("easterEgg").style.display = "none";
  
}
function addText(Bokstav) {
  combination.push(Bokstav);
  document.getElementById("easterEgg").innerText += Bokstav;
}
