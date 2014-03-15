//alert("from background:\n" + document.location.href);


/*chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  console.log(tabs[0]);
});
*/
chrome.tabs.query({currentWindow: true, active: true}, function(tab){
        alert(tab[0].url);
  });