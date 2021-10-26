const string=`
.skin *{box-sizing:border-box;margin:0;padding:0}
.skin *::before{box-sizing:border-box;}
.skin *::after{box-sizing:border-box;}
#html{
    background:rgb(255,229,0);
}
.skin{
    min-height:50h;

    position: relative;
}
.nose .tri{
    border:10px solid black;
    border-color:black transparent transparent ;
    border-bottom: none;
    width:0px;
    height:0px;
    position: relative;
    left:50%;
    top:100px;
    margin-left:-10px;
}
.nose .semi{
    position: relative;
    left: 50%;
    width:0px;
    height:0px;
    margin-left:-10px;
    top:100px;
    border:10px solid black;
    border-radius:10px 10px 0 0 ;
    border-bottom: none;
}
@keyframes wave{
    0%{
        transform:rotate(0deg);
    }
    33%{
        transform:rotate(1deg);
    }
    66%{
        transform:rotate(-1deg);
    }
    100%{
        transform:rotate(0deg);
    }
}
.nose:hover{
    transform-origin: center bottom;
    animation:wave 1s infinite linear;
}
.eye{
    width: 64px;
    height: 64px;
    position: absolute;
    left:50%;
    top:30px;
    margin-left:-32px;
    background-color: rgb(45,46,45);
    border-radius:50%;
}
.eye::before{
    content:'';
    display: block;
    width:25px;
    height:25px;
    margin-left:8px;
    margin-top:6px;
    border-radius:50%;
    background-color: whitesmoke;
}
.eye.left{
    transform:translateX(-130px);
}
.eye.right{
    transform: translateX(130px);
}
.mouth{
    width:200px;
    height:200px;
    position:absolute;
    left:50%;
    top:140px;
    margin-left:-100px;
}
.mouth .up{
    position: relative;
    z-index: 1;

}
.mouth .up .lip{
    background:rgb(255,229,0);
    width:100px;
    height:30px;
    border:5px solid black;
}
.mouth .up .lip::before{
    content:'';
    display:block;
    width:5px;
    height:5px;
    position:absolute;
    background-color: rgb(255,229,0);
}
.mouth .up .lip.left{
    border-radius:0 0 10px 50px;
    border-top:none;
    border-right:none;
    transform:rotate(-20deg);
    position: absolute;
}
.mouth .up .lip.left::before{
    right:-2px;
    bottom:-2px;
}
.mouth .up .lip.right{
    border-radius:0 0 50px 10px;
    border-left:none;
    border-top:none;
    transform:rotate(20deg);
    position: absolute;
    left:97px;
}
.mouth .up .lip.right::before{
    left:-3px;
    bottom:-1px;
}
.mouth .down{
    position:absolute;
    width:100%;
    height:180px;
    top:3px;
    overflow: hidden;
}
.mouth .down .circle1{
    border:5px solid black;
    width:100px;
    height:800px;
    position: absolute;
    bottom:0;
    left:50px;
    border-radius:100px/300px;
    background-color: rgb(155,0,10);
    overflow: hidden;
}
.mouth .down .circle1 .circle2{
    position: absolute;
    bottom:-150px;
    width:200px;
    height:300px;
    background-color: rgb(255,71,96);
    margin-left:-50px;
    border-radius:100px;
}
.face{
    position:absolute;
    width:80px;
    height:80px;
    left:50%;
    border:3px solid black;
    top: 200px;
    margin-left:-35px;
    z-index:3;
    border-radius:50%;
    background-color: rgb(255,24,0);
}
.face.left{
    transform:translateX(-200px);
}
.face.right{
    transform:translateX(200px);
}
`;
domoText=document.querySelector('#demoText');
demoHTML=document.querySelector('#demoHTML');
let n=1;
let id;
let player={
    init:function(){
        demoText.innerText=string.slice(0,n);
        demoHTML.innerHTML=string.slice(0,n);
        player.play(10);
        player.bindEvents();
    },
    events:{
        "#pause":'pause',
        '#start':'start',
        '#quick':'quick',
        '#slow':'slow',
        '#medium':'medium'
    },
    bindEvents:()=>{
        
        for(let key in player.events){
            document.querySelector(key).onclick=player[player.events[key]];
        }
    },
    fn:function(){
        if(n>string.length){
            window.clearInterval(id);
            return;
        }
        demoText.innerText=string.slice(0,n);
        demoHTML.innerHTML=string.slice(0,n);
        n++;
        demoText.scrollTop=demoText.scrollHeight;
    },
    play:function(time){
        id=setInterval(player.fn,time);
    },
    pause:()=>{
        console.log(1);
        window.clearInterval(id);
    },
    start:()=>{
        player.play(10);
    },
    quick:()=>{
        player.pause();
        player.play(0);
    },
    medium:()=>{
        player.pause();
        player.play(10);
    },
    slow:()=>{
        player.pause();
        player.play(100);
    }
};
player.init();