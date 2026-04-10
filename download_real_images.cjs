const fs = require('fs');
const https = require('https');

const queries = [
  { term: 'Indian school students', filename: 'authentic-hero.png' },
  { term: 'Indian rural school classroom', filename: 'authentic-education.png' },
  { term: 'youth using computer India', filename: 'authentic-digital.png' },
  { term: 'youth tree planting India', filename: 'authentic-community.png' }
];

async function run() {
  for (const q of queries) {
    const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(q.term)}&gsrnamespace=6&prop=imageinfo&iiprop=url&format=json&gsrlimit=10`;
    
    try {
      const res = await fetch(searchUrl);
      const data = await res.json();
      
      const pages = data.query?.pages;
      if (!pages) {
        console.log(`No images found for ${q.term}`);
        continue;
      }
      
      // Try to find a JPG/PNG that isn't too weird
      const imageFiles = Object.values(pages).filter(p => {
          const url = p.imageinfo[0].url.toLowerCase();
          return url.endsWith('.jpg') || url.endsWith('.png') || url.endsWith('.jpeg');
      });
      
      if (imageFiles.length === 0) {
          console.log(`No valid jpg/png found for ${q.term}`);
          continue;
      }
      
      // Pick the first result
      const url = imageFiles[0].imageinfo[0].url;
      console.log(`Downloading ${url} for ${q.filename}`);
      
      await new Promise((resolve, reject) => {
        https.get(url, (response) => {
          if (response.statusCode === 301 || response.statusCode === 302) {
              https.get(response.headers.location, (res2) => {
                  const file = fs.createWriteStream(`src/assets/${q.filename}`);
                  res2.pipe(file);
                  file.on('finish', () => { file.close(); resolve(); });
              });
              return;
          }
          const file = fs.createWriteStream(`src/assets/${q.filename}`);
          response.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve();
          });
        }).on('error', reject);
      });
    } catch(e) {
      console.error(`Error processing ${q.term}:`, e.message);
    }
  }
}
run();
