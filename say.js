let userseq = [];
let gameseq = [];

let started = false;
let level = 0;

let st = document.querySelector("button")
let h3 = document.querySelector("h3")
let btns = ["yellow", "blue", "green", "red"]

st.addEventListener("click", function(){
    if(started == false){
        console.log("game started");
        started = true;
        st.innerText = "Started"
        levelup();
    }
})



function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250)
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250)
}

function checkans(idx){
    if(userseq[idx] == gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup, 1000);
        }
    }else{
        h3.innerHTML = `game over!<b>Youe Score is ${level}</b><br>please try again`;
        document.querySelector("body").style.backgroundColor= "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150)
        reset();
    }
}

function levelup(){
    userseq = [];

    level++;
    h3.innerText = `level ${level}`

    let randidx = Math.floor(Math.random()*3);
    let randclr = btns[randidx];
    let randbtn = document.querySelector(`.${randclr}`);
    gameseq.push(randclr);
    gameflash(randbtn)
}

function btnpress(){
    let btn = this;

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor)

    checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn")
for(btn of allbtns){
    btn.addEventListener("click", btnpress)
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}