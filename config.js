const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = 
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD=Ucp2GKqZ#7MNl2RsX1JhuzW4bJNH3L5s1hZQReEkgGFcJDEY4Yv4'
};
