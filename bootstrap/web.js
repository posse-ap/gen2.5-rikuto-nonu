"use strict";
// 棒ぐらふ
var ctx = document.getElementById("barGraph");
var barGraph = new Chart(ctx, {
    type: 'bar',
    data: {
        //凡例のラベル
        labels: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '28', '30'],
        datasets: [{
                label: '訪問者数', //データ項目のラベル
                data: [1, 3, 4, 6, 8], //グラフのデータ
                backgroundColor: "#3ACCFD",
                borderColor: "#3ACCFD",
                borderWidth: 1,
                borderRadius: 20,
                // borderSkipped:false,
            }

        ]
    },
    options: {
        legend: { display: false, },
        title: {
            display: true,
            //グラフタイトル
            // text: 'Aサイト分析'
        },
        scales: {
            xAxes: [{
                // gridLines: [display = false],
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{

                // gridLines: [display = false],
                gridLines: {
                    display: false
                },

                ticks: {
                    suggestedMax: 8, //最大値
                    suggestedMin: 0, //最小値
                    stepSize: 2, //縦ラベルの数値単位
                    userCallback: function(tick) {
                        return tick.toString() + 'h';
                    }

                }
            }]
        },
    }
});
// 円グラフ
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(learningPieChart);

function learningPieChart() {

    var data = google.visualization.arrayToDataTable([
        ['Effort', 'Amount given'],
        ['JavaScript', 50.6],
        ['HTML', 10],
        ['SHEL', 10],
        ['情報システム基礎知識 （その他）', 10],
        ['CSS', 10],
        ['Laravel', 10],
        ['PHP', 10],
        ['SQL', 10],



    ]);

    var options = {
        pieHole: 0.5,
        // width: 280,
        // height: 300,
        width: '100%',
        height: '190',
        chartArea: { width: '100%', height: '100%', top: 0 },

        pieSliceTextStyle: {
            color: 'white',
        },
        legend: 'none',
        colors: ['#0345EC', '#0F71BD', '#1CBCDE', '#3CCEFE', '#B29EF3', '#6D46EC', '#4A17EF', '#3105C0'],



    };


    var chart = new google.visualization.PieChart(document.getElementById('learningPieChart'));
    chart.draw(data, options);
}
// 円グラフ2
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(learningPieChart2);

function learningPieChart2() {

    var data = google.visualization.arrayToDataTable([
        ['Effort', 'Amount given'],
        ['ドットインストール', 10],
        ['N予備', 10],
        ['Posse 課題', 10],

    ]);

    var options = {
        pieHole: 0.5,
        // width: 280,
        // height: 300,
        width: '100%',
        height: '190',
        chartArea: { width: '100%', height: '100%', top: 0 },
        pieSliceTextStyle: {
            color: 'white',
        },
        legend: 'none',
        colors: ['#0345EC', '#0F71BD', '#1CBCDE', '#f3b49f', '#f6c7b6'] //　色設定

    };

    var chart = new google.visualization.PieChart(document.getElementById('learningPieChart2'));
    chart.draw(data, options);
}
// modal
$("#modal-twitterShare-button").on("click", function() {

    // $("#modal-submit-button").on("click", function() {
    // var modal_loader = $('.modal_loader');
    // var modal = $('.modal');
    // var done_recod_post = $('.done_recod_post');

    // モーダルの非表示とローダ時のモーダルの表示
    // modal.css('display', 'none');
    // modal_loader.css('display', 'block');

    // くるくる回るやつ
    // var loader = $('.loader_wrap');
    // loader.toggle();

    // 記録投稿完了
    // done_recod_post.css('display', 'none');

    // modal_loaderというローダーのためのモーダルが出た時点でloderもdone_rec..も表示されているから、display noneで。
    // setTimeout(() => { console.log("this is the first message") }, 5000);

    $('form').submit(function() {

        setTimeout(() => {
            // setTimeout(function() {
            // loader.toggle();
            // done_recod_post.toggle();
            var left = Math.round(window.screen.width / 2 - 275);
            var top = (window.screen.height > 420) ? Math.round(window.screen.height / 2 - 210) : 0;
            window.open(
                "https://twitter.com/intent/tweet?text=" + encodeURIComponent(document.getElementById("modal-twitterComment-free").value),
                null,
                "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,left=" + left + ",top=" + top);

            alert('送信しました！');
        }, 3000);

    });

});






document.getElementById("selectYear").innerHTML = showYear();

function showYear() {
    var now = new Date();
    var year = now.getFullYear();


    return year;
}
// document.getElementById("selectMonth").innerHTML = showMonth();

// function showMonth() {
//     var now = new Date();
//     var month = now.getMonth() + 1;
//     return month
// }
/*記録投稿したらモーダルが開く*/
document.getElementById("recordPush").onclick = function() {
    const loader = document.getElementById("loader");
    const modal_overlay = document.getElementById("modal_overlay");
    const modal = document.getElementById("modal");
    modal_overlay.style.display = "block";
    modal.style.display = "block";
    loader.style.display = "none";
};

document.getElementById("modal-recordPosting-Box").onclick = function() {
    // alert("aaaa");
    const modalFirst = document.getElementById("modalFirst");
    const modalCompletion = document.getElementById("modalCompletion");
    const modal = document.getElementById("modal");
    const loader = document.getElementById("loader");
    const modalRecordPush = document.getElementById("modal-recordPosting-Box");
    const check = document.getElementById("modal-twitterShare-button");

    if (check.checked === true) {
        window.open("https://twitter.com/home?lang=ja");
    } else
    if (check.checked === false) {

        const batsu = document.getElementById("batsu");
        modalRecordPush.style.display = "none";
        loader.style.display = "block";
        modalFirst.style.display = "none";
        batsu.style.display = "none";

        // loader.style.display = "block";
        window.setTimeout(function() {
            batsu.style.display = "block";
            loader.style.display = "none";
            modalCompletion.style.display = "block";


        }, 3000);
    }


    // document.getElementById("modal").classList.add("displayNone");
};
document.getElementById("batsu").onclick = function() {
    const modal = document.getElementById("modal");
    const modal_overlay = document.getElementById("modal_overlay");
    // const modalCompletion = document.getElementById("modalCompletion ");
    // modalCompletion.style.display = "none";
    modal.style.display = "none";
    modal_overlay.style.display = "none";
    window.location.reload();
};