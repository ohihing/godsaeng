if (history.scrollRestoration) history.scrollRestoration = 'manual';

const characters = [
    { id:1, img:'assets/c_001.png', name:'이은성', desc:'교실 뒷자리의 조용한 프로 관찰자.\n중학교 때 짝사랑했던 그 애가 전학을 오면서\n일상이 흔들리기 시작했다?' },
    { id:2, img:'assets/c_002.png', name:'도유진', desc:'전학 오자마자 인싸 등극!\n모두에게 다정하지만, 그의 시선이 향하는 곳엔\n늘 예상치 못한 \'그 사람\'이 있다.' },
    { id:3, img:'assets/c_003.png', name:'오수아', desc:'은성이의 껌딱지 절친.\n하지만 최근 은성이 곁을 맴도는\n남학생들이 몹시 거슬려 폭주하기 직전이다.' },
    { id:4, img:'assets/c_004.png', name:'차재현', desc:'모두의 첫사랑이자 연극부 부장.\n언제나 여유 넘치지만,\n도유진 앞에만 서면 묘하게 뚝딱거린다.' },
    { id:5, img:'assets/c_005.png', name:'윤해수', desc:'빈틈없는 송현고 최고 여신.\n남 일에 무관심한 척하면서 우리 반 기류를\n제일 정확하게 꿰뚫어 본다.' }
];

const questions = [
    {
        q:"나른한 문학 시간,<br>얼굴 천재 전학생 도유진이<br>자꾸 우리 분단 쪽을 빤히 쳐다본다.<br>그 시선의 끝엔 학교 여신 윤해수,<br>연극부장 차재현,<br>그리고 조용한 이은성이 있다.<br><br>도유진은 지금 누굴 보고 있는 걸까?",
        img1:"assets/q1_1.png", img2:"assets/q1_2.png",
        choices:[
            {text:"자꾸 이쪽을 보네... 설마 나한테 첫눈에 반한 건가?!", score:0},
            {text:"당연히 송현고 여신 윤해수일 듯.\n딱 봐도 남주 여주 같잖아! 둘이 곧 사귀겠네", score:5},
            {text:"잠깐, 시선의 방향이 미묘한데?\n설마 대본 연습 중인 연극부장 차재현을 보고 있는 거 아냐?", score:10},
        ]
    },
    {
        q:"연극부장 차재현은 워낙 인싸라<br>남녀 가리지 않고 어깨동무를 척척 걸치는데,<br>유독 전학생 도유진이 다가올 때만<br>귀까지 빨개져서 뒷걸음질을 친다.<br><br>이 텐션, 대체 뭘까?",
        img1:"assets/q2_1.png", img2:"assets/q2_2.png",
        choices:[
            {text:"어제 둘이 싸웠나 보다.\n아니면 유진이한테서 땀 냄새 나서 피하는 건가?", score:0},
            {text:"설마 둘이 한 여자를 두고 기싸움하는 거 아니야?", score:5},
            {text:"얼굴까지 빨개지는 거면,\n설마 설마 도유진 좋아하는 거 아냐?", score:10},
        ]
    },
    {
        q:"제비뽑기로 자리를 바꾸는 날.<br>먼저 번호를 뽑은 도유진이 향한 곳은,<br>밝은 분위기의 친구들이 모인 명당이나<br>여신 윤해수의 옆자리가 아니었다.<br>도유진이 고른 자리는 굳이 교실 맨 구석,<br>조용한 이은성의 뒷자리였다?<br><br>대체 왜 저길 고른 걸까?",
        img1:"assets/q3_1.png", img2:"assets/q3_2.png",
        choices:[
            {text:"도유진이 이은성한테 마음 있는 거 아니야?", score:5},
            {text:"둘이 접점이 하나도 없는데.\n약점이라도 잡혔나?", score:10},
            {text:"맨 뒷자리 구석 완전 명당이잖아,\n엎드려 자도 쌤한테 절대 안 걸리는 자리!", score:0}
        ]
    },
    {
        q:"이은성과 화장실도 같이 가던<br>껌딱지 오수아.<br>최근 이은성이 조별 과제로<br>남학생들과 친해지자,<br>왠지 오수아의 태도가 차가워졌다.<br><br>오수아의 속마음은 뭘까?",
        img1:"assets/q4_1.png", img2:"assets/q4_2.png",
        choices:[
            {text:"이은성이 친구가 많아지니까,\n자기는 버림받을까 봐 두렵고 질투나는 거 아냐?", score:10},
            {text:"저 남학생 중에 오수아가 좋아하는 애가 있나 봐", score:5},
            {text:"조별 과제를 남자애들이 다 해줬다던데,\n그래서 괜히 심통 났나봐", score:0}
        ]
    },
    {
        q:"이은성이 유독 우울해 보이던 날,<br>누군가 이은성의 책상 위에<br>딸기바 아이스크림을 놔두었다.<br>그걸 본 이은성이 당황하자,<br>오수아는 애써 시선을 피하며 엎드리고<br>도유진은 가만히 지켜보고만 있다.<br><br>아이스크림은 누가, 왜 둔 걸까?",
        img1:"assets/q5_1.png", img2:"assets/q5_2.png",
        choices:[
            {text:"누가 둔 게 뭐가 중요해,\n아침부터 공짜 간식이라니 부럽다!", score:0},
            {text:"오수아가 이은성이랑 화해하고 싶었나?", score:10},
            {text:"미쳤다, 백퍼 도유진이 이은성 좋아한다ㅠ", score:5},
        ]
    },
    {
        q:"연극부 대본 리딩 시간.<br>평소 능글맞게 연기를 잘하던 차재현이,<br>유독 도유진하고 합을 맞출 때만<br>목소리를 미세하게 떨고 있다.<br><br>차재현은 왜 그런걸까?",
        img1:"assets/q6_1.png", img2:"assets/q6_2.png",
        choices:[
            {text:"동성이어도 얼굴 천재 앞에서는 별 수 없이 넋이 나가는 거지 뭐", score:5},
            {text:"차재현이 저런 애가 아닌데,\n둘이 뭔가 있는 거 아니야?", score:10},
            {text:"차재현 요즘 게임에 미쳐 있다더니,\n늦게 자느라 정신 못 차리나 봐", score:0}
        ]
    },
    {
        q:"연극제 대기실에서 도유진이<br>차재현의 손목을 잡는 묘한 사진이<br>학교 익명 게시판에 올라왔다.<br><br>범인은 도대체 왜 이런 짓을 했을까?",
        img1:"assets/q7_1.png", img2:"assets/q7_2.png",
        choices:[
            {text:"사진 자체가 너무 특종인데 이걸 안 올릴 수가 없잖아?", score:5},
            {text:"도유진이랑 차재현이 잘 지내면\n피해를 보는 누군가가 올린 건가?", score:10},
            {text:"게시물 올린 다음 사람들의 반응을\n보고 희열을 느끼려고?", score:0}
        ]
    },
    {
        q:"익명 게시판 폭로 이후,<br>우리반의 대표 빌런이 도유진을 향해<br>선 넘는 조롱을 쏟아낸다.<br>그때, 소심하던 이은성이 일어나<br>빌런의 머리에 우유를 냅다 부어버렸다?<br><br>이은성의 미친 용기는 어디서 나온 걸까?",
        img1:"assets/q8_1.png", img2:"assets/q8_2.png",
        choices:[
            {text:"둘이 비밀 연애 중인데 남친 건드려서 빡친 거지!", score:5},
            {text:"소심한 성격도 이겨낼 만큼\n이은성이 도유진을 짝사랑하고 있나봐!", score:10},
            {text:"이은성, 그렇게 안 봤는데\n원래 한 성격하는 사이다 인간이었던 거야?", score:0}
        ]
    },
    {
        q:"평소 꾸미는 데 관심 없던 이은성이<br>리본 핀을 하고 왔다.<br>도유진이 다가가 이은성에게 속삭인다.<br>'내가 보내준 그림이랑 똑같네?'<br>이은성의 얼굴이 터질 듯 붉어졌다.<br><br>이건 또 무슨 시그널일까?",
        img1:"assets/q9_1.png", img2:"assets/q9_2.png",
        choices:[
            {text:"와, 우유 사건 이후로 도유진이 플러팅하는 것 같은데?", score:5},
            {text:"어? 저 리본 핀 요즘 유행해?\n윤해수도 있던데, 나도 하나 살까?", score:0},
            {text:"'내가 보내준 그림?'\n둘이 수상해 보이더니 비밀 얘기 하나 봐!", score:10},
        ]
    },
    {
        q:"갑자기 폭우가 쏟아지는 하굣길.<br>도유진은 우산이 없는 이은성에게<br>자기 우산을 쥐여주고 빗속을 뛰어간다.<br>그리고 도착한 곳은...<br>저 멀리 서 있던 차재현의 우산 속?<br><br>이게 도대체 무슨 상황이지?",
        img1:"assets/q10_1.png", img2:"assets/q10_2.png",
        choices:[
            {text:"비오는데 우산 없는 여자애를\n그냥 내버려두면 남자가 아니지!", score:0},
            {text:"이은성에게 우산 줘서 호감 쌓고\n빗속을 달리면서 남성미도 어필하고.\n완벽한 큰 그림이잖아?", score:5},
            {text:"이은성도 이은성이지만\n진짜 목적지는 차재현의 우산 속이었던 거 아니야?", score:10},
        ]
    }
];

const results = [
    { title:"인간 관계 레이더<br>'돌고래 유형'", img:"assets/a1.jpg",
      desc:"친구들이 고민만 생기면 자연스럽게 찾아오는 타입!<br>말투나 표정, 미묘한 거리감까지 남들보다 빠르게 읽어냅니다.<br>누가 누구를 신경 쓰는지 굳이 캐묻지 않아도 대충 상황 파악 완료!<br>분위기를 휘젓기보다는 필요할 때 한마디로 정리해주는 편이에요.<br><br>돌고래처럼 사람들과 잘 어울리면서도 주변의 흐름을<br>빠르게 읽어내는 든든한 관계형 리더입니다.",
      book:"남들 속마음 꿰뚫어 보는 재미로 사는 당신!<br>『이번 생은 갓생』을 읽는다면<br>얽히고설킨 아이들의 텐션과 숨겨진 속마음을<br>누구보다 빠르고 짜릿하게 찾아낼 수 있을 거예요." },
    { title:"확실한 촉으로 탐지하는<br>'매 유형'", img:"assets/a2.jpg",
      desc:"누가 누구한테 호감 있는지 남들보다 먼저 눈치채는 타입!<br>스쳐 가는 시선이나 평소와 다른 말투도 그냥 넘기지 않습니다.<br>다만 가끔은 작은 신호 하나에 상상력을 살짝 보태기도 해요.<br><br>당사자들보다 옆에서 더 설레고 더 신나서 주접을 떨어주는 편!<br>매처럼 멀리서도 설렘의 기류를 포착하는 귀여운 프로 참견러입니다.",
      book:"눈치와 상상력이 섞여 매일매일이 흥미진진한 당신!<br>소설 속 묘한 기류들을 당신만의 시선으로 추리하며 읽는다면<br>200% 과몰입할 수 있을 거예요." },
    { title:"과몰인 급발진러!<br>'치타 유형'", img:"assets/a3.jpg",
      desc:"현실에서도 웹툰 필터가 자동 장착되는 타입!<br>남녀가 눈만 마주쳐도 머릿속에서 이미 서사 한 편이 완성됩니다.<br>작은 떡밥 하나만 보여도 관계성부터 엔딩까지 초고속 상상 완료.<br>정작 본인 연애보다 남의 연애에 훨씬 더 진심이에요.<br><br>치타처럼 설렘을 발견하는 순간<br>누구보다 빠르게 달려드는 진성 과몰입형 로맨스 러너입니다.",
      book:"평범한 일상도 로맨스로 만드는<br>엄청난 필터를 가진 당신에게 강력 추천!<br>『이번 생은 갓생』에는 당신의 과몰입 스위치를<br>단숨에 켜줄 아슬아슬한 관계성 맛집 요소들이 가득해요." },
    { title:"우당탕탕 참견 코치<br>'리트리버 유형'", img:"assets/a4.jpg",
      desc:"친구들 연애를 보면 어떻게든 도와주고 싶은 타입<br>눈치도 나름 살피고 분위기도 읽어보려고 하지만<br>가끔은 브레이크보다 액셀이 먼저 밟힐 때가 있습니다.<br>좋은 뜻으로 나섰다가 오히려 일을 조금 키우기도 하죠.<br><br>그래도 리트리버처럼 밝고 다정한 에너지 자체가 매력인<br>사랑스러운 허당 연애 코치입니다.",
      book:"남 일에 진심으로 공감해 주는 따뜻한 마음을 가진 당신!<br>주인공들의 서툰 감정 표현과 엇갈림을 따라가다 보면,<br>어느새 연애 눈치가 쑥쑥 자라난<br>자신을 발견할 수 있을 거예요." },
    { title:"철벽 마이웨이<br>'나무늘보 유형'", img:"assets/a5.jpg",
      desc:"반 애들이 다 아는 썸도 나만 끝까지 모르는 타입!<br>누가 플러팅을 해도 “오늘 텐션 좋네?” 하고 넘겨버립니다.<br><br>연애 신호에는 조금 둔감하지만 대신 자기 페이스는 확실해요.<br>남의 연애사보다는 오늘의 식사 메뉴와 내 친구들이 더 중요합니다.<br><br>나무늘보처럼 남들 속도에 휘둘리지 않고 자기 방식대로 살아가는 쿨한 마이웨이 유형입니다.",
      book:"잠든 연애 감각마저 확 깨워줄 책!<br>『이번 생은 갓생』은 단순한 로맨스가 아니라<br>10대들의 찐 우정과 치열한 고민들이 꽉 차 있어서,<br>당신마저 어느새 푹 빠져들게 만들 거예요." }
];

let currentQ=0,totalScore=0,scoreHistory=[];
let slideIndex=0,slideInterval=null;
let isSliderInteracting=false,isModalOpen=false;
let isDragging=false,dragStartX=0,dragScrollLeft=0;
let questionImageTimer,isScene2=false;
let modalCharIndex=0,modalTouchStartX=0;
let modalDragging=false,modalDragStartX=0;

window.onload=()=>{ window.scrollTo(0,0); initCharacterSlider(); initModalSwipe(); buildModalDots(); buildTypesGrid(); };

function initCharacterSlider(){
    const slider=document.getElementById('character-slider');
    characters.forEach((c,i)=>{ const card=document.createElement('div'); card.className='char-card'; card.style.backgroundImage=`url('${c.img}')`; card.onclick=()=>openCharModal(i); slider.appendChild(card); });
    function startAutoSlide(){ if(isSliderInteracting||isModalOpen)return; stopAutoSlide(); slideInterval=setInterval(()=>{ if(isSliderInteracting||isModalOpen)return; slideIndex=(slideIndex+1)%characters.length; slider.scrollTo({left:slideIndex*256,behavior:'smooth'}); },5000); }
    function stopAutoSlide(){ clearInterval(slideInterval); slideInterval=null; }
    slider.addEventListener('touchstart',()=>{ isSliderInteracting=true; stopAutoSlide(); },{passive:true});
    slider.addEventListener('touchend',()=>{ isSliderInteracting=false; setTimeout(startAutoSlide,1000); },{passive:true});
    slider.addEventListener('mousedown',(e)=>{ isDragging=true; dragStartX=e.pageX-slider.getBoundingClientRect().left; dragScrollLeft=slider.scrollLeft; isSliderInteracting=true; stopAutoSlide(); slider.style.cursor='grabbing'; e.preventDefault(); });
    window.addEventListener('mouseup',()=>{ if(!isDragging)return; isDragging=false; isSliderInteracting=false; slider.style.cursor='grab'; setTimeout(startAutoSlide,1000); });
    window.addEventListener('mousemove',(e)=>{ if(!isDragging)return; e.preventDefault(); const x=e.pageX-slider.getBoundingClientRect().left; slider.scrollLeft=dragScrollLeft-(x-dragStartX)*1.4; });
    slider.addEventListener('scroll',()=>{ if(isSliderInteracting)slideIndex=Math.round(slider.scrollLeft/256); },{passive:true});
    startAutoSlide(); window._sliderStart=startAutoSlide; window._sliderStop=stopAutoSlide;
}

function buildModalDots(){ const dots=document.getElementById('modal-dots'); dots.innerHTML=''; characters.forEach((_,i)=>{ const d=document.createElement('span'); d.className='modal-dot'+(i===0?' active':''); d.onclick=(e)=>{ e.stopPropagation(); modalGoTo(i); }; dots.appendChild(d); }); }
function updateModalDots(){ document.querySelectorAll('.modal-dot').forEach((d,i)=>d.classList.toggle('active',i===modalCharIndex)); }
function openCharModal(index){ modalCharIndex=index; renderModalChar(false); document.getElementById('char-modal').classList.add('active'); isModalOpen=true; if(window._sliderStop)window._sliderStop(); }
function closeCharModal(e){ if(e&&e.target!==document.getElementById('char-modal')){ if(!e.target.classList.contains('char-modal-close'))return; } document.getElementById('char-modal').classList.remove('active'); isModalOpen=false; setTimeout(()=>{ if(window._sliderStart)window._sliderStart(); },800); }
function renderModalChar(animate=true){ const imgEl=document.getElementById('char-modal-img'); const c=characters[modalCharIndex]; const doRender=()=>{ imgEl.style.backgroundImage=`url('${c.img}')`; document.getElementById('char-modal-name').innerText=c.name; document.getElementById('char-modal-desc').innerText=c.desc; updateModalDots(); if(animate)imgEl.classList.remove('fading'); }; if(animate){ imgEl.classList.add('fading'); setTimeout(doRender,200); } else doRender(); }
function modalPrev(){ modalCharIndex=(modalCharIndex-1+characters.length)%characters.length; renderModalChar(); }
function modalNext(){ modalCharIndex=(modalCharIndex+1)%characters.length; renderModalChar(); }
function modalGoTo(i){ if(i!==modalCharIndex){ modalCharIndex=i; renderModalChar(); } }
function initModalSwipe(){ const imgEl=document.getElementById('char-modal-img'); imgEl.addEventListener('touchstart',(e)=>{ modalTouchStartX=e.touches[0].clientX; },{passive:true}); imgEl.addEventListener('touchend',(e)=>{ const dx=e.changedTouches[0].clientX-modalTouchStartX; if(Math.abs(dx)>40){ dx<0?modalNext():modalPrev(); } },{passive:true}); imgEl.addEventListener('mousedown',(e)=>{ modalDragging=true; modalDragStartX=e.clientX; e.preventDefault(); }); window.addEventListener('mouseup',(e)=>{ if(!modalDragging)return; const dx=e.clientX-modalDragStartX; if(Math.abs(dx)>40){ dx<0?modalNext():modalPrev(); } modalDragging=false; }); }

function switchScreen(screenId){ document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active')); document.getElementById(screenId).classList.add('active'); window.scrollTo(0,0); document.documentElement.scrollTop=0; document.body.scrollTop=0; }
function goToIntro(){ switchScreen('intro-screen'); }
function startTest(){ currentQ=0; totalScore=0; scoreHistory=[]; switchScreen('test-screen'); renderQuestion(); }

function renderQuestion(){
    const q=questions[currentQ];
    document.getElementById('q-num').innerText=`Q${currentQ+1} / ${questions.length}`;
    document.getElementById('progress').style.width=`${((currentQ+1)/questions.length)*100}%`;
    document.getElementById('q-text').innerHTML=q.q;
    const container=document.getElementById('image-container');
    const img1=document.getElementById('q-img1');
    const img2=document.getElementById('q-img2');
    // 이미지 깜빡임 방지: 트랜지션 일시 중단
    img1.style.transition='none'; img2.style.transition='none';
    container.classList.remove('show-scene2');
    void container.offsetWidth;
    requestAnimationFrame(()=>{ img1.style.transition=''; img2.style.transition=''; });
    isScene2=false; document.getElementById('scene-badge').innerText='장면 1 / 2';
    img1.src=q.img1; img2.src=q.img2;
    clearTimeout(questionImageTimer);
    questionImageTimer=setTimeout(switchToScene2,4500);
    const choicesDiv=document.getElementById('choices');
    choicesDiv.innerHTML='';
    [...q.choices].sort(()=>Math.random()-0.5).forEach(c=>{
        const btn=document.createElement('button');
        btn.className='choice-btn';
        // ★ 작은따옴표 앞뒤 추가
        btn.innerText='\u2018'+c.text+'\u2019';
        btn.onclick=(e)=>{ addRipple(btn,e); choicesDiv.querySelectorAll('.choice-btn').forEach(b=>b.disabled=true); setTimeout(()=>selectAnswer(c.score),220); };
        choicesDiv.appendChild(btn);
    });
}

function switchToScene2(){ document.getElementById('image-container').classList.add('show-scene2'); isScene2=true; document.getElementById('scene-badge').innerText='장면 2 / 2'; }
function switchToScene1(){ document.getElementById('image-container').classList.remove('show-scene2'); isScene2=false; document.getElementById('scene-badge').innerText='장면 1 / 2'; }
function toggleQuestionImage(){ clearTimeout(questionImageTimer); isScene2?switchToScene1():switchToScene2(); }

function selectAnswer(score){
    scoreHistory.push(score); totalScore+=score; currentQ++;
    clearTimeout(questionImageTimer);
    const content=document.getElementById('test-content');
    content.classList.add('fade-out');
    setTimeout(()=>{
        if(currentQ<questions.length){
            const q=questions[currentQ]; let loaded=0;
            const onLoad=()=>{ loaded++; if(loaded>=2){ window.scrollTo(0,0); renderQuestion(); requestAnimationFrame(()=>requestAnimationFrame(()=>content.classList.remove('fade-out'))); } };
            const p1=new Image(),p2=new Image(); p1.onload=p1.onerror=onLoad; p2.onload=p2.onerror=onLoad; p1.src=q.img1; p2.src=q.img2;
        } else { showResult(); }
    },260);
}

function goBack(){
    clearTimeout(questionImageTimer);
    if(currentQ===0){ switchScreen('main-screen'); return; }
    totalScore-=scoreHistory.pop(); currentQ--;
    const content=document.getElementById('test-content');
    content.classList.add('fade-out');
    setTimeout(()=>{ window.scrollTo(0,0); renderQuestion(); requestAnimationFrame(()=>requestAnimationFrame(()=>content.classList.remove('fade-out'))); },260);
}

function showResult(){
    switchScreen('loading-screen');
    setTimeout(()=>{
        let type=4;
        if(totalScore>=85)type=0; else if(totalScore>=65)type=1;
        else if(totalScore>=45)type=2; else if(totalScore>=20)type=3;
        viewResult(type); switchScreen('result-screen'); launchConfetti();
    },2000);
}

function viewResult(typeIndex){ const r=results[typeIndex]; document.getElementById('r-title').innerHTML=r.title; document.getElementById('r-img').src=r.img; document.getElementById('r-desc').innerHTML=r.desc; document.getElementById('r-book-desc').innerHTML=r.book; window.scrollTo(0,0); closeTypesModal(); }
function retryTest(){ currentQ=0; totalScore=0; scoreHistory=[]; clearTimeout(questionImageTimer); switchScreen('main-screen'); }

async function shareTest(){
    const url=window.location.href;
    const title='내 연애 촉은 어느 정도일까? | 송현고 과몰입 추리 테스트';
    if(navigator.share){ try{ await navigator.share({title,url}); }catch(e){} }
    else{ try{ await navigator.clipboard.writeText(url); showToast('링크가 복사됐어요! 🔗'); }catch(e){ showToast('링크: '+url); } }
}
function showToast(msg){ document.querySelectorAll('.toast-msg').forEach(t=>t.remove()); const toast=document.createElement('div'); toast.className='toast-msg'; toast.innerText=msg; document.body.appendChild(toast); setTimeout(()=>toast.classList.add('show'),10); setTimeout(()=>{ toast.classList.remove('show'); setTimeout(()=>toast.remove(),300); },2500); }

function buildTypesGrid(){ const grid=document.getElementById('types-grid'); if(!grid||grid.children.length>0)return; results.forEach((r,i)=>{ const btn=document.createElement('button'); btn.className='type-card-btn'; const img=document.createElement('img'); img.src=r.img; img.className='type-card-img'; img.alt=''; const name=document.createElement('span'); name.className='type-card-name'; name.innerText=r.title.replace(/<br>/g,' ').replace(/<[^>]+>/g,''); btn.appendChild(img); btn.appendChild(name); btn.onclick=()=>{ viewResult(i); switchScreen('result-screen'); }; grid.appendChild(btn); }); }
function openTypesModal(){ document.getElementById('types-modal').classList.add('active'); }
function closeTypesModal(e){ if(e&&e.target!==document.getElementById('types-modal')){ if(!e.target.classList.contains('types-modal-close'))return; } document.getElementById('types-modal').classList.remove('active'); }

function launchConfetti(){
    const canvas=document.getElementById('confetti-canvas'); if(!canvas)return;
    const ctx=canvas.getContext('2d'); canvas.width=window.innerWidth; canvas.height=window.innerHeight; canvas.style.opacity='1';
    const COLORS=['#FF6B9D','#C084FC','#FFB0D0','#DDB8FF','#FFD6EB','#FFFFFF','#FFE4B5'];
    const SHAPES=['circle','rect','heart']; const MAX=260,FADE=120;
    const pieces=Array.from({length:110},()=>({ x:Math.random()*canvas.width,y:Math.random()*canvas.height-canvas.height,r:Math.random()*6+3,color:COLORS[Math.floor(Math.random()*COLORS.length)],speed:Math.random()*3+1.5,angle:Math.random()*360,spin:Math.random()*7-3.5,shape:SHAPES[Math.floor(Math.random()*SHAPES.length)] }));
    let frame=0;
    function draw(){ if(frame>=FADE)canvas.style.opacity=String(Math.max(0,1-(frame-FADE)/(MAX-FADE))); ctx.clearRect(0,0,canvas.width,canvas.height); pieces.forEach(p=>{ ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.angle*Math.PI/180); ctx.fillStyle=p.color; if(p.shape==='circle'){ctx.beginPath();ctx.arc(0,0,p.r,0,Math.PI*2);ctx.fill();} else if(p.shape==='rect'){ctx.fillRect(-p.r,-p.r*0.5,p.r*2,p.r);} else{const s=p.r*0.55;ctx.beginPath();ctx.moveTo(0,s*0.5);ctx.bezierCurveTo(s,-s*0.3,s*2,s*0.6,0,s*2);ctx.bezierCurveTo(-s*2,s*0.6,-s,-s*0.3,0,s*0.5);ctx.fill();} ctx.restore(); p.y+=p.speed; p.angle+=p.spin; if(p.y>canvas.height){p.y=-10;p.x=Math.random()*canvas.width;} }); frame++; if(frame<MAX)requestAnimationFrame(draw); else{ canvas.style.opacity='0'; setTimeout(()=>ctx.clearRect(0,0,canvas.width,canvas.height),800); } }
    draw();
}

function addRipple(btn,e){ const r=document.createElement('span'); r.className='ripple'; const rect=btn.getBoundingClientRect(),size=Math.max(rect.width,rect.height); r.style.cssText=`width:${size}px;height:${size}px;left:${(e.clientX||rect.left+rect.width/2)-rect.left-size/2}px;top:${(e.clientY||rect.top+rect.height/2)-rect.top-size/2}px;`; btn.appendChild(r); setTimeout(()=>r.remove(),600); }
