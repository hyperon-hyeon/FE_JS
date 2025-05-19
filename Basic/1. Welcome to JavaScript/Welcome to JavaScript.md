# #2 Welcome to JavaScript

## JS 사용하기

1. 브라우저 이용하기
    - 개발자 모드(F12) → Console 창에서 입력 (JS 이미 설치되어 있음)
        - 상호작용은 좋으나 한 줄 코딩만 가능
    - 개발자 모드에서 HTML, CSS, JS 보는 법
        - Elements - HTML
        - Elements→Styles - CSS
        - Console - JS

1. VS code 이용하기
    - CSS, JS 파일 단독으로 실행 불가 → **HTML 필요** (접착제 역할)
    - **HTML 코드 - CSS, JS 연결**
        
        ```
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="style.css"> //css
            <title>Momentum</title>
        </head>
        <body>
            <script src="app.js"></script> //js
        </body>
        </html>
        ```
        

---

## 변수 (Variables)

**변수명 지정하기**

- **Camel Case(JS)** - 변수명에 공백 대신다음 단어 대문자로 사용 - ex. veryLongVariableName
- Snake Case(Python) - 변수명에 공백 대신 _ 사용 - ex. very_long_variable_name

**변수의 종류**

- **JS 코드 - 변수 선언 및 출력**
    
    ```jsx
    const a=5;
    var b=2;
    let myName="Hyeon"; 
    
    console.log(a+b); //result: 7
    console.log(a*b); //result: 10
    console.log(a/b); //result: 2.5
    console.log("hello! "+myName); //result: hello! Hyeon
    
    myName="Hyeon Lee"; //let allows changing the value of myName
    console.log("hello! "+myName); //result: hello! Hyeon Lee
    ```
    
1. **const (default)** - `const name = val;`
    - 상수, 값 업데이트 불가능함
2. let (sometimes) - `let name = val;` 
    - 값 업데이트 가능
    - 처음 선언 이후에는 `name = newVal;` 로 값 변경하여 사용 가능
3. var (never) - `var name = val;`
    - JS 초기의 변수 선언 방식, 아직 브라우저에서는 기능하지만 개발시 사용하지 않음
    - 어디서든 업데이트 가능 → 어떤 규칙도 적용되지 않으며 언어의 보호 받지 않음 (모든 값 변화 가능)

---

## 자료형 (Data Types)

1. **integer / float**
    - 숫자를 나타내는 자료형
    - integer - 정수 / float - 실수
2. **string**
    - 문자열을 나타내는 자료형
    - “text” , ‘text’ 로 사용→ 따옴표의 종류만 맞춰주면 됨
    
- **JS 코드 - 자료형(boolean, null, undefined)**
    
    ```jsx
    const amIfat=null;
    let something;
    console.log(something,amIfat); //result: undefined null
    ```
    
1. **boolean**
    - true, false 값으로 가짐
    - 사용자의 로그인 유무, 웹 페이지 로딩 유무 등을 파악하기 위해 사용
2. **null**
    - 아무것도 없다는 의미
    - 자연적으로 만들어지는 것이 아니라 변수 안에 어떤 것이 없음을 확실히 하기 위해 사용
3. **undefined**
    - 변수를 선언만 하고 값을 채워주지 않을 경우에 나타남
    - 컴퓨터 메모리 안에 공간은 존재하지만 값은 존재하지 않는 경우를 의미

**자료형 관련 코드**

- 자료형 알아보기 - `typeof name`
- 자료형 변환하기 - `parseInt(originType, changeType)`
- 입력값이 숫자인지 확인하기 - `isNaN(num)`
    - not a number, num이 숫자인지(false) 아닌지(true) boolean 값으로 알려줌
    

---

## 자료구조 (Data Structure)

1. **Array** - `const name =["val1", "val2"];`
    - **JS 코드 - Array 선언 및 출력**
        
        ```jsx
        //Arrays
        const daysOfWeek=["mon","tue","wed","thu","fri","sat","sun"];
        console.log(daysOfWeek); //result: mon,tue,wed,thu,fri,sat,sun 
        console.log(daysOfWeek[0]); //result: mon
        
        daysOfWeek.push("again mon"); //add again mon to the end of the array
        console.log(daysOfWeek); //result: mon,tue,wed,thu,fri,sat,sun, again mon
        
        const nonsense=[1,2,"hello",true,null]; //array with different data types
        console.log(nonsense); //result: [1,2,"hello",true,null]
        ```
        
    - `name[index]` 방식으로 접근
        - index 값에 배열의 index 수를 초과한 값을 넣으면 undefined
    - array만으로는 elements의 의미 파악하기 어려움 → 주석을 사용해야 함
2. **Object** - `const name ={property1:val1, property2:val2};`
    - **JS 코드 - Object 선언 및 출력**
        
        ```jsx
        const playerObj={
            name:"Hyeon",
            points:121212,
            handsome:true,
            fat:"little bit fat"
        }; //object with different data types
        
        console.log(playerObj.name); //result: Hyeon
        console.log(playerObj["name"]); //result: Hyeon
        
        playerObj.fat="not fat"; //change the value of fat
        console.log(playerObj.fat); //result: not fat
        
        playerObj.lastName="Lee"; //add lastName to the object
        playerObj.points=7; //change the value of points
        console.log(playerObj); //result: {name: "Hyeon", points: 7, handsome: true, fat: "very fat", lastName: "Lee"}
        ```
        
        Object 구성 요소 보기
        
        ```
        
        console.log(player); //result: {name: 'Hyeon', sayHello: ƒ}name: "Hyeon"sayHello: ƒ (otherPeronsName)[[Prototype]]: Object
        ```
        
    - property 가진 값들 저장 가능
    - array와 달리 elements의 의미 파악 가능
    - `ObjectName.propertyName`  으로 접근
        - 새로 추가 - `ObjectName.propertyNameNew=val;`
        - 변경 -  `ObjectName.propertyName=newVal;`
    - Object를 const로 선언했지만, 속성 값은 별개로 변동 가능
        - Object 자체 업데이트 불가능
    - Object의 구성 요소 보기 - `console.log(player);`

---

## 함수 (Function)

- **JS 코드 - Function 선언 및 반환**
    
    
    기본
    
    ```jsx
    function divide(firstNumber,secondNumber){
        console.log(firstNumber/secondNumber);
    }
    
    divide(98,20); //result: 4.9
    ```
    
    반환 (return)
    
    ```jsx
    const foriegnerAge = 23;
    function calculateKrAge(ageOfForeigner){
        return ageOfForeigner+2;
    }
    const krAge = calculateKrAge(foriegnerAge); //krAge = calculateKrAge's return value
    console.log(krAge); //result: 25
    ```
    
    Object 내부 함수 정의
    
    ```jsx
    const player = {
        name:"Hyeon",
        sayHello: function(otherPeronsName){
            console.log("Hello! "+otherPeronsName+", nice to meet you!");
        }
    };
    
    console.log(player.name); //result: Hyeon
    player.sayHello("nico"); //result: Hello! nico, nice to meet you!
    ```
    

함수 선언하기 - `function functionName(argument){content}`

- argument = function 실행 동안 정보를 보내는 방법
- function이 object 안에 있다면 - `functionName: function(argument){content}`

함수 반환하기 - return val;

- fuction의 값 반환하려면 - `return value;`
- return하는 순간 function 종료

---

## 입력받기  (input)

콘솔 창으로 입력 받기 - `prompt(”question”)`

- CSS 적용 불가 / 브라우저에 따라 제한될 수 있음 → 보통 자체적인 창 만들어 사용

---

## 조건문 (Conditionals)

1. if 조건문 - `if(condition1){content1} else if(condition2){content2} else{content3}`
- **JS 코드 - if conditionals**
    
    ```jsx
    const age= parseInt(prompt("How old are you?"));
    
    if(isNaN(age)||age<0){
        console.log("Please write a real positive number");
    } else if (age<18){
        console.log("You are too young");
    }else if(age>=18 && age<=50){
        console.log("You can drink");
    }else if(age > 50 && age<=80){
        console.log("You should exercise");
    } else if (age===100){
        console.log("wow you are wise");
    } else if (age>80){
        console.log("You can do whatever you want");
    } 
    ```
    
- condition boolean값 가져야 함

1. and와 or (condtion으로 사용)
- A && B → A와 B 둘 다 true 여야 최종 true
- A || B → A나 B 둘 중 하나 true면 최종 true
