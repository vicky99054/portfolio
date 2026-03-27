// typing animation

new Typed("#typing",{

strings:[
"Java Backend Developer",
"Spring Boot Developer",
"Microservices Engineer",
"Kafka | Docker | REST APIs"
],

typeSpeed:60,
backSpeed:40,
loop:true

});



// scroll reveal animation

function reveal(){

let reveals=document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

let windowHeight=window.innerHeight;
let elementTop=reveals[i].getBoundingClientRect().top;
let visible=150;

if(elementTop<windowHeight-visible){
reveals[i].classList.add("active");
}

}

}

window.addEventListener("scroll",reveal);



// 3D background

const scene=new THREE.Scene();

const camera=new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer=new THREE.WebGLRenderer({
canvas:document.querySelector("#bg")
});

renderer.setSize(window.innerWidth,window.innerHeight);

camera.position.z=5;

const geometry=new THREE.TorusKnotGeometry(1,0.3,100,16);

const material=new THREE.MeshStandardMaterial({
color:0x00ffff,
wireframe:true
});

const torus=new THREE.Mesh(geometry,material);

scene.add(torus);

const light=new THREE.PointLight(0xffffff);
light.position.set(5,5,5);
scene.add(light);

function animate(){

requestAnimationFrame(animate);

torus.rotation.x+=0.005;
torus.rotation.y+=0.005;

renderer.render(scene,camera);

}

animate();



// fetch top 3 github repos

async function loadProjects(){

const response=await fetch(
"https://api.github.com/users/vicky99054/repos?sort=stars&per_page=3"
);

const data=await response.json();

const container=document.getElementById("projects-container");

data.forEach(repo=>{

const card=document.createElement("div");

card.className="project-card";

card.innerHTML=`

<h3>${repo.name}</h3>

<p>${repo.description || "Backend project"}</p>

<a href="${repo.html_url}" target="_blank">View Code</a>

`;

container.appendChild(card);

});

}

loadProjects();
