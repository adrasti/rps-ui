let l = 0
let w = 0
function computermove() {
    let a = Math.round(Math.random() * 2);
    const b = ["rock", "paper", "scissors"];
    return b[a];
}
function simulateround(cs, ps) {
    let bot;
    const compsel = document.getElementById(cs + '1');
    const playersel = document.getElementById(ps);
    compsel.classList.add('selection');
    setTimeout(function() {compsel.classList.remove('selection')}, 2000);
    playersel.classList.add('selection');
    setTimeout(function() {playersel.classList.remove('selection')}, 2000);
    if (cs == ps) {
        bot = 'Draw';
    }
    else if (cs == 'rock') {
        if (ps.toLowerCase() == 'paper') {
            w++;
            bot = ('You win. Paper > rock');
        }
        else if (ps.toLowerCase() == 'scissors') {
            l++;
            bot = 'You lose. Scissors < rock';
        }
    }
    else if (cs == 'paper') {
        if (ps.toLowerCase() == 'rock') {
            l++;
            bot = 'You lose. Rock < paper';
        }
        else if (ps.toLowerCase() == 'scissors') {
            w++;
            bot = 'You win. Scissors > paper';
        }
    }
    else if (cs == 'scissors') { 
        if (ps.toLowerCase() == 'paper') {
            l++;
            bot = 'You lose. Paper < scissors';
        }
        else if (ps.toLowerCase() == 'rock') {
            w++;
            bot = 'You win. Rock > scissors';
        }
    }
    const bottom = document.getElementById('bottom');
    bottom.innerText = bot;

    const top = document.getElementById('top');
    top.innerText = `${w} : ${l}`;
    if(w === 5 || l === 5) result();
    return;
}
function result() {
    let y;
    if(l===w) y = ('Draw');
    else if(l<w) {
        y = ('You win');
        document.getElementById('gif').src='./images/victory.gif';
    } else {
        y = ('You lose');
        document.getElementById('gif').src='./images/defeat.gif';
    };
    const res = document.getElementById('res');
    res.innerText = y;
    const score = document.getElementById('score');
    score.innerText = `${w} : ${l}`;
    document.getElementById('fore').style.display = 'flex';
}


function reset() {
    document.getElementById('fore').style.display = 'none';
    document.getElementById('top').innerText = "0 : 0";
    document.getElementById('bottom').innerText = "";
    l = 0;
    w = 0;
}
