let array = ['๐','๐','๐'];


let sissor = document.getElementById("sissor"); //0
let rock = document.getElementById("rock"); //1
let paper = document.getElementById("paper"); //2

// let rand = Math.random();
// let result = Math.floor(rand * 3);  //0,1,2 ๋๋คํ ์ ๋ฝ๊ธฐ => index num์ผ๋ก ํ์ฉ


// result, ์ฆ index ๋๋ฒ ๋ฐ์์ค๋ ๋ณ์
let med;

function enemyChoice(){
    let rand = Math.random();
    let result = Math.floor(rand * 3);
    let enemyPick = array[result];
    med = result;
    document.getElementById("enemy_choice").innerHTML = enemyPick;
    console.log(enemyPick);
}


// ์ ์ ๊ธฐ๋ก์ฉ ๋ณ์

let myScore = 0;
let enemyScore = 0;


// ๊ฐ์๋ฐ์๋ณด ๋ณํ
let timerID = setInterval((enemyChoice),250);


// ๋ฒํผ ๋๋ฅด๋ฉด random ์ ํ ๋ฉ์ถ๊ธฐ
// ์ธ์ ๋น๊ต
sissor.onclick = function(){sissorChoice()};
rock.onclick = function(){rockChoice()};
paper.onclick = function(){paperChoice()};



// ๋ด ์ ํ
// med, 0: ๊ฐ์, 1: ์ฃผ๋จน, 2: ๋ณด์๊ธฐ

function sissorChoice(){
    clearInterval((timerID),0);
    console.log(med)
    switch(med){
        case 0:
            alert("๋ฌด์น๋ถ");
            break;
        case 1:
            alert("์ก์ต๋๋ค");
            enemyScore++;
            break;
        case 2:
            alert("์ด๊ฒผ์ต๋๋ค")
            myScore++;
            break;
        default:
            alert("Error")
            break;
    };
    // alert ํ์ธ ๋ฒํผ์ ๋๋ฅด๋ฉด ๋ค์ ์คํ
    location.reload()
}

function rockChoice(){
    clearInterval((timerID),0);
    console.log(med)
    switch(med){
        case 0:
            alert("์ด๊ฒผ์ต๋๋ค");
            myScore++;
            break;
        case 1:
            alert("๋น๊ฒผ์ต๋๋ค");
            break;
        case 2:
            alert("์ก์ต๋๋ค");
            enemyScore++;
            break;
        default:
            alert("Error")
            break;
    };
    location.reload()
}

function paperChoice(){
    clearInterval((timerID),0);
    console.log(med)
    switch(med){
        case 0:
            alert("์ก์ต๋๋ค");
            enemyScore++;
            break;
        case 1:
            alert("์ด๊ฒผ์ต๋๋ค");
            myScore++;
            break;
        case 2:
            alert("๋ฌด์น๋ถ")
            break;
        default:
            alert("Error")
            break;
    };
    location.reload()
}

