// requestSync.js
// const XMLHttpRequest = require('xhr2');
const url =
  "https://ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com/delay-clock";
function requestSync(url) {
  // write code to request url synchronously

  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  var startTime = new Date().getTime(); // 記錄開始時間
  var request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      var endTime = new Date().getTime(); // 記錄結束時間
      var duration = endTime - startTime; // 計算持續時間
      console.log(`Request took ${duration} milliseconds`);
    }
  };
  request.send();
}
requestSync(url); // would print out the execution time
requestSync(url);
requestSync(url);
