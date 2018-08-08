const strongElements = document.getElementsByTagName("strong");
const link = document.getElementById('link');

function toggleChange() {
    Array.from(strongElements).forEach(function (item) {
        item.classList.toggle('textChange');
    });
}

['mouseover', 'mouseout'].forEach(function (event) {
    link.addEventListener(event, toggleChange);
});