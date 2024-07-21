document.getElementById("search-input").addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        searchGoogle();
    }
})

function searchGoogle() {
    const query = document.getElementById('search-input').value;
    if( query.trim() !== ""){
        const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.location.href = url;
    }
}

function feelingLucky() {
    const query = document.getElementById('search-input').value;
    if(query.trim() !== ""){
        const url = `https://www.google.com/search?btnI=1&q=${encodeURIComponent(query)}`;
        window.location.href = url;
    }
}

