if (history.scrollRestoration) history.scrollRestoration = 'manual';

/* ===== 데이터 ===== */
const characters = [
    { id:1, img:'assets/c_001.png', name:'이은성', desc:'교실 뒷자리의 조용한 프로 관찰자. 중학교 때 짝사랑했던 그 애가 전학을 오면서 일상이 흔들리기 시작했다?' },
    { id:2, img:'assets/c_002.png', name:'도유진', desc:'전학 오자마자 인싸 등극! 모두에게 다정하지만, 그의 시선이 향하는 곳엔 늘 예상치 못한 \'그 사람\'이 있다.' },
    { id:3, img:'assets/c_003.png', name:'오수아', desc:'은성이의 껌딱지 절친. 하지만 최근 은성이 곁을 맴도는 남학생들이 몹시 거슬려 폭주하기 직전이다.' },
    { id:4, img:'assets/c_004.png', name:'차재현', desc:'모두의 첫사랑, 연극부 부장. 언제나 여유 넘치지만, 유진이 앞에만 서면 묘하게 뚝딱거린다.' },
    { id:5, img:'assets/c_005.png', name:'윤해수', desc:'빈틈없는 송현고 최고 여신. 남 일에 무관심한 척하면서 우리 반 기류를 제일 정확하게 꿰뚫어 본다.' }
];

const questions = [
    {
        q:"나른한 문학 시간, 얼굴 천재 전학생 유진이가 자꾸 우리 분단 쪽을 빤히 쳐다본다. 그 시선의 끝엔 학교 여신 '윤해수', 연극부장 '차재현', 그리고 조용한 '이은성'이 있다. 당신의 촉이 발동하는 방향은?",
        img1:"assets/q1_1.png", img2:"assets/q1_2.png",
        choices:[
            {text:"자꾸 이쪽을 보네... 설마 나한테 첫눈에 반한 건가?!", score:0},
            {text:"당연히 송현고 여신 윤해수일 듯. 딱 봐도 남주 여주 재질이잖아! 둘이 곧 사귀겠네", score:5},
            {text:"잠깐, 시선의 방향이 미묘한데? 설마 대본 연습 중인 연극부장 차재현을 보고 있는 거 아냐?", score:10},
        ]
    },
    {
        q:"스킨십 장인에 인싸 '연극부장 차재현'남녀 가리지 않고 어깨동무를 척척 걸치는데, 유독 전학생 도유진이 다가올 때만 귀까지 빨개져서 뒷걸음질을 친다. 이 텐션, 대체 뭘까?",
        img1:"assets/q2_1.png", img2:"assets/q2_2.png",
        choices:[
            {text:"남자끼리니까 어제 둘이 싸웠나 보다. 아니면 유진이한테서 땀 냄새 나서 피하는 건가?", score:0},
            {text:"설마 둘이 한 여자를 두고 기싸움하는 거 아니야?", score:5},
            {text:"얼굴까지 빨개지는 거면, 설마 설마 차재현한테 도유진이 고백한 거 아냐?", score:10},
        ]
    },
    {
        q:"제비뽑기로 자리를 바꾸는 날. 가장 먼저 번호를 뽑은 전학생 도유진이 향한 곳은, 밝은 분위기의 친구들이 모인 명당이나 여신 윤해수의 옆자리가 아니었다. 도유진이 고른 자리는 굳이 교실 맨 구석, 조용한 이은성의 바로 뒷자리? 대체 왜 저길 고른 걸까?",
        img1:"assets/q3_1.png", img2:"assets/q3_2.png",
        choices:[
            {text:"도유진이 이은성한테 마음 있는 거 아니야?", score:5},
            {text:"둘이 접점이 없는데, 서로간의 비밀이라도 있는 거 아니야?", score:10},
            {text:"맨 뒷자리 구석 완전 명당이잖아, 엎드려 자도 쌤한테 절대 안 걸리는 자리!", score:0}
        ]
    },
    {
        q:"이은성과 화장실도 같이 가던 껌딱지 오수아. 최근 이은성이 조별 과제로 남학생들과 친해지자, 오수아는 이은성을 쌩까고 틱틱대기 시작했다. 오수아의 속마음은 뭘까?",
        img1:"assets/q4_1.png", img2:"assets/q4_2.png",
        choices:[
            {text:"절친인 이은성이 관계를 넓히니까, 자기가 버림받을까 봐 질투나서 저러는 걸거야", score:10},
            {text:"오수아가 은성이네 조 남자애를 좋아하는데 그것 때문에 질투하는 걸거야", score:5},
            {text:"은성이 조별 과제를 남자애들이 다 해주니까 지만 편하게 한다고 수아가 삐졌나 보네", score:0}
        ]
    },
    {
        q:"이은성이 유독 우울해 보이던 날 아침, 은성이의 책상 위에 은성이가 좋아하는 '딸기바'가 놓여 있었다. 그걸 본 이은성이 굳어있자, 오수아는 애써 시선을 피하며 엎드려버리고 도유진은 그 광경을 조용히 지켜보고 있다. 저 딸기바는 누가, 왜 둔 걸까?",
        img1:"assets/q5_1.png", img2:"assets/q5_2.png",
        choices:[
            {text:"누가 둔 게 뭐가 중요해, 아침부터 공짜 간식이라니 부럽다!", score:0},
            {text:"최근에 오수아가 이은성한테 틱틱거리더니 다시 화해하고 싶어서 둔 거 아니야?", score:10},
            {text:"미쳤다, 백퍼 도유진이 이은성 좋아한다ㅠ", score:5},
        ]
    },
    {
        q:"연극부 대본 리딩 시간. 평소 능글맞게 연기를 잘하던 부장 차재현이, 유독 도유진과의 극 중 '과거를 사과하는 씬'을 맞출 때만 목소리가 미세하게 떨리며 대사를 심하게 절었다. 차재현은 왜 그랬을까?",
        img1:"assets/q6_1.png", img2:"assets/q6_2.png",
        choices:[
            {text:"동성이어도 얼굴 천재 앞에서는 별 수 없이 넋이 나가는 거지 뭐", score:5},
            {text:"차재현이 저런 애가 아닌데, 둘이 뭔가 있는 거 아니야?", score:10},
            {text:"차재현 요즘에 게임에 미쳤다더니 정신 못차리는 거 같은데?", score:0}
        ]
    },
    {
        q:"연극제 대기실에서 도유진이 그윽한 표정으로 차재현의 손목을 잡고 있는 묘한 사진이 학교 익명 게시판에 올라왔다! 이 사진을 몰래 찍어 올린 유력한 용의자는 '오수아'로 지목되는데.. 정말 오수아가 범인이라면 도대체 왜 이런 짓을 했을까?",
        img1:"assets/q7_1.png", img2:"assets/q7_2.png",
        choices:[
            {text:"도유진과 차재현이 남남커플로 엮이는 게 꼴 보기 싫어서 정의의 사도인 척 떼어놓으려고", score:5},
            {text:"자신의 절친이었던 이은성이, 도유진의 비밀을 알게 되면 다시 자기한테 돌아올 줄 알고", score:10},
            {text:"사진 자체가 너무 특종인데 이걸 안 올릴 수가 없잖아?", score:0}
        ]
    },
    {
        q:"익명 게시판 폭로 이후, 반 대표 빌런 남학생이 도유진을 향해 선 넘는 조롱을 쏟아낸다. 그때, 소심하던 이은성이 일어나 빌런의 머리에 우유를 냅다 부어버렸다? 은성이의 미친 용기는 어디서 나온 걸까?",
        img1:"assets/q8_1.png", img2:"assets/q8_2.png",
        choices:[
            {text:"둘이 비밀 연애 중인데 남친 건드려서 빡친 거 아니야?", score:5},
            {text:"이은성이 도유진을 짝사랑하는 거 아니야?", score:10},
            {text:"이은성, 그렇게 안 봤는데 원래 한 성격하는 사이다 인간이었던 거야?", score:0}
        ]
    },
    {
        q:"평소 꾸미는 데 관심 없던 이은성이 리본 핀을 하고 왔다. 도유진이 다가가 이은성에게 속삭인다. '내가 보내준 그림이랑 똑같네?' 이은성의 얼굴이 터질 듯 붉어졌다. 이건 또 무슨 시그널일까?",
        img1:"assets/q9_1.png", img2:"assets/q9_2.png",
        choices:[
            {text:"와, 우유사건 때문에 도유진이 이은성 플러팅하는거야 분명, 유죄 인간 같으니라고!!", score:5},
            {text:"저 리본 핀 요즘 유행하는 템인가? 윤해수도 있던데, 나도 하나 살까?", score:0},
            {text:"'내가 보내준 그림?' 둘이 수상하더니 뭔가 비밀 얘기 하는 거 아니야?", score:10},
        ]
    },
    {
        q:"갑자기 폭우가 쏟아지는 하교 길. 도유진은 우산이 없는 이은성에게 자기 우산을 쥐여주고 빗속을 뛰어간다. 그리고 도착한 곳은... 저 멀리 서 있던 차재현의 우산 속! 이게 도대체 무슨 상황??",
        img1:"assets/q10_1.png", img2:"assets/q10_2.png",
        choices:[
            {text:"비오는데 우산 없는 여자애를 그냥 두면 남자가 아니지!", score:0},
            {text:"이은성에게 우산 줘서 호감도 올리고 빗속을 달리는 남성미 어필! 완벽한 큰그림이잖아?", score:5},
            {text:"이은성도 이은성이지만 진짜 목적지는 차재현의 우산 속이라는 뭐 그런 거 아니야?", score:10},
        ]
    }
];

const results = [
    { title:"눈치 만렙 인간 CCTV<br>'인간 연애 상담소'", img:"assets/a1.png",
      desc:"친구들이 매일 DM 캡처를 보내며 연애 상담을 요청하는 타입! 겉으로 보이는 말이나 행동 뒤에 숨겨진 '찐텐'을 귀신같이 캐치합니다. 교실에서 애들 눈빛 교환 한 번만 봐도 타이머를 재고 있죠. 뻔한 로맨스 전개에 절대 속지 않는 완벽한 연애 눈치를 가졌습니다.",
      book:"남들 속마음 꿰뚫어 보는 재미로 사는 당신! 『이번 생은 갓생』을 읽는다면 얽히고설킨 아이들의 텐션과 숨겨진 속마음을 누구보다 빠르고 짜릿하게 찾아낼 수 있을 거예요." },
    { title:"매의 눈과 과몰입의 환상 조합<br>'대리 설렘러'", img:"assets/a2.png",
      desc:"누가 누구한테 호감 있는지는 대충 눈치채는 편! 하지만 가끔 거기에 내 상상력을 더해 스토리를 부풀리곤 합니다. 당사자들보다 옆에서 더 신나서 주접을 떨어주는 귀여운 프로 참견러입니다.",
      book:"눈치와 상상력이 섞여 매일매일이 흥미진진한 당신! 소설 속 묘한 기류들을 당신만의 시선으로 추리하며 읽는다면 200% 과몰입할 수 있을 거예요." },
    { title:"로맨스 필터 장착 완료!<br>'과몰입 급발진러'", img:"assets/a3.png",
      desc:"현실에서도 웹툰 주인공 필터 장착 완료! 남녀가 실수로 손만 스쳐도 머릿속에서 이미 웹툰 100화 뚝딱 그려내는 진성 과몰입러입니다. 정작 본인 연애보다 남의 연애에 더 진심이고, 떡밥을 어떻게든 주워 먹는 걸 즐깁니다.",
      book:"평범한 일상도 로맨스로 만드는 엄청난 필터를 가진 당신에게 강력 추천! 『이번 생은 갓생』에는 당신의 과몰입 스위치를 단숨에 켜줄 아슬아슬한 관계성 맛집 요소들이 가득해요." },
    { title:"핀트가 살짝 어긋난<br>'우당탕탕 연애 코치'", img:"assets/a4.png",
      desc:"나름대로 친구들 연애를 도와주려고 눈치를 살피지만, 묘하게 핀트가 어긋나는 타입! 냅다 직진했다가 타이밍을 못 맞춰서 갑분싸를 만들기도 합니다. 예리한 촉보다는 맑고 통통 튀는 성격 자체가 매력인 사람이에요.",
      book:"남 일에 진심으로 공감해 주는 따뜻한 마음을 가진 당신! 주인공들의 서툰 감정 표현과 엇갈림을 따라가다 보면, 어느새 연애 눈치가 쑥쑥 자라난 자신을 발견할 수 있을 거예요." },
    { title:"로맨스보다 내 인생이 중요해!<br>'철벽 마이웨이 둔감러'", img:"assets/a5.png",
      desc:"반 애들 다 아는 썸도 나 혼자만 끝까지 모르는 타입. 폭풍 플러팅을 쳐도 '오, 텐션 짱 좋네?' 하고 넘겨버리는 타격감 제로 철벽러입니다. 남의 연애사보다는 오늘의 급식과 내 친구들이 훨씬 중요한 쿨한 마이웨이!",
      book:"잠든 연애 감각마저 확 깨워줄 책! 『이번 생은 갓생』은 단순한 로맨스가 아니라 10대들의 찐 우정과 치열한 고민들이 꽉 차 있어서, 당신마저 어느새 푹 빠져들게 만들 거예요." }
];

/* ===== 상태 ===== */
let currentQ=0, totalScore=0, scoreHistory=[];
let slideIndex=0, slideInterval=null;
let isSliderInteracting=false, isModalOpen=false;
let isDragging=false, dragStartX=0, dragScrollLeft=0;
let questionImageTimer, isScene2=false;
let modalCharIndex=0;           // 모달 현재 캐릭터 인덱스
let modalTouchStartX=0;         // 모달 스와이프
let modalDragging=false, modalDragStartX=0;

/* ===== 초기화 ===== */
window.onload = () => {
    window.scrollTo(0,0);
    initCharacterSlider();
    initModalSwipe();
    buildModalDots();
};

/* ========================
   1. 캐릭터 슬라이더
======================== */
function initCharacterSlider() {
    const slider = document.getElementById('character-slider');
    characters.forEach((c, i) => {
        const card = document.createElement('div');
        card.className = 'char-card';
        card.style.backgroundImage = `url('${c.img}')`;
        card.onclick = () => openCharModal(i);
        slider.appendChild(card);
    });

    function startAutoSlide() {
        if (isSliderInteracting || isModalOpen) return;
        stopAutoSlide();
        slideInterval = setInterval(() => {
            if (isSliderInteracting || isModalOpen) return;
            slideIndex = (slideIndex + 1) % characters.length;
            slider.scrollTo({ left: slideIndex * 256, behavior:'smooth' });
        }, 5000);
    }
    function stopAutoSlide() { clearInterval(slideInterval); slideInterval=null; }

    // 모바일 터치
    slider.addEventListener('touchstart', ()=>{ isSliderInteracting=true; stopAutoSlide(); }, {passive:true});
    slider.addEventListener('touchend',   ()=>{ isSliderInteracting=false; setTimeout(startAutoSlide,1000); }, {passive:true});

    // PC 드래그
    slider.addEventListener('mousedown', (e)=>{
        isDragging=true; dragStartX=e.pageX-slider.getBoundingClientRect().left;
        dragScrollLeft=slider.scrollLeft; isSliderInteracting=true;
        stopAutoSlide(); slider.style.cursor='grabbing'; e.preventDefault();
    });
    window.addEventListener('mouseup', ()=>{
        if(!isDragging) return;
        isDragging=false; isSliderInteracting=false;
        slider.style.cursor='grab'; setTimeout(startAutoSlide,1000);
    });
    window.addEventListener('mousemove', (e)=>{
        if(!isDragging) return; e.preventDefault();
        const x=e.pageX-slider.getBoundingClientRect().left;
        slider.scrollLeft = dragScrollLeft - (x-dragStartX)*1.4;
    });
    slider.addEventListener('scroll', ()=>{ if(isSliderInteracting) slideIndex=Math.round(slider.scrollLeft/256); }, {passive:true});

    startAutoSlide();
    window._sliderStart = startAutoSlide;
    window._sliderStop  = stopAutoSlide;
}

/* ========================
   2. 모달 도트 생성
======================== */
function buildModalDots() {
    const dots = document.getElementById('modal-dots');
    dots.innerHTML = '';
    characters.forEach((_, i) => {
        const d = document.createElement('span');
        d.className = 'modal-dot' + (i===0 ? ' active' : '');
        d.onclick = (e) => { e.stopPropagation(); modalGoTo(i); };
        dots.appendChild(d);
    });
}

function updateModalDots() {
    document.querySelectorAll('.modal-dot').forEach((d, i) => {
        d.classList.toggle('active', i===modalCharIndex);
    });
}

/* ========================
   3. 모달 열기 / 닫기
======================== */
function openCharModal(index) {
    modalCharIndex = index;
    renderModalChar(false); // 첫 오픈은 페이드 없이
    document.getElementById('char-modal').classList.add('active');
    isModalOpen = true;
    if (window._sliderStop) window._sliderStop();
}

function closeCharModal(e) {
    if (e && e.target !== document.getElementById('char-modal')) {
        if (!e.target.classList.contains('char-modal-close')) return;
    }
    document.getElementById('char-modal').classList.remove('active');
    isModalOpen = false;
    setTimeout(()=>{ if(window._sliderStart) window._sliderStart(); }, 800);
}

/* ========================
   4. 모달 캐릭터 렌더 (페이드 전환)
======================== */
function renderModalChar(animate=true) {
    const imgEl = document.getElementById('char-modal-img');
    const c = characters[modalCharIndex];

    const doRender = () => {
        imgEl.style.backgroundImage = `url('${c.img}')`;
        document.getElementById('char-modal-name').innerText = c.name;
        document.getElementById('char-modal-desc').innerText = c.desc;
        updateModalDots();
        if (animate) {
            imgEl.classList.remove('fading');
        }
    };

    if (animate) {
        imgEl.classList.add('fading');
        setTimeout(doRender, 200);
    } else {
        doRender();
    }
}

function modalPrev() { modalCharIndex = (modalCharIndex - 1 + characters.length) % characters.length; renderModalChar(); }
function modalNext() { modalCharIndex = (modalCharIndex + 1) % characters.length; renderModalChar(); }
function modalGoTo(i) { if(i!==modalCharIndex){ modalCharIndex=i; renderModalChar(); } }

/* ========================
   5. 모달 스와이프 (터치+마우스)
======================== */
function initModalSwipe() {
    const imgEl = document.getElementById('char-modal-img');

    // 터치
    imgEl.addEventListener('touchstart', (e)=>{ modalTouchStartX=e.touches[0].clientX; }, {passive:true});
    imgEl.addEventListener('touchend',   (e)=>{
        const dx = e.changedTouches[0].clientX - modalTouchStartX;
        if (Math.abs(dx)>40) { dx<0 ? modalNext() : modalPrev(); }
    }, {passive:true});

    // 마우스 드래그
    imgEl.addEventListener('mousedown', (e)=>{ modalDragging=true; modalDragStartX=e.clientX; e.preventDefault(); });
    window.addEventListener('mouseup',  (e)=>{
        if (!modalDragging) return;
        const dx = e.clientX - modalDragStartX;
        if (Math.abs(dx)>40) { dx<0 ? modalNext() : modalPrev(); }
        modalDragging=false;
    });
}

/* ========================
   6. 화면 전환 (최상단 고정)
======================== */
function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    window.scrollTo(0,0);
    document.documentElement.scrollTop=0;
    document.body.scrollTop=0;
}

/* ========================
   7. 테스트 시작
======================== */
function startTest() {
    currentQ=0; totalScore=0; scoreHistory=[];
    switchScreen('test-screen');
    renderQuestion();
}

/* ========================
   8. 문항 렌더링
======================== */
function renderQuestion() {
    const q = questions[currentQ];
    document.getElementById('q-num').innerText     = `Q${currentQ+1} / ${questions.length}`;
    document.getElementById('progress').style.width = `${((currentQ+1)/questions.length)*100}%`;
    document.getElementById('q-text').innerHTML    = q.q;

    const container = document.getElementById('image-container');
    container.classList.remove('show-scene2');
    isScene2=false;
    document.getElementById('scene-badge').innerText='장면 1 / 2';
    document.getElementById('q-img1').src=q.img1;
    document.getElementById('q-img2').src=q.img2;

    clearTimeout(questionImageTimer);
    questionImageTimer=setTimeout(switchToScene2, 4500);

    const choicesDiv=document.getElementById('choices');
    choicesDiv.innerHTML='';
    [...q.choices].sort(()=>Math.random()-0.5).forEach(c=>{
        const btn=document.createElement('button');
        btn.className='choice-btn'; btn.innerText=c.text;
        btn.onclick=(e)=>{
            addRipple(btn,e);
            choicesDiv.querySelectorAll('.choice-btn').forEach(b=>b.disabled=true);
            setTimeout(()=>selectAnswer(c.score),220);
        };
        choicesDiv.appendChild(btn);
    });
}

/* ========================
   9. 장면 전환
======================== */
function switchToScene2(){ document.getElementById('image-container').classList.add('show-scene2'); isScene2=true; document.getElementById('scene-badge').innerText='장면 2 / 2'; }
function switchToScene1(){ document.getElementById('image-container').classList.remove('show-scene2'); isScene2=false; document.getElementById('scene-badge').innerText='장면 1 / 2'; }
function toggleQuestionImage(){ clearTimeout(questionImageTimer); isScene2?switchToScene1():switchToScene2(); }

/* ========================
   10. 답변 선택 (이미지 프리로드 포함)
======================== */
function selectAnswer(score) {
    scoreHistory.push(score); totalScore+=score; currentQ++;
    clearTimeout(questionImageTimer);
    const content=document.getElementById('test-content');
    content.classList.add('fade-out');

    setTimeout(()=>{
        if (currentQ<questions.length) {
            const q=questions[currentQ];
            let loaded=0;
            const onLoad=()=>{
                loaded++;
                if(loaded>=2){
                    renderQuestion();
                    requestAnimationFrame(()=>requestAnimationFrame(()=>content.classList.remove('fade-out')));
                }
            };
            const p1=new Image(), p2=new Image();
            p1.onload=p1.onerror=onLoad; p2.onload=p2.onerror=onLoad;
            p1.src=q.img1; p2.src=q.img2;
        } else {
            showResult();
        }
    }, 260);
}

/* ========================
   11. 뒤로가기
======================== */
function goBack() {
    clearTimeout(questionImageTimer);
    if(currentQ===0){ switchScreen('main-screen'); return; }
    totalScore-=scoreHistory.pop(); currentQ--;
    const content=document.getElementById('test-content');
    content.classList.add('fade-out');
    setTimeout(()=>{
        renderQuestion();
        requestAnimationFrame(()=>requestAnimationFrame(()=>content.classList.remove('fade-out')));
    },260);
}

/* ========================
   12. 결과
======================== */
function showResult() {
    switchScreen('loading-screen');
    setTimeout(()=>{
        let type=4;
        if(totalScore>=85)type=0; else if(totalScore>=65)type=1;
        else if(totalScore>=45)type=2; else if(totalScore>=20)type=3;
        const r=results[type];
        document.getElementById('r-title').innerHTML     = r.title;
        document.getElementById('r-img').src             = r.img;
        document.getElementById('r-desc').innerHTML      = r.desc;
        document.getElementById('r-book-desc').innerHTML = r.book;
        switchScreen('result-screen');
        launchConfetti();
    },2000);
}

/* ========================
   13. 다시하기
======================== */
function retryTest() {
    currentQ=0; totalScore=0; scoreHistory=[];
    clearTimeout(questionImageTimer);
    switchScreen('main-screen');
}

/* ========================
   14. 컨페티 (페이드아웃 포함)
======================== */
function launchConfetti() {
    const canvas=document.getElementById('confetti-canvas');
    if(!canvas) return;
    const ctx=canvas.getContext('2d');
    canvas.width=window.innerWidth; canvas.height=window.innerHeight;
    canvas.style.opacity='1';

    const COLORS=['#FF6B9D','#C084FC','#FFB0D0','#DDB8FF','#FFD6EB','#FFFFFF','#FFE4B5'];
    const SHAPES=['circle','rect','heart'];
    const MAX=200, FADE=155;
    const pieces=Array.from({length:110},()=>({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height-canvas.height,
        r:Math.random()*6+3,
        color:COLORS[Math.floor(Math.random()*COLORS.length)],
        speed:Math.random()*3+1.5, angle:Math.random()*360,
        spin:Math.random()*7-3.5,
        shape:SHAPES[Math.floor(Math.random()*SHAPES.length)]
    }));
    let frame=0;
    function draw(){
        if(frame>=FADE) canvas.style.opacity=String(Math.max(0,1-(frame-FADE)/(MAX-FADE)));
        ctx.clearRect(0,0,canvas.width,canvas.height);
        pieces.forEach(p=>{
            ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.angle*Math.PI/180); ctx.fillStyle=p.color;
            if(p.shape==='circle'){ ctx.beginPath(); ctx.arc(0,0,p.r,0,Math.PI*2); ctx.fill(); }
            else if(p.shape==='rect'){ ctx.fillRect(-p.r,-p.r*0.5,p.r*2,p.r); }
            else{ const s=p.r*0.55; ctx.beginPath(); ctx.moveTo(0,s*0.5);
                ctx.bezierCurveTo(s,-s*0.3,s*2,s*0.6,0,s*2);
                ctx.bezierCurveTo(-s*2,s*0.6,-s,-s*0.3,0,s*0.5); ctx.fill(); }
            ctx.restore();
            p.y+=p.speed; p.angle+=p.spin;
            if(p.y>canvas.height){ p.y=-10; p.x=Math.random()*canvas.width; }
        });
        frame++;
        if(frame<MAX) requestAnimationFrame(draw);
        else{ canvas.style.opacity='0'; ctx.clearRect(0,0,canvas.width,canvas.height); }
    }
    draw();
}

/* ========================
   15. 리플
======================== */
function addRipple(btn,e){
    const r=document.createElement('span'); r.className='ripple';
    const rect=btn.getBoundingClientRect(), size=Math.max(rect.width,rect.height);
    r.style.cssText=`width:${size}px;height:${size}px;left:${(e.clientX||rect.left+rect.width/2)-rect.left-size/2}px;top:${(e.clientY||rect.top+rect.height/2)-rect.top-size/2}px;`;
    btn.appendChild(r); setTimeout(()=>r.remove(),600);
}
