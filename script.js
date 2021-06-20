

let start = document.querySelector ('#start');
let stop = document.querySelector ('#stop');
let reset = document.querySelector ('#reset');
let dec = document.querySelector ('#dec');
let min = document.querySelector ('#min');
let sec = document.querySelector ('#sec');
let decInitial = 00;
let minInitial = 00;
let secInitial = 00;
let timer;
let anchor = true;

function startWatch() {
    clearInterval (timer);
    timer = setInterval(startTime, 10);
    anchor = false;
}

function stopWatch () {
    clearInterval(timer);
    anchor = true;
    
}

function resetWatch () {
    if (anchor === false) {
        clearInterval (timer);
        anchor = true;
    } else if (anchor === true) {
        dec.innerHTML = "00";
        min.innerHTML = "00:";
        sec.innerHTML = "00:";
    }
}




let startTime =  () => {
    decInitial++

    if (decInitial < 10) {
        dec.innerHTML = "0" + decInitial;
    } else if (decInitial >= 10 && decInitial < 100) {
        dec.innerHTML = decInitial;
    }

    if ( decInitial === 100 && secInitial < 9) {
        decInitial = 00;
        secInitial++
        sec.innerHTML = `0${secInitial}:`;
    } else if ( decInitial === 100 && secInitial >= 9 && secInitial <=58) {
        decInitial = 00;
        secInitial++
        sec.innerHTML = `${secInitial}:`;
    }

    if (secInitial === 59 && minInitial < 9) {
        decInitial = 00;
        secInitial = 00;
        minInitial++
        min.innerHTML = `0${minInitial}:`
    } else if (secInitial === 59 && minInitial >= 10) {
        decInitial = 00;
        secInitial = 00;
        minInitial++
        min.innerHTML = `${minInitial}:`
    }    
}