const quotes = [
    {
        quote:"사람이 사람을 완전히 이해한다는 건 불가능한 일이야. 다만 이해하고 싶어 하는 마음이 중요할 뿐.",
        author:"김영하",
    },
    {
        quote:"사람이 사람을 완전히 이해한다는 건 불가능한 일이야. 다만 이해하고 싶어 하는 마음이 중요할 뿐.",
        author:"정유정",
    },
    {
        quote:"죽음이 두려운 것이 아니라, 살아 있는 동안 아무것도 하지 않는 것이 두려운 것이다.",
        author:"도종환",
    },
    {
        quote:"사람은 자기가 사랑하는 방식대로만 사랑할 수 있다.",
        author:"공지영",
    },
    {
        quote:"나는 너에게 가고 너는 나에게 온다. 우리는 서로의 길이 된다.",
        author:"이정하",
    },
    {
        quote:"그럼에도 결국 해내면 그만이다.",
        author:"정영욱",
    },
    {
        quote:"길이 끝나는 곳에서도 길은 시작된다.",
        author:"정호승",
    },
    {
        quote:"지나간 자리마다 꽃이 피리니, 걸어온 길이 곧 너의 정원이다.",
        author:"류시화",
    },
    {
        quote:"한 걸음만 더 가보자, 그것이 끝일 수도 있고 시작일 수도 있으니까.",
        author:"김영하",
    },
    {
        quote:"확신이 들어서라기보단, 정답이 아니어도 좋겠다는 생각이 커져서 결심하게 되었어요.",
        author:"빠더너스 문상훈",
    }
];

const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=todaysQuote.quote;
author.innerText="\n"+todaysQuote.author;