const typed = select('.typed')
if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}
let skilsContent = select('.skills-content');
if (skilsContent) {
    new Waypoint({
        element: skilsContent,
        offset: '80%',
        handler: function (direction) {
            let progress = select('.progress .progress-bar', true);
            progress.forEach((el) => {
                el.style.width = el.getAttribute('aria-valuenow') + '%'
            });
        }
    })
}