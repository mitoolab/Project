<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Blokk</title>
  <link rel="stylesheet" type="text/css" href="style01.css">
  <style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  margin: 0;
  font-size: 16px;
  font-family: Helvetica, Arial, sans-serif;
}
a {
  text-decoration: none;
}
a:link, a:visited {
  text-decoration: none;
  color: inherit;
}
ul {
  list-style: none;
}
.wrapper {
  max-width: 1200px;
  min-width: 1200px;
  width: 100%;
	margin: auto;
}
.header {
  margin-top: 80px;
}
.headerLogo, .nav, .navList {
  display: inline-block;
  vertical-align: -webkit-baseline-middle;
}
.navList {
  margin-left: 30px;
}
.log {
  float: right; 
  margin-top: -5px;
}
.logIn, .signUp {
  background: none;
  padding: 14px 37px;
  cursor: pointer;
  font-size: 14px;
}
.logIn {
  border: none;
}
.signUp {
  color: rgb(3, 166, 123);
  border: 1px solid rgb(3, 166, 123);
  border-radius: 5px;
}
.main {
  position: relative;
  margin: 68px 0 100px 0;
}
.main::after {
  content: "";
  display: block;
  clear: both;
}
/* 콘텐츠 세로 가운데 정렬 */
.mainContent {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 530px;
}
.mainContentHeading {
  font-size: 52px;
  line-height: 52px;
}
.mainContentText {
  color: rgb(154, 154, 154);
  line-height: 24px;
  margin: 27px 0 38px 0;
}
/****************************************
 * input 간격 줄이는 방법 *
방법1) input 과 버튼에 float 을 주고 부모요소에 플롯해제
방법2) input 과 버튼 부모요소에 font-size: 0; 을 주고
      input 과 버튼에 font-size 제 선언
방법3) 부모요소에 display: flex
****************************************/
.mainSearch {
  font-size: 0;
}
.mainSearchText {
  width: 290px;
  height: 50px;
  border: none;
  border-radius: 5px 0 0 5px;
  background-color: rgb(245, 245, 245);
  text-indent: 20px;
  font-size: 14px;
}
/* input 내부 text 글자 색상 수정 */
.mainSearchText::placeholder {
  color: rgb(154, 154, 154);
}
.mainSearchBtn {
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 0px 5px 5px 0px;
  background-color: rgb(3, 166, 123);
  color: rgb(255, 255, 255);
  font-size: 14px;
  margin: 0;
  letter-spacing: 5px;
  cursor: pointer;
}
.mainImg {
  float: right;
  margin-right: 148px;
}
/* feature */
/****************************************
 * 마진 겹침 현상 *
문제 ) 자기 자신의 마진 겹침,
      엘리먼트가 컨텐츠로 시각적인 요소를 가지고 있지 않을 때
      그 엘리먼트는 상하 마진 중 더 큰 값이 적용된다.
      세로 방향의 border 나 padding 이 없다면 
      해당 Element 의 높이는 그 자식 Element의 
      상하 거리로 지정
      (결국 큰 마진만 보인다)
방법1) 패딩 요소로 간격을 설정한다.
방법2) display: inline-block;를 설정한다.
****************************************/
.feature {
  /* display: inline-block; */
  /* margin-top: 100px; */
  text-align: center;
  margin-bottom: 100px;
  padding-top: 100px;
  border-top: 1px solid rgb(154, 154, 154);
}
.featureHeading {
  font-size: 44px;
}
.featureText {
  margin: 28px auto 70px;
  width: 686px;
  line-height: 24px;
  color: rgb(154, 154, 154);
}
.featureListItem {
  display: inline-block;
  width: 310px;
  margin: 0 40px 0 40px;
}
/* nth-child 이용하기 */
/* .featureListItem:nth-child(2n+2) {
  margin: 0 80px;
} */
.featureListItem > h3 {
  margin: 30px auto 27px;
  font-size: 14px;
  letter-spacing: 5px;
}
.featureListItem > p {
  line-height: 24px;
  color: rgb(154, 154, 154);
}
/* video */
 .video {
  text-align: center;
  margin-bottom: 100px;
  padding-top: 100px;
  position: relative;
}
.videoHeadig {
  font-size: 44px;
  line-height: 54px;
  margin-bottom: 40px;
}
#videoIframe {
  position: absolute;
  margin: 23px 67px;
}
/* try now  */
.tryNow {
  text-align: center;
  margin-bottom: 100px;
  padding-top: 100px;
  border-top: 1px solid rgb(154, 154, 154);
}
.tryNowHaeding {
  font-size: 44px;
  line-height: 54px;
}
.tryNow > p {
  margin: 30px auto;
  width: 550px;
  font-size: 16px;
  line-height: 24px;
  color: rgb(154, 154, 154);
}
.tryNowBtn, .tryNowBtnColor {
  /* width: 200px;
  height: 50px; */
  padding: 20px 80px;
  border-radius: 5px;
  font-size: 14px;
  margin: auto 3px;
  letter-spacing: 5px;
  cursor: pointer;
}
.tryNowBtn {
  border: 2px solid rgb(3, 166, 123);
  background: none;
  color: rgb(3, 166, 123);
}
.tryNowBtnColor {
  border: none;
  background-color: rgb(3, 166, 123);
  color: rgb(255, 255, 255);
}
/* out clients */
.outClients {
  text-align: center;
  margin-bottom: 100px;
  padding-top: 100px;
  border-top: 1px solid rgb(154, 154, 154);
}
.outClientsHaeding {
  font-size: 44px;
}
.outClientsText {
  margin: 28px auto 70px;
  width: 686px;
  line-height: 24px;
  color: rgb(154, 154, 154);
}
.outClientsListItem {
  display: inline-block;
  width: 284px;
  margin: 0 50px 0 50px;
}
/* nth-child 이용하기 */
/* .outClientsListItem:nth-child(2n+2) {
  margin: 0 100px;
} */
.outClientName {
  margin: 30px auto 0;
  font-size: 14px;
  letter-spacing: 5px;
}
.outClientName > strong {
  color: rgb(0, 0, 0);
}
.outClientPosition {
  font-size: 14px;
  color: rgb(154, 154, 154);
  margin-bottom: 20px;
}
.outClientsListItem > p {
  color: rgb(154, 154, 154);
  line-height: 24px;
}
/* footer */
/* clear: both 삭제 : 하위요소 없음 */
.footer {
  margin: 60px auto 70px auto;
  text-align: center;
  padding-top: 100px;
  border-top: 1px solid rgb(154, 154, 154);
}
.smaill {
  color: rgb(154, 154, 154);
  font-size: 14px;
  float: left;
}
.footerNav {
  display: inline-block;
}
.footerNavItem {
  display: inline-block;
  margin: 0 10px;
  color: rgb(90, 90, 90);
}
.footerSocialIcon {
  float: right;
}
.footerSocialIconItem {
  display: inline-block;
  margin-left: 10px;
}
</style>
</head>
<body>
<!-- wrapper 시작 -->
  <div class="wrapper">
    <!-- header 시작 -->
    <header class="header">
      <!-- logo 시작 -->
      <h1 class="headerLogo"><a href="#"><img src="images/Logo.png" alt="blokk logo"></a></h1>
      <!-- logo 종료 -->
      <!-- 메뉴 시작 -->
      <nav class="nav">
        <ul>
          <li class="navList"><a href="#">Stories</a></li>
          <li class="navList"><a href="#">Company</a></li>
          <li class="navList"><a href="#">About</a></li>
          <li class="navList"><a href="#">Contact</a></li>
        </ul>
      </nav>
      <!-- 메뉴 종료 -->
      <!-- log 시작 -->
      <form class="log">
        <input class="logIn" type="button" name="login" value="log in">
        <input class="signUp" type="button" name="signup" value="sign up">
      </form>
      <!-- log 종료 -->
    </header>
    <!-- header 종료 -->
    <!-- main 시작 -->
    <main class="main" >
      <div class="mainContent">
        <h2 class="mainContentHeading">Blokk  Wireframe Kit</h2>
        <p class="mainContentText">At half-past   eight the door opened, the policeman  appeared, and, requestingthem to follow him,  led the way to an adjoining hall.</p>
        <!-- mian search 시작 -->
        <form class="mainSearch">
          <input class="mainSearchText" type="text" name="mainText"  placeholder="Input Field Text">
          <input class="mainSearchBtn" type="button" name="mainButton"  value="BUTTON">
        </form>
      </div>
        <!-- mian search 종료 -->
        <!-- main image 시작 -->
        <div class="mainImg"><img   src="images/iphone-mockup.png" alt="iphone  mockup image"></div>
      <!-- main image 종료 -->
    </main>
    <!-- main 종료 -->
    <!-- feature 시작 -->
    <section class="feature">
      <h2 class="featureHeading">Features</h2>
      <p class="featureText">At half-past eight the door opened, the policeman appeared, and, requesting them to follow him, led the way to an adjoining hall.</p>
      <!-- feature list 시작 -->
      <ul class="featureList">
        <li class="featureListItem">
          <a href="#"><img src="images/Icon.png" alt="feature first one image"></a>
          <h3>FIRST ONE</h3>
          <p>At half-past eight the door opened, the policeman appeared, and, requesting them to follow him.</p>
        </li>
        <li class="featureListItem">
          <a href="#"><img src="images/Icon.png" alt="feature second one image"></a>
          <h3>SECOND ONE</h3>
          <p>At half-past eight the door opened, the policeman appeared, and, requesting them to follow him.</p>
        </li>
        <li class="featureListItem">
          <a href="#"><img src="images/Icon.png" alt="feature third one image"></a>
          <h3>THIRD ONE</h3>
          <p>At half-past eight the door opened, the policeman appeared, and, requesting them to follow him.</p>
        </li>
      </ul>
      <!-- feature list 종료 -->
    </section>
    <!-- feature 종료 -->
    <!-- video 시작 -->
    <section class="video">
      <h2 class="videoHeadig">Blokk Wireframe Kit</h2>
      <iframe width="524" height="390" id="videoIframe"
              src="https://www.youtube.com/embed/NEKXbemWev8" 
              frameborder="0" allowfullscreen></iframe>
      <img src="images/ipad.png" alt="ipad image">
    </section>
    <!-- video 종료 -->
    <!-- try now 시작 -->
    <section class="tryNow">
      <h2 class="tryNowHaeding">Try It Now</h2>
      <p>At half-past eight the door opened, the policeman appeared, and, requesting them to follow him, led the way to an adjoining hall. It was evidently a court-room.</p>
      <input class="tryNowBtnColor" type="button" name="button" value="BUTTON">
      <input class="tryNowBtn" type="button" name="button" value="BUTTON">
    </section>
    <!-- try now 종료 -->
    <!-- out clients 시작 -->
    <section class="outClients">
      <h2 class="outClientsHaeding">Our Clients</h2>
      <p class="outClientsText">At half-past eight the door opened, the policeman appeared, and, requesting them to follow him, led the way to an adjoining hall.</p>
      <ul class="outClientsList">
        <li class="outClientsListItem">
          <img src="images/user-icon.png" alt="user icon image">
          <p class="outClientName"><strong>JOHN DOE</strong></p>
          <p class="outClientPosition">Professional</p>
          <p>At half-past eight the door opened, the policeman appeared, and, requesting them to follow him.</p></li>
        <li class="outClientsListItem">
          <img src="images/user-icon.png" alt="user icon image">
          <p class="outClientName"><strong>JOHN DOE</strong></p>
          <p class="outClientPosition">Professional</p>
          <p>At half-past eight the door opened, the policeman appeared, and, requesting them to follow him.</p></li>
        <li class="outClientsListItem">
          <img src="images/user-icon.png" alt="user icon image">
          <p class="outClientName"><strong>JOHN DOE</strong></p>
          <p class="outClientPosition">Professional</p>
          <p>At half-past eight the door opened, the policeman appeared, and, requesting them to follow him.</p></li>
      </ul>
    </section>
    <!-- out clients 종료 -->
    <!-- footer 시작 -->
    <footer class="footer">
      <smaill class="smaill">Blokk UI Kit.</smaill>
      <ul class="footerNav">
        <li class="footerNavItem"><a href="#">Stories</a></li>
        <li class="footerNavItem"><a href="#">Company</a></li>
        <li class="footerNavItem"><a href="#">About</a></li>
        <li class="footerNavItem"><a href="#">Contact</a></li>
      </ul>
      <ul class="footerSocialIcon">
        <li class="footerSocialIconItem"><a href="#"><img src="images/Facebook.png" alt="Facebook icon"></a></li>
        <li class="footerSocialIconItem"><a href="#"><img src="images/Dribbble.png" alt="Dribbble icon"></a></li>
        <li class="footerSocialIconItem"><a href="#"><img src="images/Google-Plus.png" alt="Google-Plus icon"></a></li>
        <li class="footerSocialIconItem"><a href="#"><img src="images/Instagram.png" alt="Instagram icon"></a></li>
      </ul>
    </footer>
    <!-- footer 종료 -->
  </div>
<!-- wrapper 종료 -->
</body>
</html>