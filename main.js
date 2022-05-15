const nums = document.querySelectorAll(".num");
const typed = document.querySelector(".type");
const result = document.querySelector(".result");

let val = "";

nums.forEach((num) => {
  num.addEventListener("click", (e) => {
    val += e.target.innerText;
    if (val.match(/[0-9]+[+-\/*][+-\/*]+/gi)) {
      const operator = val[val.length - 1];
      val = val.substring(0, val.length - 2) + operator;
    }
    typed.innerText = val;
    if (!val.match(/[0-9]+[+-\/*]$/gi)) {
      try {
        result.innerText = eval(val);
      } catch (error) {
        invalidExpression();
      }
    }
  });
});

document.querySelector(".itemAC").addEventListener("click", () => {
  typed.innerText = "0";
  result.innerText = "";
  val = "";
});

document.querySelector(".item-del").addEventListener("click", () => {
  if (val) {
    val = val.substring(0, val.length - 1);
    typed.innerText = val;
    try {
      result.innerText = eval(val);
    } catch (error) {
      invalidExpression();
    }
  }
});

document.querySelector(".item-eq").addEventListener("click", () => {
  try {
    val = eval(val).toString();
    typed.innerText = val;
    result.innerText = "";
  } catch (error) {
    invalidExpression();
  }
});

function invalidExpression() {
  typed.innerText = "0";
  result.innerText = "Invalid Expression";
  val = "";
}
