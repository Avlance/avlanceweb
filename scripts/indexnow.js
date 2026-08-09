const https = require('https');

const HOST = 'avlance.studio';
const KEY = '8f8b8095bc3c4ef9b4f9a039750fb97a';
const URLS = [
  'https://avlance.studio/',
  'https://avlance.studio/services',
  'https://avlance.studio/about',
  'https://avlance.studio/contact',
  'https://avlance.studio/privacy-policy',
  'https://avlance.studio/terms-of-service'
];

const data = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList: URLS
});

const options = {
  hostname: 'api.indexnow.org',
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(data)
  }
};

const req = https.request(options, (res) => {
  console.log(`IndexNow Submission Status: ${res.statusCode} ${res.statusMessage}`);
  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error('Error submitting to IndexNow:', error);
});

req.write(data);
req.end();
