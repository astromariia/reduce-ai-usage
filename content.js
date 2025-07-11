// content.js
const PLATFORMS = {
  chatgpt: {
    inputSelector: 'textarea[aria-label*="message"]',
    buttonSelector: 'button[data-testid*="send"]',
    charCountSelector: '.remaining span',
    domain: 'chat.openai.com'
  },
  deepseek: {  // ADD DEEPSEEK CONFIG
    inputSelector: '.input-box textarea', // Verify with DevTools
    buttonSelector: 'button.send-button', // Verify with DevTools
    charCountSelector: '.char-counter', // Verify with DevTools
    domain: 'www.deepseek.com'
  }
};

function detectPlatform() {
  const host = window.location.hostname;
  if (host.includes('deepseek.com')) return 'deepseek';  // ADD THIS LINE
  if (host.includes('openai.com')) return 'chatgpt';
  if (host.includes('claude.ai')) return 'claude';
  return null;
}

function initializePlatform() {
  const platform = detectPlatform();
  if (!platform) return;

  const config = PLATFORMS[platform];
  
  const observer = new MutationObserver(() => {
    // MODIFIED TO USE CONFIG SELECTORS
    const input = document.querySelector(config.inputSelector);
    const button = document.querySelector(config.buttonSelector);
    
    if (input && button) {
      // Add your existing enforcement logic here
      enforceUsageLimits(input, button, config);
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

initializePlatform();
console.log("Extension by @FujiwaraChoki on GitHub.");
const popup = document.createElement('div');
popup.style.position = 'fixed';
popup.style.backgroundColor = '#ffffff';
popup.style.border = '2px solid #ddd';
popup.style.borderRadius = '10px';
popup.style.padding = '20px';
popup.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
popup.style.zIndex = '9999';
popup.style.textAlign = 'center';
popup.style.fontFamily = 'Arial, sans-serif';
popup.style.color = '#333';

// Center
popup.style.top = '50%';
popup.style.left = '50%';
popup.style.transform = 'translate(-50%, -50%)';

// Dim the background
document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
document.body.style.overflow = 'hidden';

const question = document.createElement('p');
question.textContent = "Are you sure this is for the right reasons?";
question.style.fontSize = '18px';
question.style.marginBottom = '20px';

const option1 = document.createElement('button');
option1.textContent = "YES!!!";
option1.style.backgroundColor = '#e63946';
option1.style.color = '#ffffff';
option1.style.border = 'none';
option1.style.borderRadius = '5px';
option1.style.padding = '10px 20px';
option1.style.cursor = 'pointer';
option1.style.fontSize = '16px';
option1.style.margin = '10px';
option1.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
option1.addEventListener('mouseover', () => (option1.style.backgroundColor = '#d62839'));
option1.addEventListener('mouseout', () => (option1.style.backgroundColor = '#e63946'));

const option2 = document.createElement('button');
option2.textContent = "NO! Read the python docs!";
option2.style.backgroundColor = '#457b9d';
option2.style.color = '#ffffff';
option2.style.border = 'none';
option2.style.borderRadius = '5px';
option2.style.padding = '10px 20px';
option2.style.cursor = 'pointer';
option2.style.fontSize = '16px';
option2.style.margin = '10px';
option2.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
option2.addEventListener('mouseover', () => (option2.style.backgroundColor = '#1d3557'));
option2.addEventListener('mouseout', () => (option2.style.backgroundColor = '#457b9d'));

const option3 = document.createElement('button');
option3.textContent = "NO! Read the C++ docs";
option3.style.backgroundColor = '#2a9d8f';
option3.style.color = '#ffffff';
option3.style.border = 'none';
option3.style.borderRadius = '5px';
option3.style.padding = '10px 20px';
option3.style.cursor = 'pointer';
option3.style.fontSize = '16px';
option3.style.margin = '10px';
option3.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
option3.addEventListener('mouseover', () => (option3.style.backgroundColor = '#21867a'));
option3.addEventListener('mouseout', () => (option3.style.backgroundColor = '#2a9d8f'));

const option4 = document.createElement('button');
option4.textContent = "NO! Go to Google";
option4.style.backgroundColor = '#ff8c00';
option4.style.color = '#ffffff';
option4.style.border = 'none';
option4.style.borderRadius = '5px';
option4.style.padding = '10px 20px';
option4.style.cursor = 'pointer';
option4.style.fontSize = '16px';
option4.style.margin = '10px';
option4.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
option4.addEventListener('mouseover', () => (option4.style.backgroundColor = '#ff7f00'));
option4.addEventListener('mouseout', () => (option4.style.backgroundColor = '#ff8c00'));


const option5 = document.createElement('button');
option5.textContent = "NO! Go to W3 Schools";
option5.style.backgroundColor = '#b95cf4';
option5.style.color = '#ffffff';
option5.style.border = 'none';
option5.style.borderRadius = '5px';
option5.style.padding = '10px 20px';
option5.style.cursor = 'pointer';
option5.style.fontSize = '16px';
option5.style.margin = '10px';
option5.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
option5.addEventListener('mouseover', () => (option5.style.backgroundColor = '#a95cf4'));
option5.addEventListener('mouseout', () => (option5.style.backgroundColor = '#b95cf4'));

const option6 = document.createElement('button');
option6.textContent = "NO! Go to Geeks for Geeks";
option6.style.backgroundColor = '#3cb043';
option6.style.color = '#ffffff';
option6.style.border = 'none';
option6.style.borderRadius = '5px';
option6.style.padding = '10px 20px';
option6.style.cursor = 'pointer';
option6.style.fontSize = '16px';
option6.style.margin = '10px';
option6.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
option6.addEventListener('mouseover', () => (option6.style.backgroundColor = '#32a852'));
option6.addEventListener('mouseout', () => (option6.style.backgroundColor = '#3cb043'));


option1.addEventListener('click', function () {
  closePopup();
});

option2.addEventListener('click', function () {
  window.location.href = 'https://docs.python.org/3/';
  closePopup();
});

option3.addEventListener('click', function () {
  window.location.href = 'https://devdocs.io/cpp/';
  closePopup();
});

option4.addEventListener('click', function () {
  window.location.href = 'https://www.google.com/';
  closePopup();
});

option5.addEventListener('click', function () {
  window.location.href = 'https://www.w3schools.com/';
  closePopup();
});

option6.addEventListener('click', function () {
  window.location.href = 'https://www.geeksforgeeks.org/';
  closePopup();
});

popup.appendChild(question);
popup.appendChild(option1);
popup.appendChild(option2);
popup.appendChild(option3);
popup.appendChild(option4);
popup.appendChild(option5);
popup.appendChild(option6);

document.body.appendChild(popup);

function closePopup() {
  popup.remove();
  document.body.style.backgroundColor = '';
  document.body.style.overflow = '';
}
