document.getElementById('openTabsButton').addEventListener('click', function() {
    for (let i = 0; i <= 1000; i++) {
        window.open('https://www.google.com', '_self');
    }
});
