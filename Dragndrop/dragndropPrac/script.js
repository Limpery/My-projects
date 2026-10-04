const items = document.querySelectorAll(".item");
const placeholders = document.querySelectorAll(".placeholder");

for (const item of items) {
  item.addEventListener("dragstart", dragstart);
  item.addEventListener("dragend", dragend);
}

for (const placeholder of placeholders) {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", dragdrop);
}
function dragstart(event) {
  event.target.classList.add("dragstart");
  setTimeout(() => event.target.classList.add("hide"), 0);
}
function dragend(event) {
  event.target.className = "item";
}


function dragover(event) {
  event.preventDefault();
}
function dragenter(event) {
  event.target.classList.add("dragenter");
  event.target.classList.remove("dragleave");
}

function dragleave(event) {
  event.target.classList.add("dragleave");
  event.target.classList.remove("dragenter");
}

function dragdrop(event) {
  event.target.classList.remove("dragenter");
  event.target.append(document.querySelector('.dragstart'));
}
