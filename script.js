// Placeholder for exam questions
// Placeholder for exam questions in Hebrew
const exams = {
    exam1: {
        title: "בחינת תיווך",
        questions: [
            {
                text: "שרון נתנה לגידי המתווך בלעדיות למכירת דירה המשמשת למגורים. גידי המתווך תלה שלט בדירה.
מתי תסתיים תקופת הבלעדיות, כאשר ההסכם אינו מתייחס במפורש לתקופת הבלעדיות?",
                options: [
                    "לאחר שלושים יום, וזאת מכיוון שלא נקבעה תקופה אחרת בהסכם.",
                    "כעבור חודשיים, וזאת מכיוון שגידי לא ביצע מספיק פעולות שיווק.",
                    "תקופת בלעדיות במקרה שכזה יכולה להיות עד חצי שנה.",
                    "תקופת בלעדיות במקרה שכזה יכולה להיות עד תשעה חודשים."
                ],
                correct: 0
            },
            {
                text: "גילה מנסה למכור את דירתה מזה זמן רב. גילה התקשרה עם דיצה, מתווכת מוסמכת, בהסכם בלעדיות. בהסכם
הבלעדיות נכתב כי פעולת התיווך היחידה הנדרשת מדיצה המתווכת, היא לספר על הדירה במכון הכושר היוקרתי
שבו היא חברה.
האם בתנאים אלה מתקיימת בלעדיות?מדוע?",
                options: [
                    "לא, מכיוון שמדובר בפעולת שיווק שאינה מנויה בדין לצורך בלעדיות.",
                    "לא, מכיוון שלא בוצעו לפחות שתי פעולות שיווק.",
                    "כן, מספיק לבצע פעולת שיווק אחת לפי הדין כדי לקבל בלעדיות על נכס.",
                    "כן, די בפעולת שיווק זו, אם כך הוסכם בין הצדדים."
                ],
                correct: 1
            },
            {
                text: "גורן שכר בית בודדעל חלקה, אך גילה שרעשימטוסיםשעוברים מעל החלקהמפריע את מנוחתו.
האםגורן יכול להגבילאת המרחב האווירי שמעל החלקה?",
                options: [
                    "לא; הדבר היה אפשרי אך ורק לו גורן היה קונה את החלקה.",
                    "לא; זכות במקרקעין בחלקה אינה מקנה, בפני עצמה, את הזכות למנוע מעבר מעל החלקה.",
                    "כן; מכיוון ששכירות מקנה לשוכר את כל זכויותיו של הבעלים בחלקה.",
                    "כן; אולם רק אם מדובר בשכירות שנרשמת כדין ברשם המקרקעין (טאבו)."
                ],
                correct: 1
            },
            {
                text: "ליאלועינבהינם אחים שירשו את דירת הוריהם.
האם מותר לליאל למכור את חלקו בדירהלליאת, השכנה ממול?",
                options: [
                    "לא, מכיוון שלעינב ישנה זיקת הנאה לשימוש בחלקה בנכס.",
                    "לא; מכיוון שלעינב ישנה זכות קדימה לרכוש את חלקה.",
                    "כן; כל עוד עינב מסכימה לעיסקה.",
                    "כן; ליאל יכול לבצע כל עיסקה בחלק המסוים שנרשם על שמו בנכס."
                ],
                correct: 1
            },
            {
                text: "באין קביעה אחרת בתקנון המוסכם, מי יישא בהוצאות התקנתמעלית בבית משותף?",
                options: [
                    "כל בעלי הדירות.",
                    "רק בעלי הדירות שביקשו את התקנת המעלית.",
                    "כל בעלי הדירות, למעט אלה שבקומת הקרקע.",
                    "לא ניתן להתקין מעלית בבניין שבו לא הותקנה מעלית על ידי הקבלן."
                ],
                correct: 2
            },
            {
                text: "בעליהדירהשבקומת הקרקע בבית משותף, מבקשים משאר בעלי הדירות להצמיד חלק מסוים מהרכוש המשותף
לדירתם, תוך שהם מציינים כי כך יחסכו שאר בעלי הדירות בעלות אחזקת החלק מהרכוש המשותף שיוצמד אל
דירתם בתקנון המוסכם.
על מי להסכים להצעה כך שההצעה תתאפשר?",
                options: [
                    "בעלי שני שליש מהדירות בבית המשותף.",
                    "בעלי הדירות בבניין, שלהם שני שליש מהרכוש המשותף בבניין.",
                    "כל בעלי הדירות בבניין.",
                    "רוב בעלי הדירות בבניין, שלהם שני שליש מהרכוש המשותף."
                ],
                correct: 3
            },
            {
                text: "אולגה רכשה דירה מחברה קבלנית. לאחר חלוף שנה מרישום הבית בפנקס הבתים המשותפים, הנכס של אולגה
טרם נרשם בטאבו.
בנסיבות המתוארות, איזה מהמשפטים הבאים הוא הנכון ביותר?",
                options: [
                    "במועד זה טרם קמה חובה לרשום את הנכס בטאבו.",
                    "אין חובה לקבלן לסיים את רישום הנכס במועד זה.",
                    "הקבלן מחויב לסיים את רישום הנכס במועד הזה גם אם העיכוב באשמת אולגה.",
                    "אם העיכוב באשמת אולגה, אין חובה לקבלן לסיים את הרישום."
                ],
                correct: 3
            },
            {
                text: "גיא רכש דירת מגורים מגלית. בהסכם המכר סיכמו הצדדים כי גיא ישלם מקדמה של10%מערך הדירה ״על
החשבון״, ואת השאר לפי לוח תשלומים שנקבע בחוזה המכר. עורך דין מטעמו של גיא רשם הערת אזהרה מתאימה
ברשם המקרקעין (טאבו) ביום שאחרי חתימת החוזה.
למרבה הצער, גלית נקלעהלקשיים כלכליים לאחר כחודש מתחילת העיסקה, והוטלעיקול על כל נכסיה, וביניהם על הדירה שמכרה לגיא.
בנסיבות המתוארות, איזה מהמשפטים הבאים הוא הנכון ביותר?",
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
                text: "חיים, מתווך מורשה, תיווך בעיסקת מקרקעיןגדולה. במהלך ביצוע העיסקה, היטעה חיים את הקונים לחשוב שיש מיזוג מרכזי בחדרים,כפי שביקשו ממנו. העיסקה התרחשה בחודש מאי2020, כאשר בחודש יולי2020היתלה חיים מרצונו את רישיון התיווך שלו.
האם מוסמך משרד המשפטים לפעול כנגד חיים למרות שרישיונו אינו בתוקף,בגין תלונה שהוגשה כנגדו לאחר התליית רישיונו? אנא סמנו את התשובה הנכונה ביותר:",
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
