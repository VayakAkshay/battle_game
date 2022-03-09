score = 0;
document.onkeydown = function(e){
    // console.log("Key Code Is",e.keyCode);
    if(e.keyCode ==38){
        user = document.querySelector('.user');
        user.classList.add('userup');
        setTimeout(function(){
            user.classList.remove('userup');
        },1000);
    }
    if(e.keyCode == 39){
        user = document.querySelector('.user');
        userx = parseInt(window.getComputedStyle(user,null).getPropertyValue('left'));
        user.style.left = userx + 150 + "px";
    }
    if(e.keyCode == 37){
        user = document.querySelector('.user');
        userx = parseInt(window.getComputedStyle(user,null).getPropertyValue('left'));
        user.style.left = userx - 150 + "px";
        userxzero = 0 + "px";
        if(userx == userxzero){
            user.style.left = 0 + "px";
        }
    }
}
setInterval(() => {
    user = document.querySelector('.user');
    defence = document.querySelector('.defence');
    gameover = document.querySelector('over');
    ux = parseInt(window.getComputedStyle(user,null).getPropertyValue('left'));
    uy = parseInt(window.getComputedStyle(user,null).getPropertyValue('top'));

    dx = parseInt(window.getComputedStyle(defence,null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(defence,null).getPropertyValue('top'));

    ofsetx = Math.abs(ux-dx);
    ofsety = Math.abs(uy-dy);

    // console.log(ofsetx,ofsety);

    if(ofsetx<95 && ofsety<80){
        over = document.querySelector('.over');
        over.style.display = "flex";
        defence.classList.remove('defenceani');
        restart = document.getElementById('restart').addEventListener('click',()=>{
            location.reload();
            user.style.display = "block";
            defence.style.display = "block";
        });
        user.style.display = "none";
        defence.style.display = "none";
        score == 0;
            cross = false;
    }

    if(ofsetx<80 && ofsety>80){
        score += 1;
        gamescore = document.querySelector('.score');
        gamescore.innerText = "Your Score is " + score;
        if(score >= 3 && score <= 5){
            setTimeout(()=>{
                defencedur = parseFloat(window.getComputedStyle(defence,null).getPropertyValue('animation-duration'));
                newduration = defencedur - 0.1;
                defence = document.querySelector('.defence');
                defence.style.animationDuration = newduration + 's';
            },500);
        }
        else if(score >=6 && score <= 10){
            setTimeout(()=>{
                defencedur = parseFloat(window.getComputedStyle(defence,null).getPropertyValue('animation-duration'));
                newduration = defencedur - 0.1;
                defence = document.querySelector('.defence');
                defence.style.animationDuration = newduration + 's';
            },500);
        }
        else if(score >= 11){
            setTimeout(()=>{
                defencedur = parseFloat(window.getComputedStyle(defence,null).getPropertyValue('animation-duration'));
                newduration = defencedur - 0.1;
                defence = document.querySelector('.defence');
                defence.style.animationDuration = newduration + 's';
            },500);
        }
    }
}, 100);