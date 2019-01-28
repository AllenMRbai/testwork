var ps = [];

onconnect = function (evt) {
  var port = evt.ports[0];
  port.onmessage = function (evt) {
    //广播给所有的port
    for (var p of ps) {
      p.postMessage(evt.data);
    }
  }
  ps.push(port);
}