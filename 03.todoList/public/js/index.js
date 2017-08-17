// 2017 JavaScript Mitoo all rights reserved.

// 즉시실행함수 
(function(window, document){
  'use strict';
  // list item 을 추가해주는 함수
  function addListItem(e) {
    // 입력이 아무것도 없을 경우 함수 실행 안함
    if (!input.value.trim()) return;
    // enter가 들어왔을 경우, 클릭 이벤트일 경우
    if ((e.keyCode === 13) || e.type === 'click') {
      // post method로 서버에 task를 전송하는 함수 호출
      itemPost(input.value);
      // input 입력이 완료 된 경우 내용 지워줌
      input.value = '';
      // focus를 input 요소로 유지
      input.focus();
    } 
  }
  // list item을 delete method로 제거하는 함수
  function deleteListItem(id, target) {
    var xhr = new XMLHttpRequest();
    xhr.open('delete', '/toDoList/' + id, true);
    // body data, get, delete 는 body 메서드가 없다.
    xhr.send(null);
    xhr.onreadystatechange = function() {
      if(this.readyState === 4) {
        if(this.status === 200) {
          // console.log('this.responseText:', this.responseText);
          todoList.removeChild(target.parentNode);
        }
      }
    }
  }
  // list item을 post method로 등록하는 함수
  function itemPost(task) {
    var xhr = new XMLHttpRequest();
    xhr.open('post', '/toDolist', true);
    // HTTP 통신패킷의 header 속성을 바꿔주는 API content-type을 application/json으로 변경시켜줌
    xhr.setRequestHeader('Content-type', 'application/json');
    var data = {
      task: task
    };
    // data를 문자열화 시켜서 HTTP 통신 패킷의 body에 넣어서 보냄
    xhr.send(JSON.stringify(data));
    xhr.onreadystatechange = function() {
      if(this.readyState === 4) {
        if(this.status === 201) {
          // console.log('this.responseText:', this.responseText);
          // 통신에 성공했을 경우 해당 list item을 DOM에 추가
          var item = JSON.parse(this.responseText);
          insertItem(todoList, item.task, item.id);
        }
      }
    }
  }
  // DB로 부터 list item list를 get method를 통해 가져오는 함수
  function getListItem() {
    var xhr = new XMLHttpRequest();
    xhr.open('get', '/toDoList', true);
    xhr.send(null);
    xhr.onreadystatechange = function() {
      if(this.readyState === 4) {
        if(this.status === 200) {
          // console.log('this.responseText:', this.responseText);
          var toDoItemList = JSON.parse(this.responseText);
          // console.log('toDoItemList:', toDoItemList);
          toDoItemList.forEach(function(item){
            insertItem(todoList, item.task, item.id);
          })
        }
        else {
          console.error('GET failed');
        }
      }
    }
  }
  // list item 추가해주는 함수
  function insertItem(element, task, id){
    element.insertAdjacentHTML('beforeend', '<li>' + task + '<button class="delete">-</button></li>');
    // li안에 delete button이 동적으로 생성 되기 때문에 DOM에 추가한 후 클릭 이벤트 바인딩
    bindDeleteButton(id);
  }
  // deleteButton을 바인딩 시켜주는 함수
  function bindDeleteButton(id){
    var delButton = document.querySelectorAll('.delete');
    // console.log('delButton :', delButton[delButton.length-1]);
    delButton[delButton.length-1].addEventListener('click', function(){
      deleteListItem(id, this);
      // todoList.removeChild(delButton[delButton.length-1].parentNode);
    });
  }

  var input = document.querySelector('.input');
  // console.log('input :', input);
  var button = document.querySelector('.button');
  // console.log('button :', button);
  var todoList = document.querySelector('.todoList');
  // console.log('todoList :', todoList);

  button.addEventListener('click', addListItem);
  input.addEventListener('keyup', addListItem);
  
  // CRUD : create, read, update, delete
  // HTTP : post, get, put, delete
   
  getListItem();
})(window, document);
