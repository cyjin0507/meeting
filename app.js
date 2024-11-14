// 모든 질문
const LIST = [
    {
        main: "자바스크립트를 활용한 파일 업로드 기능을 구현했다고 나와있는데 설명해주세요.",
        sub: [
            "FileReader API에 대해 설명해주세요.",
            "Base64에 대해 설명해주세요.",
            "FormData를 사용한 이유가 뭔가요.",
            "multipart/form-data 형식에 대해 간단히 설명해주세요.",
        ],
    },
    {
        main: "어떤 창의적인 알고리즘 문제를 만들었나요?",
        sub: [
            "어떤 방법으로 풀었나요?",
        ],
    },
    {
        main: "PHP로 만든 회원제 게시판에 대한 설명해주세요.",
        sub: [
            "PHP와 MySQL을 어떤 방법으로 연동했는지 설명해주세요.",
        ],
    },
    {
        main: "node.js의 어떤 외부 라이브러리를 사용했나요?",
        sub: [],
    },
    {
        main: "Socket IO를 통해 프로젝트에 적용했다고 하는데 설명해주세요.",
        sub: [
            "socket에 대해 간단히 설명해주세요.",
        ],
    },
    {
        main: "서브쿼리와 같은 레벨 높은 SQL를 구사했다고 하는데 설명해주세요.",
        sub: [],
    },
    {
        main: "PHP코드를 라라벨 프레임워크로 리팩토링하여 구조를 획기적으로 개량했다는데 설명해주세요.",
        sub: [
            "라라벨이 뭔지 간단히 설명해주세요.",
        ],
    },
    {
        main: "객체인식 기술을 어떻게 구현했는지 설명해주세요.",
        sub: [
            "YOLOv5 모델이 무엇인가요?",
            "객체인식 기술에 원리가 무엇인가요?",
            "CNN 모델이 뭔가요?",
        ],
    },
    {
        main: "목표를 달성하기 위해 노력하여 좋은 성과를 거둔 경험에 대해 설명해주세요.",
        sub: [],
    },
    {
        main: "인공지능 분야 중에 객체인식 기술에 관심을 가진 이유가 뭔가요?",
        sub: [],
    },
    {
        main: "앙트십 컨퍼런스에 대해 설명해주세요.",
        sub: [],
    },
    {
        main: "1학년 때 창업, 창직에 대해 관심이 많은 것 같은데 그 이유가 뭔가요?",
        sub: [],
    },
    {
        main: "재직자 특별전형과 조기취업 계약학과에 관심을 가진 이유가 뭔가요?",
        sub: [
            "더 깊이 있는 학습에 필요성을 느낀 이유가 뭔가요?"
        ],
    },
    {
        main: "온라인 투어 가이드에 대해 설명해주세요.",
        sub: [],
    },
    {
        main: "가공 처리된 재료와 조리도구를 함께 배달하는 상품에 대해 설명해주세요.",
        sub: [],
    },
    {
        main: "사제동행 1:1 진로멘토링에서 어떤 활동을 했는지 말해주세요.",
        sub: ["그래서 어떤 방향으로 정했나요?"]
    },
    {
        main: "숙련기술전수프로그램에서 어떤 활동을 했는지 설명해주세요.",
        sub: [],
    },
    {
        main: "소프트웨어가 무엇인가요.",
        sub: [],
    },
    {
        main: "프로그래밍이 무엇인가요.",
        sub: [],
    },  
    {
        main: "동기, 비동기에 대해 설명해주세요.",
        sub: [],
    },
    {
        main: "DFS, BFS가 무엇인가요.",
        sub: [],
    },
    {
        main: "시간, 공간 복잡도에 대한 설명",
        sub: [],
    },
    {
        main: "JS, PHP, JAVA, NODE.js에 관해 설명해주세요.",
        sub: [],
    },
    {
        main: "객체지향언어, 절차지향언어가 무엇인가",
        sub: [
            "상속, 캡슐화, 다형성에 대해 설명해주세요.",
        ],
    },
    {
        main: "브라우저가 무엇인가",
        sub: [],
    },
    {
        main: "프레임워크가 무엇인가",
        sub: [],
    },
    {
        main: "머신러닝과 딥러닝이 무엇인가",
        sub: [],
    },
    {
        main: "자료구조에 대해 질문할게요. 엔터 누르세요.",
        sub: [
            "배열",
            "리스트",
            "스택",
            "큐",
            "선형구조",
            "비선형구조",
            "일반 트리",
            "이진 트리",
        ],
    },
    {
        main: "버블, 삽입, 선택 정렬에 대해 설명해주세요.",
        sub: [],
    },
    {
        main: "리더십을 발휘한 경험이 있나요?",
        sub: [],
    },
    {
        main: "팀에서 갈등이 발생했을 때 어떻게 해결했나요",
        sub: [],
    },
    {
        main: "힘든 상황에서 포기하지 않고 끝까지 노력했던 경험이 있나요?",
        sub: [],
    },
    {
        main: "다른 사람에게 칭찬이나 인정을 받은 경험이 있다면 무엇인가요?",
        sub: [],
    },
    {
        main: "본인이 존경하는 인물과 그 이유는 무엇인가요?",
        sub: [],
    },
    {
        main: "최근에 가장 도전적이었던 경험은 무엇인가요?",
        sub: [],
    },
    {
        main: "자신의 가치관에 반대되는 상황에서 어떻게 대처했나요?",
        sub: [],
    },
    {
        main: "대학생활에서 가장 기대하는 부분은 무엇인가요?",
        sub: [],
    },
    {
        main: "수학에 있어 다른 학생들에 비해 떨어지는데 어떻게 보완할 예정인가요?",
        sub: [],
    },
    {
        main: "무단 결과가 있는데 왜 그랬는지 설명해주세요.",
        sub: [],
    },
    {
        main: "1분 자기소개",
        sub: [],
    },
    {
        main: "지원동기",
        sub: [],
    },
    {
        main: "성격의 장단점",
        sub: [],
    },
    {
        main: "프로그래밍에 관심을 가진 이유?",
        sub: [],
    },
    {
        main: "부족한 과목과 잘 본 과목이 무엇인가요?",
        sub: [],
    },
    {
        main: "마무리 멘트",
        sub: [],
    },
    {
        main: "대학에서 이루고 싶은 목표",
        sub: [],
    },
    {
        main: "대학 진학 후 이루고 싶은 목표",
        sub: [],
    },
    {
        main: "영어 발표 주제로 사물인터넷을 선택한 이유와 사물인터넷이 무엇인지 설명해주세요.",
        sub: [],
    },
    {
        main: "피지컬 컴퓨팅이 무엇인가요?",
        sub: [],
    },
    {
        main: "JavaFx로 쓰레드 기술을 사용했다고 하는데 쓰레드가 무엇인가요?",
        sub: [],
    },
    {
        main: "스포츠에 접목시킬 수 있는 IT에 대해 발표한 이유는 뭔가요?",
        sub: [],
    },
]

const title = document.querySelector(".title");
const timerDisplay = document.querySelector(".timer");
const button = document.querySelector("#button");

let mainIndex = 0;
let subIndexes = [];
let COMPLETE_MAIN = [];
let timerInterval;
let startTime;
let isRunning = false;

button.addEventListener("click", handleButtonClick);

document.addEventListener("keydown", (e) => {
    if (e.key === " " || e.code === "Space") {
        handleButtonClick();
    }
});

function handleButtonClick() {
    if (!isRunning) {
        startQuestion();
        resetTimer();
        startTimer();
        button.textContent = "답변 종료";
    } else {
        stopTimer();
        button.textContent = "다음 질문 출력";
    }
    isRunning = !isRunning;
}

function startQuestion() {
    if (COMPLETE_MAIN.length === LIST.length && subIndexes.length === 0) {
        alert("모든 질문이 끝났습니다. 다시 시작합니다.");
        resetQuestions();
        window.location.reload();
        return;
    }

    if (subIndexes.length === 0) {
        startMainQuestion();
    } else {
        showSubQuestion();
    }
}

function startMainQuestion() {
    do {
        mainIndex = Math.floor(Math.random() * LIST.length);
    } while (COMPLETE_MAIN.includes(mainIndex));

    const selectedMain = LIST[mainIndex];
    title.textContent = selectedMain.main;
    COMPLETE_MAIN.push(mainIndex);

    if (selectedMain.sub.length > 0) {
        subIndexes = Array.from({ length: selectedMain.sub.length }, (_, i) => i);
    } else {
        subIndexes = [];
    }
}

function showSubQuestion() {
    const randomSubIndex = Math.floor(Math.random() * subIndexes.length);
    const selectedSub = LIST[mainIndex].sub[subIndexes[randomSubIndex]];
    title.textContent = selectedSub;
    subIndexes.splice(randomSubIndex, 1);
}

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 10);
}

function updateTimer() {
    const elapsedTime = Date.now() - startTime;
    const minutes = String(Math.floor(elapsedTime / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((elapsedTime % 60000) / 1000)).padStart(2, '0');
    const milliseconds = String(elapsedTime % 1000).padStart(3, '0');
    timerDisplay.textContent = `${minutes}:${seconds}:${milliseconds}`;
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    timerDisplay.textContent = "00:00:000";
}

function resetQuestions() {
    COMPLETE_MAIN = [];
    mainIndex = 0;
    isRunning = false;
    button.textContent = "질문 출력";
    title.textContent = "면접 시작!";
    resetTimer();
}
