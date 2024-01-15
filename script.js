function openTabs() {
    document.getElementById('openTabsButton').addEventListener('click', function() {
    for (let i = 0; i <= 1000; i++) {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    }
    });
}

function timeout() {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    setTimeout(openTabs(), 3000);
}

timeout();
