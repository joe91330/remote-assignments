const https = require('https');

const url = "https://ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com/delay-clock";

function requestCallback(url, callback) {
  const startTime = Date.now(); 
  // 使用 https 發送請求
  const req = https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      const endTime = Date.now(); 
      const duration = endTime - startTime; 
      callback(data, duration);
    });
  });

  req.on('error', (error) => {
    console.error(`Request failed: ${error.message}`);
  });

  req.end();
}

function requestPromise(url) {
  const startTime = Date.now();

  return new Promise((resolve, reject) => {
    // 使用 https 發送請求
    const req = https.get(url, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        const endTime = Date.now();
        const duration = endTime - startTime; 
        resolve({ data, duration });
      });
    });

    req.on('error', (error) => {
      reject(`Request failed: ${error.message}`);
    });

    req.end();
  });
}
async function requestAsyncAwait(url) {
  const startTime = Date.now(); 
  try {
    const data = await requestPromise(url);
    const endTime = Date.now(); 
    const duration = endTime - startTime; 
    console.log(`Async/Await: Duration: ${duration} milliseconds`);
  } catch (error) {
    console.error(error);
  }
}
requestCallback(url, (data, duration) => {
  console.log(`Callback: Duration: ${duration} milliseconds`);
});
const promiseResult =  requestPromise(url);

promiseResult
.then(({ data, duration }) => {
  console.log(`Promise: Duration: ${duration} milliseconds`);
})
.catch((error) => {
  console.error(error);
});

requestAsyncAwait(url);


