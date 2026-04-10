import fs from 'fs';
import path from 'path';

const urls = [
  "https://lh3.googleusercontent.com/p/AF1QipP8iuAvS-UYWevHhLg_rIhcoVkhBCWT-JvAbDS4=s3072-v1",
  "https://lh3.googleusercontent.com/p/AF1QipMPZP3zNMdHGJuFUMN93gy0Gq93lNwX00Io04lZ=s1600",
  "https://lh3.googleusercontent.com/p/AF1QipOWrsCGuuekiP3dFVjgJcaCFgqKdD8FtJdf9iIQ=s1600",
  "https://lh3.googleusercontent.com/p/AF1QipPrqHGqTSv57IqOTGQXZq6t940BMBqQjBb6tF33=s1600",
  "https://lh3.googleusercontent.com/p/AF1QipP0bRrCWBmexCbeRyGPhzsjgCWwDEubq5dKL49f=s1600",
  "https://lh3.googleusercontent.com/p/AF1QipO926T0_dAHwArlQLNdzAB1RbrMVVdPbg2M0Kvc=s1600",
  "https://lh3.googleusercontent.com/p/AF1QipOZQrVjLWO_9jmmuCof6gtUcYNR8wHqkYZMzWQD=s1600",
  "https://lh3.googleusercontent.com/p/AF1QipPRMXY19Suu9fahlrpOCSUORfjHmV2r5wzDJDf3=s1600",
  "https://lh3.googleusercontent.com/p/AF1QipMad9bpj3zsmk8mBENXhoaL3mqxsDAKzrORk9TQ=s1600",
  "https://lh3.googleusercontent.com/p/AF1QipN7uvcmmxua76-XmoLNlULhhHNMjm6W2yC8uJUS=s1600",
  "https://lh3.googleusercontent.com/geougc-cs/ABOP9pt9DrgSB3OqpEL47OggE1ExE37v9nCv0tKzKVCw9_2UgqGrAUb2N-wPetaQdLm8fhJg5Adw8Toxg_nsyTpMx8CgdinA21WVqJWVHIWKNwkiRunfkP-IDs2Ry7TaOU2pDXwIax-61ZQVMP0=w750-h563-p",
  "https://lh3.googleusercontent.com/geougc-cs/ABOP9psynX8OIrczq_wwZ4MiMjFvLvOcNVnMk5lMhNjSo9w7LG0s7Hhp96YKqS28ePUuUiOM6Wvp1pkgNI4lTCu21JmkpGUYrsNcD7eZzs04277SDP-iB2J1BJa3CiNRQrzwTrTiNcLk=w375-h563-p",
  "https://lh3.googleusercontent.com/geougc-cs/ABOP9psR8ylITUEVGLebmgX5w68VqnQGMHs_0dK9C84VGW0HjblqE8W_vn6FT0Apl42MG1szXHbgUBt6VUAg8_GUDE-alc035jKU3SMG-aMTa1-N3h8BpXyRuakDHdg0HBig1BCM1ph7=w375-h281-p",
  "https://lh3.googleusercontent.com/geougc-cs/ABOP9pt_aHWtaK9pxHRFwtYuVqWQhU32vG4_FLhqdK8HKZ59QEgBVxPleinkMYitNCxUc7jQoG1M500tNKmh1d56mf9puh7Wyjl7qjzLT0NeMjrAAKf2odVYeP55RPQlRIatPCcCBOTIKQ=w375-h281-p",
  "https://lh3.googleusercontent.com/geougc-cs/ABOP9puo2loUsg9I7FdXFlfoqKuitUG307R6GalI5Cs7yJi65iczdeH-kljACodtaf1wfE73TfvgB00Sj8aHXfmf3MMqdkbEEzN-vYGOEzXUvgmIQjICNzkVe2XafqTSd3f4aeGtUncwcXjrGKx0=w750-h563-p",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwept0a-WMmUypiU_41b6QTGCF8J8N9gu5fek_DA9p753sCDe-7gfq4_9LuU0HWvWekqinNF8u0iyIcjAyV8Ivws1v3VOYsNK9cnm0yNKjrw07nFOGgQ56NpSWza_QximxlUI_tRw=w408-h544-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAweofa5SE7BEHt7QHezEIsNEdMFYRtMZK1q57Xg9qJvxibKwIMs3C3dCNNU92u8rS9IUjeHg0MU2NYkIb-gOR2HXb7IsOUl-s1AhJuFsCsQnFVSbo7yNOgBmjJlr58p238FXwUl0Hy_mevuB-=w491-h298-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerylEuejbia35Z4rWKykuSZSCZfuf1dZ3FhIfpsPaMfXAEtzaCKW_aKn_KHqDpWeaKi4ejnl3bJEInltMgw8oG2ogXnkFPk06WTlJxKmcgm8HYTzpgUUm25jJldAux0kPHOpmBehA=w195-h143-p-k-no"
];

const dir = 'public/uploads/maps';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

async function run() {
  for (let i = 0; i < urls.length; i++) {
    const filename = path.join(dir, `map-gallery-${i+1}.jpg`);
    try {
      const res = await fetch(urls[i]);
      const buffer = await res.arrayBuffer();
      fs.writeFileSync(filename, Buffer.from(buffer));
      console.log(`Downloaded ${filename}`);
    } catch(e) {
      console.error(e);
    }
  }
}
run();
