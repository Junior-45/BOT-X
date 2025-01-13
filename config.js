 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
//═══════[Required Variables]════════\\
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ms.excelamadi@yahoo.com";
global.location = "Rivers,Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Xcelsama:Xcel@xcelsama.qpklf.mongodb.net/?retryWrites=true&w=majority&appName=Xcelsama";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Excelsama/BOT-X";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m";
global.website = process.env.GURL || " https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/jTJDVYj/Leonardo-Phoenix-A-vibrant-animestyle-illustration-of-a-young-2.jpg";
global.devs = "2347045035241","233268374753";
global.sudo = process.env.SUDO || "2347045035241","233268374753";
global.owner = process.env.OWNER_NUMBER || "2347045035241","233268374753";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  " eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVBFN21YekVySVNQb1pQWnlMcHIxMk5WYkZLSnR1dzhQNys1RDdLdndrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWhYL0pDSHdkYzhDRnF1cGxxQkNJMkltYVExUlRsQVF6TWFMSWVwUUdsST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNT2FKb3dadVNIb2lMT3h4RlJQMkVzZkM0Vkt6QXFOV3d1ZVZxVi85L0YwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzckR4eG1icitjbHNTalc5MFFlYnFyWFNjWUw3MlJFMVAyWUdoNitJa3lzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9IcXdvWHUxUUxIYkZyVEh0aVhNT2JxdE9FR3JRT0k1ejVkaXQyMjI3bms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5OMENyanFzU3p1R0l4eEFndFozeXBpb3Z1SEZOeVBzZnZVWVVlcWtYU1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0tXOC80bTZpUEdDZ01NbkFTbUprUkVCM2JVYk5qQTZiL2JpZXFKWDZGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSXJuWk40Qm5JY2RPd0lCUHNCbmRLWm52RVVCVlRhWEwxbTd1ZXdDZC9oST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdUdGhCclZzcXVoSzJUN2xrMHVJR01xRUlkTzhLT3I4NExJS25WT3RraEovdjRwRHB4QjVLOW1lWGVEMzZuOXN4MzY4c2xWbGtWS1plVlZ1ck41NGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUzLCJhZHZTZWNyZXRLZXkiOiJncUpMZ0V6VUxaOEJxcWRYNlFSTTFiRzluMEVQY0FWVWF0bWo3d1FOYmxnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjUwOTM1MzE5MjYzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFGNjE5REMyODQ4NUU1QTM2MjNGMEQzNzhBNTU5OTM4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzY3MjgwNjN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InJ6bGx0eXlvVC1HYVpSWEtLUjZ3Q0EiLCJwaG9uZUlkIjoiYjBhMGUzYTQtZGFjNS00MjA4LThmZTQtMjBhYTI4NjRiNTYyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNDOFFGcm9pcW5NYVNrWTlrZmVsbzVEV2c1Zz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2a2owL2h4RGRqNGplNWhCSUZVYW9uY2hNNVU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNlRIOFA3SlMiLCJtZSI6eyJpZCI6IjUwOTM1MzE5MjYzOjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiWW91KOKYniDNocKwIM2cypYgzaHCsCnimJ4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lEUnVaY0VFUEM3a2J3R0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IllWVTV0VkFJSVBYSDliSEgzSXBBL2ZvVGdDNkJyQ0NNNXZaSUt2YndseGM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlJEYng2VDRwV2xZZkZ1YTJucmg0aWNMd1FXcUVKZVR0azhrWXQ2TnNNbzZGUzdnZHlDdUNzQjVMVDdLbk1YVExUVHQyWkpmQ3B5SkxLMTRSK2c1VUN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJaRFRlT2pSdThlOHlIU2JiSzhGYW8wcnh0OXR6WjNTaDdCN09hWnV6RlFKY01LVm5XeGN6cEVOQktGL2ZnWlRHaDRKT2g1dDNOdTZLTGY4cWF4UG5qZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTM1MzE5MjYzOjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV0ZWT2JWUUNDRDF4L1d4eDl5S1FQMzZFNEF1Z2F3Z2pPYjJTQ3IyOEpjWCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNjcyODA2MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEY2YifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "/",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BOT-X ™`",
  author: process.env.PACK_AUTHER || "Xcelsama",
  packname: process.env.PACK_NAME || "BOT-X",
  botname: process.env.BOT_NAME || "BOT-X",
  ownername: process.env.OWNER_NAME || "Xcelsama",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.UI|| "BOT-X.UI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
