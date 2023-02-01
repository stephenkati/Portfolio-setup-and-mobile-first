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
    id: '1',
    name: 'Multi-post stories',
    title: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredimg: './images/detailspopupdesk.png',
    featuredimg2: './images/detailspopupmobile.png',
    icon1: './images/seemore.svg',
    technologies: ['Ruby on rails', 'Css', 'Javascript', 'Html', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'],
    seemore: 'See live',
    seeproject: 'See Project',
    source: 'See source',
  },
  {
    id: '2',
    name: 'Multi-post stories',
    title: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredimg: './images/detailspopupdesk.png',
    featuredimg2: './images/detailspopupmobile.png',
    icon1: './images/seemore.svg',
    technologies: ['Ruby on rails', 'Css', 'Javascript', 'Html', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'],
    seemore: 'See live',
    seeproject: 'See Project',
    source: 'See source',
  },
  {
    id: '3',
    name: 'Multi-post stories',
    title: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredimg: './images/detailspopupdesk.png',
    featuredimg2: './images/detailspopupmobile.png',
    icon1: './images/seemore.svg',
    technologies: ['Ruby on rails', 'Css', 'Javascript', 'Html', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'],
    seemore: 'See live',
    seeproject: 'See Project',
    source: 'See source',
  },
  {
    id: '4',
    name: 'Multi-post stories',
    title: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredimg: './images/detailspopupdesk.png',
    featuredimg2: './images/detailspopupmobile.png',
    icon1: './images/seemore.svg',
    technologies: ['Ruby on rails', 'Css', 'Javascript', 'Html', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'],
    seemore: 'See live',
    seeproject: 'See Project',
    source: 'See source',
  },
  {
    id: '5',
    name: 'Multi-post stories',
    title: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredimg: './images/detailspopupdesk.png',
    featuredimg2: './images/detailspopupmobile.png',
    icon1: './images/seemore.svg',
    technologies: ['Ruby on rails', 'Css', 'Javascript', 'Html', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'],
    seemore: 'See live',
    seeproject: 'See Project',
    source: 'See source',
  },
  {
    id: '6',
    name: 'Multi-post stories',
    title: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredimg: './images/detailspopupdesk.png',
    featuredimg2: './images/detailspopupmobile.png',
    icon1: './images/seemore.svg',
    technologies: ['Ruby on rails', 'Css', 'Javascript', 'Html', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'],
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

  const cardbody = document.createElement('div');
  cardbody.classList.add('card-body');

  cardbody.innerHTML = `
        <h3 class="card-title">${project.name}</h3>
        <ul>
            <li>${project.technologies[0]}</li>
            <li>${project.technologies[1]}</li>
            <li>${project.technologies[2]}</li>
            <li>${project.technologies[3]}</li>
        </ul>
        <a href="" class="see-more" >${project.seeproject}</a>`;

  card.appendChild(cardbody);
  cardlayout.appendChild(card);
});

mycards.forEach((project) => {
  // details window popup
  const blurbg = document.createElement('div');
  blurbg.classList.add('blur');

  const popup = document.createElement('div');
  popup.classList.add('popupdiv');

  popup.innerHTML = `<div class="details-popup" id="details-popup">
    <div class="popup-body">
        <i class="fa-solid fa-x close" id="hidewindow"></i>
        <img src=${project.featuredimg} alt="picture showing details of my work" class="desktop">
        <img src=${project.featuredimg2} alt="picture showing details of my work" class="mobile">
        <div class="title-links">
            <h3>${project.title}</h3>
            <div class="links">
                <a href="#">${project.seemore} <img src=${project.icon1} alt=""> </a>
                <a href="#">${project.source} <i class="fa-brands fa-github"></i></a>
            </div>
        </div>
        <ul>
        <li>${project.technologies[0]}</li>
        <li>${project.technologies[1]}</li>
        <li>${project.technologies[4]}</li>
        <li>${project.technologies[5]}</li>
        <li>${project.technologies[2]}</li>
        <li>${project.technologies[6]}</li>
        <li>${project.technologies[7]}</li>
        <li>${project.technologies[8]}</li>
        </ul>
        <p>${project.description}</p>
    </div>
</div>`;

  blurbg.appendChild(popup);
  cardlayout.appendChild(blurbg);
});

const blurred = document.querySelector('.blur');
const seemore = document.querySelectorAll('.see-more');
const hidewindow = document.querySelector('.close');

seemore.forEach((n) => n.addEventListener('click', (e) => {
  e.preventDefault();
  blurred.classList.add('showwindow');
}));

hidewindow.addEventListener('click', (e) => {
  e.preventDefault();
  blurred.classList.remove('showwindow');
});

// form validation
const email = document.querySelector('#email');

form.addEventListener('submit', (e) => {
  
  e.preventDefault();
    let mail = email.value;
  
    if (mail == mail.toLowerCase())
    {
      // The email is lowercase
      
    }
    else
    {
      // The email is uppercase
      // setErrorFor(email, 'Email should be in lowercase');
    }
  
});

function setErrorFor(input, message){
  const small = form1.querySelector('small');
  small.classList('.fa-exclamation-circle')
  small.innerText = message;
}



