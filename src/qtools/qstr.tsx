
export const qstr = require('../qtools/qstr');

qstr.capitalizeFirstLetter = (line: string) => {
	return line.charAt(0).toUpperCase() + line.slice(1);
}

qstr.replaceAll = (text: string, search: string, replace: string) => {
	return text.split(search).join(replace);
};