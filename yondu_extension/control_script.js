chrome.tabs.executeScript({file: 'web-audio-daw.js'});
chrome.tabs.executeScript({file: 'script.js'});


document.addEventListener('DOMContentLoaded', function() {
    var setupMicButt = document.getElementById('setupMic');
    var stopButt = document.getElementById('stop');

    // onClick's logic below:
    setupMicButt.addEventListener('click', function() {
        setupMic();
    });
    stopButt.addEventListener('click', function() {
        stopPitching();
    });
});



function setupMic(){
    chrome.tabs.executeScript( null, {code:"setupMic()"})
}

function stopPitching(){
    chrome.tabs.executeScript( null, {code:"stopPitching()"})
}