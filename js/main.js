// IMPORT CONSTANTS HTML
const arrowEsq = document.querySelector('.esq');
const arrowDir = document.querySelector('.dir');

const images = document.querySelector('.imagens');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');

const btnStart = document.querySelector('.btn-start');
const btnGithub = document.querySelector('.btn-github');
const btnBack = document.querySelector('.btn-back');

const start = document.querySelector('.start');
const title = document.querySelector('.title');
const container = document.querySelector('.container');
const content = document.querySelector('.content');

let local = 0;

// FUNCTIONS
function verify(){
    if(img1.classList.contains('on')){
        return local = 1;
    }else if (img2.classList.contains('on')){
        return local = 2;
    }else if (img3.classList.contains('on')){
        return local = 3;
    }else if (img4.classList.contains('on')){
        return local = 4;
    }
}

function changeImageDir(){
    switch(local){
        case 1:
            img1.classList.remove('on');
            img1.classList.add('off');
            img2.classList.remove('off');
            img2.classList.add('on');
            break;

        case 2:
            img2.classList.remove('on');
            img2.classList.add('off');
            img3.classList.remove('off');
            img3.classList.add('on');
            break;

        case 3:
            img3.classList.remove('on');
            img3.classList.add('off');
            img4.classList.remove('off');
            img4.classList.add('on');
            break;

        case 4:
            img4.classList.remove('on');
            img4.classList.add('off');
            img1.classList.remove('off');
            img1.classList.add('on');
            break;

    }
}

function changeImageEsq(){
    switch(local){
        case 1:
            img1.classList.remove('on');
            img1.classList.add('off');
            img4.classList.remove('off');
            img4.classList.add('on');
            break;

        case 2:
            img2.classList.remove('on');
            img2.classList.add('off');
            img1.classList.remove('off');
            img1.classList.add('on');
            break;

        case 3:
            img3.classList.remove('on');
            img3.classList.add('off');
            img2.classList.remove('off');
            img2.classList.add('on');
            break;

        case 4:
            img4.classList.remove('on');
            img4.classList.add('off');
            img3.classList.remove('off');
            img3.classList.add('on');
            break;

    }
}

function removeScreen(rem, add){
    rem.classList.remove('on');
    rem.classList.add('off');
    add.classList.remove('off');
    add.classList.add('on');
}

//EVENTS
btnGithub.addEventListener('click', ()=>{
    window.open('https://github.com/Ronaldo3030', '_blank');
})
btnStart.addEventListener('click', ()=>{
    removeScreen(start, container);

    title.classList.remove('on');
    title.classList.add('off');
    content.classList.add('blur');
})
btnBack.addEventListener('click', ()=>{
    removeScreen(container, start);
    
    title.classList.remove('off');
    title.classList.add('on');
    content.classList.remove('blur');
})

arrowDir.addEventListener('click', ()=>{
    verify();
    changeImageDir();
    
})
arrowEsq.addEventListener('click', ()=>{
    verify();
    changeImageEsq();
})

