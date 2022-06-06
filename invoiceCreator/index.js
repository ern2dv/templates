const btnWash = document.getElementById("wash");
const btnMow = document.getElementById("mow");
const btnPull = document.getElementById("pull");
const fullPrice = document.getElementById("fullPrice");
const btnInvoice = document.getElementById("invoice");

const tasksArr = [
  {
    task: "Wash Car",
    price: 10,
  },
  {
    task: "Mow Lawn",
    price: 20,
  },
  {
    task: "Pull Weeds",
    price: 30,
  },
];
let task = document.getElementById("tasks");
let price = document.getElementById("price");
let servicesArr = [];
let sum = 0;

btnWash.addEventListener("click", () => {
  if (!servicesArr.includes(tasksArr[0].task)) {
    servicesArr.push(tasksArr[0].task);
    task.innerHTML += `<div class="flex-box">
    <p>${tasksArr[0].task}<span id="dltWash" class="delete">x</span></p>
    <p>${tasksArr[0].price}</p>
    </div>`;
    sum += tasksArr[0].price;
    fullPrice.textContent = sum;
    btnWash.disabled = true;
  }
});
btnMow.addEventListener("click", () => {
  if (!servicesArr.includes(tasksArr[1].task)) {
    servicesArr.push(tasksArr[1].task);
    task.innerHTML += `<div class="flex-box">
    <p>${tasksArr[1].task}<span id="dltMow" class="delete">x</span></p>
    <p>${tasksArr[1].price}</p>
    </div>`;

    sum += tasksArr[1].price;
    fullPrice.textContent = sum;
    btnMow.disabled = true;
  }
});
btnPull.addEventListener("click", () => {
  if (!servicesArr.includes(tasksArr[2].task)) {
    servicesArr.push(tasksArr[2].task);
    task.innerHTML += `<div class="flex-box">
    <p>${tasksArr[2].task}<span id="dltPull" class="delete">x</span></p>
    <p>${tasksArr[2].price}</p>
    </div>`;
    sum += tasksArr[2].price;
    fullPrice.textContent = sum;
    btnPull.disabled = true;
  }
});

document.addEventListener("click", (e) => {
  if (e.target && e.target.id == "dltWash") {
    e.target.parentNode.parentNode.remove();
    let washIndex = servicesArr.indexOf("Wash Car");
    if (washIndex !== -1) {
      servicesArr.splice(washIndex, 1);
    }
    sum -= tasksArr[0].price;
    fullPrice.textContent = sum;
    btnWash.disabled = false;
  } else if (e.target && e.target.id == "dltMow") {
    e.target.parentNode.parentNode.remove();
    let mowIndex = servicesArr.indexOf("Mow Lawn");
    if (mowIndex !== -1) {
      servicesArr.splice(mowIndex, 1);
    }
    sum -= tasksArr[1].price;
    fullPrice.textContent = sum;
    btnMow.disabled = false;
  } else if (e.target && e.target.id == "dltPull") {
    e.target.parentNode.parentNode.remove();
    let pullIndex = servicesArr.indexOf("Pull Weeds");
    if (pullIndex !== -1) {
      servicesArr.splice(pullIndex, 1);
    }
    sum -= tasksArr[2].price;
    fullPrice.textContent = sum;
    btnPull.disabled = false;
  }
});
