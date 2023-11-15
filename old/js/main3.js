const canvas = document.getElementById('graph');
const ctx = canvas.getContext('2d');
canvas.width = 550;
canvas.height = 550;

function table() {
    ctx.fillStyle = 'rgba(180,180,180,1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawLineX(x) {//縦線
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(50,50,50,0.5)';
    ctx.lineWidth = 1;
    ctx.moveTo(x, 0);
    ctx.lineTo(x, (-canvas.height) + 50);
    ctx.stroke();
}

function drawColorLineX(x) {//縦線色付き
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(100,100,200, 1)';
    ctx.lineWidth = 2;
    ctx.moveTo(x, 0);
    ctx.lineTo(x, (-canvas.height) + 50);
    ctx.stroke();
}

function drawLineY(y) {//横線
    ctx.beginPath();
    ctx.lineWidth = 0.3;
    ctx.strokeStyle = 'rgba(10,10,10,0.5)';
    ctx.moveTo(0, -y);
    ctx.lineTo(canvas.width - 50, -y);
    ctx.stroke();
}

function drawColorLineY(y) {//横線色付き
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(150, 255, 150, 1)';
    ctx.moveTo(0, -y);
    ctx.lineTo(canvas.width - 50, -y);
    ctx.stroke();
}

function overRay() {//ラベル
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0,0,230,0.3)';
    ctx.lineWidth = 50;
    ctx.moveTo(0, 0);
    ctx.lineTo(0, canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0,0,230,0.3)';
    ctx.lineWidth = 50;
    ctx.moveTo(canvas.width, 0);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0,230,0,0.3)';
    ctx.lineWidth = 50;
    ctx.moveTo(0, canvas.height);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0,230,0,0.3)';
    ctx.lineWidth = 50;
    ctx.moveTo(0, 0);
    ctx.lineTo(canvas.width, 0);
    ctx.stroke();
}

function textLabel() {//テキスト
    ctx.font = '10px Courier';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText('Second', (canvas.width / 2), canvas.height - 15);

    ctx.font = '10px Courier';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText('number', 22, canvas.height - 15);
}

/* 以下描画の設定　*/
const lineSpacingX = (canvas.width - 50) / 50;
const lineColorSpacingX = (canvas.width - 50) / 10;
const lineSpacingY = (canvas.height - 50) / 50;
const lineSpacingColorY = (canvas.height - 50) / 10;

ctx.clearRect(0, 0, canvas.width, canvas.height);
table();
overRay();
textLabel();
ctx.translate(25, 525);

function drawLines() {
    /* 横線の設定　*/
    for (let x = 0; x < canvas.width - 50; x += lineSpacingX) {
        drawLineX(x);
    }

    for (let x = 0; x < canvas.width - 50; x += lineColorSpacingX) {
        drawColorLineX(x);
    }

    /* 縦線の設定 */
    for (let y = 0; y < canvas.height - 50; y += lineSpacingY) {
        drawLineY(y);
    }

    for (let y = 0; y < canvas.height - 50; y += lineSpacingColorY) {
        drawColorLineY(y);
    }
}

/* ランダムな数値を生成する */
function randomNum(min, max) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

let intervalSecond = 500;//時間間隔を設定

/* ----------- カウンターリスト ----------- */
let countNumber = setInterval(() => {//1ずつ増える
    const countPara = document.querySelector('#counter');
    countPara.textContent = countNumber - 1;
    countNumber++;
}, intervalSecond);

let countListNumber = 0; //カウンターリストに表示されている数値
let countList = setInterval(() => {
    if ((countNumber - 2) % 10 === 0) {
        const countListPara = document.createElement('p');
        countListPara.classList.add('count');
        countListPara.style.margin = '2px';
        countListPara.style.color = 'cyan';
        countListPara.style.fontSize = '0.8rem';
        countListPara.textContent = countNumber - 2;
        const countsDiv = document.querySelector('.counts');
        countsDiv.appendChild(countListPara);
        countsDiv.scrollTop = countsDiv.scrollHeight;//スクロールを最下部固定
        countListNumber++;
    } else {
        const countListPara = document.createElement('p');
        countListPara.classList.add('count');
        countListPara.style.margin = '2px';
        countListPara.style.color = 'white';
        countListPara.style.fontSize = '0.8rem';
        countListPara.textContent = countNumber - 2;
        const countsDiv = document.querySelector('.counts');
        countsDiv.appendChild(countListPara);
        countsDiv.scrollTop = countsDiv.scrollHeight;//スクロールを最下部固定
        countListNumber++;
    }
}, intervalSecond);
/* ----------- end ----------- */

let currentNumber = 0;//現在の数値を格納する // yの座標になる
// console.log(currentNumber);

/* ----------- 現在の値のリスト ----------- */
let timer = setInterval(() => {//要素追加,生成
    if ((countNumber - 2) % 10 === 0) {
        const timePara = document.createElement('p');
        timePara.classList.add('number');
        timePara.style.margin = '2px';
        timePara.style.color = 'red';
        timePara.style.fontSize = '0.8rem';
        currentNumber = timePara.textContent = randomNum(0, 100);
        const numbersDiv = document.querySelector('.numbers');
        numbersDiv.appendChild(timePara);
        numbersDiv.scrollTop = numbersDiv.scrollHeight;//スクロールを最下部固定
    } else {
        const timePara = document.createElement('p');
        timePara.classList.add('number');
        timePara.style.margin = '2px';
        timePara.style.color = 'white';
        timePara.style.fontSize = '0.8rem';
        currentNumber = timePara.textContent = randomNum(0, 100);
        const numbersDiv = document.querySelector('.numbers');
        numbersDiv.appendChild(timePara);
        numbersDiv.scrollTop = numbersDiv.scrollHeight;//スクロールを最下部固定
    }
}, intervalSecond);
/* ----------- end ----------- */

//横線を配列に格納する
const verticalLinesX = [];
for (let x = 0; x < canvas.width - 40; x += lineSpacingX) {
    verticalLinesX.push(x);
}

//縦線を配列に格納する
const horizontalLinesY = [];
for (let y = 0; y < canvas.height - 40; y += lineSpacingY) {
    horizontalLinesY.push(y);
}

const points = [];//各交差点に座標を割り当てて格納する
for (let x of verticalLinesX) {
    for (let y of horizontalLinesY) {
        points.push({ x, y });
        ctx.beginPath();
        ctx.arc(x, -y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0)';
        ctx.fill();
        ctx.closePath();
    }
}

const abc = points[2600];// 0-2600
ctx.beginPath();
ctx.arc(abc.x, -(abc.y), 2, 0, Math.PI * 2);
ctx.fillStyle = 'rgba(255, 0, 0,1)';
ctx.fill();
ctx.closePath();

setInterval(() => {
    if (countListNumber < 51) {//カウント数は`countListNumber`を使うように
        ctx.beginPath();
        ctx.arc((countNumber * 10) - 20, -(currentNumber * 5), 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 0, 0,1)';
        ctx.fill();
        ctx.closePath();
    } else if (countListNumber >= 51) {
        ctx.font = '12px Courier';
        ctx.fillStyle = 'red';
        ctx.textAlign = 'center';
        ctx.fillText('CountStop', canvas.width / 2, -510);
    }
    // console.log(`x:${(countNumber * 10) - 20}`);// <- xの座標に使える
    // console.log(`y:${currentNumber}`);   //yの座標に使える
}, intervalSecond);

function draw() {
    function drawGraphPoint() {
        for (let x of verticalLinesX) {
            for (let y of horizontalLinesY) {
                ctx.beginPath();
                ctx.arc(x, -y, 1, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(0, 255, 255,1)';
                ctx.fill();
                ctx.closePath();
            }
        }
    }
    drawGraphPoint();
}

function drawGraphPoint() {
    setInterval(() => {
        const isMultipleOf10 = (countNumber - 1) % 10 === 0;

        ctx.beginPath();
        ctx.arc((countNumber * 10) - 10, -(currentNumber) - 15 * 5, 2, 0, Math.PI * 2);
        ctx.fillStyle = isMultipleOf10 ? 'rgb(255, 0, 0)' : 'rgb(255, 255, 255)';//三項演算子
        ctx.fill();
        ctx.closePath();
    }, intervalSecond);
}

function drawDot() {
    ctx.beginPath();//原点の赤点
    ctx.arc(0, 0, 4, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();//右上
    ctx.arc(500, -500, 4, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();//右上
    ctx.arc(250, -250, 4, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
    ctx.fill();
    ctx.closePath();
}

drawLines();
// Container();
drawDot();
//draw();
