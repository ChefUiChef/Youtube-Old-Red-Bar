console.info("Youtube Old Red Bar Launched!");

function changeBar(targetedElement) {
	let count = 0; // Counts the number of tries before stopping
	
	const interval = setInterval(() => {
		
		// Selects the CSS element with the targetedElement class.
		const elements = document.querySelectorAll(targetedElement);
		if (elements.length > 0)
		{
			elements.forEach(element => {
				element.style.background = "#FF0030"; // Defines the BG bar under another color
			});
			console.log('The bar (', targetedElement ,') was successfully modified!');
			clearInterval(interval); // Stops the loop if found
		}
		else
		{
			count++;
			console.error('No elements with the classes', targetedElement ,'was found. (attempt', count , 'out of 8)');
			result = 0;
		}
		
		// Stops the loop if nothing was found after 8 attempts
		if (count >= 8) {
			clearInterval(interval); 
		}
	}, 500); // 500 ms interval between another attempt
}

// Appeal of the Functions by Locating these classes ang changing them.
console.info("Appealing the functions...");
changeBar(".ytp-cairo-refresh-signature-moments .ytp-play-progress"); // Changes the classic navigation bar
window.onload = changeBar("#progress"); // Changes the little progress bar under the thumbnail recommendations
console.log("(appeal end) changeBar Def");
