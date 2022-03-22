var fruits = [
    { name: "りんご", price: "100", area: "青森" },
    { name: "バナナ", price: "200", area: "フィリピン" },
    { name: "みかん", price: "150", area: "愛媛" }
];
alert(fruits[0].area + "産の" + fruits[0].name + "の値段は" + fruits[0].price + "円です");

var result = confirm("あなたは高校生ですか?");
if (result == true) {
    alert("N高へようこそ")
} else {
    window.location.href = "https://nnn.ed.jp/admission";
}
alert(result);

var fruits = ["りんご", "バナナ", "スイカ"];
for (var i = 0; i < fruits.length; i++) {
    alert(fruits[i]);
}
console.log("これはデベロッパーツールのテストです");

var count = 0; //クイズが正解した数のカウントする変数 
//クイズの質問と答えを配列で納入した変数
var quiz = [{
        question: "犬は英語で言うと何と言うでしょう?",
        answer: "dog"
    },
    {
        question: "鳥は英語で言うと何と言うでしょう？",
        answer: "bird"
    },
    {
        question: "クジラは英語で何と言うでしょう？",
        answer: "whale"
    }
];

// クイズを繰り返し表示する
for (var i = 0; i < quiz.length; i++) {
    var your_answer = prompt(quiz[i].question);
    if (your_answer == quiz[i].answer) {
        console.log("正解!");
        count++;
    } else {
        console.logo("ハズレ!");
    }
}

// ゲームの結果を表示する
console.log(quiz.length + "門中、")