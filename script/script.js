const canvasLine = document.getElementById("line");
const ctx = canvasLine.getContext("2d");

// ランダム関数
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

// 線グラフ
// const lineChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["A", "B", "C", "D", "E"],
//         datasets: [{
//             label: "ABCDEグラフテスト",
//             data: [random(100, 0), random(100, 0), random(100, 0), random(100, 0), random(100, 0)],
//             backgroundColor: [
//                 'rgba(200,0,0,0.2)',
//                 'rgba(0,200,0,0.2)',
//                 'rgba(0,0,200,0.2)',
//                 'rgba(200,200,0,0.2)',
//                 'rgba(0,200,200,0.2)'
//             ],
//             borderColor: [
//                 'rgba(200,0,0,1)',
//                 'rgba(0,200,0,1)',
//                 'rgba(0,0,200,1)',
//                 'rgba(200,200,0,1)',
//                 'rgba(0,200,200,1)'
//             ], borderWidth: 2
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

const lineData = {
    labels: [0, 1, 2, 3, 4],
    datasets: [
        {
            label: 'リアルタイム線グラフ',
            data: [random(100, 0), random(100, 0), random(100, 0), random(100, 0), random(100, 0)],
            backgroundColor: 'rgba(0,200,0,0.2)',
            borderColor: 'rgba(0,200,200,0.4)',
            borderWidth: 3,
            fill: false
        },
        {
            label: 'Data 2',
            data: [random(100, 0), random(100, 0), random(100, 0), random(100, 0), random(100, 0)],
            backgroundColor: 'rgba(0,200,0,0.2)',
            borderColor: 'rgba(0,200,0,0.4)',
            borderWidth: 3,
            fill: false
        },
    ]
};


const lineOptions = {
    scales: {
        x: { type: 'linear', position: 'bottom' },
        y: { beginAtZero: true }
    }
};

const realTimeLine = new Chart(ctx, {
    type: 'line',
    data: lineData,
    options: lineOptions
});

setInterval(() => {
    const newData1 = {
        x: realTimeLine.data.labels.length,
        y: random(100, 0)
    };

    const newData2 = {
        x: realTimeLine.data.labels.length,
        y: random(100, 0)
    };

    realTimeLine.data.labels.push(newData1.x, newData2.x);
    realTimeLine.data.datasets[0].data.push(newData1.y);
    realTimeLine.data.datasets[1].data.push(newData2.y);
    /**
     * `realTimeLine`の`data`プロパティが参照している
     * `lineData`オブジェクトの`[n]`番目の、
     * 0~4のデータを格納した`data`配列に、
     * `push()`メソッドで`newData1(/2)`オブジェクトの`y`プロパティの
     * 数値を後ろに追加する
     */

    // グラフを更新
    realTimeLine.update();

}, 1000);

// 棒グラフ
const canvasBar = document.getElementById("bar");
const ctxBar = canvasBar.getContext("2d");

const barData = {
    labels: [0, 1, 2, 3, 4],
    datasets: [{
        label: 'サンプルデータ',
        data:[],
        backgroundColor: 'rgba(100,200,200,0.4)',
        borderColor: 'rgba(100,200,200,1)',
        borderWidth: 2
    }]
};

const barOptions = {
    scales: {
        // x: {type :'bar', }
        y: { beginAtZero: true}
    }
};

const realTimeBar = new Chart(ctxBar, {
    type: 'bar',
    data: barData,
    options: barOptions
});

setInterval(() => {
    const newData = {
        x: realTimeBar.data.labels.length,
        y: random(100,0)
    };

    realTimeBar.data.labels.push(newData.x);
    realTimeBar.data.datasets[0].data.push(newData.y);
    realTimeBar.update();
}, 1000);

// レーダーチャート

// ドーナツ

// 円グラフ

// 鶏頭図

// バブルチャート

// 散布図

// 面グラフ
