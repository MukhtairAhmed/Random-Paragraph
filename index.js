var random_paragh = {
    '"Lorem"' : '"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"',
    '"John"' : '"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"',
    '"Jonny"' : '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci non rerum asperiores ex totam vitae"',
};


function btn(){
var now =Object.keys(random_paragh);
var authores = now[Math.floor(Math.random()*now.length)];
var quit = random_paragh[authores];

document.getElementById("para").innerHTML = quit;
document.getElementById("title").innerHTML = authores;

console.log(authores)
}








