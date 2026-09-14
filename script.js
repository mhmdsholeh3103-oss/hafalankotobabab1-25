/* =====================================================
   MENGHAPAL BAHASA JEPANG
   ===================================================== */


/* =====================================================
   DATA KOSAKATA
   ===================================================== */

const defaultVocabulary = [

    // BAB 1
    {
        chapter: 1,
        japanese: "わたし",
        reading: "watashi",
        meaning: "saya"
    },
    {
        chapter: 1,
        japanese: "せんせい",
        reading: "sensei",
        meaning: "guru"
    },
    {
        chapter: 1,
        japanese: "がくせい",
        reading: "gakusei",
        meaning: "siswa"
    },
    {
        chapter: 1,
        japanese: "かいしゃいん",
        reading: "kaishain",
        meaning: "pegawai perusahaan"
    },


    // BAB 2
    {
        chapter: 2,
        japanese: "ほん",
        reading: "hon",
        meaning: "buku"
    },
    {
        chapter: 2,
        japanese: "かばん",
        reading: "kaban",
        meaning: "tas"
    },
    {
        chapter: 2,
        japanese: "えんぴつ",
        reading: "enpitsu",
        meaning: "pensil"
    },
    {
        chapter: 2,
        japanese: "とけい",
        reading: "tokei",
        meaning: "jam"
    },


    // BAB 3
    {
        chapter: 3,
        japanese: "ここ",
        reading: "koko",
        meaning: "di sini"
    },
    {
        chapter: 3,
        japanese: "そこ",
        reading: "soko",
        meaning: "di situ"
    },
    {
        chapter: 3,
        japanese: "あそこ",
        reading: "asoko",
        meaning: "di sana"
    },


    // BAB 4
    {
        chapter: 4,
        japanese: "おきます",
        reading: "okimasu",
        meaning: "bangun"
    },
    {
        chapter: 4,
        japanese: "ねます",
        reading: "nemasu",
        meaning: "tidur"
    },
    {
        chapter: 4,
        japanese: "はたらきます",
        reading: "hatarakimasu",
        meaning: "bekerja"
    },


    // BAB 5
    {
        chapter: 5,
        japanese: "いきます",
        reading: "ikimasu",
        meaning: "pergi"
    },
    {
        chapter: 5,
        japanese: "きます",
        reading: "kimasu",
        meaning: "datang"
    },
    {
        chapter: 5,
        japanese: "かえります",
        reading: "kaerimasu",
        meaning: "pulang"
    },


    // BAB 6
    {
        chapter: 6,
        japanese: "たべます",
        reading: "tabemasu",
        meaning: "makan"
    },
    {
        chapter: 6,
        japanese: "のみます",
        reading: "nomimasu",
        meaning: "minum"
    },
    {
        chapter: 6,
        japanese: "みます",
        reading: "mimasu",
        meaning: "melihat"
    },


    // BAB 7
    {
        chapter: 7,
        japanese: "きります",
        reading: "kirimasu",
        meaning: "memotong"
    },
    {
        chapter: 7,
        japanese: "かきます",
        reading: "kakimasu",
        meaning: "menulis"
    },


    // BAB 8
    {
        chapter: 8,
        japanese: "おおきい",
        reading: "ookii",
        meaning: "besar"
    },
    {
        chapter: 8,
        japanese: "ちいさい",
        reading: "chiisai",
        meaning: "kecil"
    },
    {
        chapter: 8,
        japanese: "あたらしい",
        reading: "atarashii",
        meaning: "baru"
    },


    // BAB 9
    {
        chapter: 9,
        japanese: "わかります",
        reading: "wakarimasu",
        meaning: "mengerti"
    },
    {
        chapter: 9,
        japanese: "すき",
        reading: "suki",
        meaning: "suka"
    },


    // BAB 10
    {
        chapter: 10,
        japanese: "あります",
        reading: "arimasu",
        meaning: "ada (benda)"
    },
    {
        chapter: 10,
        japanese: "います",
        reading: "imasu",
        meaning: "ada (makhluk hidup)"
    },


    // BAB 11
    {
        chapter: 11,
        japanese: "ひとつ",
        reading: "hitotsu",
        meaning: "satu buah"
    },
    {
        chapter: 11,
        japanese: "ふたつ",
        reading: "futatsu",
        meaning: "dua buah"
    },


    // BAB 12
    {
        chapter: 12,
        japanese: "おもしろい",
        reading: "omoshiroi",
        meaning: "menarik"
    },
    {
        chapter: 12,
        japanese: "たのしい",
        reading: "tanoshii",
        meaning: "menyenangkan"
    },


    // BAB 13
    {
        chapter: 13,
        japanese: "あそびます",
        reading: "asobimasu",
        meaning: "bermain"
    },
    {
        chapter: 13,
        japanese: "かいます",
        reading: "kaimasu",
        meaning: "membeli"
    },


    // BAB 14
    {
        chapter: 14,
        japanese: "よみます",
        reading: "yomimasu",
        meaning: "membaca"
    },
    {
        chapter: 14,
        japanese: "まちます",
        reading: "machimasu",
        meaning: "menunggu"
    },


    // BAB 15
    {
        chapter: 15,
        japanese: "たちます",
        reading: "tachimasu",
        meaning: "berdiri"
    },
    {
        chapter: 15,
        japanese: "すわります",
        reading: "suwarimasu",
        meaning: "duduk"
    },


    // BAB 16
    {
        chapter: 16,
        japanese: "のります",
        reading: "norimasu",
        meaning: "naik"
    },
    {
        chapter: 16,
        japanese: "おります",
        reading: "orimasu",
        meaning: "turun"
    },


    // BAB 17
    {
        chapter: 17,
        japanese: "わすれます",
        reading: "wasuremasu",
        meaning: "lupa"
    },
    {
        chapter: 17,
        japanese: "おぼえます",
        reading: "oboemasu",
        meaning: "mengingat / menghafal"
    },


    // BAB 18
    {
        chapter: 18,
        japanese: "できます",
        reading: "dekimasu",
        meaning: "bisa / dapat"
    },
    {
        chapter: 18,
        japanese: "うんてんします",
        reading: "untenshimasu",
        meaning: "mengemudi"
    },


    // BAB 19
    {
        chapter: 19,
        japanese: "のぼります",
        reading: "noborimasu",
        meaning: "mendaki"
    },
    {
        chapter: 19,
        japanese: "とまります",
        reading: "tomarimasu",
        meaning: "menginap"
    },


    // BAB 20
    {
        chapter: 20,
        japanese: "はなします",
        reading: "hanashimasu",
        meaning: "berbicara"
    },
    {
        chapter: 20,
        japanese: "つかいます",
        reading: "tsukaimasu",
        meaning: "menggunakan"
    },


    // BAB 21
    {
        chapter: 21,
        japanese: "おもいます",
        reading: "omoimasu",
        meaning: "berpikir / berpendapat"
    },


    // BAB 22
    {
        chapter: 22,
        japanese: "きます",
        reading: "kimasu",
        meaning: "memakai"
    },


    // BAB 23
    {
        chapter: 23,
        japanese: "ききます",
        reading: "kikimasu",
        meaning: "mendengar / bertanya"
    },


    // BAB 24
    {
        chapter: 24,
        japanese: "くれます",
        reading: "kuremasu",
        meaning: "memberikan kepada saya"
    },


    // BAB 25
    {
        chapter: 25,
        japanese: "かんがえます",
        reading: "kangaemasu",
        meaning: "memikirkan"
    }

];


/* =====================================================
   LOAD DATA
   ===================================================== */

let customVocabulary =
    JSON.parse(
        localStorage.getItem("customVocabulary")
    ) || [];


let vocabulary = [
    ...defaultVocabulary,
    ...customVocabulary
];


/* =====================================================
   NAVIGATION
   ===================================================== */

function showPage(pageName) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });


    document
        .getElementById(pageName)
        .classList.add("active");


    document
        .querySelectorAll(".nav-btn")
        .forEach(btn => {

            btn.classList.remove("active");

        });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (pageName === "vocabulary") {

        displayVocabulary();

    }


    if (pageName === "quiz") {

        startQuiz();

    }

}



/* =====================================================
   TAMPILKAN KOSAKATA
   ===================================================== */

function displayVocabulary() {

    const list =
        document.getElementById(
            "vocabularyList"
        );


    const search =
        document.getElementById(
            "searchInput"
        ).value.toLowerCase();


    const chapter =
        document.getElementById(
            "chapterFilter"
        ).value;


    let filtered =
        vocabulary.filter(item => {

            const matchSearch =
                item.japanese
                    .toLowerCase()
                    .includes(search) ||

                item.reading
                    .toLowerCase()
                    .includes(search) ||

                item.meaning
                    .toLowerCase()
                    .includes(search);


            const matchChapter =
                chapter === "all" ||
                item.chapter == chapter;


            return matchSearch &&
                   matchChapter;

        });


    list.innerHTML = "";


    if (filtered.length === 0) {

        list.innerHTML = `
            <div class="home-card">
                <h3>😕 Kosakata tidak ditemukan</h3>
                <p>
                    Coba kata kunci atau bab lainnya.
                </p>
            </div>
        `;

        return;
    }


    filtered.forEach(item => {

        const card =
            document.createElement("div");

        card.className = "vocab-card";


        card.innerHTML = `

            <span class="chapter">
                Bab ${item.chapter}
            </span>

            <div class="japanese">
                ${item.japanese}
            </div>

            <div class="reading">
                ${item.reading}
            </div>

            <div class="meaning">
                ${item.meaning}
            </div>

            <button
                class="learn-btn"
                onclick="speakJapanese('${item.japanese}')">

                🔊 Dengarkan

            </button>

        `;


        list.appendChild(card);

    });

}



/* =====================================================
   TEXT TO SPEECH
   ===================================================== */

function speakJapanese(text) {

    if (!("speechSynthesis" in window)) {

        alert(
            "Browser kamu tidak mendukung fitur suara."
        );

        return;
    }


    const speech =
        new SpeechSynthesisUtterance(text);


    speech.lang = "ja-JP";

    speech.rate = 0.8;


    window.speechSynthesis.speak(speech);

}



/* =====================================================
   TAMBAH KOSAKATA
   ===================================================== */

document
    .getElementById("vocabularyForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const newWord = {

                chapter:
                    document
                    .getElementById("addChapter")
                    .value,

                japanese:
                    document
                    .getElementById("addJapanese")
                    .value
                    .trim(),

                reading:
                    document
                    .getElementById("addReading")
                    .value
                    .trim(),

                meaning:
                    document
                    .getElementById("addMeaning")
                    .value
                    .trim()

            };


            customVocabulary.push(newWord);


            localStorage.setItem(
                "customVocabulary",
                JSON.stringify(
                    customVocabulary
                )
            );


            vocabulary = [
                ...defaultVocabulary,
                ...customVocabulary
            ];


            alert(
                "✅ Kosakata berhasil ditambahkan!"
            );


            this.reset();


            updateStats();

            showPage("vocabulary");

        }
    );



/* =====================================================
   QUIZ
   ===================================================== */

let quizQuestions = [];

let currentQuestion = 0;

let score = 0;

let answered = false;



function startQuiz() {

    if (vocabulary.length < 4) {

        alert(
            "Minimal membutuhkan 4 kosakata untuk quiz."
        );

        return;
    }


    quizQuestions =
        [...vocabulary]
        .sort(() => Math.random() - 0.5)
        .slice(
            0,
            Math.min(10, vocabulary.length)
        );


    currentQuestion = 0;

    score = 0;

    document
        .getElementById("quizScore")
        .textContent = score;


    showQuestion();

}



function showQuestion() {

    answered = false;


    const question =
        quizQuestions[currentQuestion];


    document
        .getElementById("questionNumber")
        .textContent =
        `Soal ${currentQuestion + 1} / ${quizQuestions.length}`;


    document
        .getElementById("questionWord")
        .textContent =
        question.japanese;


    document
        .getElementById("questionReading")
        .textContent =
        question.reading;


    document
        .getElementById("quizResult")
        .textContent = "";


    document
        .getElementById("nextButton")
        .style.display = "none";


    let answers = [question.meaning];


    const otherWords =
        vocabulary
        .filter(item =>
            item.meaning !== question.meaning
        )
        .sort(() =>
            Math.random() - 0.5
        )
        .slice(0, 3);


    answers.push(
        ...otherWords.map(
            item => item.meaning
        )
    );


    answers =
        answers.sort(
            () => Math.random() - 0.5
        );


    const answerContainer =
        document.getElementById(
            "answers"
        );


    answerContainer.innerHTML = "";


    answers.forEach(answer => {

        const button =
            document.createElement("button");


        button.className =
            "answer-btn";


        button.textContent =
            answer;


        button.onclick = () =>
            checkAnswer(
                button,
                answer,
                question.meaning
            );


        answerContainer.appendChild(
            button
        );

    });

}



/* =====================================================
   CEK JAWABAN
   ===================================================== */

function checkAnswer(
    button,
    answer,
    correctAnswer
) {

    if (answered) return;


    answered = true;


    const buttons =
        document.querySelectorAll(
            ".answer-btn"
        );


    buttons.forEach(btn => {

        if (
            btn.textContent ===
            correctAnswer
        ) {

            btn.classList.add(
                "correct"
            );

        }

    });


    if (answer === correctAnswer) {

        score += 10;

        button.classList.add(
            "correct"
        );


        document
            .getElementById("quizResult")
            .textContent =
            "🎉 Benar! Hebat!";


    } else {

        button.classList.add(
            "wrong"
        );


        document
            .getElementById("quizResult")
            .textContent =
            `❌ Salah. Jawaban yang benar: ${correctAnswer}`;

    }


    document
        .getElementById("quizScore")
        .textContent = score;


    document
        .getElementById("nextButton")
        .style.display = "inline-block";

}



/* =====================================================
   SOAL BERIKUTNYA
   ===================================================== */

function nextQuestion() {

    currentQuestion++;


    if (
        currentQuestion >=
        quizQuestions.length
    ) {

        finishQuiz();

        return;

    }


    showQuestion();

}



/* =====================================================
   SELESAI QUIZ
   ===================================================== */

function finishQuiz() {

    const oldScore =
        Number(
            localStorage.getItem(
                "bestScore"
            )
        ) || 0;


    if (score > oldScore) {

        localStorage.setItem(
            "bestScore",
            score
        );

    }


    const percentage =
        Math.round(
            (score /
            (quizQuestions.length * 10))
            * 100
        );


    document
        .getElementById("questionWord")
        .textContent =
        "🎉 Quiz Selesai!";


    document
        .getElementById("questionReading")
        .textContent =
        `Nilai kamu: ${percentage}`;


    document
        .getElementById("answers")
        .innerHTML = `

            <div class="home-card">

                <h2>
                    Skor: ${score}
                </h2>

                <p>
                    Kamu menjawab quiz
                    dengan nilai ${percentage}%.
                </p>

                <button
                    class="primary-btn"
                    onclick="startQuiz()">

                    🔄 Main Lagi

                </button>

            </div>

        `;


    document
        .getElementById("quizResult")
        .textContent =
        getQuizMessage(percentage);


    document
        .getElementById("nextButton")
        .style.display = "none";


    updateStats();

}



/* =====================================================
   PESAN HASIL QUIZ
   ===================================================== */

function getQuizMessage(score) {

    if (score === 100) {

        return "🏆 Sempurna! Kamu sangat hebat!";

    }

    if (score >= 80) {

        return "🔥 Sangat bagus! Terus pertahankan!";

    }

    if (score >= 60) {

        return "👍 Bagus! Tingkatkan lagi hafalannya.";

    }

    if (score >= 40) {

        return "💪 Lumayan! Jangan menyerah.";

    }

    return "📚 Ayo belajar lagi dan coba quiz kembali.";

}



/* =====================================================
   STATISTIK
   ===================================================== */

function updateStats() {

    document
        .getElementById(
            "totalVocabulary"
        )
        .textContent =
        vocabulary.length;


    const best =
        localStorage.getItem(
            "bestScore"
        ) || 0;


    document
        .getElementById(
            "bestScore"
        )
        .textContent =
        best;


    const progress =
        Math.min(
            100,
            Math.round(
                (vocabulary.length / 100)
                * 100
            )
        );


    document
        .getElementById(
            "progressBar"
        )
        .style.width =
        progress + "%";


    document
        .getElementById(
            "progressText"
        )
        .textContent =
        progress + "%";

}



/* =====================================================
   START APPLICATION
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        displayVocabulary();

        updateStats();

    }
);