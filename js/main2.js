const canvas = document.getElementById('graph');
const ctx = canvas.getContext('2d');
canvas.width = 1150;
canvas.height = 550;


function drawLineX(x, y) {//縦線
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.lineWidth = 0.5;
    ctx.moveTo(x, 0);
    ctx.lineTo(x, -canvas.height);
    ctx.stroke();
}

function drawColorLineX(x, y) {//縦線色付き
    ctx.beginPath();
    ctx.strokeStyle = 'cyan';
    ctx.lineWidth = 0.3;
    ctx.moveTo(x, 0);
    ctx.lineTo(x, -canvas.height);
    ctx.stroke();
}

function drawLineY(x, y) {//横線
    ctx.beginPath();
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.moveTo(0, -y);
    ctx.lineTo(canvas.width - 150, -y);
    ctx.stroke();
}

function overRay() {//ラベル
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0,0,30,0.3)';
    ctx.lineWidth = 200;
    ctx.moveTo(0, 0);
    ctx.lineTo(0, canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0,0,30,0.3)';
    ctx.lineWidth = 100;
    ctx.moveTo(canvas.width, 0);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0,30,0,0.3)';
    ctx.lineWidth = 50;
    ctx.moveTo(0, canvas.height);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0,30,0,0.3)';
    ctx.lineWidth = 50;
    ctx.moveTo(100, 0);
    ctx.lineTo(canvas.width, 0);
    ctx.stroke();
}

function textLabel() {//数字テキスト
    ctx.font = '12px Courier';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText('Second', (canvas.width / 2) + 75, canvas.height - 15);

    ctx.font = '12px Courier';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText('number', 44, canvas.height / 2);
}

function table(){//全体塗りつぶし
    ctx.fillStyle = 'rgba(30,30,30,1)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    table();
    overRay();
    textLabel();
    ctx.translate(100, 525);

    //縦線目盛り
    const lineSpacingX = (canvas.width - 150) / 110;
    for (let x = 0; x < canvas.width - 150; x += lineSpacingX) {
        drawLineX(x, 0);
    }

    //10目盛りごとの色線
    const lineColorSpacingX = (canvas.width - 150) / 10;
    for (let x = 0; x < canvas.width - 150; x += lineColorSpacingX) {
        drawColorLineX(x, 0);
    }

    //横線目盛り
    const lineSpacingY = canvas.height / 11;
    for (let y = 0; y < canvas.height; y += lineSpacingY) {
        drawLineY(0, y);
    }


    //目盛り数字(横)
    const numbers =
        [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
    const intervalX = (canvas.width - 30) / (numbers.length);
    numbers.forEach((number, index) => {
        ctx.font = '15px Courier';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'end';
        const x = index * intervalX;
        ctx.fillText(number, x, 15);

    });

    //目盛り数字(縦)
    const numbersY =
        ['', 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    const intervalY = canvas.height / (numbersY.length);
    numbersY.forEach((number, index) => {
        ctx.font = '15px Courier';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'end';
        const y = index * intervalY;
        ctx.fillText(number, -5, -y + 5);
    })

}

/* ランダムな数値を生成する */
function randomNum(min, max) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

let currentNumber;//現在の数値を格納する
let intervalSecond = 1000;//時間間隔を設定

let countNumber = setInterval(()=>{//1ずつ増える
    countNumber++;
},intervalSecond);
countNumber = 0;

let timer = setInterval(() => {//要素追加,生成
    if ((countNumber % 10) === 0) {
        const timePara = document.createElement('p');
        timePara.classList.add('number');
        timePara.style.margin = '2px';
        timePara.style.color = 'red';
        timePara.style.fontSize = '0.8rem';
        currentNumber = timePara.textContent = randomNum(0, 100);
        const numbersDiv = document.querySelector('.numbers');
        numbersDiv.appendChild(timePara);
    } else {
        const timePara = document.createElement('p');
        timePara.classList.add('number');
        timePara.style.margin = '2px';
        timePara.style.color = 'white';
        timePara.style.fontSize = '0.8rem';
        currentNumber = timePara.textContent = randomNum(0, 100);
        const numbersDiv = document.querySelector('.numbers');
        numbersDiv.appendChild(timePara);
    }
}, intervalSecond);

function drawGraphPoint() {
    setInterval(() => {
        const isMultipleOf10 = (countNumber - 1) % 10 === 0;
        
        ctx.beginPath();
        ctx.arc((countNumber * 10) - 10, -(currentNumber) * 5, 2, 0, Math.PI * 2);
        ctx.fillStyle = isMultipleOf10 ? 'rgb(255, 0, 0)' : 'rgb(255, 255, 255)';//三項演算子
        ctx.fill();
        ctx.closePath();
    }, intervalSecond);
}


// function drawGraphPoint() {

//     setInterval(() => {
//         if (countNumber - 1 === 10) {
//             ctx.beginPath();
//             ctx.arc((countNumber * 10) - 20, -(currentNumber) * 5, 5, 0, Math.PI * 2);
//             ctx.fillStyle = 'rgb(255, 0, 0)';
//             ctx.fill();
//             ctx.closePath();
//         } else {
//             ctx.beginPath();
//             ctx.arc((countNumber * 10) - 20, -(currentNumber) * 5, 5, 0, Math.PI * 2);
//             ctx.fillStyle = 'rgb(255, 255, 255)';
//             ctx.fill();
//             ctx.closePath();
//         }
//     }, intervalSecond);
// }

function drawDot() {//原点を表す
    ctx.beginPath();//原点の赤点
    ctx.arc(0, 0, 0.5, 0, Math.PI * 2);
    ctx.fillStyle = 'rgb(255, 80, 80)';
    ctx.fill();
    ctx.closePath();
}

draw();
drawGraphPoint();
drawDot();