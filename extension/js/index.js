
function processHistory(results) {
    window.console.log(results);
    }

function getHistory() {
    var currTime = getTime();
    var query = new Object();
    query.text = "";
    query.startTime = currTime;
    chrome.history.search(query, processHistory);
    }
