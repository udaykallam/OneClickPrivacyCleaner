document.getElementById("clearData").addEventListener("click", () => {
    chrome.browsingData.remove({
        "since": 0 
    }, {
        "cache": true,
        "cookies": true,
        "history": true,
        "localStorage": true
    }, () => {
        document.getElementById("status").innerText = "Data Cleared!";
        setTimeout(() => { document.getElementById("status").innerText = ""; }, 2000);
    });
});
