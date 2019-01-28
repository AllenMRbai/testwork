var w1 = new Worker("http://127.0.0.1:3000/work.js");

w1.addEventListener("message", function (evt) {
  document.querySelector('#txt').innerHTML = evt.data.name;
})

var count = 1;
document.querySelector('#btn')
  .addEventListener('click', function (evt) {
    w1.postMessage("count num:" + count++);
  });
