'use strict';
const list1 = document.getElementsByClassName("list1");
console.log(list1);
const answerBox1 = document.getElementById("answerBox1");
const answerExplanation = document.getElementById("answerExplanation");
const answerP = document.getElementById("answerP");

console.log("ok");
let list1Array = Array.from(list1);
console.log(list1Array)
console.log(list1Array[0].innerHTML);

for (let i = 0; i <= 2; i++) {
    if (list1Array[i].innerHTML == "たかなわ") {
        list1Array[i].addEventListener("click", function() {

            console.log("正解！");
            list1Array[i].style.backgroundColor = "blue";
            list1Array[i].style.color = "white";
            answerBox1.style.display = "unset";
            list1Array[0].classList.add('target');
            list1Array[1].classList.add('target');
            list1Array[2].classList.add('target');

            answerExplanation.innerHTML = `正解は${list1Array[i].innerHTML}です！`;

        })
    } else {
        list1Array[i].addEventListener("click", function() {
            list1Array[0].style.backgroundColor = "blue";
            list1Array[0].style.color = "white";
            console.log("不正解！");
            list1Array[i].style.backgroundColor = "red";
            list1Array[i].style.color = "white";
            answerP.textContent = "不正解です";

            answerBox1.style.display = "unset";
            list1Array[0].classList.add('target');
            list1Array[1].classList.add('target');
            list1Array[2].classList.add('target');


            answerExplanation.innerHTML = `正解は${list1Array[0].innerHTML}です！`;
        })
    }
}