addEventListener("message", function (evt) {
  postMessage(evt.data);
})

importScripts("/hello.js");