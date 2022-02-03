const { format } = require('date-fns');
const fs = require('fs');
const path = require('path');

const dirPath = '/home/kim/Documents/from v/mdnotes/sync/Journal/';
//this will retuen array of file names

const files = fs.readdirSync(dirPath); //how do I fetch files alone

files.forEach((file, index) => {
	let newFileName = file.replace('.md', '');
	const newDate = format(new Date(newFileName), 'do MMM yyy');
	// now rename using the new date string
	fs.rename(`${dirPath}${file}`, `${dirPath}${newDate}${'.md'}`, (err) => {
		console.log(err);
	});
});
