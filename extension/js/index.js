console.log("hi!");
chrome.history.onVisited.addListener(processHistory);

function processHistory(result) {
	console.log(result);
    }



