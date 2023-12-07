- [example-1-basic](#example-1-basic)
- [example-2-typing](#example-2-typing)
- [example-3-realTime](#example-3-realtime)

## example-1-basic
```js
// グラフのデータ
var data = {
  labels: ['A', 'B', 'C', 'D', 'E'],
  datasets: [{
    label: 'Sample Data',
    data: [12, 19, 3, 5, 2],
    backgroundColor: 'rgba(75, 192, 192, 0.2)', // バーの背景色
    borderColor: 'rgba(75, 192, 192, 1)',     // バーの境界線の色
    borderWidth: 1                            // バーの境界線の太さ
  }]
};

// グラフのオプション
var options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

// グラフを描画するキャンバス要素を取得
var ctx = document.getElementById('myChart').getContext('2d');

// 棒グラフを描画
var myChart = new Chart(ctx, {
  type: 'bar',  // グラフの種類を指定
  data: data,   // データ
  options: options // オプション
});

```

## example-2-typing
```html
<body>
  <!-- グラフを描画するキャンバス要素 -->
  <canvas id="progressChart" width="400" height="200"></canvas>
  <canvas id="errorChart" width="400" height="200"></canvas>

  <script>
    // 進捗のデータ
    var progressData = {
      labels: ['Session 1', 'Session 2', 'Session 3', 'Session 4'],
      datasets: [{
        label: 'Typing Speed',
        data: [50, 55, 60, 65], // WPM (Words Per Minute)
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false
      }]
    };

    // ミスタイプのデータ
    var errorData = {
      labels: ['Session 1', 'Session 2', 'Session 3', 'Session 4'],
      datasets: [{
        label: 'Error Rate',
        data: [5, 3, 2, 4], // ミスタイプの割合
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2
      }]
    };

    // 進捗のグラフを描画
    var progressCtx = document.getElementById('progressChart').getContext('2d');
    var progressChart = new Chart(progressCtx, {
      type: 'line',
      data: progressData,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // ミスタイプのグラフを描画
    var errorCtx = document.getElementById('errorChart').getContext('2d');
    var errorChart = new Chart(errorCtx, {
      type: 'pie',
      data: errorData
    });
  </script>
  ```

## example-3-realTime
```html
 <canvas id="realTimeChart" width="400" height="200"></canvas>

  <script>
    var ctx = document.getElementById('realTimeChart').getContext('2d');

    // 初期データ
    var initialData = {
      labels: [],
      datasets: [{
        label: 'Real-time Data',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false
      }]
    };

    var options = {
      scales: {
        x: {
          type: 'linear',
          position: 'bottom'
        },
        y: {
          beginAtZero: true
        }
      }
    };

    var realTimeChart = new Chart(ctx, {
      type: 'line',
      data: initialData,
      options: options
    });

    // リアルタイムデータ更新
    setInterval(function () {
      var newDataPoint = Math.floor(Math.random() * 100);
      var newData = {
        x: realTimeChart.data.labels.length,
        y: newDataPoint
      };

      // データ追加
      realTimeChart.data.labels.push(newData.x);
      realTimeChart.data.datasets[0].data.push(newData.y);

      // データ数が一定以上になったら先頭のデータを削除
      if (realTimeChart.data.labels.length > 10) {
        realTimeChart.data.labels.shift();
        realTimeChart.data.datasets[0].data.shift();
      }

      // グラフの更新
      realTimeChart.update();

    }, 1000); // 1秒ごとに更新
  </script>
  ```