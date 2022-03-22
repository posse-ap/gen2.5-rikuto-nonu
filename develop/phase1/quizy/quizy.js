'use strict';


let choices = [
    ['たかなわ', 'こうわ', 'たかわ'],
    ['かめいど', 'かめと', 'かめど'],
    ['こうじまち', 'かゆまち', 'おかとまち'],
    ['おなりもん', 'ごせいもん', 'おかどもん'],
    ['とどろき', 'たたりき', 'たたら'],
    ['しゃくじい', 'いじい', 'せきこう'],
    ['ぞうしき', 'ざっしき', 'ざっしょく'],
    ['おかちまち', 'ごしろちょう', 'みとちょう'],
    ['ししぼね', 'しこね', 'ろっこつ'],
    ['こぐれ', 'こばく', 'こしゃく'],
];
var response;
// シャッフル


function shuffle(choice) {
    var answer = choice[0];
    console.log("変化前", choice);
    choice.sort(() => Math.random() - 0.5);
    console.log("変化後", choice);
    console.log("答えの位置は" + choice.indexOf(answer));
    response = choice.indexOf(answer);
}

// choices.forEach(element =>
//     shuffle(element)
// );


// shuffle(element));
// console.log(element));
// window.onload = random();




// 内容入れる
let main = ""
    // for (let i = 1; i <= 10; i++) {
choices.forEach(function(choice, index) {
    shuffle(choice);
    main += `
    
        <div class="field">
        <h2>
            ${index+1}.この地名は何て読む?
        </h2>
    
        <img src="./imgs/${index+1}.png" alt="高輪">
        <ul>
            <li class="list" id="choices${index}-0" onclick="questionValid(${index+1},0,${response})">${choices[index][0]}</li>
            
            <li class="list" id="choices${index}-1" onclick="questionValid(${index+1},1,${response})">${choices[index][1]}</li>
            <li class="list" id="choices${index}-2" onclick="questionValid(${index+1},2,${response})">${choices[index][2]}</li>
        </ul>
        </div>
    
        <div id="answerBox${index+1}" class="answerBox">
        <p id="answerP${index+1}" class="answerP"></p>
        <p id="answerExplanation${index+1}" class="answerExplanation" window.scrollby>正解は${choices[index][response]}です。 </p> 
        </div>
        `

    // 後でオンクリックの三つ目の数字変える
    entire.innerHTML = main;
});
// }
//setAttribute


function questionValid(question_id, selection_id, valid_id) {
    // const answer = choices[question_id][valid_id];
    let answerbox = document.getElementById(`answerBox${question_id}`);
    if (selection_id === valid_id) {
        console.log("正解！");
        answerbox.style.display = 'block';
        document.getElementById(`answerP${question_id}`).innerHTML = "正解です!";
        document.getElementById(`choices${question_id-1}-${valid_id}`).classList.add('changeBLUE');
        // let answerFrame = document.getElementById(`choices[${question_id}][${selection_id}]`);
        // answerFrame.classList.add('target');

        // for (let n = 0; n <= 2; n++) {
        //     let others = document.getElementById(`choices[${question_id-1}][${n}]`);
        //     others.classList.add('target');
        // }

        document.getElementById(`choices${question_id-1}-0`).classList.add('target');
        document.getElementById(`choices${question_id-1}-1`).classList.add('target');
        document.getElementById(`choices${question_id-1}-2`).classList.add('target');




        // answerFrame.style.backgroundColor = "blue";
        // let answerP = document.getElementById(`answerP${question_id}`);
        // answerP.style.backgroundColor = "blue";
        // listArray[i].style.color = "white";
        // answerBox1.style.display = "unset";
        // listArray[0].classList.add('target');
        // listArray[1].classList.add('target');
        // listArray[2].classList.add('target');

        // answerExplanation.innerHTML = `
        //     正解は$ { listArray[i].innerHTML }
        //     です！ `;


    } else {
        answerbox.style.display = 'block';
        document.getElementById(`answerP${question_id}`).innerHTML = "不正解です!";
        // for (let n = 0; n <= 2; n++) {
        //     let others = document.getElementById(`choices[${question_id}][${n}]`);
        //     others.classList.add('target');
        // }
        document.getElementById(`choices${question_id-1}-0`).classList.add('target');
        document.getElementById(`choices${question_id-1}-1`).classList.add('target');
        document.getElementById(`choices${question_id-1}-2`).classList.add('target');

        document.getElementById(`choices${question_id-1}-${selection_id}`).classList.add('changeRED');
        document.getElementById(`choices${question_id-1}-${valid_id}`).classList.add('changeBLUE');

        // listArray[i].addEventListener("click", function() {
        //     listArray[0].style.backgroundColor = "blue";
        //     listArray[0].style.color = "white";
        //     console.log("不正解！");
        //     listArray[i].style.backgroundColor = "red";
        //     listArray[i].style.color = "white";
        //     answerP.textContent = "不正解です";

        //     answerBox1.style.display = "unset";
        //     listArray[0].classList.add('target');
        //     listArray[1].classList.add('target');
        //     listArray[2].classList.add('target');


        //     answerExplanation.innerHTML = `
        //     正解は$ { listArray[0].innerHTML }
        //     です！ `;
        // })

    }
}
// let listArray = Array.from(list);
// console.log(listArray)
// console.log(listArray[0].innerHTML);
// for (let i = 0; i <= 2; i++) {
//     if (listArray[i].innerHTML == "たかなわ") {
//         listArray[i].addEventListener("click", function() {

//             console.log("正解！");
//             listArray[i].style.backgroundColor = "blue";
//             listArray[i].style.color = "white";
//             answerBox1.style.display = "unset";
//             listArray[0].classList.add('target');
//             listArray[1].classList.add('target');
//             listArray[2].classList.add('target');

//             answerExplanation.innerHTML = `
//     正解は$ { listArray[i].innerHTML }
//     です！ `;

//         })
//     } else {
//         listArray[i].addEventListener("click", function() {
//             listArray[0].style.backgroundColor = "blue";
//             listArray[0].style.color = "white";
//             console.log("不正解！");
//             listArray[i].style.backgroundColor = "red";
//             listArray[i].style.color = "white";
//             answerP.textContent = "不正解です";

//             answerBox1.style.display = "unset";
//             listArray[0].classList.add('target');
//             listArray[1].classList.add('target');
//             listArray[2].classList.add('target');


//             answerExplanation.innerHTML = `
//     正解は$ { listArray[0].innerHTML }
//     です！ `;
//         })
//     }
// }
// questionは[たかなわ, こうわ, たかわ] のことを指す