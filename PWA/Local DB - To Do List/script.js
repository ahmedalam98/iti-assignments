async function getTasks() {
  tasks = await idbApp.getTasks();
  tasks.forEach((todo) => {
    if (todo.done === false) {
      notification(todo);
    }
    changeDom(todo);
  });
}

let tasks = [];

let changeDom = (task) => {
  let taskList = document.getElementById("tasks");
  let taskItem = document.createElement("li");
  taskItem.id = task.title;
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.style.backgroundColor = "rgb(227, 69, 69)";
  deleteButton.style.color = "white";
  deleteButton.style.padding = "0.2rem";
  deleteButton.style.borderRadius = "0.5rem";
  deleteButton.style.marginLeft = "1rem";
  deleteButton.style.marginBottom = "0.8rem";
  deleteButton.addEventListener("click", () => {
    idbApp.deleteTask(task.title);
    taskList.removeChild(taskItem);
    updateAppBodyBorderRadius();
  });

  taskItem.innerHTML = `
    <span class="App__taskItem" style="color: black; ">
    ${task.title}  -->  Date : ${task.day}/${task.month}/${task.year} Time:${task.hour}:${task.min}
    </span>
    `;
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  if (task.done) {
    taskItem.style.color = "red";
    taskItem.style.textDecoration = "line-through";
    taskItem.style.fontWeight = "0.5rem";
  }

  updateAppBodyBorderRadius();
};

function updateAppBodyBorderRadius() {
  let taskList = document.getElementById("tasks");
  let todoBody = document.querySelector(".App__body");

  if (taskList.childElementCount === 0) {
    todoBody.style.borderBottomLeftRadius = "15px";
    todoBody.style.borderBottomRightRadius = "15px";
  } else {
    todoBody.style.borderBottomLeftRadius = "0";
    todoBody.style.borderBottomRightRadius = "0";
  }
}

function notification(task) {
  if (Notification.permission == "granted") {
    let date = new Date(task.year, task.month, task.day, task.hour, task.min);
    const oldDate = new Date(task.date);

    // console.log(oldDate- new Date());

    setTimeout(() => {
      navigator.serviceWorker.getRegistration().then((reg) => {
        reg.showNotification(task.title, { body: task.title });
        let ChangedElement = document.getElementById(task.title);
        ChangedElement.style.color = "red";
        ChangedElement.style.textDecoration = "line-through";
        ChangedElement.style.fontWeight = "0.5rem";
      });
      idbApp.updateTask(task);
    }, oldDate - new Date());
  }
}

document.getElementById("add").addEventListener("click", () => {
  idbApp.addTask();
});

const app = (() => {
  "use strict";

  let swRegistration = null;

  // TODO 2.1 - check for notification support
  if (!("Notification" in window)) {
    console.log("This browser does not support notification");
    return;
  }
  // TODO 2.2 - request permission to show notifications
  document.getElementById("notify").addEventListener("click", () => {
    Notification.requestPermission((status) => {
      console.log("Notification permission status:", status);
    });
  });

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("sw.js")
        .then((swReg) => {
          console.log("Service Worker is registered", swReg);

          swRegistration = swReg;
        })
        .catch((err) => {
          console.error("Service Worker Error", err);
        });
    });
  } else {
    console.warn("Push messaging is not supported");
  }
})();

///////////////////////////////////////////////////////////////////////////

var idbApp = (function () {
  "use strict";

  // TODO 2 - check for support
  if (!("indexedDB" in window)) {
    console.log("This browser does not support indexedDB");
    return;
  }

  var dbPromise = idb.open("todo", 2, function (upgradeDB) {
    switch (upgradeDB.oldVersion) {
      case 0:
      case 1:
        upgradeDB.createObjectStore("tasks", { keyPath: "title" });
        break;
    }
  });

  function addTask() {
    // TODO 3.3 - add objects to the products store
    let taskTitle = document.getElementById("title").value;
    let taskSec = document.getElementById("sec").value;
    let taskMin = document.getElementById("min").value;
    let taskHour = document.getElementById("hour").value;
    let taskDay = document.getElementById("day").value;
    let taskMonth = document.getElementById("month").value;
    let taskYear = document.getElementById("year").value;

    let task = {
      title: taskTitle,
      sec: taskSec,
      min: taskMin,
      hour: taskHour,
      day: taskDay,
      month: taskMonth,
      year: taskYear,
      done: false,
      date: new Date(
        taskYear,
        taskMonth - 1,
        taskDay,
        taskHour,
        taskMin,
        taskSec
      ),
    };

    tasks.push(task);

    //i//dbApp.addTask(task);
    changeDom(task);
    notification(task);
    dbPromise.then(function (db) {
      var tx = db.transaction("tasks", "readwrite");
      var store = tx.objectStore("tasks");

      return store.add(task);
    });
  }

  function getTasks() {
    // TODO 5.4 - get all objects from 'orders' object store
    return dbPromise.then(function (db) {
      var tx = db.transaction("tasks", "readonly");
      var store = tx.objectStore("tasks");
      return store.getAll();
    });
  }

  function deleteTask(taskTitle) {
    tasks = tasks.filter((task) => task.title !== taskTitle);
    dbPromise.then(function (db) {
      var tx = db.transaction("tasks", "readwrite");
      var store = tx.objectStore("tasks");
      store.delete(taskTitle);
      return tx.complete;
    });
  }

  function updateTask(task) {
    getByName(task.title).then(function (task) {
      task.done = !task.done;
      dbPromise.then(function (db) {
        var tx = db.transaction("tasks", "readwrite");
        var store = tx.objectStore("tasks");
        store.put(task);
        return tx.complete;
      });
    });
  }

  function getByName(title) {
    // TODO 4.3 - use the get method to get an object by name
    return dbPromise.then(function (db) {
      var tx = db.transaction("tasks", "readonly");
      var store = tx.objectStore("tasks");
      return store.get(title);
    });
  }

  return {
    addTask: addTask,
    getTasks: getTasks,
    deleteTask: deleteTask,
    updateTask: updateTask,
    getByName: getByName,
  };
})();

getTasks();
