import fs from 'fs';

const queries = [
  { term: 'Indian children school uniform', filename: 'realistic-hero.jpg' },
  { term: 'computer literacy India', filename: 'realistic-digital.jpg' },
  { term: 'tree planting volunteers India', filename: 'realistic-community.jpg' }
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
      
      const imageFiles = Object.values(pages).filter(p => {
          const url = p.imageinfo[0].url.toLowerCase();
          return url.endsWith('.jpg') || url.endsWith('.png') || url.endsWith('.jpeg');
      });
      
      if (imageFiles.length === 0) {
          console.log(`No valid jpg/png found for ${q.term}`);
          continue;
      }
      
      const url = imageFiles[0].imageinfo[0].url;
      console.log(`Downloading ${url} for ${q.filename}`);
      
      const imgRes = await fetch(url);
      const buffer = await imgRes.arrayBuffer();
      fs.writeFileSync(`src/assets/${q.filename}`, Buffer.from(buffer));
      console.log(`Saved ${q.filename} (${buffer.byteLength} bytes)`);
    } catch(e) {
      console.error(`Error processing ${q.term}:`, e.message);
    }
  }
}
run();
