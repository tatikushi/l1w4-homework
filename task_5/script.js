var links, update, updateButtons, contentEl, navEl;

contentEl = document.getElementById('content');
navEl = document.getElementById('navigation');

links = {
    love: 'Joseph Brodsky «Love»',
    nature: 'Alexander Pushkin «Winter morning»',
    popular: 'Nikolay Gumilyov «The Giraffe»',
};

update = function (state) {
    if (!state) return;
    contentEl.innerHTML = links[state.page];
    updateButtons(state);
};

updateButtons = function (state) {
    [].slice.call(navEl.querySelectorAll('A')).forEach(function (element) {
        const classList = element.classList;
        '#' + state.page === element.getAttribute('href')
            ? classList.add('active')
            : classList.remove('active');
    })
};

window.addEventListener('popstate', function (element) {
    update(element.state);
});

navEl.addEventListener('click', function (element) {
    element.preventDefault();
    var state;
    if (element.target.tagName !== 'A') {
        return;
    }
    ;

    var page = element.target.getAttribute('href');
    page = page.replace('#', '');

    state = {
        page: page
    };
    history.pushState(state, '', state.page);
    update(state);
    element.preventDefault();
});


