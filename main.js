const nums = document.querySelectorAll(".num");
const typed = document.querySelector("#screen .type");
const result = document.querySelector("#screen .result");
let val = "";
nums.forEach((num) => {
    num.addEventListener("click", (e) => {
        try {
            val += e.target.innerText;
            typed.innerText = val;
            evaluate(val);
        } catch (error) {}
    });
});
document.querySelector(".itemAC").addEventListener("click", () => {
    typed.innerText = "0";
    result.innerText = "";
    val = "";
});
document.querySelector(".item-del").addEventListener("click", () => {
    val = val.substr(0, val.length - 1);
    typed.innerText = val;
    evaluate(val);
});
function evaluate(val) {
    try {
        result.innerText = eval(val);
    } catch (error) {}
}
document.querySelector(".item-eq").addEventListener("click", () => {
    try {
        val = eval(val).toString();
        typed.innerText = val;
        result.innerText = "";
    } catch (error) {}
});
