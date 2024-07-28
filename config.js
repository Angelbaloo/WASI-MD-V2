//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/cdbaf12b1b80054e8177a.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923079059983";
global.owner = process.env.OWNER_NUMBER || "923079059983";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUNEcFFBUExxWk9OVjlQQ1dySjdhd1l3dkNSYUhJWk5XdE1kNU9iZWYxYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMDhYMkpGNmpxcWhJZDhUVjVrUGpyd083RUFpYWwyQ3FWRlpZTytYeFlEaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxRFhwRUNySitOdUlFdVB5OVI3NjNCb0oxZjBlOXBQVmtuS2hqWEtCVkZrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaZFB3emFzRkVNTGFJZVpvb3VZL04vaG8vYlQ5T0R5c1Y5b08vZXpvTnlZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBFU0xBZnZQWXpSRTFYREpoT2JNRlR5M0JVZGRzZ3oxMjJ3OC8wU0VFa1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlFVWNzM2hwaUZCbWhTVFhGVDNVcGhXMGZUM1VBaFFJZ0l1WmNYV3F3Vzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0RnT0RqR2VDc0Z0Mm8zV29wWlVaR01ONEF5YUJzSG1nZFJWMk8wQ2RtYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1NNb3hUazVyRVVHY0xyZjZibC85cENYUEIzWG9mOVc2SDhhUGtoSmZGcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRNNXp4d05xYmwzam1adVQ1RUFmRllBYjMwbGtkRVdvM25sUVdVWGxDSjcrMmJaZEFrT3pGaWEzNlF2Mi9EMFYwTFdNNEVkb1lCWkRBOEphZjNrd2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzcsImFkdlNlY3JldEtleSI6Ijl2QjExUnhHYUhESWNJQ0JRYVAyaXRMUlQvNmNnWXBaNHoxQko2bWthM3c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDc5MDU5OTgzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjY5OTVDRjdGNjkyRjhBQkMzNzIyMTBFODRGMEU4ODNCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjIxMjQzMTN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InpheEo0bDFtUk4tMkdpX3N5Zm9GT1EiLCJwaG9uZUlkIjoiMzIwY2I4NDUtYzI0ZC00NDI3LTljNmEtZmMwY2I1MDBlYTU4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhBOFM4NVA1b1BrSXJaSjNuU0twenV3eG85QT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZaW5RbWgwaTRWQW9vanNNY3FDcDQ0Y0Ezams9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNEM4TlRGS0EiLCJtZSI6eyJpZCI6IjkyMzA3OTA1OTk4MzoyNEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZqz8J2QkiDwnZqr8J2atPCdkIbwnZq18J2QiyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnZXN3drUWlaQ1d0UVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYzZqcFdBTFc1QkY0RHc4RTZXWlJnVWQvcnltTUVzVmgxdS9YRm9kaVJIYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNlpqa3AvREdTUkswL1JaZmFuTHRwVlFmWkpZS3k5SG5PUllKMXNQQ1RMZ0s3MGhMTWkrT21jREZndW5xTFA1azcrMWhGbmRBUDJSRDJVRTJ6ejNPQVE9PSIsImRldmljZVNpZ25hdHVyZSI6Ik9xOHJkcWRDbm9wclNoWnRvRjV6cWxKNWRKdnBCenRLMERiL1RGc1VuUmpMY3liWHA2TVo1NDYycjBjczA3c0E5YW9odFc2ZERzSjY1K1luQUczZGd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDc5MDU5OTgzOjI0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhPbzZWZ0MxdVFSZUE4UEJPbG1VWUZIZjY4cGpCTEZZZGJ2MXhhSFlrUjMifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIxMjQzMTAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUEpxIn0=
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-by-wasi-2😍",
  author: process.env.PACK_AUTHER || "ANGEL",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "ANGEL-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "angel",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
