# #7 To Do List

---

## To do List 만드는 과정

1. **to do list add**
    - 입력한 할 일을 new To Do에 추가하고 입력창은 지우기
2. **to do list delete**
    - 버튼이 가르키는 할 일 찾기
    - toDos array에서 지워진다고해서 local storage에서 삭제되는 것은 아님
    - 랜덤 ID(Date.now) 만들어서 element에 부여 →
3. **to do list save**
    - 새로고침해도 list가 사라지지 않도록 localstorage 이용하기
    - toDos 배열 만들기 (1번 할때마다 배열에 push 하기)
        - 덮어쓰여지지 않게 const+빈칸 조합으로 두지 않고 let+이전의 toDos restore 해두기
    - filter 이용 - 지우고 싶은 아이템 빼고 새로운 array 만들기 (기존 건 남아있음)
        - 기존에 있는 거 포함시키고 싶으면 true 리턴, 아니면 false 리턴
    

---

## **To do list add**

```jsx
function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo=toDoInput.value;
    toDoInput.value="";
    const newToDoObj={
        text:newToDo,
        id:Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}
```

- form에서 입력한 값을 newToDo에 저장하고 입력창은 지움
- newToDoObj에 newToDo에 저장한 값과 랜덤한 id(`Data.now()` 이용)하여 object로 만듦
- 전역 배열 `toDos`에 저장한 뒤, `paintToDo()`를 호출해 화면에 `<li>`로 추가하고,
- `saveToDos()`로 localstorage 에 저장합니다.

---

## To do list delete

```jsx
function deleteTodo(event){ 
    const li =event.target.parentElement;
    li.remove();
    toDos=toDos.filter(toDo=>toDo.id!==parseInt(li.id));
    saveToDos();
}
```

- `deleteTodo(event)` - 어떤 이벤트(`event`)가 발생했을 때 실행됨
- `event.target.parentElement;` - 이벤트가 발생한 요소(예: 버튼)의 부모 요소 가져옴 → `<li>` 요소
- `li.remove();` - 삭제한 후에는 화면에서 지워버림
- 화면 뿐 아니라 toDos array에서도 삭제 (X 버튼에 해당하는 리스트의 아이디 지정하여 삭제)
    - `filter` 이용하여 새로운 toDos 만듦
        - `object.filter(함수){return true/false};` : 기존 포함 true 리턴, 아니면 false 리턴
            
            ```jsx
            function sexyFilter(item) {return item!==3}
            [1,2,3,4,5].filter(sexyFilter) //3빼고 다 반환
            ```
            
- arrow function 사용하여 코드 줄이기
    
    
    ```jsx
    function sayHello(item){
        console.log(item);
    }
    ...
    parsedToDos.forEach(sayHello);
    ```
    
    ```jsx
        parsedToDos.forEach((item)=>console.log("this is the turn of ",item));
    ```
    

---

## **To do list save**

```jsx
function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}
```

- toDos는 자바스크립트의 배열이므로 JSON.stringify를 이용하여 string으로 만들어서 todos (TODOS_KEY)라는 이름으로 localstorage에 저장
    - 입력된 것들 문자열 형태로 array 배열에 투입
    
- `JSON.stringify(값)`: 뭐든 string으로 만듦/
- `JSON.parse(값)`: string을 array(object)로 만듦