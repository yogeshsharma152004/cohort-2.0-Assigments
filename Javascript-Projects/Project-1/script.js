function openFeatures() {
  let allElems = document.querySelectorAll(".elem");

  let FullElemPage = document.querySelectorAll(".fullElem");

  let FullElemPageBackBtn = document.querySelectorAll(".fullElem .back");

  allElems.forEach(function (elem) {
    elem.addEventListener("click", function () {
      FullElemPage[elem.id].style.display = "block";
    });
  });

  FullElemPageBackBtn.forEach(function (back) {
    back.addEventListener("click", function () {
      FullElemPage[back.id].style.display = "none";
    });
  });
}

openFeatures();

function todoList() {
  let form = document.querySelector(".addTask form");
  let taskInput = document.querySelector(".addTask form #task-input");
  let taskDetailInput = document.querySelector(".addTask form textarea");
  let taskCheckbox = document.querySelector(".addTask form #check");

  var currentTask = [];

  if (localStorage.getItem("currentTask")) {
    currentTask = JSON.parse(localStorage.getItem("currentTask"));
  } else {
    console.log("Task is Empty");
  }

  function renderTask() {
    let allTask = document.querySelector(".allTask");

    let sum = "";

    currentTask.forEach(function (elem, index) {
      sum =
        sum +
        `<div class="task">
                  <h5>${elem.task} <span class=${elem.imp}>IMP</span></h5>
                  <button id=${index}>Mark as completed</button>
                </div>`;
    });
    allTask.innerHTML = sum;

    localStorage.setItem("currentTask", JSON.stringify(currentTask));

    let markCompletedBtn = document.querySelectorAll(".task button");

    markCompletedBtn.forEach(function (btn) {
      btn.addEventListener("click", function () {
        currentTask.splice(btn.id, 1);
        renderTask();
      });
    });
  }
  renderTask();

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    currentTask.push({
      task: taskInput.value,
      detailes: taskDetailInput.value,
      imp: taskCheckbox.checked,
    });
    renderTask();

    taskCheckbox.checked = false;
    taskInput.value = "";
    taskDetailInput.value = "";
  });
}

todoList();

function dailyPlanner() {
  let dayPlanData = JSON.parse(localStorage.getItem("dayPlanData")) || {};

  let dayPlanner = document.querySelector(".day-planner");

  let hours = Array.from({ length: 18 }, function (elem, index) {
    return `${6 + index}:00 - ${7 + index}:00`;
  });

  let wholeDaySum = "";

  hours.forEach(function (elem, index) {
    let savedData = dayPlanData[index] || "";
    wholeDaySum =
      wholeDaySum +
      `<div class="day-planner-time">
                <p>${elem}</p>
                <input id=${index} type="text" placeholder="..." value="${savedData}">
              </div>

              `;
  });

  dayPlanner.innerHTML = wholeDaySum;

  let dayPlannerInput = document.querySelectorAll(".day-planner input");

  dayPlannerInput.forEach(function (elem) {
    elem.addEventListener("input", function () {
      dayPlanData[elem.id] = elem.value;

      localStorage.setItem("dayPlanData", JSON.stringify(dayPlanData));
    });
  });
}

dailyPlanner();

function motivationQuote() {
  let motivationQuote = document.querySelector(".motivation-2 h1");

  let motivationAuthor = document.querySelector(".motivation-3 h2");

  async function fetchQuote() {
    let response = await fetch("https://quotes-api-self.vercel.app/quote");

    let data = await response.json();

    motivationQuote.innerHTML = data.quote;

    motivationAuthor.innerHTML = `Author :- ${data.author}`;
  }

  fetchQuote();
}

motivationQuote();

function pomorodoTimer(){
  let startBtn = document.querySelector(".pomo-timer .start-timer");

let pauseBtn = document.querySelector(".pomo-timer .pause-timer");

let resetBtn = document.querySelector(".pomo-timer .reset-timer");

let session = document.querySelector(".pomodoro-fullpage .session")

let isWorkSession = true;

let timerInterval = null;

let totalSeconds = 25 * 60;

let timer = document.querySelector(".pomo-timer h1");

function updateTimer() {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  timer.innerHTML = `${String(minutes).padStart("2", "0")} : ${String(
    seconds
  ).padStart("2", "0")}`;
}

function startTimer() {
  clearInterval(timerInterval);



  if (isWorkSession) {
    

    
    timerInterval = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
         updateTimer();
      } else {
        isWorkSession = false;
        clearInterval(timerInterval);
        timer.innerHTML = "05:00";
        session.innerHTML = "Take a Break"
    session.style.backgroundColor = 'var(--blue)';
     totalSeconds = 5 * 60;
      }
       
    }, 1000);
  } else {


    
   
    timerInterval = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        updateTimer();
      } else {
        isWorkSession = true;
        clearInterval(timerInterval);
          timer.innerHTML = "25:00";
          session.innerHTML = "Work Session";
    session.style.backgroundColor = 'var(--green)';
    totalSeconds = 25 * 60;
      }
      
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  totalSeconds = 25 * 60;
  updateTimer();
}

startBtn.addEventListener("click", function () {
  startTimer();
});

pauseBtn.addEventListener("click", function () {
  pauseTimer();
});
resetBtn.addEventListener("click", function () {
  resetTimer();
});


}

pomorodoTimer();