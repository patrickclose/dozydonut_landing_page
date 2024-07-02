// scripts.js
function loadCalendlyWidget() {
    Calendly.initInlineWidget({
        url: 'https://calendly.com/contact-dozydonut/60min?primary_color=eb6eb6',
        parentElement: document.getElementById('calendly-inline-widget'),
        prefill: {},
        utm: {}
    });
}

window.onload = function() {
    loadCalendlyWidget();
}