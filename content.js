let category = document.querySelectorAll(".title");
let score = document.querySelectorAll(".score-value");
let average = document.querySelector(".average");
let remark = document.querySelector(".remark");
let svg = document.querySelectorAll(".icon");
let total = 0;

fetch("data.json")
    .then(response => response.json())
    .then(data => showData(data))


const showData = (elem) => {
    console.log(elem[0].category);

    for (let i = 0; i < category.length; i++) {
        category[i].innerHTML = elem[i].category;
        score[i].innerHTML = elem[i].score;
        svg[i].src = elem[i].icon;
        total += elem[i].score;
    }
    
    average.innerHTML = Math.round(total / 4);
    if (average.innerHTML > 70) {
        remark.innerHTML = "Great"
    } else if (average.innerHTML > 50) {
        remark.innerHTML = "Good"
    }
}



