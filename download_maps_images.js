import fs from 'fs';

const urls = [
  "https://lh3.googleusercontent.com/p/AF1QipMPZP3zNMdHGJuFUMN93gy0Gq93lNwX00Io04lZ=s1600",
  "https://lh3.googleusercontent.com/p/AF1QipP8iuAvS-UYWevHhLg_rIhcoVkhBCWT-JvAbDS4=s1600",
  "https://lh3.googleusercontent.com/p/AF1QipPON_GySH0eWwGpeHGLz5ueG_LrV5EZ_dOO8Vat=s1600",
  "https://lh3.googleusercontent.com/p/AF1QipOWrsCGuuekiP3dFVjgJcaCFgqKdD8FtJdf9iIQ=s1600",
  "https://lh3.googleusercontent.com/p/AF1QipPrqHGqTSv57IqOTGQXZq6t940BMBqQjBb6tF33=s1600",
  "https://lh3.googleusercontent.com/p/AF1QipP0bRrCWBmexCbeRyGPhzsjgCWwDEubq5dKL49f=s1600"
];

const filenames = [
  "src/assets/realistic-education.jpg",
  "src/assets/realistic-digital.jpg",
  "src/assets/realistic-community.jpg",
  "src/assets/realistic-food.jpg",
  "src/assets/realistic-women.jpg",
  "src/assets/realistic-volunteer.jpg"
];

async function run() {
  for (let i = 0; i < urls.length; i++) {
    try {
      console.log(`Downloading ${filenames[i]}...`);
      const res = await fetch(urls[i]);
      const buffer = await res.arrayBuffer();
      fs.writeFileSync(filenames[i], Buffer.from(buffer));
      console.log(`Saved ${filenames[i]}`);
    } catch (e) {
      console.error(e);
    }
  }
}
run();
