const rickRoll = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

document.getElementById('openTabsButton').addEventListener('click', function() {
    window.open(rickRoll, '_blank');
    setTimeout(function() {
        for (let i = 0; i <= 10000; i++) {
            window.open(rickRoll, '_blank')}
    }, 3000);
});
    
    
function openMore() {
    for (let i = 0; i <= 1000; i++) {
        window.open(rickRoll, '_blank');
    };
};
