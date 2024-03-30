const form = document.querySelector("form");

function addDeleteToButton (bttn) {
    bttn.addEventListener("click", event => {
      console.log(event);
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
    })
}

const buttons = document.querySelectorAll(".remove");

for (let bttn of buttons) {
    addDeleteToButton(bttn);
}

form.addEventListener("in-stock", event => {
  event.preventDefault();


  const button = document.createElement("button");


  button.innerText = "remove";
  addDeleteToButton(button);
  form.reset();
});