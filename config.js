const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_51_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk5LFxuICAgICAgICAxODgsXG4gICAgICAgIDczLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDM5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODAsXG4gICAgICAgIDczLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEsXG4gICAgICAgIDI1LFxuICAgICAgICAzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDc5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjksXG4gICAgICAgIDg1LFxuICAgICAgICAxODcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDUxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0LFxuICAgICAgICA5NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ1LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDk0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjksXG4gICAgICAgIDM2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDkxLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAwLFxuICAgICAgICA4MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMzLFxuICAgICAgICA5MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDY1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDc2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzksXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDY1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMSxcbiAgICAgICAgNjksXG4gICAgICAgIDExLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNixcbiAgICAgICAgMzEsXG4gICAgICAgIDg2LFxuICAgICAgICA0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICA5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDkxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODcsXG4gICAgICAgIDk3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiemMxMGxjZU02ZDJhazVWeDNISXpQQ1RuelNKTmx6US9mT2pJY3V6WlV5VT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNzY4NzMzNDQwN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTZFQjNFNDFCOTE5MjQ0RjYwRDkzMjc0OTAxNTQzRUVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxODUwNjc0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjc2ODczMzQ0MDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkIzNTYxQTJFRUQwMTFEQTIwNEFBQjNGMDVFQ0VCMzhFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTg1MDY3NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI3Njg3MzM0NDA3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwRTk2QUMzOUE3NzMwNUE1QkUwNUQ2NzExNDVFQUZDM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE4NTA2NzdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNzY4NzMzNDQwN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTY0OENCQzNGRDlCQUREMkVCRDYwQzE1OTg2RDg2NzlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxODUwNjc4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImhlaWtFS1hGUjZ5VERMSjRwSHp2Y2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGMwOWNiMWEtZTkxMS00ZTlkLWFjZTAtYWRlMTkwZmZiZjgxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk0LFxuICAgICAgMjAwLFxuICAgICAgMSxcbiAgICAgIDkzLFxuICAgICAgMTAxLFxuICAgICAgMTE1LFxuICAgICAgMjAzLFxuICAgICAgNTAsXG4gICAgICAzLFxuICAgICAgMTczLFxuICAgICAgNzUsXG4gICAgICAxNzIsXG4gICAgICA0MixcbiAgICAgIDQ2LFxuICAgICAgMzMsXG4gICAgICAxNSxcbiAgICAgIDE3NSxcbiAgICAgIDE1OCxcbiAgICAgIDk4LFxuICAgICAgODNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjUsXG4gICAgICAzLFxuICAgICAgMjUwLFxuICAgICAgMzcsXG4gICAgICA3LFxuICAgICAgMTQ2LFxuICAgICAgMTYwLFxuICAgICAgMTQ5LFxuICAgICAgMTMxLFxuICAgICAgNTUsXG4gICAgICA5NSxcbiAgICAgIDE3OCxcbiAgICAgIDI1MCxcbiAgICAgIDExOSxcbiAgICAgIDMxLFxuICAgICAgMjM3LFxuICAgICAgNSxcbiAgICAgIDQ2LFxuICAgICAgNzEsXG4gICAgICA1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4TU5MUjhXS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjc2ODczMzQ0MDc6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQ4NjcwODk2OTUxMzAzOjdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwicHJpbmNlbWFzaGFtYmEwOVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xiSXZjRUhFSzIyaGJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUEVMcmhuWkdhZFlGNTAvaGdPMVBZK3NLem00SFNjTFhUYUtOM3YzT0dpVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIyRU90MnRORlJ2elE1ZUxnaGVWbGw1amMzNW9KZis2RXB0UHBEaGpTVXMwOTNVNzJOTWtBQ0lQSjZvajdOL2ZFQWhQa0N5OVZoM3VTNzJtNmVSMW5DUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJlYmpjMU01Y1JLaTRRK0tzMDBuaTUyYkNlekgwQ3hxbEtBRVBRU2FhL2RFWkdrS25rMW44cDg1SU9MUTZ6RTZSQS9nSmpJZE5DMyszUko5eGFZRmlqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNzY4NzMzNDQwNzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxODUwNjczLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTS9IXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNL0guanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
