console.log("hi!");
chrome.history.onVisited.addListener(processHistory);
chrome.tabs.onCreated.addListener(processTabs);

function processHistory(result) {
	console.log(result);
    }

function processTabs(result) {
	console.log(result);
}



