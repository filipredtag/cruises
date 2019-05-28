
import React from 'react';
import ReactDOM from 'react-dom';
import Engine from 'components/Engine';


const engineComponent = document.getElementById('cru_engine');

if (engineComponent !== null) {
    ReactDOM.render(<Engine />, engineComponent);
}

const pageElement = document.getElementById('app');
const { page } = pageElement.dataset;

if (page === 'home') {
    import('home');
} else if (page === 'last-minute') {
    import('lastMinute');
} else if(page === 'cruise-line') {
    import('cruiseLine');
} else if(page === 'destinations') {
    import('destinations');
} else if(page === 'cruise-package') {
    import('cruisePackage');
} else if(page === 'contact-us') {
    import('contactUs');
}


const navButton = document.getElementById('hdr_menu');
const navBackdrop = document.getElementById('hdr_backdrop');
const menu = document.getElementById('hdr_nav');

navButton.addEventListener('click', (event) => {
    event.preventDefault();

    menu.classList.add('navbar-in');
    navBackdrop.classList.add('is-visible');
});

navBackdrop.addEventListener('click', (event) => {
    event.preventDefault();

    menu.classList.remove('navbar-in');
    navBackdrop.classList.remove('is-visible');
});


