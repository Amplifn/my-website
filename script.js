
document.getElementById('openTabsButton').addEventListener('click', function() {
window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
setTimeout(openMore(), 3000);
});


function openMore() {
    for (let i = 0; i <= 1000; i++) {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    }
}
