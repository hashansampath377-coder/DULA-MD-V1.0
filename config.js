const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "oO8D3DZD#lWaSYc_KpoJbWNCG8An7EKgWqy3prDwTxsACVIBBKmg",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/PODDAe/DULA-MD-V1.0/blob/main/IMAGES/DULA-MD-LOGO.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 DULA-MD Is Alive Now😍*",
BOT_OWNER: '94782543893',  // Replace with the owner's phone number



};
