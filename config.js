const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD=1V52iZiC#wwOGi-HWkfrheE9B_dif30zaWvw6ul7Xn9g7jgmQYhc'
};
