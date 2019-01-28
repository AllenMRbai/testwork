var w1 = new SharedWorker("shareWorker.js");
var count = 0;

w1.port.onmessage = function (evt) {
  console.log(evt.data);
  console.log(typeof evt.data);
  count = evt.data
  document.querySelector('#txt').innerHTML = "all count:" + evt.data;
}

document.querySelector('#btn').addEventListener('click', function (evt) {
  w1.port.postMessage(++count);
});
