# #5 Clock

---

## Interval, TimeOut

interval - 매번 일어나야 하는 것

- ex. 서버 확인, 주식시장 api 확인, 주기적으로 일어나야 하는 동작

- `setInterval(실행동작, 호출 사이의 주기_ms);` - 주기마다 동작 실행
    
    `setTimeout(실행동작, 일정 시간_ms);` - 일정 시간 후에 동작 1회 실행
    
    | 함수 | 설명 | 실행 횟수 | 예시 |
    | --- | --- | --- | --- |
    | `setTimeout(fn, ms)` | ms 밀리초 후에 fn 함수 한 번 실행 | 한 번만 실행 | 알림, 지연된 작업 |
    | `setInterval(fn, ms)` | ms 밀리초마다 fn 함수 반복 실행 | 무한 반복 | 시계, 반복 알림 |

---

## Date object

**const date = new Date();**

**시간 정보 얻기**

now.getFullYear();  - 연도 (예: 2025)
now.getMonth(); - 월 (0 ~ 11) 
now.getDate(); - 일 (1 ~ 31)
now.getDay(); - 요일 (0: 일요일 ~ 6: 토요일)
now.getHours(); - 시 (0 ~ 23)
now.getMinutes(); - 분 (0 ~ 59)
now.getSeconds(); - 초 (0 ~ 59)

**시간 예쁘게 표시하기**

`padStart(원하는 길이, “추가할 문자”);` - 원하는 길이가 아니라면 해당 길이가 될 때까지 문자 추가

→ getHours는 숫자이기 때문에 사용 불가 String으로 감싸줘야 함

- 숫자를 두자리로 만들 때 주로 사용 (0:0:0 → 00:00:00)

---

## 최종 코드

```jsx
const clock = document.querySelector("h2#clock");

function getClock(){
    const date=new Date();
    const hours=String(date.getHours()).padStart(2,"0");
    const minutes=String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
}

getClock(); //최초 1회 실행
setInterval(getClock,1000);
```