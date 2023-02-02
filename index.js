const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");

button1.addEventListener("click", (e) => {
  if (button1.classList.contains("button-off")) {
    button1.classList.replace("button-off", "button-on");
    button1.innerText = "ON";
  } else {
    button1.classList.replace("button-on", "button-off");
    button1.innerText = "OFF";
  }
});

button2.addEventListener("click", (e) => {
  if (button2.classList.contains("button-off")) {
    button2.classList.replace("button-off", "button-on");
    button2.innerText = "ON";
  } else {
    button2.classList.replace("button-on", "button-off");
    button2.innerText = "OFF";
  }
});

button3.addEventListener("click", (e) => {
  if (button3.classList.contains("button-off")) {
    button3.classList.replace("button-off", "button-on");
    button3.innerText = "ON";
  } else {
    button3.classList.replace("button-on", "button-off");
    button3.innerText = "OFF";
  }
});
