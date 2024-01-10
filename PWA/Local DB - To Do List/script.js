/////////////////////////////////////////
/* Pushing notifications of done tasks */
/////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////
/* DOM Manipulation & UI */
///////////////////////////

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
    ${task.title}  -->  Date : ${task.day}/${task.month}/${task.year} Time:${task.hour}:${task.min}:${task.sec}
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
  clearFields();
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

function clearFields() {
  // console.log("clearFields called");
  document.getElementById("title").value = "";
  document.getElementById("sec").value = "";
  document.getElementById("min").value = "";
  document.getElementById("hour").value = "";
  document.getElementById("day").selectedIndex = 0;
  document.getElementById("month").selectedIndex = 0;
  document.getElementById("year").selectedIndex = 0;
}

//////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////
/* Notification Object & Helper Function ( timer ) */
/////////////////////////////////////////////////////

function notification(task) {
  if (Notification.permission == "granted") {
    let date = new Date(
      task.year,
      task.month,
      task.day,
      task.hour,
      task.min,
      task.sec
    );
    const oldDate = new Date(task.date);
    const myAlarm = oldDate - new Date();

    // console.log(oldDate - new Date());

    setTimeout(() => {
      navigator.serviceWorker.getRegistration().then((reg) => {
        reg.showNotification(task.title, { body: task.title });
        let ChangedElement = document.getElementById(task.title);
        ChangedElement.style.color = "red";
        ChangedElement.style.textDecoration = "line-through";
        ChangedElement.style.fontWeight = "0.5rem";
      });
      idbApp.updateTask(task);
    }, myAlarm);
  }
}

document.getElementById("add").addEventListener("click", () => {
  idbApp.addTask();
});

//////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////
/* Service Worker Registration & Notify Permission */
/////////////////////////////////////////////////////

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

  // Register service worker to handle notifications library
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

//////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////
/* Creating IndexedDB Object ( Table & Primary Key) */
//////////////////////////////////////////////////////

// idbApp ----> your interface ( UI functions ) for IDB
var idbApp = (function () {
  "use strict";

  // TODO 2 - check for support
  if (!("indexedDB" in window)) {
    console.log("This browser does not support indexedDB");
    return;
  }

  // TODO 1 - Creating the database
  // todo ----> is the database name I have chosen
  // 2 ----> is the version of the database
  // upgradeDB ----> is a callback function that will be called if the version of the database changes (if you increment the version number)\
  // dbPromise ----> is a promise that will be resolved when the database is opened
  var dbPromise = idb.open("todo", 2, function (upgradeDB) {
    switch (upgradeDB.oldVersion) {
      case 0:
      case 1:
        // console.log("Creating the tasks table");

        // create the tasks table with primary key 'title'
        upgradeDB.createObjectStore("tasks", { keyPath: "title" });
        break;
    }
  });

  //////////////////////////////////////////////////////
  /* CRUD Operations ( Create, Read, Update, Delete ) */
  //////////////////////////////////////////////////////

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
        // months in JS start from 0
        taskMonth - 1,
        taskDay,
        taskHour,
        taskMin,
        taskSec
      ),
    };

    tasks.push(task);
    changeDom(task);
    notification(task);

    dbPromise.then(function (db) {
      // transaction ----> is the (permission) to add or delete or update data in the database [readwrite, readonly, versionchange, null]
      // tasks ----> is the name of the table I will manipulate, not the whole database

      // tx ----> is the transaction object that allows me to manipulate the data in the database
      var tx = db.transaction("tasks", "readwrite");

      // store ----> is the reference to the table I will manipulate
      var store = tx.objectStore("tasks");

      // add ----> is the method related to the store object that allows me to add data to the table
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

      // delete ----> is the method related to the store object that allows me to delete data from the table
      store.delete(taskTitle);
      return tx.complete;
    });
  }

  function updateTask(task) {
    getByName(task.title).then(function (task) {
      // toggle done task when time is up
      task.done = !task.done;

      dbPromise.then(function (db) {
        var tx = db.transaction("tasks", "readwrite");
        var store = tx.objectStore("tasks");

        // put ----> is the method related to the store object that allows me to update data in the table
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

      // get ----> is the method related to the store object that allows me to get data from the table
      return store.get(title);
    });
  }

  // The functions we are exposing to the world
  return {
    addTask: addTask,
    getTasks: getTasks,
    deleteTask: deleteTask,
    updateTask: updateTask,
    getByName: getByName,
  };
})();

getTasks();
