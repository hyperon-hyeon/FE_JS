# #3 JavaScript on the Browser

---

## JS에서 HTML 정보 읽어오기 (Document)

**⇒ HTML에서 정보 읽어오고 상호작용 가능** 

- document - HTML이 js 파일 load하기 때문에 존재 → 그다음 browser가 document에 접근하도록 해줌
    - 이걸로 불러올 수 있는 건 body, head, title (h1, div같은 건 안 보여줌)

`console.dir()` - console.log보다 element 자세히 보여줌

- h1 → title, className, id, textContent, innerText …
- className, tagName, Name - array 반환
- 없는 값 수정 -  `Uncaught TypeError: Cannot set properties of null (setting 'innerText')`

제목 - console에 `document.title` 입력

- `document.title = “newTitle”` 새로운 제목으로 변경됨 (일시적으로, 새로고침하면 원래대로)

id - `document.getElementById("idName")`

요소를 가져오는 방법 중 가장 자주 쓰이는 것

1. `document.querySelector(”.className tagName”);`  - CSS 관점에서 element 검색 가능
    - class 중 첫 번째 것만 가져옴
    - `document.querySelector(”.className:first-child tagName”);` 이런 식으로도 사용 가능
    - document.querySelector(”#hello”); = document.getElementById(”hello”);
2. `document.querySelectorAll(".className tagName");` - CSS 관점에서 element 검색 가능(전부)
    - array 반환

---

## Event 처리

- **JS 코드 - Event**
    
    ```jsx
    function handleTitleClick(){
        title.style.color = "green";
    }
    function handleMouseEnter(){
        title.innerText = "Mouse is here!";
    }
    function handleMouseLeave(){
        title.innerText = "Mouse is gone!";
    }
    title.addEventListener("click",handleTitleClick);
    title.onmouseenter = handleMouseEnter;
    title.addEventListener("mouseleave",handleMouseLeave);
    
    function handleWindowResize(){
        document.body.style.backgroundColor = "tomato";
    }
    function handleWindowCopy(){
        alert("copier!");
    }
    function handleWindowOffline(){
        alert("no WIFI");
    }
    function handleWindowOnline(){
        alert("on WIFI");
    }
    window.addEventListener("resize",handleWindowResize);
    window.addEventListener("copy",handleWindowCopy);
    window.addEventListener("offline",handleWindowOffline);
    window.addEventListener("online",handleWindowOnline);
    ```
    
1. **element 찾기**
2. **event listen**
3. **event에 반응하기 - 보여주기 / 감추기 / 색 바꾸기 등 함수 실행**
    - 함수에서 argument 공간만 제공하면 JS가 알아서 일어난 event에 대한 정보를 지닌 argument 채움

**1. element 찾기**

h1 JS element 탐색 -  https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement

window JS element 탐색 - https://developer.mozilla.org/en-US/docs/Web/API/Window#events

- event: consol.dir에서 앞에 on 붙은 요소들이 event

**2. Event listen**

1. `addeventListener(”event”,function);`  - 더 자주 사용
    - removeEnterListener 통해 제거 가능
2. oneventname property에 event listener 할당

*** Event 예시**

1. click event
- listen - `title.addEventListener("click",function);` / `title.onClick = function;`
    - function - event 발생시 실행할 함수, 끝에 () 쓰지 않음

1. mouseenter - 마우스를 요소 위에 올려두기만 했을 때 (click X)
- listen - `title.addEventListener("mouseenter",function);`  / `title.onmouseenter = function;`

1. mouseleave - 마우스를 요소 위에 올려두다 떠났을 때 (click X) 
- listen - `title.addEventListener("mouseleave",function);` / `title.onmouseleave = function;`

1. resize - 화면 크기 바뀔 때
- listen - `window.addEventListener("resize",handleWindowResize);`
- h1같은 요소는 resize 안됨, window는 됨

1. copy
- listen - `window.addEventListener("copy",handleWindowCopy);`

---

## CSS 활용하기

JavaScript는 HTML 변경 → CSS는 HTML에 의해 변경

- 활용 전후 비교
    
    
    활용 전 JS
    
    ```jsx
    function handleTitleClick(){
         const currentColor=h1.style.color;
         let newColor;
         if(currentColor === "blue"){
             newColor = "tomato";
         }else{
             newColor="blue";
         }
         h1.style.color=newColor;
     }
    
    ```
    
    활용 후 JS
    
    ```jsx
    function handleTitleClick(){
        if(h1.className==="active"){
            h1.className="";
        }else{h1.className="active";}
    }
    ```
    
    활용후 CSS
    
    ```jsx
    h1{
        color: cornflowerblue;
        transition: color 0.5s ease-in-out;
    }
    
    .active{
        color: tomato;
    }
    ```
    

**CSS를 활용하는 이유**

1.  **코드를 더 깔끔하게 분리할 수 있음 (Separation of Concerns)**
    - **CSS**: 스타일 정의 / **JS**: 동작, 이벤트 처리
    - 직접 스타일을 JS로 바꾸면, 디자인과 기능이 뒤섞임.
2. **유지보수가 쉬움**
    - 색상이나 폰트 변경 시 JS를 안 건드려도 되고, CSS만 수정하면 됨.
3. **재사용성**
    - 동일한 클래스를 다른 요소에도 적용 가능.
    - 하나의 `.active`, `.hidden`, `.dark-mode` 같은 클래스로 여러 UI에 적용 가능.
4. **애니메이션, 전환 효과 등도 쉽게 가능**
    - 예: 버튼 클릭 시 fade 효과 주고 싶을 때
5. **토글 기능이 편함**

**주의할 점**

- 기존의 Class가 있을 경우 삭제하지 않고 사용할 Class만 삭제 및 추가해야 함 → classList 사용

```jsx
function handleTitleClick(){
    const clickedClass="clicked";
    if(h1.className===clickedClass){
        h1.className="";
    }else{h1.className=clickedClass;}
}
```

```jsx
function handleTitleClick(){
    const clickedClass="clicked";
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    }else{h1.classList.add(clickedClass);}
}
```

**⇒ 이를 간편화한 함수 toggle**

```jsx
function handleTitleClick(){
    h1.classList.toggle("clicked");
}
```

- `toggle()`은 전등 스위치처럼 **해당 클래스가 있으면 제거하고**, **없으면 추가**함
- 용도 - 다크 모드 끄고 켜기 / 메뉴 열고 닫기 / 버튼 활성화 전환 / 슬라이드, 탭, 애니메이션 상태 전환

| `.add()` |
| --- |
| 무조건 클래스 추가 |

| `.remove()` |
| --- |
| 무조건 클래스 제거 |

| `.toggle()` |
| --- |
| 있으면 제거, 없으면 추가 (전환) |
