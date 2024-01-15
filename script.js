const rickRoll = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
const hugoWebsite = "http://hugo.volny.sk";

document.getElementById('openTabsButton').addEventListener('click', function() {
    window.open(rickRoll, '_blank');
    setTimeout(function() {openTabs(1000)}, 2000);
});

function openTabs(tabs) {
    for (let i = 0; i <= tabs; i++) {
        window.open(hugoWebsite, '_blank');
    };
};