// Placeholder for exam questions
// Placeholder for exam questions in Hebrew
const exams = {
    exam1: {
        title: "בחינת תיווך",
        questions: [
            {
                text: "מתי תסתיים תקופת הבלעדיות, כאשר ההסכם אינו מתייחס במפורש לתקופת הבלעדיות?",
                options: [
                    "לאחר שלושים יום, וזאת מכיוון שלא נקבעה תקופה אחרת בהסכם.",
                    "כעבור חודשיים, וזאת מכיוון שגידי לא ביצע מספיק פעולות שיווק.",
                    "תקופת בלעדיות במקרה שכזה יכולה להיות עד חצי שנה.",
                    "תקופת בלעדיות במקרה שכזה יכולה להיות עד תשעה חודשים."
                ],
                correct: 0
            },
            {
                text: "האם בתנאים אלה מתקיימת בלעדיות?",
                options: [
                    "לא, מכיוון שמדובר בפעולת שיווק שאינה מנויה בדין לצורך בלעדיות.",
                    "לא, מכיוון שלא בוצעו לפחות שתי פעולות שיווק.",
                    "כן, מספיק לבצע פעולת שיווק אחת לפי הדין כדי לקבל בלעדיות על נכס.",
                    "כן, די בפעולת שיווק זו, אם כך הוסכם בין הצדדים."
                ],
                correct: 1
            },
            {
                text: "האם גורן יכול להגביל את המרחב האווירי שמעל החלקה?",
                options: [
                    "לא; הדבר היה אפשרי אך ורק לו גורן היה קונה את החלקה.",
                    "לא; זכות במקרקעין בחלקה אינה מקנה, בפני עצמה, את הזכות למנוע מעבר מעל החלקה.",
                    "כן; מכיוון ששכירות מקנה לשוכר את כל זכויותיו של הבעלים בחלקה.",
                    "כן; אולם רק אם מדובר בשכירות שנרשמת כדין ברשם המקרקעין (טאבו)."
                ],
                correct: 1
            },
            {
                text: "האם מותר לליאל למכור את חלקו בדירה, השכנה ממול?",
                options: [
                    "לא, מכיוון שלעינב ישנה זיקת הנאה לשימוש בחלקה בנכס.",
                    "לא; מכיוון שלעינב ישנה זכות קדימה לרכוש את חלקה.",
                    "כן; כל עוד עינב מסכימה לעיסקה.",
                    "כן; ליאל יכול לבצע כל עיסקה בחלק המסוים שנרשם על שמו בנכס."
                ],
                correct: 1
            },
            {
                text: "מי יישא בהוצאות התקנת מעלית בבית משותף באין קביעה אחרת בתקנון המוסכם?",
                options: [
                    "כל בעלי הדירות.",
                    "רק בעלי הדירות שביקשו את התקנת המעלית.",
                    "כל בעלי הדירות, למעט אלה שבקומת הקרקע.",
                    "לא ניתן להתקין מעלית בבניין שבו לא הותקנה מעלית על ידי הקבלן."
                ],
                correct: 2
            },
            {
                text: "כמה בעלי דירות בבניין צריכים להסכים להצמדת חלק מהרכוש המשותף לדירתם של דיירים שבקומת הקרקע?",
                options: [
                    "בעלי שני שליש מהדירות בבית המשותף.",
                    "בעלי הדירות בבניין, שלהם שני שליש מהרכוש המשותף בבניין.",
                    "כל בעלי הדירות בבניין.",
                    "רוב בעלי הדירות בבניין, שלהם שני שליש מהרכוש המשותף."
                ],
                correct: 3
            },
            {
                text: "מה נכון לגבי רישום דירה בטאבו כשנה לאחר רכישתה מקבלן?",
                options: [
                    "במועד זה טרם קמה חובה לרשום את הנכס בטאבו.",
                    "אין חובה לקבלן לסיים את רישום הנכס במועד זה.",
                    "הקבלן מחויב לסיים את רישום הנכס במועד הזה גם אם העיכוב באשמת אולגה.",
                    "אם העיכוב באשמת אולגה, אין חובה לקבלן לסיים את הרישום."
                ],
                correct: 3
            },
            {
                text: "מה יקרה אם הוטל עיקול על נכסיה של גלית לאחר שהיא מכרה את דירתה לגיא?",
                options: [
                    "עיקול מחייב את גיא לשלם את חובה של גלית.",
                    "גיא שמר על זכויותיו מול צדדים שלישיים.",
                    "גיא איבד את זכויותיו על הדירה ואת כספו.",
                    "לא ניתן להטיל עיקול לאחר שנרשמה הערת אזהרה."
                ],
                correct: 1
            },
            {
                text: "באילו מקרים יש לשלם מס שבח?",
                options: [
                    "רק בני זוג מתגרשים שמחלקים רכוש.",
                    "רק בהורשת דירת מגורים.",
                    "רק בפעולות באיגוד מקרקעין.",
                    "בכל המקרים המוזכרים בתשובות האחרות."
                ],
                correct: 3
            },
            {
                text: "האם ניתן להתלונן על חיים המתווך אם רישיונו אינו בתוקף?",
                options: [
                    "לא, כי יש לפעול רק נגד מתווכים פעילים.",
                    "לא, כי הקונים היו צריכים לבדוק את הנושא בעצמם.",
                    "כן, אבל רק נגד מתווכים שרישיונם הותלה שלא מרצון.",
                    "כן, משרד המשפטים מוסמך לפעול מול חיים למרות שרישיונו אינו בתוקף."
                ],
                correct: 3
            }
        ]
    }
};


// Extract exam from URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const selectedExam = urlParams.get('exam');

// Initialize variables
let currentQuestionIndex = 0;
let selectedExamData = exams[selectedExam];
let currentQuestion = selectedExamData.questions[currentQuestionIndex];

// DOM elements
const examTitleElement = document.getElementById('exam-title');
const questionTextElement = document.getElementById('question-text');
const optionButtons = document.querySelectorAll('.option-btn');
const nextQuestionBtn = document.getElementById('next-question-btn');

// Set the exam title and first question
examTitleElement.textContent = selectedExamData.title;
displayQuestion(currentQuestion);

function displayQuestion(question) {
    // Set the question text
    questionTextElement.textContent = question.text;

    // Set the option button texts
    optionButtons.forEach((button, index) => {
        button.textContent = question.options[index];
        button.disabled = false;
        button.style.backgroundColor = ''; // Reset button color
    });

    nextQuestionBtn.disabled = true; // Disable the next button
}

function checkAnswer(selectedIndex) {
    const correctIndex = currentQuestion.correct;

    // Disable all buttons to prevent further clicks
    optionButtons.forEach(button => button.disabled = true);

    if (selectedIndex === correctIndex) {
        // Correct answer: Turn the selected button green
        optionButtons[selectedIndex].style.backgroundColor = 'green';
    } else {
        // Wrong answer: Turn the selected button red and correct answer green
        optionButtons[selectedIndex].style.backgroundColor = 'red';
        optionButtons[correctIndex].style.backgroundColor = 'green';
    }

    // Enable the next question button
    nextQuestionBtn.disabled = false;
}

function nextQuestion() {
    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedExamData.questions.length) {
        currentQuestion = selectedExamData.questions[currentQuestionIndex];
        displayQuestion(currentQuestion);
    } else {
        alert("You have completed the exam!");
        window.location.href = 'index.html'; // Redirect back to exam selection
    }
}
