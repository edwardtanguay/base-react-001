import * as qstr from '../qtools/qstr';

/**
 * Capitalize the first letter of a string.
 * 
 * qstr.capitalizeFirstLetter("this is a sentence."); 
 * 
 * "This is a sentence."
 */
export const capitalizeFirstLetter = (line: string) => {
	return line.charAt(0).toUpperCase() + line.slice(1);
}

/**
 * Replace all occurances in a string. 
 * 
 * qstr.replaceAll("This is a tost.", "o", "e");
 * 
 * "This is a test."
 */
export const replaceAll = (text: string, search: string, replace: string) => {
	return text.split(search).join(replace);
};



/**
 * Check if a string is inside another string.
 * 
 * qstr.contains("This is a test.", "test");
 * 
 * true
 */
export const contains = (line: string, searchText: string) => {
	return String(line).includes(searchText);
}

/**
 * Check if a string has another string at the end.
 * 
 * qstr.contains("This is a test.", ".");
 * 
 * true
 */
export const endsWith = (main: string, part: string) => {
	return main.endsWith(part);
}



