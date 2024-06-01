const popup = document.querySelector(".popup");
const quizSections = document.getElementById("quiz-sections");
const mainQuiz = document.getElementById("main");
mainQuiz.style.display = 'none';
const scoreWindow = document.getElementById('score-window');
scoreWindow.style.display = 'none';
document.getElementById('check-btn').style.display='none';
document.getElementById('prev-btn').style.display='none';
document.getElementById('submit-btn').style.display='none';
document.getElementById("back-btn").style.display='none';
var coins=0;


var Qdata = [];
var Adata = [];
if (sessionStorage.getItem('ispopupshown') === null)
  sessionStorage.setItem('ispopupshown', 'false');
//calling popup function if popup is not shown previously
if (sessionStorage.getItem('ispopupshown') === 'false')
  showPopup();
else
  hidePopup();
//popup-functions
function showPopup() {
  popup.style.display = "block";
  document.getElementById("popup-effected-blur-area").classList.add("blur-filter");
}

function hidePopup() {
  popup.style.display = "none";
  popup.parentElement.style.zIndex = '-9999';
  document.getElementById("popup-effected-blur-area").classList.remove("blur-filter");
  sessionStorage.setItem('ispopupshown', 'true');
}

function showHistorical() {
  correctanswered.clear();
  answered.clear();
  resetColors();
  indexCounter = 0;
  quizSections.style.display = 'none';
  mainQuiz.style.display = 'block';
  document.getElementById("option-container").style.display = 'block';
  document.getElementById("qr-container").style.display = 'none';
  document.getElementById("scan-qr").style.display = 'none';
//   document.getElementById("check-btn").style.display = '';

  // !!! Very Important- question must be in tempalate ex- ':' is necessary just after Qno. . I used QQ and qqa,qqb,qqc,qqd to separate question and options.

  Qdata = [
    "Q1: When was the Kachnar City Shiva Statue in Jabalpur unveiled? QQ qqa) 2006 qqb) 2007 qqc) 2008 qqd) 2010",
    "Q2: Who is the sculptor behind the creation of the Kachnar City Shiva Statue? QQ qqa) Anish Kapoor qqb) Shri Jaishankar Tiwari qqc) Ram V. Sutar qqd) Subodh Gupta",
    "Q3: The height of the Kachnar City Shiva Statue is: QQ qqa) 55 feet qqb) 76 feet qqc) 65 feet qqd) 80 feet",
    "Q4: Which festival is celebrated with great fervor at the Kachnar City Shiva Statue every year? QQ qqa) Holi qqb) Diwali qqc) Maha Shivaratri qqd) Makar Sankranti",
    "Q5: The Kachnar City Shiva Statue is adorned with how many smaller statues of Lord Shiva? QQ qqa) 12 qqb) 11 qqc) 108 qqd) 18"
  ];
  Adata = [
    "a) 2006 QQ The Kachnar City Shiva Statue in Jabalpur was unveiled in 2006.",
    "b) Shri Jaishankar TiwariShri Jaishankar Tiwari QQ The Kachnar City Shiva Statue was sculpted by Shri Jaishankar Tiwari.",
    "b) 76 feets QQ IThe height of the Kachnar City Shiva Statue is 76 feets",
    "c) Maha Shivratri QQ Maha Shivratri is celebrated with grandeur at the Kachnar City Shiva Statue, attracting a large number of devotees.",
    "a) 12 QQ The Kachnar City Shiva Statue is adorned with 12 Jyotirlings."
  ];
  iterateQuestion(0);
}

function showGeographical() {
  correctanswered.clear();
  answered.clear();
  resetColors();
  indexCounter = 0;
  quizSections.style.display = 'none';
  mainQuiz.style.display = 'block';
  document.getElementById("option-container").style.display = 'block';
  document.getElementById("qr-container").style.display = 'none';
  document.getElementById("scan-qr").style.display = 'none';
//   document.getElementById("check-btn").style.display = '';


  // !!! Very Important- question must be in tempalate ex- ':' is necessary just after Qno. . I used QQ and qqa,qqb,qqc,qqd to separate question and options.
  Qdata = [
    "Q1: What river flows near the Kachnar City Shiva Statue in Jabalpur? QQ qqa) Ganga qqb) Yamuna qqc) Narmada qqd) Saraswati",
    "Q2: In which city is the Kachnar City Shiva Statue located? QQ qqa) Indore qqb) Jabalpur qqc) Bhopal qqd) Gwalior",
    "Q3: Which material is primarily used for the construction of the Kachnar City Shiva Statue? QQ qqa) Gold qqb) Reinforced Concrete and White Marble  qqc) Bronze qqd) Wood",
    "Q4: WWhat is the height of the Kachnar City Shiva Statue? QQ qqa) 50 feets qqb) 76 feets qqc) 87 feets qqd) 80 feets",
    "Q5: What is the special feature of the Kachnar City Shiva Statue? QQ qqa) Emerald Eyes qqb) Stainless Steel Trident (Trishul)  qqc) Gold Garlands qqd) Ruby Crown"
  ];
  Adata = [
    "c) Narmada QQ Narmada flows near the Kachnar City Shiva Statue in Jabalpur",
    "b) Jabalpur QQ The Kachnar City Shiva Statue located in Jabalpur",
    "b) Reinforced Concrete and White Marble QQ Reinforced Concrete and White Marble is primarily used for the construction of Lord Shiva Statue.",
    "b) 76 feets QQ The height of the Kachnar City Shiva Statue is 76 feets.",
    "b) Stainless Steel Trident (Trishul) QQ Stainless Steel Trident (Trishul) is a speial indentification."
  ];
  iterateQuestion(0);

}

var isLiveQuizActive = false;
document.getElementById("qr-container").style.display = 'none';
document.getElementById("scan-qr").style.display = 'none';
function showLive() {
  correctanswered.clear();
  answered.clear();
  resetColors();
  document.getElementById("qr-container").style.display = '';
  document.getElementById("img-container").style.display = '';
  document.getElementById("check-btn").style.display = 'none';
  document.getElementById("scan-qr").style.display = '';

  indexCounter = 0;
  isLiveQuizActive = true;
  quizSections.style.display = 'none';
  mainQuiz.style.display = 'block';
  document.getElementById("option-container").style.display = 'none';
  Qdata = [
    "Q1: I'm a serene spot, where nature's art is found, With marble wonders, my beauty does astound. In Kachnar City's realm, this tranquil site, What am I, where day turns to night?",
    "Q2: FI'm a garden of blooms, colors so bright, Where butterflies dance in the soft sunlight. In Kachnar City's embrace, this floral delight, What am I, where nature's palette takes flight?",
    "Q3: I'm a gate of wonder, adorned with grace, Where Shiva's blessings, one can embrace. With intricate carvings, a sight to behold, In Kachnar City's realm, my stories are told."
  ];
  Adata = [
    "Kachnar City Shiva Statue Live Q1",
    " Kachnar City Garden Live Quiz Q2",
    "Kachnar City Shiv Temple Entry Gate Live Quiz Q3"
  ];
  iterateLiveQ(0);
}

//Iterating between Live questions
function iterateLiveQ(index) {
  qno.innerText = Qdata[index].substring(0, Qdata[index].indexOf(":") + 1);
  question.innerText = Qdata[index].substring(Qdata[index].indexOf(":") + 1);
  correctOption = Adata[index];
  qImg.src = 'images/live-q' + qno.innerText.substring(1, 2) + '.jpg';
  scannedValue.innerText = '';
  document.getElementById("qr-container").style.display = '';
  document.getElementById("scan-qr").disabled = false;
  document.getElementById("scan-qr").innerText = 'Scan QR';
}



//  Quiz
//Variables
const question = document.getElementById("question");
const qno = document.getElementById("q-no");
const qImg = document.getElementById('q-img');
var optionA = document.getElementById("option-a");
var optionB = document.getElementById("option-b");
var optionC = document.getElementById("option-c");
var optionD = document.getElementById("option-d");
const scannedValue = document.getElementById('outputData');
var correctOption;
const answered = new Set();
const correctanswered = new Set();
const details = document.querySelectorAll(".details");


//Iterating between questions
function iterateQuestion(index) {
  qno.innerText = Qdata[index].substring(0, Qdata[index].indexOf(":") + 1);
  question.innerText = Qdata[index].substring(Qdata[index].indexOf(":") + 1, Qdata[index].lastIndexOf("QQ"));
  optionA.value = Qdata[index].substring(Qdata[index].lastIndexOf("qqa") + 2, Qdata[index].lastIndexOf("qqb"));
  optionB.value = Qdata[index].substring(Qdata[index].lastIndexOf("qqb") + 2, Qdata[index].lastIndexOf("qqc"));
  optionC.value = Qdata[index].substring(Qdata[index].lastIndexOf("qqc") + 2, Qdata[index].lastIndexOf("qqd"));
  optionD.value = Qdata[index].substring(Qdata[index].lastIndexOf("qqd") + 2);
  correctOption = Adata[index].substring(0, Adata[index].indexOf('QQ'));
  document.querySelector("label[for=option-a]").innerText = optionA.value;
  document.querySelector("label[for=option-b]").innerText = optionB.value;
  document.querySelector("label[for=option-c]").innerText = optionC.value;
  document.querySelector("label[for=option-d]").innerText = optionD.value;
  document.getElementById("detail-" + correctOption[0]).innerText = Adata[index].substring(Adata[index].indexOf('QQ') + 2);;

}

var indexCounter = 0;



document.getElementById("prev-btn").addEventListener("click", () => {
  if (indexCounter === 0)
    return;
  else {
    resetColors();
    //if quiz is live iterate live quiz
    if (isLiveQuizActive === true)
      iterateLiveQ(--indexCounter)
    else
      iterateQuestion(--indexCounter);
    if (answered.has(qno.innerText)) {
      document.getElementById("check-btn").disabled = true;
      document.getElementById("check-btn").innerText = 'Submitted';
      details.forEach((item) => {
        if (item.innerText !== "QQ")
          item.parentElement.style.display = 'block';
      });
      if (isLiveQuizActive !== true)
        document.querySelector("label[for=option-" + correctOption[0] + "]").style.background = 'green';
    }
  }
});
document.getElementById("next-btn").addEventListener("click", () => {

    if(indexCounter === (Qdata.length - 2)){
        document.getElementById("next-btn").innerText = 'Submit';
    }
  if (indexCounter === (Qdata.length - 1)){
      
      document.getElementById('submit-btn').click();
      document.getElementById("next-btn").innerText = 'Next';

    return;
  }
  else {
    resetColors();
    //if quiz is live iterate live quiz
    if (isLiveQuizActive === true)
      iterateLiveQ(++indexCounter)

    else
      iterateQuestion(++indexCounter);

    if (answered.has(qno.innerText)) {
      document.getElementById("check-btn").disabled = true;
      document.getElementById("check-btn").innerText = 'Submitted';
      details.forEach((item) => {
        if (item.innerText !== "QQ")
          item.parentElement.style.display = 'block';
      });
      if (isLiveQuizActive !== true)
        document.querySelector("label[for=option-" + correctOption[0] + "]").style.background = 'green';
    }

  }
});


document.getElementById("check-btn").addEventListener("click", () => {
  if (isLiveQuizActive === true) {
    var selectedValue = scannedValue.innerText.trim();
    var correctValue = correctOption.trim();


    if (correctValue === selectedValue) {
      //display success popup here
      Swal.fire(
        'Good job!',
        'You Scanned Correct QR!',
        'success'
      )

      //coins update
  coins+= 100;
  document.getElementById("coins").innerText = coins;

      correctanswered.add(qno.innerText);
    }
    else {
      //display error popup here
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You Scanned Wrong QR!',
        // footer: '<a href="">Why do I have this issue?</a>'
      })
    }
  }
  else {
    var selectedOption = document.querySelector('input[name="selectedOption"]:checked');
    var selectedValue = selectedOption.value.trim();
    var correctValue = correctOption.trim();

    if (correctValue === selectedValue) {
      document.querySelector("label[for=" + selectedOption.id + "]").style.background = 'green';
      correctanswered.add(qno.innerText);
      //coins update
      coins+= 50;
      document.getElementById("coins").innerText = coins;
    }
    else {
      document.querySelector("label[for=" + selectedOption.id + "]").style.background = 'red';
      document.querySelector("label[for=option-" + correctValue[0] + "]").style.background = 'green';
    }
    details.forEach((item) => {
      if (item.innerText !== "QQ")
        item.parentElement.style.display = 'block';
    });
  }
  answered.add(qno.innerText);
  document.getElementById("check-btn").disabled = true;
  document.getElementById("check-btn").innerText = 'Submitted';
});

function resetColors() {
  document.getElementById("check-btn").disabled = false;
  document.getElementById("check-btn").innerText = 'Submit';
  document.querySelector("label[for=option-a]").style.background = '';
  document.querySelector("label[for=option-b]").style.background = '';
  document.querySelector("label[for=option-c]").style.background = '';
  document.querySelector("label[for=option-d]").style.background = '';
  let ele = document.getElementsByName("selectedOption");
  for (var i = 0; i < ele.length; i++) {
    ele[i].checked = false;
  }
  details.forEach((item) => {
    item.innerText = "QQ";
    item.parentElement.style.display = 'none';
  });
}



document.getElementById("submit-btn").addEventListener("click", () => {
  document.querySelector('main').style.display = 'none';
  document.getElementById('score-window').style.display = 'block';
  //Correct list Rendering
  let correctList = [...correctanswered];
  let correctAnswers = correctList.reduce((ans, value) => {
    ans = ans + value + ", ";
    return ans;
  }, '');
  if (correctList.length === 0)
    document.getElementById("correct-answers").innerText = "None";
  else
    document.getElementById("correct-answers").innerText = (correctAnswers.substring(0, correctAnswers.lastIndexOf(','))).replaceAll(':', '');

  //Incorrect list Rendering
  let incorrectList = [...([...answered].filter(x => !correctanswered.has(x)))];
  let incorrectAnswers = incorrectList.reduce((ans, value) => {
    ans = ans + value + ", ";
    return ans;
  }, '');
  if (incorrectList.length === 0)
    document.getElementById("incorrect-answers").innerText = "None";
  else
    document.getElementById("incorrect-answers").innerText = (incorrectAnswers.substring(0, incorrectAnswers.lastIndexOf(','))).replaceAll(':', '');

    var coinsEarned;
  //Coins Rendering
  if(isLiveQuizActive===true)
  coinsEarned = 100 * (correctanswered.size);
  else
  coinsEarned = 50 * (correctanswered.size);


  document.getElementById("coins-earned").innerText = coinsEarned;

});

document.getElementById("finish-review").addEventListener("click", () => {
  document.getElementById('score-window').style.display = 'none';
  quizSections.style.display = 'block';
  if (isLiveQuizActive === true) {
    isLiveQuizActive = false;
    document.getElementById("img-container").style.display = "none";
    document.getElementById("qr-container").style.display = "none";
  }
});


