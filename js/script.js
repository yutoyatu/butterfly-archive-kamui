// ==========================================
// Butterfly Estate Archive
// Отряд Дыхания Насекомого
// Атмосферные эффекты
// ==========================================



// -----------------------------
// Лепестки глицинии
// -----------------------------


function createPetal() {


    const petal = document.createElement("div");


    petal.className = "petal";


    petal.innerHTML = "❀";



    petal.style.left =
        Math.random() * 100 + "vw";



    petal.style.animationDuration =
        (8 + Math.random() * 12) + "s";



    petal.style.opacity =
        0.3 + Math.random() * 0.35;



    petal.style.fontSize =
        (10 + Math.random() * 20) + "px";



    document.body.appendChild(petal);



    setTimeout(()=>{

        petal.remove();

    },20000);


}



// Создание лепестков

setInterval(createPetal,3500);







// -----------------------------
// Светящиеся частицы
// -----------------------------


function createParticle(){


    const particle =
    document.createElement("div");


    particle.className =
    "particle";



    particle.style.left =
    Math.random()*100+"vw";



    particle.style.top =
    Math.random()*100+"vh";



    particle.style.animationDuration =
    (4+Math.random()*6)+"s";



    document.body.appendChild(particle);



    setTimeout(()=>{


        particle.remove();


    },10000);



}



setInterval(createParticle,2500);







// -----------------------------
// Плавное появление блоков
// -----------------------------


const sections =
document.querySelectorAll(
".card, .about .container"
);



const observer =
new IntersectionObserver(


(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add(
"visible"
);


}



});


},


{
threshold:0.2
}



);



sections.forEach(section=>{


observer.observe(section);


});