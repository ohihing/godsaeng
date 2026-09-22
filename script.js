// 캐릭터 도감 데이터
const characters = [
    { id: 1, img: 'c_001.png', name: '이은성', desc: '교실 뒷자리의 조용한 프로 관찰자. 중학교 때 짝사랑했던 그 애가 전학을 오면서 일상이 흔들리기 시작했다?' },
    { id: 2, img: 'c_002.png', name: '도유진', desc: '전학 오자마자 인싸 등극! 모두에게 다정하지만, 그의 시선이 향하는 곳엔 늘 예상치 못한 \'그 사람\'이 있다.' },
    { id: 3, img: 'c_003.png', name: '오수아', desc: '은성이의 껌딱지 절친. 하지만 최근 은성이 곁을 맴도는 남학생들이 몹시 거슬려 폭주하기 직전이다.' },
    { id: 4, img: 'c_004.png', name: '차재현', desc: '모두의 첫사랑, 연극부 부장. 언제나 여유 넘치지만, 유진이 앞에만 서면 묘하게 뚝딱거린다.' },
    { id: 5, img: 'c_005.jpg', name: '윤해수', desc: '빈틈없는 송현고 최고 여신. 남 일에 무관심한 척하면서 우리 반 기류를 제일 정확하게 꿰뚫어 본다.' }
];

// 문항 데이터 (총 10문항)
// B(정답/통찰): 10점, A(오답/과몰입): 5점, C(오답/둔감): 0점
const questions = [
    {
        q: "나른한 문학 시간, 얼굴 천재 전학생 유진이가 자꾸 우리 분단 쪽을 빤히 쳐다본다. 그 시선의 끝엔 학교 여신 '해수', 인싸 연극부장 '재현', 그리고 조용한 '은성'이가 있다. 당신의 촉이 발동하는 방향은?",
        img1: "q1_1.png", img2: "q1_2.png",
        choices: [
            { text: "당연히 학교 여신 해수지! 딱 봐도 남주 여주 재질이잖아. 곧 둘이 사귀겠네.", score: 5 },
            { text: "잠깐, 시선의 방향이 미묘한데? 여신이 아니라 대본 연습 중인 '연극부장'을 홀린 듯이 보는 거 같은데?", score: 10 },
            { text: "자꾸 이쪽을 보네... 설마 나한테 첫눈에 반한 건가?!", score: 0 }
        ]
    },
    {
        q: "스킨십 장인에 핵인싸인 연극부장 재현. 남녀 가리지 않고 어깨동무를 척척 걸치는데, 유독 전학생 유진이가 다가올 때만 귀까지 빨개져서 뒷걸음질을 친다. 이 텐션, 대체 뭘까?",
        img1: "q2_1.png", img2: "q2_2.png",
        choices: [
            { text: "아하, 둘이 같은 여자애를 두고 삼각관계라서 엄청 기싸움하는 중이구나!", score: 5 },
            { text: "유진이의 직진 고백에 엄청 당황했는데, 상처 줄까 봐 어쩔 줄 모르는 거 같은데?", score: 10 },
            { text: "어제 둘이 싸웠나 보네. 아니면 유진이한테서 땀 냄새 나서 피하는 건가?", score: 0 }
        ]
    },
    {
        q: "은성이랑 화장실도 같이 가던 껌딱지 수아. 최근 은성이가 조별 과제로 남학생들과 친해지자, 수아는 은성이를 쌩까고 틱틱대기 시작했다. 수아의 속마음은?",
        img1: "q3_1.png", img2: "q3_2.png",
        choices: [
            { text: "수아도 조별 과제 하는 남학생 중 한 명을 몰래 좋아했는데, 은성이한테 뺏긴 거 같아서 질투하는 거야.", score: 5 },
            { text: "자기 세상의 전부였던 은성이가 관계를 넓혀가니까, 나만 버림받을까 봐 두렵고 소외감 느껴서 저러는 거야.", score: 10 },
            { text: "요즘 뭐 스트레스받는 일 있나? 조별 과제 지만 편하게 한다고 삐쳤나 보네.", score: 0 }
        ]
    },
    {
        q: "[단독] 연극제 대기실에서 유진이가 재현이 손목을 꽉 잡고 있는 묘한 사진이 학교 익명 게시판에 올라왔다! 몰래 사진을 찍어 올린 유력한 용의자는 '수아'. 수아는 왜 이런 짓을 했을까?",
        img1: "q4_1.png", img2: "q4_2.png",
        choices: [
            { text: "유진이랑 재현이가 엮이는 게 꼴 보기 싫어서 정의의 사도인 척 저격해서 떼어놓으려고!", score: 5 },
            { text: "유진이의 치명적인 비밀을 터뜨리면, 은성이가 유진이한테 실망하고 다시 자기한테만 돌아올 줄 알고 그런 거야.", score: 10 },
            { text: "오, 특종이네! 그냥 재밌어 보여서 올린 관종의 짓 아닐까?", score: 0 }
        ]
    },
    {
        q: "평소 꾸미는 데 관심 없던 은성이가 귀여운 리본 핀을 하고 왔다. 그걸 본 유진이가 다가가 작게 속삭인다. '내가 보내준 그림이랑 똑같네.' 은성이의 얼굴이 터질 듯 붉어졌다. 이건 무슨 시그널일까?",
        img1: "q5_1.png", img2: "q5_2.png",
        choices: [
            { text: "와, 여자애들 액세서리 바뀐 것까지 예리하게 캐치하다니... 엄청난 유죄 인간 플러팅 장인이네!", score: 5 },
            { text: "잠깐, '내가 보내준 그림'? 둘 다 익명으로 활동하던 공간에서 정체를 눈치채고 암호를 주고받은 거네!", score: 10 },
            { text: "어? 저 리본 핀 나도 봤는데. 요즘 유행하는 템인가 보네. 나도 하나 살까?", score: 0 }
        ]
    },
    {
        q: "익명 게시판 폭로 이후, 반 빌런 남학생이 유진이를 향해 선 넘는 조롱을 쏟아낸다. 그때, 반에서 제일 소심하던 은성이가 벌떡 일어나 빌런의 머리에 우유를 냅다 부어버렸다! 이 미친 용기의 원천은?",
        img1: "q6_1.png", img2: "q6_2.png",
        choices: [
            { text: "헐, 둘이 비밀 연애 중인데 남친 건드려서 빡친 거 아니야?!", score: 5 },
            { text: "소심한 성격마저 이겨낼 만큼, 곤경에 처한 유진이를 향한 은성이의 짝사랑과 보호 본능이 폭발한 거야.", score: 10 },
            { text: "빌런 놈이 평소에 너무 시끄럽게 굴어서 누적된 은성이의 스트레스가 마침내 터져버린 사이다 모먼트!", score: 0 }
        ]
    },
    {
        q: "갑자기 쏟아지는 폭우. 유진이는 우산이 없는 은성이에게 자기 우산을 쥐여주고 빗속을 뛰어간다. 그리고 도착한 곳은... 저 멀리 서 있던 차재현의 우산 속! 이 상황의 진짜 의미는?",
        img1: "q7_1.png", img2: "q7_2.png",
        choices: [
            { text: "은성이한테 우산 줘서 호감도 올리고 빗속을 달리는 남성미 어필! 완벽한 큰 그림이네.", score: 5 },
            { text: "은성이를 아끼는 건 '찐 우정'이지만, 유진이의 심장이 진짜 향하는 목적지는 결국 '차재현의 우산 속'인 거지.", score: 10 },
            { text: "그냥 남자애들끼리 우산 하나 같이 쓰면 편하니까 비 피하러 뛰어간 거겠지 뭐.", score: 0 }
        ]
    },
    {
        q: "제비뽑기로 자리를 바꾸는 날. 유진이가 향한 곳은, 인싸들이 모인 명당이나 여신 해수의 옆자리가 아니었다. 유진은 굳이 교실 맨 구석, 조용한 은성이의 바로 뒷자리를 선택했다. 대체 왜?",
        img1: "q8_1.png", img2: "q8_2.png",
        choices: [
            { text: "완전 웹툰 남주 클리셰잖아! 원래 찐 남주는 여주 뒷자리에서 장난치는 게 국룰임.", score: 5 },
            { text: "은성이가 남몰래 글 쓰는 걸 아니까, 다른 애들 시선이 닿지 않게 뒤에서 조용히 막아주려고 저길 택한 거야.", score: 10 },
            { text: "맨 뒷자리 구석? 완전 꿀자리네! 엎드려 자도 쌤한테 절대 안 걸리는 명당이라 고른 듯.", score: 0 }
        ]
    },
    {
        q: "연극부 대본 리딩 시간. 평소 능글맞게 연기를 잘하던 부장 재현이가, 유독 유진이와 극 중 '과거를 사과하는 씬'을 맞출 때만 목소리가 미세하게 떨리며 대사를 심하게 절었다. 재현이는 대체 왜?",
        img1: "q9_1.png", img2: "q9_2.png",
        choices: [
            { text: "오, 재현이가 유진이의 완벽한 미모를 가까이서 마주 보니까 순간 심쿵해서 대사를 까먹은 거네!", score: 5 },
            { text: "저건 연기가 아니야. 대사에 자기 진짜 미안함이 겹쳐서 꾹 누르던 감정이 튀어나와 버린 거지.", score: 10 },
            { text: "재현이 쟤 어제 밤새 게임하다 왔나 보네. 대본도 하나도 안 외워오고 부장이 저래도 돼?", score: 0 }
        ]
    },
    {
        q: "은성이가 유독 우울해 보이던 날 아침, 책상 위에 '딸기바'가 놓여 있었다. 은성이가 굳어있자, 틱틱대던 수아는 엎드려버리고 유진이는 그 광경을 조용히 지켜보고 있다. 저 딸기바는 누가 둔 걸까?",
        img1: "q10_1.png", img2: "q10_2.png",
        choices: [
            { text: "당연히 유진이가 은성이 기분 풀어주려고 몰래 두고 간 거지! 무심한 듯 다정한 스윗 츤데레 남주!", score: 5 },
            { text: "수아가 둔 거야. 틱틱거리며 멀어졌지만, 사실 화해하고 싶어서 예전에 같이 먹던 딸기바를 슬쩍 둔 거지.", score: 10 },
            { text: "아, 나도 매점 가서 딸기바나 사 먹을까? 누가 둔 게 뭐가 중요해, 아침부터 공짜 간식 개이득!", score: 0 }
        ]
    }
];

// 결과 데이터 로직
const results = [
    {
        title: "눈치 만렙 인간 CCTV<br>'인간 연애 상담소'", img: "a1.png",
        desc: "친구들이 매일 디엠(DM) 캡처를 보내며 연애 상담을 요청하는 타입! 겉으로 보이는 말이나 행동 뒤에 숨겨진 '찐텐'을 귀신같이 캐치합니다. 교실에서 애들 눈빛 교환 한 번만 봐도 타이머를 재고 있죠. 뻔한 로맨스 전개에 절대 속지 않는 완벽한 연애 눈치를 가졌습니다.",
        book: "남들 속마음 꿰뚫어 보는 재미로 사는 당신! 『이번 생은 갓생』을 읽는다면 얽히고설킨 아이들의 텐션과 숨겨진 속마음을 누구보다 빠르고 짜릿하게 찾아낼 수 있을 거예요."
    },
    {
        title: "매의 눈과 과몰입의 환상 조합<br>'대리 설렘러'", img: "a2.png",
        desc: "누가 누구한테 호감 있는지는 대충 눈치채는 편! 하지만 가끔 거기에 내 상상력을 더해 스토리를 부풀리곤 합니다. 당사자들보다 옆에서 더 신나서 주접을 떨어주는 귀여운 프로 참견러입니다.",
        book: "눈치와 상상력이 섞여 매일매일이 흥미진진한 당신! 소설 속 묘한 기류들을 당신만의 시선으로 추리하며 읽는다면 200% 과몰입할 수 있을 거예요."
    },
    {
        title: "로맨스 필터 장착 완료!<br>'과몰입 급발진러'", img: "a3.png",
        desc: "현실에서도 웹툰 주인공 필터 장착 완료! 남녀가 실수로 손만 스쳐도 머릿속에서 이미 웹툰 100화 뚝딱 그려내는 진성 과몰입러입니다. 정작 본인 연애보다 남의 연애에 더 진심이고, 떡밥을 어떻게든 주워 먹는 걸 즐깁니다.",
        book: "평범한 일상도 로맨스로 만드는 엄청난 필터를 가진 당신에게 강력 추천! 『이번 생은 갓생』에는 당신의 과몰입 스위치를 단숨에 켜줄 아슬아슬한 관계성 맛집 요소들이 가득해요."
    },
    {
        title: "핀트가 살짝 어긋난<br>'우당탕탕 연애 코치'", img: "a4.png",
        desc: "나름대로 친구들 연애를 도와주려고 눈치를 살피지만, 묘하게 핀트가 어긋나는 타입! 냅다 직진했다가 타이밍을 못 맞춰서 갑분싸를 만들기도 합니다. 예리한 촉보다는 맑고 통통 튀는 성격 자체가 매력인 사람이에요.",
        book: "남 일에 진심으로 공감해 주는 따뜻한 마음을 가진 당신! 주인공들의 서툰 감정 표현과 엇갈림을 따라가다 보면, 어느새 연애 눈치가 쑥쑥 자라난 자신을 발견할 수 있을 거예요."
    },
    {
        title: "로맨스보다 내 인생이 중요해!<br>'철벽 마이웨이 둔감러'", img: "a5.png",
        desc: "반 애들 다 아는 썸도 나 혼자만 끝까지 모르는 타입. 폭풍 플러팅을 쳐도 '오, 텐션 짱 좋네?' 하고 넘겨버리는 타격감 제로 철벽러입니다. 남의 연애사보다는 오늘의 급식과 내 친구들이 훨씬 중요한 쿨한 마이웨이!",
        book: "잠든 연애 세포마저 확 깨워줄 책! 『이번 생은 갓생』은 단순한 로맨스가 아니라 10대들의 찐 우정과 치열한 고민들이 꽉 차 있어서, 당신마저 어느새 푹 빠져들게 만들 거예요."
    }
];

let currentQ = 0;
let totalScore = 0;
let imageTimeout;

// 초기화: 캐릭터 도감 세팅
window.onload = () => {
    const slider = document.getElementById('character-slider');
    characters.forEach(c => {
        const card = document.createElement('div');
        card.className = 'char-card';
        card.style.backgroundImage = `url('${c.img}')`;
        card.innerHTML = `
            <div class="char-info">
                <h4>${c.name}</h4>
                <p>${c.desc}</p>
            </div>
        `;
        // 터치 시 정보 토글
        card.onclick = () => {
            document.querySelectorAll('.char-card').forEach(el => el.classList.remove('open'));
            card.classList.add('open');
        };
        slider.appendChild(card);
    });
};

function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function startTest() {
    currentQ = 0;
    totalScore = 0;
    switchScreen('test-screen');
    renderQuestion();
}

function renderQuestion() {
    const q = questions[currentQ];
    document.getElementById('q-num').innerText = `Q${currentQ + 1} / 10`;
    document.getElementById('progress').style.width = `${((currentQ + 1) / 10) * 100}%`;
    document.getElementById('q-text').innerHTML = q.q;
    
    // 이미지 세팅
    const img1 = document.getElementById('q-img1');
    const img2 = document.getElementById('q-img2');
    const skipHint = document.getElementById('skip-hint');
    
    img1.src = q.img1;
    img2.src = q.img2;
    
    // 초기화: 2번째 이미지는 숨김
    img2.classList.add('hidden');
    img2.style.height = '0';
    skipHint.style.display = 'block';

    // 2.5초 뒤 두 번째 이미지 등장
    clearTimeout(imageTimeout);
    imageTimeout = setTimeout(() => {
        showSecondImage();
    }, 2500);

    // 선택지 버튼 렌더링 (순서를 랜덤으로 섞어서 렌더링)
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';
    
    // 버튼 섞기
    let shuffledChoices = [...q.choices].sort(() => Math.random() - 0.5);
    
    shuffledChoices.forEach(c => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.innerText = c.text;
        btn.onclick = () => selectAnswer(c.score);
        choicesDiv.appendChild(btn);
    });
}

function showSecondImage() {
    const img2 = document.getElementById('q-img2');
    img2.classList.remove('hidden');
    img2.style.height = 'auto';
    document.getElementById('skip-hint').style.display = 'none';
}

// 이미지 영역 터치 시 스킵
function skipImageDelay() {
    clearTimeout(imageTimeout);
    showSecondImage();
}

function selectAnswer(score) {
    totalScore += score;
    currentQ++;
    
    if (currentQ < questions.length) {
        renderQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    switchScreen('loading-screen');
    
    setTimeout(() => {
        let type = 0;
        // 총점 100점 기준 (골고루 분포)
        if (totalScore >= 85) type = 0;       // Type 1
        else if (totalScore >= 65) type = 1;  // Type 2
        else if (totalScore >= 45) type = 2;  // Type 3
        else if (totalScore >= 20) type = 3;  // Type 4
        else type = 4;                        // Type 5
        
        const r = results[type];
        
        document.getElementById('r-title').innerHTML = r.title;
        document.getElementById('r-img').src = r.img;
        document.getElementById('r-desc').innerHTML = r.desc;
        document.getElementById('r-book-desc').innerHTML = r.book;
        
        switchScreen('result-screen');
    }, 2000); // 2초 로딩
}