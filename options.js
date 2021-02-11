let page = document.getElementById("buttonDiv");
const kButtonColors = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"];
function constructOptions(kButtonColors) {
  for (let item of kButtonColors) {
    let button = document.createElement("button");
    button.style.backgroundColor = item;
    button.addEventListener("click", function () {
      chrome.storage.sync.set({ color: item }, function () {
        console.log("color is " + item);
      });
    });
    page.appendChild(button);
  }
}
constructOptions(kButtonColors);

// let list = [1, 2, 3];
// function getList() {
//   // let list = [];
//   chrome.storage.sync.get("list", function (data) {
//     list = data.list;
//     // return data.list;
//     // console.log(list);
//   });
//   // return list;
// }
// getList();

// async function renderList() {
//   await getList();
//   list.forEach((i) => {
//     console.log(i);
//   });
// }

// renderList();

// function appendURL(item) {
//   let p = document.createElement("p");
//   p.innerHTML = item;
//   page.appendChild(p);
// }

// for (let item of [
//   "https://www.reddit.com/",
//   "https://www.facebook.com/",
//   "https://9gag.com/",
// ]) {
//   console.log(item);
// let p = document.createElement("p");
// p.innerHTML = item;
// page.appendChild(p);
// }

async function setStorageData(data) {
  new Promise((resolve, reject) =>
    chrome.storage.sync.set(data, () =>
      chrome.runtime.lastError
        ? reject(Error(chrome.runtime.lastError.message))
        : resolve()
    )
  );
}

async function getStorageData(key) {
  new Promise((resolve, reject) =>
    chrome.storage.sync.get(key, (result) =>
      chrome.runtime.lastError
        ? reject(Error(chrome.runtime.lastError.message))
        : resolve(result)
    )
  );
}

await setStorageData({ data: [someData] });
const { data } = await getStorageData("data");
// console.log(data);
