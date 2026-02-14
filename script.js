
const texts=[
"நான் உன்னை காயப்படுத்திட்டேன் 😔",
"ஆனா உன்னை இழக்க நான் முடியாது 😭",
"உன்னோட சிரிப்பு இல்லாமல் என் நாள் வெறுமை 💔",
"மன்னிச்சுடு... நான் மாறுறேன் 🙏"
];

let i=0;
let j=0;

function typeWriter(text){
    if(j<text.length){
        document.getElementById("type").innerHTML += text.charAt(j);
        j++;
        setTimeout(()=>typeWriter(text),40);
    }
}

typeWriter(texts[0]);

function nextLine(){
    i=(i+1)%texts.length;
    j=0;
    document.getElementById("type").innerHTML="";
    typeWriter(texts[i]);
}

function forgive(){
    alert("😭❤️ Thank you... இனிமேல் உன்னை காயப்படுத்த மாட்டேன் 💖");
}

// hearts animation
const canvas=document.getElementById("hearts");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let hearts=[];
for(let i=0;i<50;i++){
    hearts.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        size:Math.random()*5+2,
        speed:Math.random()*1+0.5
    });
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="pink";
    hearts.forEach(h=>{
        ctx.beginPath();
        ctx.arc(h.x,h.y,h.size,0,Math.PI*2);
        ctx.fill();
        h.y -= h.speed;
        if(h.y<0) h.y=canvas.height;
    });
    requestAnimationFrame(draw);
}

draw();
