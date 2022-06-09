let array = ['👈','👊','🖐'];


let sissor = document.getElementById("sissor"); //0
let rock = document.getElementById("rock"); //1
let paper = document.getElementById("paper"); //2

// let rand = Math.random();
// let result = Math.floor(rand * 3);  //0,1,2 랜덤한 수 뽑기 => index num으로 활용


// result, 즉 index 넘버 받아오는 변수
let med;

function enemyChoice(){
    let rand = Math.random();
    let result = Math.floor(rand * 3);
    let enemyPick = array[result];
    med = result;
    document.getElementById("enemy_choice").innerHTML = enemyPick;
    console.log(enemyPick);
}


// 점수 기록용 변수

let myScore = 0;
let enemyScore = 0;


// 가위바위보 변환
let timerID = setInterval((enemyChoice),250);


// 버튼 누르면 random 전환 멈추기
// 인수 비교
sissor.onclick = function(){sissorChoice()};
rock.onclick = function(){rockChoice()};
paper.onclick = function(){paperChoice()};



// 내 선택
// med, 0: 가위, 1: 주먹, 2: 보자기

function sissorChoice(){
    clearInterval((timerID),0);
    console.log(med)
    switch(med){
        case 0:
            alert("무승부");
            break;
        case 1:
            alert("졌습니다");
            enemyScore++;
            break;
        case 2:
            alert("이겼습니다")
            myScore++;
            break;
        default:
            alert("Error")
            break;
    };
    // alert 확인 버튼을 누르면 다시 실행
    location.reload()
}

function rockChoice(){
    clearInterval((timerID),0);
    console.log(med)
    switch(med){
        case 0:
            alert("이겼습니다");
            myScore++;
            break;
        case 1:
            alert("비겼습니다");
            break;
        case 2:
            alert("졌습니다");
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
            alert("졌습니다");
            enemyScore++;
            break;
        case 1:
            alert("이겼습니다");
            myScore++;
            break;
        case 2:
            alert("무승부")
            break;
        default:
            alert("Error")
            break;
    };
    location.reload()
}

