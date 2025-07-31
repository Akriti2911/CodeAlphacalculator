// Todo: Make M+ M- and MC functional
let string = "";
let buttons = document.querySelectorAll('.button');

// Load result from URL if present
window.addEventListener('load', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const result = urlParams.get('result');
  if (result) {
    string = result;
    document.querySelector('input').value = string;
  }
});

Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})

// Save result functionality
document.getElementById('saveButton').addEventListener('click', () => {
  const currentResult = document.querySelector('input').value;
  if (currentResult) {
    const baseUrl = window.location.origin + window.location.pathname;
    const shareableUrl = `${baseUrl}?result=${encodeURIComponent(currentResult)}`;
    
    document.getElementById('linkInput').value = shareableUrl;
    document.getElementById('savedLink').style.display = 'block';
  }
});

// Copy link functionality
document.getElementById('copyButton').addEventListener('click', () => {
  const linkInput = document.getElementById('linkInput');
  linkInput.select();
  linkInput.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand('copy');
  alert('Link copied to clipboard!');
});