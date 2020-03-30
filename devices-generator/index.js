const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, './devices');

var output = [];

fs.readdir(directoryPath, async function (err, files) {
	
    await files.forEach(function (file) {
		
		var obj = JSON.parse(fs.readFileSync('./devices/' + file, 'utf8'));
		output.push(obj);
		
    });
	
	fs.writeFile("devices.json", JSON.stringify(output), 'utf8', function (err) {
		
		if (err) {
			console.log("An error occured while writing JSON Object to File.");
			return console.log(err);
		}
	 
		console.log("JSON file has been saved.");
	});
	
});

