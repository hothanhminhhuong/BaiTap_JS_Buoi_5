// bài 1
const score_area_A = 2;
const score_area_B = 1;
const score_area_C = 0.5;

const score_target_1 = 2.5;
const score_target_2 = 1.5;
const score_target_3 = 1;

document.getElementById("score_calc").onclick = function () {
    const boardScore = +document.getElementById("board_score").value;
    const sjA = +document.getElementById("subjectA").value;
    const sjB = +document.getElementById("subjectB").value;
    const sjC = +document.getElementById("subjectC").value;
    sum1 = sjA + sjB + sjC;
    const area = document.getElementById("area").value;
    const target = document.getElementById("target").value;
    const pass = document.getElementById("score_pass");
    const actual = document.getElementById("score_actual");
    let score = 0;
    if (sjA + sjB + sjC < boardScore) {
        pass.innerHTML = `Rớt`;
        actual.innerHTML = `${sum1}`;
    }
    if (sjA == 0 || sjB == 0 || sjC == 0) {
        pass.innerHTML = `Rớt`;
        actual.innerHTML = `${sum1}`;
    }
    if (sjA + sjB + sjC >= boardScore && sjA > 0 && sjB > 0 && sjC > 0 ){
        if (area === "x" || area === "X"){
            if (target == 1){
                score += sum1 + score_target_1;
                pass.innerHTML = `Đậu`;
                actual.innerHTML = `${score}`;
            }
            if (target == 2){
                score += sum1 + score_target_2;
                pass.innerHTML = `Đậu`;
                actual.innerHTML = `${score}`;
            }
            if (target == 3){
                score += sum1 + score_target_3;
                pass.innerHTML = `Đậu`;
                actual.innerHTML = `${score}`;
            }
        } else if (area === "a" || area === "A"){
            if (target == 1){
                score += sum1 + score_target_1 + score_area_A;
                pass.innerHTML = `Đậu`;
                actual.innerHTML = `${score}`;
            }
            if (target == 2){
                score += sum1 + score_target_2 + + score_area_A;
                pass.innerHTML = `Đậu`;
                actual.innerHTML = `${score}`;
            }
            if (target == 3){
                score += sum1 + score_target_3 + + score_area_A;
                pass.innerHTML = `Đậu`;
                actual.innerHTML = `${score}`;
            }
        } else if (area === "b" || area === "B"){
            if (target == 1){
                score += sum1 + score_target_1 + score_area_B;
                pass.innerHTML = `Đậu`;
                actual.innerHTML = `${score}`;
            }
            if (target == 2){
                score += sum1 + score_target_2 + + score_area_B;
                pass.innerHTML = `Đậu`;
                actual.innerHTML = `${score}`;
            }
            if (target == 3){
                score += sum1 + score_target_3 + + score_area_B;
                pass.innerHTML = `Đậu`;
                actual.innerHTML = `${score}`;
            }
        } else if (area === "c" || area === "C"){
            if (target == 1){
                score += sum1 + score_target_1 + score_area_C;
                pass.innerHTML = `Đậu`;
                actual.innerHTML = `${score}`;
            }
            if (target == 2){
                score += sum1 + score_target_2 + + score_area_C;
                pass.innerHTML = `Đậu`;
                actual.innerHTML = `${score}`;
            }
            if (target == 3){
                score += sum1 + score_target_3 + + score_area_C;
                pass.innerHTML = `Đậu`;
                actual.innerHTML = `${score}`;
            }
        }
    }
}


// bài 2
const KW_1_50 = 500;
const KW_51_100 = 650;
const KW_101_200 = 850;
const KW_201_350 = 1100;
const KW_351 = 1300;
document.getElementById("pay").onclick = function () {
    const kw = +document.getElementById("meter").value;
    let price1 = 0;
    let price2 = 0;
    let price3 = 0;
    let price4 = 0;
    let price5 = 0;
    if (kw <= 50) {
        price1 += kw * KW_1_50;
    }
    else if (kw > 50 && kw <= 100) {
        price1 += 50 * KW_1_50;
        price2 += (kw - 50) * KW_51_100;
    }
    else if (kw > 100 && kw <= 200) {
        price1 += 50 * KW_1_50;
        price2 += 50 * KW_51_100;
        price3 += (kw - 100) * KW_101_200;
    }
    else if (kw > 200 && kw <= 350) {
        price1 += 50 * KW_1_50;
        price2 += 50 * KW_51_100;
        price3 += 100 * KW_101_200;
        price4 += (kw - 200) * KW_201_350;
    }
    else if (kw > 350) {
        price1 += 50 * KW_1_50;
        price2 += 50 * KW_51_100;
        price3 += 100 * KW_101_200;
        price4 += 350 * KW_201_350;
        price5 += (kw - 350) * KW_351;
    }
    const wrapResultEl = document.getElementById("result");
    const total = price1 + price2 + price3 + price4 + price5;
    wrapResultEl.style.display = "block";

    document.getElementById("price_total").innerHTML = total.toLocaleString("vn-VI", { style: 'currency', currency: 'VND' });

}