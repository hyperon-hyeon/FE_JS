# #4 Login

---

## 로그인

사용자에게 질문 → 답 받기 → 화면에 표시하기

- 많은 입력창과 버튼이 있을 수 있기 때문에 구분을 위해 div로 나누고 ID 부여

```jsx
const loginForm = document.querySelector("login-form");
const loginInput=loginForm.querySelector("input");
```

loginForm은 HTML element ← HTML element 안을 바로 검색할 수 있음(정밀 조사 가능)

**사용자에게 질문하고 답 받기**

- 버튼을 클릭할 때 사용자의 입력 받아옴 - `loginInput.value` 활용
- 유효성 검사 - HTML 자체 기능 활용하는 것 추천
    - HTML이용하여 유효성 검사시 form 이용 → submit 통제 필요
    - **HTML, JS 유효성 검사 코드 비교**
        
        
        JS에서 유효성 검사
        
        ```jsx
        function BtnClick(){
            const username = loginInput.value;
            if(username===""){
                alert("Please write your name!");
            }else if(username.length > 15){
                alert("Your name is too long");
            }
        }
        ```
        
        HTML에서 유효성 검사 
        
        - 제공하는 기능 활용하는 것이 좋음
        - 해당 기능 사용하려면 input이 form 안에 있어야 함 → form 안에서 엔터(혹은 버튼) 누르고 input 더 존재하지 않으면 자동으로 submit 되어 웹사이트 재시작
        
        ```jsx
        <input required maxlength="15" type="text" placeholder="What is youe name?" />
        ```
        

---

## 기본 동작 막기

**기본 동작을 막아야 하는 이유**

1. 페이지 새로 고침을 막고 JS로 동작 제어하고 싶을 때
    - 사용자가 폼을 제출할 때 **페이지가 리로드**되어 JS가 실행되던 맥락이 다 날아감
2. 링크(`<a>`) 클릭 시 페이지 이동을 막고 싶을 때
3. 사용자 정의 인터랙션을 만들고 싶을 때
    - 예: 드래그 앤 드롭 기능을 만들 때 브라우저의 기본 선택/드래그 동작이 방해가 됨

**alert 활용**

alert는 모든 기본 동작을 막음 →  그래서 요즘은 alert 사용 X

- alert의 OK 버튼 누르면 실행

**form의 기본동작(submit) 일어나지 않도록 하기**

- **code**
    
    ```jsx
    const loginForm = document.querySelector("#login-form");
    const loginButton = document.querySelector("#login-form button");
    
    function loginSubmit(event){
        event.preventDefault();
        console.log(event);
    }
    
    loginForm.addEventListener("submit",loginSubmit);
    ```
    
    - `tomato.preventDefault();`는 폼 제출을 막아 **새로고침을 방지**
    - `console.log(tomato);`는 **폼에서 발생한 이벤트 객체**를 출력
    
- submit - 엔터 누르거나 버튼 클릭시 발생

**link의 기본동작(클릭시 다른 페이지로 이동) 일어나지 않도록 하기**

- PointerEvent(클릭) → 클릭시 스크린 상의 위치 X, Y 좌표로 알려주는 등 정보 제공
    - click Event와 pointer Event의 차이
        
        
        | 항목 | `click` | `pointerdown` / `pointerup` 등 |
        | --- | --- | --- |
        | 입력 장치 구분 | 보통 마우스/터치만 | 마우스, 터치, 스타일러스 모두 지원 |
        | 발생 시점 | 클릭 완료 후 (up까지) | 누르거나 움직일 때 바로 발생 |
        | 유연성 | 적당한 범용성 | 더 세밀한 제어 가능 |
        | 실무에서 사용 빈도 | 가장 흔하게 사용됨 | 터치/드래그/그림 앱 등에서 유용 |
    - 최근 브라우저(특히 **Chrome, Edge, Firefox**)에서는 `click`, `mousedown`, `mouseup` 같은 전통적인 마우스 이벤트도 **내부적으로는 `PointerEvent`로 확장된 객체**를 사용 
    (브라우저가 `PointerEvent`를 `MouseEvent`의 확장으로 만들었음)

**추가로 알아두면 좋은 것**

- 일반적으로 string만 포함된 변수는 대문자로 표기함
- 문자열 연결 방식 - + 기호 활용하여 연결하는 방식 / 백틱 기호 활용하는 방식
    - `greeting.innerText="Hello "+username;`
    - `greeting.innerText=`Hello ${username}`; // ``(백틱기호)`

---

## Local storage

확인 방법 - 개발자모드 → application → local storage

- `localStorage.setItem("key","value");` → local storage에 정보 저장 가능
- `localStorage.removeItem("key");` → local storage에 저장된 정보 중 key 내용 삭제
- `localStorage.getItem(”key”);` → local storage에서 해당 key에 해당하는 값을 가져옴 (없으면 null)
