const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

// 点の数
const numPoints = 501;

// let x = [];
// for (let i = 0; i < 51; i++) {
//     x.push(Math.round(i * 10));
// }
//xにオブジェクトとして数値をいれたい
//console.log(x);


// ランダムな座標を生成する関数
function getRandomCoordinate(maxX, maxY) {
    const x = Math.round((Math.random() * maxX) / 10) * 10;
    const y = Math.round((Math.random() * maxY) / 10) * 10;
    //一の位を0に固定する

    //console.log(y);
    //xの数値は0から始まり、前の数値より10ずつ大きくする
    //呼び出すごとにxの値が大きくなる
    return { x, y };
}

function drawLineX(x) {//縦線
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(50,50,50,0.5)';
    ctx.lineWidth = 1;
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
}

function drawLineY(y) {//横線
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(10,10,10,0.5)';
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
}

/*--------- 線の間隔 ---------*/
const lineSpacingX = canvas.width / 50;
const lineColorSpacingX = canvas.width / 10;
const lineSpacingY = canvas.height / 50;
const lineSpacingColorY = canvas.height / 10;
/*--------- ---------*/

/* 横線の設定　*/
for (let x = 0; x < canvas.width; x += lineSpacingX) {
    drawLineX(x);
}
/* 縦線の設定 */
for (let y = 0; y < canvas.height; y += lineSpacingY) {
    drawLineY(y);
}

// ランダムな点の座標を生成
const points = [];
for (let i = 0; i < numPoints; i++) {
    points.push(getRandomCoordinate(canvas.width, canvas.height));
}

// 点を描画する関数
function drawPoint(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
}

// 線を描画する関数
function drawLine(startX, startY, endX, endY) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
}

// 点を描画
points.forEach(point => {
    drawPoint(point.x, point.y);
});

// 点同士を線でつなぐ
for (let i = 0; i < points.length; i++) {
    //drawLine(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
    let closestIndex = -1;
    let closestDistance = Number.MAX_VALUE;

    for (let j = 0; j < points.length; j++) {
        if (i !== j) {
            const dx = points[j].x - points[i].x;
            const dy = points[j].y - points[i].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = j;
            }
        }
    }

    if (closestIndex !== -1) {
        drawLine(points[i].x, points[i].y, points[closestIndex].x, points[closestIndex].y);
    }
}
