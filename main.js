const menu = document.querySelector('#mobileMenu');
const hambuger = document.querySelector('#hambuger');
const x = document.querySelector('#x');
const navitem = document.querySelectorAll('.nav-item');

hambuger.addEventListener('click', () => {
  menu.classList.add('show');
});

x.addEventListener('click', () => {
  menu.classList.remove('show');
});

navitem.forEach((n) => n.addEventListener('click', () => menu.classList.remove('show')));

const mycards = [
  {
    id: 1,
    name: 'Global Canvas art concert 2015',
    title: 'Global Canvas art concert 2015',
    description: "Our goal is to bring the beauty and diversity of art to the world by showcasing the work of talented artists from around the globe. Join us for a journey of discovery as we take you on a tour of the galleries, with live events, interactive workshops, and opportunities to connect with the artists.",
    featuredimg: './images/Global-concert/header-concert-desktop.png',
    featuredimg2: './images/Global-concert/header-concert-mobile.png',
    alt: 'Global Canvas art concert 2015',
    icon1: './images/seemore.svg',
    technologies: ['Css', 'Javascript', 'Html'],
    seemore: "https://stephenkati.github.io/Global-Canvas-Art-Exhibition-Concert-/",
    seeproject: 'See Project',
    source: 'https://github.com/stephenkati/Global-Canvas-Art-Exhibition-Concert-',
  },
  {
    id: 2,
    name: 'To Do List',
    title: 'To Do List',
    description: "A To Do List app that lets users create tasks that they would like to do and complete them. Users can add, update, delete, mark as completed and remove completed activities. Build with HTML, CSS and Javascript.",
    featuredimg: './images/Todolist/Todolist-desktop.png',
    featuredimg2: './images/Todolist/Todolist-mobile.png',
    alt: 'To Do List',
    icon1: './images/seemore.svg',
    technologies: ['Css', 'Javascript', 'Html'],
    seemore: 'https://stephenkati.github.io/To-Do-List/',
    seeproject: 'See Project',
    source: 'https://github.com/stephenkati/To-Do-List',
  },
  {
    id: 3,
    name: 'Awesome books',
    title: 'Awesome books',
    description: "Awesome books ES6 is a website for listing books and arthurs, it stores data in the local storage. This project uses ES6 and Javascript modules. The website is build with HTML, CSS and Javascript.",
    featuredimg: './images/awesome-books/Books-list-desktop.png',
    featuredimg2: './images/awesome-books/Books-list-mobile.png',
    alt: 'Awesome books',
    icon1: './images/seemore.svg',
    technologies: ['Css', 'Javascript', 'Html'],
    seemore: 'https://stephenkati.github.io/Awesome-books-ES6/',
    seeproject: 'See Project',
    source: 'https://github.com/stephenkati/Awesome-books-ES6',
  },
  {
    id: 4,
    name: 'My Profile Portfolio',
    title: 'My Profile Portfolio',
    description: "Portfolio: setup and mobile first is a brief introduction including my name, contact information, and a summary of your skills and experience as a software developer.",
    featuredimg: './images/portfolio/header-portfolio-desktop.png',
    featuredimg2: './images/portfolio/header-portfolio-desktop.png',
    alt: 'My Profile Portfolio',
    icon1: './images/seemore.svg',
    technologies: ['Css', 'Javascript', 'Html'],
    seemore: 'https://stephenkati.github.io/Portfolio-setup-and-mobile-first/',
    seeproject: 'See Project',
    source: 'https://github.com/stephenkati/Portfolio-setup-and-mobile-first',
  },
  {
    id: 5,
    name: 'Multi-post stories',
    title: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredimg: './images/detailspopupdesk.png',
    featuredimg2: './images/detailspopupmobile.png',
    alt: 'Multi-post stories',
    icon1: './images/seemore.svg',
    technologies: ['Css', 'Javascript', 'Html'],
    seemore: 'See live',
    seeproject: 'See Project',
    source: 'See source',
  },
  {
    id: 6,
    name: 'Multi-post stories',
    title: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredimg: './images/detailspopupdesk.png',
    featuredimg2: './images/detailspopupmobile.png',
    alt: 'Multi-post stories',
    icon1: './images/seemore.svg',
    technologies: ['Css', 'Javascript', 'Html'],
    seemore: 'See live',
    seeproject: 'See Project',
    source: 'See source',
  },
];

// display cards in website refactor
const cardlayout = document.querySelector('.card-layout');

mycards.forEach((project) => {
  // console.log(project.id);

  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `<img src=${project.featuredimg2} alt=${project.alt} class="cardbody-image" >`
  const cardbody = document.createElement('div');
  cardbody.classList.add('card-body');

  cardbody.innerHTML = `
        
        <h3 class="card-title">${project.name}</h3>
        <ul>
            <li>${project.technologies[0]}</li>
            <li>${project.technologies[1]}</li>
            <li>${project.technologies[2]}</li>
        </ul>
        <a href="" class="see-more" id="${project.id}" >${project.seeproject}</a>`;

  card.appendChild(cardbody);
  cardlayout.appendChild(card);
});

const blurbg = document.createElement('div');
blurbg.classList.add('blur');
cardlayout.appendChild(blurbg);

const showProject = (id) => {
  const project = mycards.find((project) => project.id === Number(id));
  // details window popup

  const popup = document.createElement('div');
  popup.classList.add('popupdiv');

  popup.innerHTML = `<div class="details-popup" id="details-popup">
    <div class="popup-body">
        <i class="fa-solid fa-x close" id="hidewindow"></i>
        <img src=${project.featuredimg} alt=${project.alt} class="desktop">
        <img src=${project.featuredimg2} alt=${project.alt} class="mobile">
        <div class="title-links">
            <h3>${project.title}</h3>
            <div class="links">
                <a href=${project.seemore}>See Live <img src=${project.icon1} alt=""> </a>
                <a href=${project.source}>See source <i class="fa-brands fa-github"></i></a>
            </div>
        </div>
        <ul>
        <li>${project.technologies[0]}</li>
        <li>${project.technologies[1]}</li>
        <li>${project.technologies[2]}</li>
        </ul>
        <p>${project.description}</p>
    </div>
</div>`;
blurbg.appendChild(popup);
};

const blurred = document.querySelector('.blur');
// const hidewindow = document.querySelector('.close');

cardlayout.addEventListener('click', (e) => {
  e.preventDefault();
  if(e.target.tagName === 'A'){
    const link = e.target;
    const id = link.getAttribute('id');
    showProject(id)
    blurred.classList.add('showwindow');
  }
});

// hidewindow.addEventListener('click', (e) => {
//   e.preventDefault();
//   blurred.classList.remove('showwindow');
// });

// blurbg.addEventListener('click', (e) => {
//   e.preventDefault();
//   if(e.target.parentElement.classList.contains('close')){
//     // blurred.classList.remove('showwindow');
//     console.log('close');
//   }
// });


// mycards.forEach((project) => {
//   // details window popup
//   const blurbg = document.createElement('div');
//   blurbg.classList.add('blur');

//   const popup = document.createElement('div');
//   popup.classList.add('popupdiv');

//   popup.innerHTML = `<div class="details-popup" id="details-popup">
//     <div class="popup-body">
//         <i class="fa-solid fa-x close" id="hidewindow"></i>
//         <img src=${project.featuredimg} alt="picture showing details of my work" class="desktop">
//         <img src=${project.featuredimg2} alt="picture showing details of my work" class="mobile">
//         <div class="title-links">
//             <h3>${project.title}</h3>
//             <div class="links">
//                 <a href="#">${project.seemore} <img src=${project.icon1} alt=""> </a>
//                 <a href="#">${project.source} <i class="fa-brands fa-github"></i></a>
//             </div>
//         </div>
//         <ul>
//         <li>${project.technologies[0]}</li>
//         <li>${project.technologies[1]}</li>
//         <li>${project.technologies[4]}</li>
//         <li>${project.technologies[5]}</li>
//         <li>${project.technologies[2]}</li>
//         <li>${project.technologies[6]}</li>
//         <li>${project.technologies[7]}</li>
//         <li>${project.technologies[8]}</li>
//         </ul>
//         <p>${project.description}</p>
//     </div>
// </div>`;

//   blurbg.appendChild(popup);
//   cardlayout.appendChild(blurbg);
// });

// const blurred = document.querySelector('.blur');
// const seemore = document.querySelectorAll('.see-more');
// const hidewindow = document.querySelector('.close');

// seemore.forEach((n) => n.addEventListener('click', (e) => {
//   e.preventDefault();
//   blurred.classList.add('showwindow');
// }));

// hidewindow.addEventListener('click', (e) => {
//   e.preventDefault();
//   blurred.classList.remove('showwindow');
// });

// form validation
const form = document.querySelector('form');
const email = document.querySelector('#email');
const error = document.querySelector('#error');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const emailVal = email.value;

  if (emailVal.toLowerCase() === emailVal) {
    form.submit();
  } else {
    error.innerHTML = 'Email must be in lower case';
  }
});

// store data in browser

const username = document.querySelector('#name');
const useremail = document.querySelector('#email');
const text = document.querySelector('#textarea');

form.addEventListener('input', () => {
  const formdata = {
    username: username.value,
    useremail: useremail.value,
    text: text.value,
  };

  localStorage.setItem('data', JSON.stringify(formdata));
});

const formdataparsed = JSON.parse(localStorage.getItem('data'));

username.value = formdataparsed.username;
useremail.value = formdataparsed.useremail;
text.value = formdataparsed.text;