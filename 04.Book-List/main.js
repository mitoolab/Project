// 2017 JavaScript Mitoo all rights reserved.

// 요소 가져오기
const tabel = document.querySelector('.table');
// console.log('tabel:', tabel);
const tabelBody = document.querySelector('.tableBody');
// console.log('tabelBody:', tabelBody);
const delBtn = document.querySelector('.delBtn');
// console.log('delBtn:', delBtn);
const addBtn = document.querySelector('.addBtn');
// console.log('addBtn:', addBtn);
const tableGr = document.querySelector('.tableGroup');
// console.log('tableGr:', tableGr);
let checkAll = document.querySelector('#checkAll');
// console.log('checkAll:', checkAll);


function showList () {
  // innerHTML 초기화
  tabelBody.innerHTML = "";
  bookList.forEach((book) => {
    tabelBody.innerHTML += `<tr>
    <td><input type="checkbox" id="${book.id}"></td>
    <th>${book.id}</th>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.price}</td>
  </tr>`
  });
}

let bookList = [
  { id: 1, title: 'HTML5', author: 'Lee', price: 2000 },
  { id: 2, title: 'CSS3', author: 'Kim', price: 3000 },
  { id: 3, title: 'JavaScript', author: 'Park', price: 5000 }
];
showList();

// bookList 정보 체크하고 innerHTML로 넣기

// for
// for(let i = 0; i < bookList.length; i++) {
//   let book = bookList[i];
//   tabelBody.innerHTML += `<tr>
//   <td><input type="checkbox" id="${book.id}"></td>
//   <th>${book.id}</th>
//   <td>${book.title}</td>
//   <td>${book.author}</td>
//   <td>${book.price}</td>
// </tr>`
// };

// forEach
// bookList.forEach(function(book) {
//   tabelBody.innerHTML += `<tr>
//   <td><input type="checkbox" id="${book.id}"></td>
//   <th>${book.id}</th>
//   <td>${book.title}</td>
//   <td>${book.author}</td>
//   <td>${book.price}</td>
// </tr>`
// });

// ES6

// function showList () {
//   bookList.forEach((book) => {
//     tabelBody.innerHTML += `<tr>
//     <td><input type="checkbox" id="${book.id}"></td>
//     <th>${book.id}</th>
//     <td>${book.title}</td>
//     <td>${book.author}</td>
//     <td>${book.price}</td>
//   </tr>`
//   });
// }

  
// 체크박스 전체 선택
checkAll.addEventListener('change', (e) => {
  // 모든 체크박스를 최상위 체크박스의 상태로 동기화
  [...document.querySelectorAll('tbody input[type=checkbox]')].map(el => el.checked = e.target.checked);
});

// 체크박스 선택된 요소 삭제
delBtn.addEventListener('click', (e) => {
  // 체크된 id를 배열로 취득
  const checkedIdArr = [...document.querySelectorAll('tbody input[type=checkbox]:checked')].map(el => el.id);
  // console.log('checkedIdArr:', checkedIdArr);
  // bookList 객체에서 checked id와 id가 같은 리스트를 삭제
  checkedIdArr.map(checkedId => {
    bookList = bookList.filter(({ id }) => id !== checkedId * 1);
    console.log('bookList:', bookList);
  });

  // bookList 객체를 DOM에 갱신
  showList();
});



// addBtn input box 활성화

addBtn.addEventListener('click', () => {
  // console.log('addBtn:', addBtn);
  tableGr.style.display = "block";
});






// `<tr>
//   <td><input type="checkbox" id="${book.id}"></td>
//   <th>${book.id}</th>
//   <td>${book.title}</td>
//   <td>${book.author}</td>
//   <td>${book.price}</td>
// </tr>`

// 1. Delete Book 버튼이 클릭되면 체크된 book 리스트를 삭제
// 2. 최상위 체크박스를 클릭하면 전체 체크박스 토글(on/off)
// 3. Add Book 버튼이 클릭되면 .add-form를 표시
// 4. Add Book 버튼이 클릭되면 Cancel 버튼 표시
// 5. .add-form이 표시된 상태에서 필수입력 대상인 Title이 입력되었으면 
//     Add Book 버튼이 클릭 시, bookList 객체에 .add-form의 입력값을 추가하고 
//     DOM 갱신
// 6. .add-form이 표시된 상태에서 필수입력 대상인 Title이 입력되지 않았으면 
//     alert으로 입력되지 않았음을 경고
// 7. Cancel 버튼이 클릭되면 .add-form과 Cancel 버튼 비표시
// (*) 모든 선언문의 전역 선언 금지
