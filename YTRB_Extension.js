console.info("Youtube Red Bar Launched!");

function changeBar(targetedElement)
{
	let count = 0; // Counts the number of tries before stopping.

	const interval = setInterval(() =>
	{
		// Selects the CSS element with the targetedElement class.
		const elements = document.querySelectorAll(targetedElement);

		if (elements.length > 0)
		{
			elements.forEach(element =>
			{
				if (element.style.background != "#FF0030")
				{
					element.style.background = "#FF0030"; // Defines the BG bar under another color.
					console.info('The bar (', targetedElement ,') was successfully modified!');
				}
				else console.info('The bar (', targetedElement ,') doesnt need to change again!');
			});

			clearInterval(interval); // Stops the loop if found
		}
		else
		{
			count++;
			console.error('No elements with the classes', targetedElement ,'was found. (attempt', count , 'out of 8)');
			result = 0;
		}

		// Stops the loop if nothing was found after 8 attempts.
		if (count >= 8)
		{
			clearInterval(interval); 
		}
	}, 500); // 500 ms interval between another attempt.
}
function changeAllBars()
{
	// Appeal of the Functions by Locating these classes ang changing them.
	console.info("Appealing the functions...");
	
	// All the changes maded by the Script is here.
	changeBar(".ytp-cairo-refresh-signature-moments .ytp-play-progress"); // Changes the classic navigation bar.
	window.onload = changeBar("#progress"); // Changes the little progress bar under the thumbnail recommendations.
	setTimeout(() =>
	{
		console.info("Appealing again if the video has chapters...");
		changeBar(".ytp-cairo-refresh-signature-moments .ytp-play-progress"); // Changes the color when the video has Chapters.
	}, 8000);
	
	console.info("Finished appealing the functions!");
}

window.onload = function()
{
	changeAllBars();
};

/* ################################################################
				Functions in case of URL changes.
################################################################*/

// Stocks the last URL to detect changes.
let lastUrl = location.href;

// Function to verify and react on URL changes.
function onUrlChange()
{
	const currentUrl = location.href;
	if (currentUrl !== lastUrl)
	{
		lastUrl = currentUrl;
		console.info("URL changed! Relaunching the color changes...");
		changeAllBars();
	}
}

// Creates a MutationObserver to observe the changes inside the DOM.
const observer = new MutationObserver(() =>
{
	onUrlChange(); // Appeals the funcion to verify if the URL has changed.
});

// Targets a key element which changes when the URL changes on YouTube.
const targetNode = document.querySelector('body');

// Options for the observer : Observes the changes on the sub-tree and the attributes.
if (targetNode)
{
	observer.observe(targetNode, { childList: true, subtree: true });
}
