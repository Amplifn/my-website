document.getElementById('openTabsButton').addEventListener('click', function() {
    for (let i = 0; i < 100; i++) {
        window.open('www.google.com', '_blank');
    }
});