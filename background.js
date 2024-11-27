// Background.js script for chrome extension

// When chatgpt.com is loaded, inject the content script
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if(changeInfo.status === 'complete') {
    console.log("Tab loaded:", tab.url);
    chrome.scripting.executeScript({
      target: {tabId: tabId},
      files: ['content.js']
    });
  }
});
