'use strict'; {
    // document.write('1足す2は');
    // document.write(1 + 2);
    // document.write('です');
    // console.log('計算結果を表示しました。');
    // let x = 'Javascriptの変数';
    // document.write(x);

    // let before = 1000000;
    // let mul = 1.06 ** 10;
    // let after = before * mul;
    // let answer = after - before;
    // document.write(answer);

    // let w = 3; //三角形の底辺
    // let h = 10; //三角形の高さ
    // let area = (w * h) / 2; //三角形の面積の公式「(底辺)×(高さ)÷2」
    // document.write(area); //面積を出力する

    // let x = 290;
    // let y = x * 0.1;
    // let z = x + y;
    // document.write(z);

    // document.write(12 * 12 * 3.14);

    // let age = 16;
    // let result = null;
    // if (age >= 20) {
    //     result = '成年';
    // } else {
    //     result = '未成年';
    // }
    // document.write(result);

    // const number = 3;
    // if (number % 3 === 0) {
    //     console.log("サァン！");
    // } else {
    //     console.log(number);
    // }

    // const age = 16;
    // const member = true;
    // if (age <= 15) {
    //     console.log('値段は800円です');
    // } else if (member) {
    //     console.log('値段は1000円です');
    // } else {
    //     console.log('値段は1800円です');
    // }

    // for (let i = 10; i >= 0; i--) {
    //     console.log(`あと${i}日`);
    // }

    // let classes = ['A 組', 'B組', 'C組', 'D組'];
    // for (let grade = 1; grade < 4; grade++) {
    //     for (let i = 0; i < classes.length; i++) {
    //         document.write('<p>' + grade + '年' + classes[i] + '</p>');
    //     }
    // }

    // const scores = [23, 56, 78, 33, 78, 20, 55, 67, 78];
    // let maxScore = 0;
    // for (let i = 0; i < 9; i++) {
    //     if (maxScore < scores[i]) {
    //         maxScore = scores[i];
    //     }
    // }
    // console.log(`最高得点は ${maxScore}点です！`);

    let myBirthTime = new Date(1982, 11, 17, 12, 30);

    function updateParagraph() {
        let now = new Date();
        let seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
        document.getElementById('birth-time').innerText =
            '生まれてから' + seconds + '秒経過。';
    }
    setInterval(updateParagraph, 50);


}