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



<div class="details-popup" id="details-popup"></div>

<script>
    let detailspopup = {
        card1:{
        name: 'Tonic',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
        featuredimg: './images/portfolio-pic-1.png',
        featuredimg2: './images/portfolio-pic-5.png',
        technologies: ['Html', 'Css', 'Javascript', 'Ruby on rails'],
        seemore: 'seemore',
        source: 'source',
        type: ['Canopy', 'Backend Dev', '2015']
        },
        card2:{
        name: 'Multi-post stories',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
        featuredimg: './images/portfolio-pic-2.png',
        featuredimg2: './images/portfolio-pic-6.png',
        technologies: ['Html', 'Css', 'Javascript', 'Ruby on rails'],
        seemore: 'seemore',
        source: 'source',
        type: ['Canopy', 'Backend Dev', '2015']
        },
        card3:{
        name: 'Tonic',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
        featuredimg: './images/portfolio-pic-3.png',
        featuredimg2: './images/portfolio-pic-7.png',
        technologies: ['Html', 'Css', 'Javascript', 'Ruby on rails'],
        seemore: 'seemore',
        source: 'source',
        type: ['Canopy', 'Backend Dev', '2015']
        },
        card4:{
        name: 'Multi-post stories',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
        featuredimg: './images/portfolio-pic-4.png',
        featuredimg2: './images/portfolio-pic-8.png',
        technologies: ['Html', 'Css', 'Javascript', 'Ruby on rails'],
        seemore: 'seemore',
        source: 'source',
        type: ['Canopy', 'Backend Dev', '2015']
        }
    }

    Object.keys(detailspopup).forEach((key) => {
        document.getElementById("details-popup").innerHTML += '
        <div class="card1 pos-1">
            <!--position row 1 for project portfolio image -->
            <div class="snapshoot-portfolio">
                <img class="portfolio-mob-img" src="./images/portfolio-pic-1.png" alt="1st-portfolio-photo">
            </div>
               <!--position row 2 for project title -->
                <h2 class="pr-title">
                    ${detailspopup[key].name}
                </h2>
                <!--position row 3 for project class -->
                <ul class="pr-type">
                    <li class="no-style"> ${detailspopup[key].type[0]} </li>
                    <li class="pr-tone"> ${detailspopup[key].type[1]} </li>
                    <li class="pr-tone"> ${detailspopup[key].type[2]} </li>
                </ul>    
                <!--position row 4 for project brief -->
                <p class="pr-description">
                    ${detailspopup[key].description}
                </p>
                 <!--position row 5 for language tags button name="html" type="button"-->
                <ul class="pr-button-tag-container no-style">
                    <li><a href="#" class="pr-button-tag"> ${detailspopup[key].technologies[0]}</a></li>
                    <li><a href="#" class="pr-button-tag">${detailspopup[key].type[1]}</a></li>
                    <li><a href="#" class="pr-button-tag">${detailspopup[key].type[2]}</a></li>
                </ul>
                 <!--position row 6 for action button -->
                <div class="pr-call-to-action-box">
                    <a href="#" class="pr-call-to-action-button"> ${detailspopup[key].seemore}</a>
                </div>
                <div class="pr-call-to-action-box">
                    <a href="#" class="pr-call-to-action-button"> ${detailspopup[key].source}</a>
                </div>
        </div>'
    })

</script>