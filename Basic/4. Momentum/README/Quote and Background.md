# #6 Quote and Background

---

## 랜덤 명언 출력하기

1. array 만들기
2. Math 이용하여 랜덤하게 지정하기
    - `const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];`
3. 화면에 출력하기
    - `quote.innerText=todaysQuote.quote;`

**Math 이용하여 랜덤하게 인용 지정하기 -** `Math.floor(Math.random()*quotes.length)`

Math.random() - 0~1 사이의 값이 나옴 

- 10 곱하여 0~10 사이의 숫자 구하기
- 정수가 아니가 때문에 소수점 뒤의 숫자 제거해야 함 (Math.floor(Math.random*10))
    - Math.round() - 숫자의 반올림
    - Math.ceil() - 숫자를 천장까지 올려줌 (그냥 올림)
    - Math.floor() - 숫자를 마루까지 내려줌 (그냥 내림)
- array의 길이를 반환(length 이용)하여 하드코딩 (인용구 수를 직접 입력)하지 않도록 함

---

## 랜덤 배경화면 설정하기

1. array 만들기 (img 폴더 만들고 그 안에 있는 사진 파일명으로 array 만들기)
2. Math 이용하여 랜덤하게 지정하기
    - `const chosenImage=images[Math.floor(Math.random()*images.length)];`
3. body에 create img element 하여 랜덤하게 지정한 것 이미지 파일 형식으로 만들기
    - `const bgImage=document.createElement("img");
     bgImage.src=`img/${chosenImage}`;`
4. 위에서 만든 이미지 파일을 document의 body에 추가하기 (이전까지는 JS 파일에만 존재)
    - `document.body.appendChild(bgImage);`