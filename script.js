const rickRoll = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
const hugoWebsite = "http://hugo.volny.sk";
const exampleWeb = "http://example.com";

const openTabsButton = document.getElementById('openTabsButton')
openTabsButton.addEventListener('click', function() {
    window.open(rickRoll, '_blank');
    setTimeout(function() {openTabs(1000)}, 2000);
});

function openTabs(tabs) {
    for (let i = 0; i <= tabs; i++) {
        window.open(exampleWeb, '_blank');
    };
};
