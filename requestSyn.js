// requestSync.js
const https = require('https');

const url = "https://ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com/delay-clock";
function requestSync(url) {
    // write code to request url synchronously
    const startTime = performance.now();
    // 使用 https 發送請求
    const req = https.get(url, (res) => {
      let data = '';
  
      res.on('data', (chunk) => {
        data += chunk;
      });
  
      res.on('end', () => {
        const endTime = performance.now();
        const duration = endTime - startTime; 
        console.log(`Request took ${duration} milliseconds`);
      });
    });
  
    
    req.on('error', (error) => {
      console.error(`Request failed: ${error.message}`);
    });
  
    req.end();
  
}
requestSync(url) // would print out the execution time
requestSync(url)
requestSync(url)