'use strict';
/* 描画する */
const canvas = document.getElementById('graph');
const ctx = canvas.getContext('2d');

function drawLineX(x, y) {
    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 0.05;
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
}

function drawColorLineX(x, y) {
    ctx.beginPath();
    ctx.strokeStyle = 'cyan';
    ctx.lineWidth = 0.3;
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
}

function drawLineY(x, y) {
    ctx.beginPath();
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = 'gray';
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
}

function overRay() {
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0,0,30,0.5)';
    ctx.lineWidth = canvas.width / 5.5;
    ctx.moveTo(0, 0);
    ctx.lineTo(0, canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0,30,0,0.5)';
    ctx.lineWidth = canvas.width / 11.8;
    ctx.moveTo(0, canvas.height);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.stroke();
}

function textLabel() {
    ctx.font = '12px Courier';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText('Second', 880 / 2, 390);

    ctx.font = '12px Courier';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText('number', 35, 400 / 2);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    overRay();
    textLabel();

    const lineSpacingX = canvas.width / 110;//縦線目盛り
    for (let x = 0; x < canvas.width; x += lineSpacingX) {
        drawLineX(x, 0);
    }

    //10目盛りごとの色線
    const lineColorSpacingX = canvas.width / 11;
    for (let x = 0; x < canvas.width; x += lineColorSpacingX) {
        drawColorLineX(x, 0);
    }

    //目盛り数字(横)
    const numbers = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    const intervalX = canvas.width / (numbers.length);
    numbers.forEach((number, index) => {
        ctx.font = '12px Courier';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'end';
        const x = index * intervalX + 75;
        ctx.fillText(number, x, canvas.height - 25);
    });

    //目盛り数字(縦)
    const numbersY = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];
    const intervalY = canvas.height / (numbersY.length) - 4;
    numbersY.forEach((number, index) => {
        ctx.font = '12px Courier';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'end';
        const y = index * intervalY + 7;
        ctx.fillText(number, 75, y);
    })

    const lineSpacingY = canvas.height / 11;//横線目盛り
    for (let y = 0; y < canvas.height; y += lineSpacingY) {
        drawLineY(0, y);
    }

}

/* ランダムな数値を生成する */
function randomNum(min, max) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

let currentNumber;//現在の数値を格納する
let intervalSecond = 5000;//時間間隔を設定
let timer = setInterval(() => {//要素追加,生成
    const timePara = document.createElement('p');
    timePara.classList.add('number');
    timePara.style.margin = '2px';
    timePara.style.color = 'orange';
    timePara.style.fontSize = '0.8rem';
    currentNumber = timePara.textContent = randomNum(0, 100);
    const numbersDiv = document.querySelector('.numbers');
    numbersDiv.appendChild(timePara);
}, intervalSecond);

function drawDot() {
    //x座標は80から8pxずつ増加する
    //ラベル(36.4)を除いたyは400 * (10 / 11) = 363.6
    //yの指定は363.6から400
    //ラベル(80)を除いたxは880 * (10 / 11) = 800
    ctx.translate(80, 369);//原点の再設定
    ctx.font = '16px Courier';
    ctx.fillStyle = 'rgb(255, 80, 80)';
    ctx.textAlign = 'center';
    ctx.shadowBlur = 20;
    ctx.shadowColor = 'aqua';
    ctx.fillText('+', 0, 0);
}

function drawDotB() {
    ctx.font = '12px Courier';
    ctx.fillStyle = 'aqua';

    ctx.textAlign = 'center';
    ctx.fillText('+', (10) + 70, -(10) - 28);
}
// function drawDotC() {
//     ctx.font = '12px Courier';
//     ctx.fillStyle = 'yellowgreen';
//     ctx.textAlign = 'center';
//     ctx.fillText('＊', 96, 250);
// }


draw();
drawDot();
drawDotB();
// drawDotC();
