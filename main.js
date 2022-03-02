var elForm = document.querySelector(".form")
var elInput = document.querySelector(".form__input")
var elSpan= document.querySelector(".span")

var juft = []
var toq = []

elForm.addEventListener("submit", function(event){
    event.preventDefault();

    if (elInput.value % 2 == 0){
    elSpan.textContent = elInput.value + " soni juft";
    juft.push(elInput.value);
    console.log(juft);
    elInput.value = "";
    }
    // else if (elInput.value <= 0 && isNan(elInput.value)) {
    //     elSpan.textContent =  "0 dan katta raqam kiriting!";
    //     elInput.value = "";
    // }
    else {
    elSpan.textContent = elInput.value + " soni toq";
    toq.push(elInput.value);
    console.log(toq);
    elInput.value = "";
    }
  });

