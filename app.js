const form1 = document.querySelector(".step1");
const form2 = document.querySelector(".step2");
const form3 = document.querySelector(".step3");
const form4 = document.querySelector(".step4");
const form5 = document.querySelector(".step5");

const back2 = document.querySelector(".back2");

const next2 = document.querySelector(".next2");
const back3 = document.querySelector(".back3");

const next3 = document.querySelector(".next3");
const back4 = document.querySelector(".back4");
const change = document.querySelector(".change");

const next4 = document.querySelector(".next4");

const indicator1 = document.querySelector(".indicator1");
const indicator2 = document.querySelector(".indicator2");
const indicator3 = document.querySelector(".indicator3");
const indicator4 = document.querySelector(".indicator4");

const price1 = document.querySelector(".price1");
const price2 = document.querySelector(".price2");
const price3 = document.querySelector(".price3");

const plan = document.querySelectorAll(".plan");

const choice1 = document.querySelector(".choice1");
const choice2 = document.querySelector(".choice2");
const choice3 = document.querySelector(".choice3");

const fee = document.querySelector(".fee");
const totalFee = document.querySelector(".bill");

let int1 = 1;
let int2 = 2;

const form = document.querySelector(".info");
form.addEventListener("submit", function (submit) {
  submit.preventDefault();

  indicator1.classList.remove("on");
  indicator2.classList.add("on");

  form1.style.display = "none";
  form2.style.display = "unset";
});

back2.addEventListener("click", function () {
  indicator2.classList.remove("on");
  indicator1.classList.add("on");

  form1.style.display = "unset";
  form2.style.display = "none";
});

const arcade = document.querySelector("#arcade");
const advanced = document.querySelector("#advanced");
const pro = document.querySelector("#pro");
next2.addEventListener("click", function () {
  if (
    arcade.classList.contains("picked") ||
    advanced.classList.contains("picked") ||
    pro.classList.contains("picked")
  ) {
    indicator2.classList.remove("on");
    indicator3.classList.add("on");

    form2.style.display = "none";
    form3.style.display = "unset";

    const modified1 = fee.innerHTML.replace("$", "");
    const newFee1 = parseInt(modified1);
    totalFee.innerHTML = newFee1;
  } else {
    alert("pick a plan");
  }
  const final = document.querySelector(".final");
  choice1.checked = false;
  choice2.checked = false;
  choice3.checked = false;
  const option = document.querySelector(".option");
  const option2 = document.querySelector(".option2");
  const option3 = document.querySelector(".option3");
  option.style.backgroundColor = "unset";
  option2.style.backgroundColor = "unset";
  option3.style.backgroundColor = "unset";
  option.style.border = "1px solid hsl(231, 11%, 63%)";
  option2.style.border = "1px solid hsl(231, 11%, 63%)";
  option3.style.border = "1px solid hsl(231, 11%, 63%)";

  const addedPlan1 = document.querySelector(".added-plan");
  final.removeChild(addedPlan1);
  const addedPlan2 = document.querySelector(".added-plan");
  final.removeChild(addedPlan2);
  const addedPlan3 = document.querySelector(".added-plan");
  final.removeChild(addedPlan3);
});
back3.addEventListener("click", function () {
  indicator3.classList.remove("on");
  indicator2.classList.add("on");

  form2.style.display = "unset";
  form3.style.display = "none";
});

choice1.addEventListener("click", function () {
  const service1 = document.querySelector(".service1");
  const addOn1 = document.querySelector(".add-on1");
  const final = document.querySelector(".final");
  const option = document.querySelector(".option");
  if (choice1.checked === true) {
    option.style.backgroundColor = "hsl(217, 100%, 97%)";
    option.style.border = "1px solid hsl(243, 100%, 62%)";
    const addedPlan1 = document.createElement("div");
    addedPlan1.classList.add("added-line");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    p1.innerHTML = service1.innerHTML;
    p1.classList.add("p1");
    p2.innerHTML = addOn1.innerHTML;
    p2.classList.add("added1");
    addedPlan1.appendChild(p1);
    addedPlan1.appendChild(p2);
    addedPlan1.classList.add("added-plan");
    final.appendChild(addedPlan1);

    const sum = parseInt(totalFee.innerHTML) + int1;
    totalFee.innerHTML = sum;
  } else {
    option.style.backgroundColor = "unset";
    option.style.border = "1px solid hsl(231, 11%, 63%)";
    const addedPlan1 = document.querySelector(".added-plan");
    final.removeChild(addedPlan1);

    const sum = parseInt(totalFee.innerHTML) - int1;
    totalFee.innerHTML = sum;
  }
});

choice2.addEventListener("click", function () {
  const service2 = document.querySelector(".service2");
  const addOn2 = document.querySelector(".add-on2");
  const final = document.querySelector(".final");
  const option2 = document.querySelector(".option2");
  if (choice2.checked === true) {
    option2.style.backgroundColor = "hsl(217, 100%, 97%)";
    option2.style.border = "1px solid hsl(243, 100%, 62%)";
    const addedPlan2 = document.createElement("div");
    addedPlan2.classList.add("added-line");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    p1.innerHTML = service2.innerHTML;
    p1.classList.add("p1");
    p2.innerHTML = addOn2.innerHTML;
    p2.classList.add("added2");
    addedPlan2.appendChild(p1);
    addedPlan2.appendChild(p2);
    addedPlan2.classList.add("added-plan");
    final.appendChild(addedPlan2);

    const sum = parseInt(totalFee.innerHTML) + int2;
    totalFee.innerHTML = sum;
  } else {
    option2.style.backgroundColor = "unset";
    option2.style.border = "1px solid hsl(231, 11%, 63%)";
    const addedPlan2 = document.querySelector(".added-plan");
    final.removeChild(addedPlan2);

    const sum = parseInt(totalFee.innerHTML) - int2;
    totalFee.innerHTML = sum;
  }
});

choice3.addEventListener("click", function () {
  const service3 = document.querySelector(".service3");
  const addOn3 = document.querySelector(".add-on3");
  const final = document.querySelector(".final");
  const option3 = document.querySelector(".option3");
  if (choice3.checked === true) {
    option3.style.backgroundColor = "hsl(217, 100%, 97%)";
    option3.style.border = "1px solid hsl(243, 100%, 62%)";
    const addedPlan3 = document.createElement("div");
    addedPlan3.classList.add("added-line");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    p1.innerHTML = service3.innerHTML;
    p1.classList.add("p1");
    p2.innerHTML = addOn3.innerHTML;
    p2.classList.add("added3");
    addedPlan3.appendChild(p1);
    addedPlan3.appendChild(p2);
    addedPlan3.classList.add("added-plan");
    final.appendChild(addedPlan3);

    const sum = parseInt(totalFee.innerHTML) + int2;
    totalFee.innerHTML = sum;
  } else {
    option3.style.backgroundColor = "unset";
    option3.style.border = "1px solid hsl(231, 11%, 63%)";
    const addedPlan3 = document.querySelector(".added-plan");
    final.removeChild(addedPlan3);

    const sum = parseInt(totalFee.innerHTML) - int2;
    totalFee.innerHTML = sum;
  }
});

next3.addEventListener("click", function () {
  indicator3.classList.remove("on");
  indicator4.classList.add("on");

  form3.style.display = "none";
  form4.style.display = "unset";
});
back4.addEventListener("click", function () {
  indicator4.classList.remove("on");
  indicator3.classList.add("on");

  form3.style.display = "unset";
  form4.style.display = "none";
});

next4.addEventListener("click", function () {
  form4.style.display = "none";
  form5.style.display = "unset";
});

change.addEventListener("click", function () {
  indicator4.classList.remove("on");
  indicator2.classList.add("on");

  form4.style.display = "none";
  form2.style.display = "unset";
});

const radio = document.querySelector(".radio");
radio.addEventListener("click", function () {
  const yr = document.querySelector("#yr");
  const mth = document.querySelector("#mth");
  const arcade = document.querySelector("#arcade");
  const advanced = document.querySelector("#advanced");
  const pro = document.querySelector("#pro");
  const extra1 = document.querySelector(".extra1");
  const extra2 = document.querySelector(".extra2");
  const extra3 = document.querySelector(".extra3");
  if (radio.checked === true) {
    price1.innerHTML = "$90/yr";
    price2.innerHTML = "$120/yr";
    price3.innerHTML = "$150/yr";

    const addOn1 = document.querySelector(".add-on1");
    addOn1.innerHTML = "+$10/yr";

    const addOn2 = document.querySelector(".add-on2");
    addOn2.innerHTML = "+$20/yr";

    const addOn3 = document.querySelector(".add-on3");
    addOn3.innerHTML = "+$20/yr";

    yr.classList.add("highlight");
    mth.classList.remove("highlight");

    const interval = document.querySelector(".interval");
    interval.innerHTML = "(Yearly)";

    arcade.classList.remove("picked");
    advanced.classList.remove("picked");
    pro.classList.remove("picked");

    extra1.style.display = "unset";
    extra2.style.display = "unset";
    extra3.style.display = "unset";

    const bracket = document.querySelector(".bracket");
    bracket.innerHTML = "(Yearly)";

    const per = document.querySelector(".per");
    per.innerHTML = "/yr";

    int1 = 10;
    int2 = 20;
  } else {
    price1.innerHTML = "$9/mo";
    price2.innerHTML = "$12/mo";
    price3.innerHTML = "$15/mo";

    const addOn1 = document.querySelector(".add-on1");
    addOn1.innerHTML = "+$1/mo";

    const addOn2 = document.querySelector(".add-on2");
    addOn2.innerHTML = "+$2/mo";

    const addOn3 = document.querySelector(".add-on3");
    addOn3.innerHTML = "+$2/mo";

    yr.classList.remove("highlight");
    mth.classList.add("highlight");

    const interval = document.querySelector(".interval");
    interval.innerText = "(Monthly)";

    arcade.classList.remove("picked");
    advanced.classList.remove("picked");
    pro.classList.remove("picked");

    extra1.style.display = "none";
    extra2.style.display = "none";
    extra3.style.display = "none";

    const bracket = document.querySelector(".bracket");
    bracket.innerHTML = "(Monthly)";

    const per = document.querySelector(".per");
    per.innerHTML = "/mo";

    int1 = 1;
    int2 = 2;
  }
});

arcade.addEventListener("click", function () {
  const selected = document.querySelector(".selected");
  selected.innerText = "Arcade ";
  fee.innerHTML = price1.innerText;
});

advanced.addEventListener("click", function () {
  const selected = document.querySelector(".selected");
  selected.innerText = "Advanced ";
  fee.innerHTML = price2.innerText;
});

pro.addEventListener("click", function () {
  const selected = document.querySelector(".selected");
  selected.innerText = "Pro ";
  fee.innerHTML = price3.innerText;
});

plan.forEach((active) => {
  active.addEventListener("click", () => {
    document.querySelector(".picked")?.classList.remove("picked");
    active.classList.add("picked");
  });
});
