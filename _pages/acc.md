---
layout: splash
permalink: /
title: ""          
search: false      
---

<div class="booth-title">

<h1>
UK Universities<br>
at SC Conference
</h1>

<p>
Explore postgraduate opportunities in HPC, AI and Digital Research
</p>

</div>

<div class="interactive-layout">



    <div class="uk-map-container">

    <div class="map-glow"></div>

        <img
            src='https://github.com/mzhc13/uk-universities-map/blob/main/assets/images/map-uk-watercolour.png?raw=true'
            alt="Map of UK universities"
            class="uk-map">

         <!-- Durham -->
    <button class="marker"
            style="top:41%; left:70.5%;"
            data-uni="durham">
    </button>

    <!-- Belfast -->
    <button class="marker"
            style="top:43%; left:42.5%;"
            data-uni="belfast">
    </button>

    <!-- Leeds -->
    <button class="marker"
            style="top:49%; left:70.95%;"
            data-uni="leeds">
    </button>

    <!-- Sheffield -->
    <button class="marker"
            style="top:53%; left:71.4%;"
            data-uni="sheffield">
    </button>

    <!-- Manchester -->
    <button class="marker"
            style="top:52%; left:67%;"
            data-uni="manchester">
    </button>

    <!-- Birmingham -->
    <button class="marker"
            style="top:60.3%; left:69%;"
            data-uni="birmingham">
    </button>

    <!-- Cardiff -->
    <button class="marker"
            style="top:68.5%; left:61.4%;"
            data-uni="cardiff">
    </button>

    <!-- Oxford -->
    <button class="marker"
            style="top:65.8%; left:73.9%;"
            data-uni="oxford">
    </button>

    <!-- UCL -->
    <button class="marker"
            style="top:67%; left:83%;"
            data-uni="ucl">
    </button>

    <!-- Imperial -->
    <button class="marker"
            style="top:68%; left:80%;"
            data-uni="imperial">
    </button>

    <!-- Queen Mary -->
    <button class="marker"
            style="top:69%; left:82.5%;"
            data-uni="qmul">
    </button>

    </div>


    



   

</div>

<!-- ===================================================== -->

<div id="uni-modal" class="uni-modal">

<div class="uni-modal-card">

    <button id="close-modal" class="close-button">×</button>


    <div class="city-panel">

        <img id="city-image"
             src=""
             alt="University city">

    </div>


    <div class="uni-content">


        <div class="uni-header">

            <img id="uni-logo"
                 class="uni-logo">

            <div>

                <h2 id="uni-name"></h2>

                <p id="uni-location"></p>

            </div>

        </div>


        <div class="programme-banner">

            <h3 id="programme-name"></h3>

            <span id="programme-type"></span>

        </div>


        <p id="uni-description"></p>


        <div class="info-grid">

            <div class="info-card">
                <span class="label">Duration</span>
                <span id="programme-duration"></span>
            </div>

            <div class="info-card">
                <span class="label">Mode</span>
                <span id="programme-mode"></span>
            </div>

            <div class="info-card">
                <span class="label">Start</span>
                <span id="programme-start"></span>
            </div>

            <div class="info-card">
                <span class="label">Russell Group</span>
                <span id="uni-russell"></span>
            </div>

        </div>


        <div class="button-row">

            <a id="programme-link"
               class="primary-button">
               View Master's
            </a>

            <a id="uni-link"
               class="secondary-button">
               University website
            </a>

        </div>


    </div>

</div>






<style>

.map-glow{
    position:absolute;
    inset:10%;
    background:#ffffff;
    filter:blur(50px);
    z-index:-1;
}
/* ==========================================================
   GLOBAL BOOTH DESIGN
   ========================================================== */

body {

    background:
    radial-gradient(circle at top left, #eef7ff, transparent 35%),
    radial-gradient(circle at bottom right, #f8eaff, transparent 35%),
    #ffffff;

}


/* ==========================================================
   TITLE
   ========================================================== */

.booth-title {

    text-align:center;

    margin:1.5rem auto 0;

    max-width:900px;

}


.booth-title h1 {

    margin:0;

    font-size:3rem;

    font-weight:800;

    line-height:1.1;

    color:#002248;

}


.booth-title p {

    margin-top:1rem;

    font-size:1.2rem;

    color:#555;

}



/* ==========================================================
   MAIN LAYOUT
   ========================================================== */


.interactive-layout {




    gap:2.5rem;

    align-items:center;

    justify-content:center;

    width:100%;

    padding:3rem 2rem;

}



/* ==========================================================
   MAP
   ========================================================== */


.uk-map-container {

    position:relative;

    width:100%;

    max-width:900px;

    margin:auto;

}


.uk-map {

    width:200%;
    display:block;

}



/* ==========================================================
   SIDE INFORMATION CARDS
   ========================================================== */


.side-panel {

    display:flex;

    flex-direction:column;

    gap:2rem;

}



.side-panel .info-card {


    background:white;

    padding:2rem;


    border-radius:24px;


    box-shadow:
        0 15px 40px rgba(0,34,72,.12);


    border-top:6px solid #002248;


    transition:
        transform .25s ease,
        box-shadow .25s ease;

}


.side-panel .info-card:hover {


    transform:translateY(-5px);


    box-shadow:
        0 20px 50px rgba(0,34,72,.18);

}



.side-panel h2 {

    margin-top:0;

    color:#002248;

    font-size:1.5rem;

}



.side-panel p {

    color:#555;

    line-height:1.6;

    margin-bottom:0;

}



/* ==========================================================
   MAP MARKERS
   ========================================================== */


.marker {

    position:absolute;


    width:24px;

    height:24px;


    border:none;

    border-radius:50%;


    background:#002248;


    cursor:pointer;


    transform:
        translate(-50%,-50%);


    z-index:20;


    transition:
        transform .25s ease,
        background .25s ease,
        box-shadow .25s ease;


}



.marker::before {


    content:"";


    position:absolute;


    inset:-8px;


    border-radius:50%;


    border:

    2px solid rgba(214,40,40,.45);


    animation:pulse 2.5s infinite;


}



.marker:hover {


    background:#005bbb;


    transform:
        translate(-50%,-50%)
        scale(1.4);


    box-shadow:

        0 0 25px rgba(0,91,187,.5);


}



.marker:focus {

    outline:none;

}



/* pulse */

@keyframes pulse {


    0% {

        transform:scale(.8);

        opacity:.8;

    }


    70% {

        transform:scale(1.8);

        opacity:0;

    }


    100% {

        opacity:0;

    }

}



/* ==========================================================
   MODAL
   ========================================================== */


.uni-modal {


    position:fixed!important;


    inset:0;


    display:none;


    justify-content:center;

    align-items:center;


    background:

    rgba(0,0,0,.55);


    backdrop-filter:blur(5px);


    z-index:999999;


}



.uni-modal.show {

    display:flex;

}




.uni-modal-card {


    display:flex;


    width:90vw;


    max-width:1400px;


    height:85vh;


    background:white;


    border-radius:30px;


    overflow:hidden;


    box-shadow:

        0 30px 80px rgba(0,0,0,.35);


    border-top:

        12px solid var(--uni-color);


    animation:popup .3s ease;


}



/* ==========================================================
   CITY IMAGE
   ========================================================== */


.city-panel {

    width:45%;

    position:relative;

}


.city-panel img {


    width:100%;


    height:100%;


    object-fit:cover;


}



.city-panel::after {


    content:"";


    position:absolute;


    inset:0;


    background:

    linear-gradient(
        90deg,
        transparent,
        rgba(0,0,0,.35)
    );


}



/* ==========================================================
   MODAL CONTENT
   ========================================================== */


.uni-content {


    width:55%;


    padding:3rem;


    overflow-y:auto;


}




.uni-header {


    display:flex;


    align-items:center;


    gap:1.5rem;


}



.uni-logo {


    width:150px;


    height:150px;


    object-fit:contain;


    background:white;


    padding:1rem;


    border-radius:20px;


    box-shadow:

        0 10px 25px rgba(0,0,0,.1);


}



#uni-name {


    margin:0;


    font-size:2.2rem;


    color:var(--uni-color);


}



.uni-location {


    color:#666;

}



/* ==========================================================
   PROGRAMME BANNER
   ========================================================== */


.programme-banner {


    margin:2rem 0;


    padding:1.5rem;


    border-radius:18px;


    background:var(--uni-color);


    color:white;


}



.programme-banner h3 {


    margin:0 0 .5rem;

    color:white;

}



/* ==========================================================
   DETAILS GRID
   ========================================================== */


.info-grid {


    display:grid;
    font-size:1rem;


    grid-template-columns:repeat(2,1fr);


    gap:1rem;


}



.info-grid .info-card {


    background:#f6f8fb;


    padding:1.2rem;


    border-radius:15px;


}



.label {


    display:block;


    font-size:.75rem;


    font-weight:700;


    text-transform:uppercase;


    color:#777;


}




/* ==========================================================
   BUTTONS
   ========================================================== */


.button-row {


    display:flex;


    gap:1rem;


    margin-top:2rem;


}



.primary-button,
.secondary-button {


    padding:14px 25px;


    border-radius:12px;


    font-weight:700;


    text-decoration:none;


}



.primary-button {


    background:var(--uni-color);


    color:white!important;


}



.secondary-button {


    border:2px solid var(--uni-color);


    color:var(--uni-color)!important;


}



/* ==========================================================
   CLOSE BUTTON
   ========================================================== */


.close-button {


    position:absolute;


    margin:20px;


    right:0;


    width:45px;


    height:45px;


    border-radius:50%;


    border:none;


    font-size:25px;


    cursor:pointer;


    background:#eee;


}



.close-button:hover {


    background:#d62828;


    color:white;


}



/* ==========================================================
   ANIMATION
   ========================================================== */


@keyframes popup {


    from {

        opacity:0;

        transform:translateY(30px);

    }


    to {

        opacity:1;

        transform:none;

    }

}



/* ==========================================================
   RESPONSIVE
   ========================================================== */


@media(max-width:1200px){


.interactive-layout {


    grid-template-columns:1fr;


}



.side-panel {


    display:grid;

    grid-template-columns:repeat(2,1fr);

}



.uk-map-container {

    order:-1;

}


}



@media(max-width:700px){


.booth-title h1 {

    font-size:2rem;

}



.side-panel {

    grid-template-columns:1fr;

}



.uni-modal-card {

    flex-direction:column;

    width:95vw;

    height:90vh;

}



.city-panel,
.uni-content {

    width:100%;

}


.city-panel {

    height:35%;

}



.info-grid {

    grid-template-columns:1fr;

}


}


</style>



<script>
/*
==============================================================
UK Universities Interactive Map
==============================================================
*/

const universities = {

durham:{

    name:"Durham University",

    logo:"https://newresults.co.uk/wp-content/uploads/2022/02/durham-university-logo.png",
      cityImage:"https://images.pexels.com/photos/23884118/pexels-photo-23884118.jpeg",

    location:"Durham, England",
       brandColor:"#68246D",

    website:"https://www.durham.ac.uk/",

    programmeName:"MSc Scientific Computing and Data Analysis",

    programmeType:"Full-time • On campus",

    duration:"1 year",

    mode:"Full-time",

    start:"September",

    programmeLink:"https://www.durham.ac.uk/",

    russell:"Yes",

    description:
    "Develop advanced computational, programming and data analysis skills through a research-led Master's programme with strong links to high-performance computing and research software engineering."

},

sheffield: {

    name:"The University of Sheffield",

    logo:"https://sheffcol.ac.uk/uploads/academies/07c79200972ccb1880b2c23182109c8f.png",

    cityImage:"https://images.pexels.com/photos/26310472/pexels-photo-26310472.jpeg",

    location:"Sheffield, England",

    brandColor:"#460099",

    website:"https://www.sheffield.ac.uk/",

    programmeName:"Artificial Intelligence MSc",

    programmeType:"Full-time • On campus",

    duration:"1 year",

    mode:"Full-time",

    start:"September",

    programmeLink:"https://www.sheffield.ac.uk/postgraduate/taught/courses",

    russell:"Yes",

    description:
    "Study in a leading research environment with strong expertise in computer science, artificial intelligence and data science. Sheffield's MSc programmes combine advanced technical training, research excellence and practical experience to prepare students for careers in academia and industry."

},


ucl: {

    name:"University College London (UCL)",

    logo:"https://www.ucl.ac.uk/brand-and-experience/sites/brand_and_experience/files/styles/content_cards_mobile/public/2025-11/Web%20Cards_Logo.png.jpg?itok=EnXdgDmf",

    cityImage:"https://images.pexels.com/photos/34686159/pexels-photo-34686159.jpeg",

    location:"London, England",

    brandColor:"#392250",

    website:"https://www.ucl.ac.uk/",

    programmeName:"Computer Science MSc",

    programmeType:"Full-time • On campus",

    duration:"1 year",

    mode:"Full-time",

    start:"September",

    programmeLink:"https://www.ucl.ac.uk/prospective-students/graduate",

    russell:"Yes",

    description:
    "Join one of the world's leading multidisciplinary universities and study in the heart of London. UCL's MSc programmes in computer science, AI and data science offer research-led teaching, access to a global community, and opportunities to work on the technologies shaping the future."

},


imperial: {

    name:"Imperial College London",

    logo:"https://upload.wikimedia.org/wikipedia/commons/0/06/Imperial_College_London_new_logo.png",

    cityImage:"https://images.pexels.com/photos/29373124/pexels-photo-29373124.jpeg",

    location:"London, England",

    brandColor:"#0000CD",

    website:"https://www.imperial.ac.uk/",

    programmeName:"MSc Advanced Computing",

    programmeType:"Full-time • On campus",

    duration:"1 year",

    mode:"Full-time",

    start:"September",

    programmeLink:"https://www.imperial.ac.uk/study/subjects/computing/",

    russell:"Yes",

    description:
    "Imperial's computing programmes combine world-leading research with advanced technical training. Students work alongside experts in artificial intelligence, data science, software engineering and emerging digital technologies."

},


manchester: {

    name:"The University of Manchester",

    logo:"https://wp.logos-download.com/wp-content/uploads/2022/10/University_of_Manchester_Logo.png?dl",

    cityImage:"https://images.pexels.com/photos/34568220/pexels-photo-34568220.jpeg",

    location:"Manchester, England",

    brandColor:"#660099",

    website:"https://www.manchester.ac.uk/",

    programmeName:"MSc Advanced Computer Science",

    programmeType:"Full-time • On campus",

    duration:"1 year",

    mode:"Full-time",

    start:"September",

    programmeLink:"https://www.manchester.ac.uk/study/masters/",

    russell:"Yes",

    description:
    "Study at one of the UK's largest research universities, with expertise spanning artificial intelligence, data science, software engineering and high-performance computing. Manchester combines academic excellence with strong industry connections."

},


leeds: {

    name:"University of Leeds",

    logo:"https://international-sustainable-campus-network.org/wp-content/uploads/2019/10/University-of-Leeds_logo-750x750.png",

    cityImage:"https://images.pexels.com/photos/8070163/pexels-photo-8070163.jpeg",

    location:"Leeds, England",

    brandColor:"#000000",

    website:"https://www.leeds.ac.uk/",

    programmeName:"High-Performance Graphics and Games Engineering MSc",

    programmeType:"Full-time • On campus",

    duration:"1 year",

    mode:"Full-time",

    start:"September",

    programmeLink:"https://courses.leeds.ac.uk/",

    russell:"Yes",

    description:
    "Explore advanced topics in computer science through research-led teaching and practical projects. Leeds provides a vibrant postgraduate environment with expertise in artificial intelligence, data science and digital innovation."

},


birmingham: {

    name:"University of Birmingham",

    logo:"https://www.theade.co.uk/media/dntnuvbm/university-of-birmingham-logo.png?rmode=pad&width=226&height=95&bgcolor=fff",

    cityImage:"https://images.pexels.com/photos/36202585/pexels-photo-36202585.png",

    location:"Birmingham, England",

    brandColor:"#C59A00",

    website:"https://www.birmingham.ac.uk/",

    programmeName:"Cyber Security MSc",

    programmeType:"Full-time • On campus",

    duration:"1 year",

    mode:"Full-time",

    start:"September",

    programmeLink:"https://www.birmingham.ac.uk/postgraduate/courses",

    russell:"Yes",

    description:
    "Develop advanced skills in computing through a research-intensive Master's programme. Birmingham offers expertise across artificial intelligence, software engineering, cybersecurity and data-driven technologies."

},


cardiff: {

    name:"Cardiff University",

    logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWBzegvjnnTX4ClQ-gny-lweG_UALwGKayspYLU41Y5sFrQVHGP0z5gFQ&s=10",

    cityImage:"https://images.pexels.com/photos/20028958/pexels-photo-20028958.jpeg",

    location:"Cardiff, Wales",

    brandColor:"#E3241B",

    website:"https://www.cardiff.ac.uk/",

    programmeName:"Advanced Computer Science (MSc)",

    programmeType:"Full-time • On campus",

    duration:"1 year",

    mode:"Full-time",

    start:"September",

    programmeLink:"https://www.cardiff.ac.uk/study/postgraduate",

    russell:"Yes",

    description:
    "Cardiff's postgraduate computing programmes combine technical depth with research excellence. Students benefit from expertise in artificial intelligence, data science, cybersecurity and software development."

},


belfast: {

    name:"Queen's University Belfast",

    logo:"https://aspect.ac.uk/wp-content/uploads/2021/03/Aspect-Queens-University-Belfast-logo.png",

    cityImage:"https://images.pexels.com/photos/37547731/pexels-photo-37547731.jpeg",

    location:"Belfast, Northern Ireland",

    brandColor:"#E30613",

    website:"https://www.qub.ac.uk/",

    programmeName:"MSc Computer Science",

    programmeType:"Full-time • On campus",

    duration:"1 year",

    mode:"Full-time",

    start:"September",

    programmeLink:"https://www.qub.ac.uk/courses/postgraduate-taught/",

    russell:"Yes",

    description:
    "Queen's University Belfast offers research-led Master's programmes in computing and artificial intelligence, combining advanced technical learning with opportunities to work on real-world digital challenges."

},


oxford: {

    name:"University of Oxford",

    logo:"https://weadapt.org/wp-content/uploads/2012/12/University-of-Oxford-scaled.jpg",

    cityImage:"https://images.pexels.com/photos/10706578/pexels-photo-10706578.jpeg",

    location:"Oxford, England",

    brandColor:"#002248",

    website:"https://www.ox.ac.uk/",

    programmeName:"MSc in Advanced Computer Science",

    programmeType:"Full-time • On campus",

    duration:"1 year",

    mode:"Full-time",

    start:"October",

    programmeLink:"https://www.ox.ac.uk/admissions/graduate",

    russell:"Yes",

    description:
    "Oxford's postgraduate computing programmes provide an exceptional research environment where students explore advanced areas of computer science alongside internationally recognised academics."

},


qmul: {

    name:"Queen Mary University of London",

    logo:"https://images.seeklogo.com/logo-png/29/1/queen-mary-university-of-london-logo-png_seeklogo-299526.png",

    cityImage:"https://images.pexels.com/photos/35282396/pexels-photo-35282396.jpeg",

    location:"London, England",

    brandColor:"#0A397D",

    website:"https://www.qmul.ac.uk/",

    programmeName:"Advanced Computer Science MScc",

    programmeType:"Full-time • On campus",

    duration:"1 year",

    mode:"Full-time",

    start:"September",

    programmeLink:"https://www.qmul.ac.uk/postgraduate/taught/",

    russell:"Yes",

    description:
    "Queen Mary combines research excellence with a diverse London location. Its computing Master's programmes provide advanced training in artificial intelligence, data science and modern digital technologies."

}

};







/* ====================================================== */

const cityImage=document.getElementById("city-image");

const modal = document.getElementById("uni-modal");

const closeButton = document.getElementById("close-modal");

const nameElement = document.getElementById("uni-name");

const locationElement = document.getElementById("uni-location");

const descriptionElement = document.getElementById("uni-description");

const russellElement = document.getElementById("uni-russell");

const websiteElement = document.getElementById("uni-link");

const logoElement = document.getElementById("uni-logo");

const programmeName = document.getElementById("programme-name");

const programmeType = document.getElementById("programme-type");

const programmeDuration = document.getElementById("programme-duration");

const programmeMode = document.getElementById("programme-mode");

const programmeStart = document.getElementById("programme-start");

const programmeLink = document.getElementById("programme-link");


function openUniversity(id){

    const uni = universities[id];

    if(!uni) return;


        document.querySelector(".uni-modal-card")
        .style.setProperty("--uni-color", uni.brandColor);

    logoElement.src = uni.logo;

    logoElement.alt = uni.name + " logo";

    nameElement.textContent = uni.name;

    locationElement.textContent = uni.location;

    programmeName.textContent = uni.programmeName;

    programmeType.textContent = uni.programmeType;

    programmeDuration.textContent = uni.duration;

    programmeMode.textContent = uni.mode;

    programmeStart.textContent = uni.start;

    russellElement.textContent = uni.russell;

    descriptionElement.textContent = uni.description;

    programmeLink.href = uni.programmeLink;

    websiteElement.href = uni.website;

    cityImage.src = uni.cityImage;

cityImage.alt = uni.name + " city";

    modal.classList.add("show");

}
/* ====================================================== */

function closeModal(){

    modal.classList.remove("show");

}

/* ====================================================== */

document.querySelectorAll(".marker").forEach(marker=>{

    marker.addEventListener("click",()=>{

        openUniversity(marker.dataset.uni);

    });

});

/* ====================================================== */

closeButton.addEventListener("click",closeModal);

/* ====================================================== */

modal.addEventListener("click",(event)=>{

    if(event.target===modal){

        closeModal();

    }

});

/* ====================================================== */

document.addEventListener("keydown",(event)=>{

    if(event.key==="Escape"){

        closeModal();

    }

});

    </script>
