const version = '1.6';
console.info("Youtube Red Bar Launched! (V",version,")");

// Directory of the CSS File
const cssFile = 'YTRB_Style.css';
const cssURL = chrome.runtime.getURL(cssFile);

// Creates the <link> tag
const linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = cssURL;

try
{
	console.info("Trying to inject", cssFile, "...");

	// Adds the <link> tag on <head> tag
	document.head.appendChild(linkElement);
	console.info("SUCCESS: The",cssFile,"was successfully loaded !");
}
catch (error)
{
	console.error("ERROR : the",cssURL,"was unable to load. More infos : ",error);
	throw error;
}