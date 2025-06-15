//변수, 상수 작성 과제

//1. 사용자 이름을 저장할 변수를 선언하고 "자신의 이름"을 할당하세요.
let user_name = "심우섭";

//2. "절대 영도(온도의 최저 한계)인 -273.15°C"를 담을 상수를 선언하세요.
const absolute_lowest = "-273.15°C";

//3. "로그인 여부"를 확인하는 불리언 타입 변수을 선언하고 적절한값을 할당하세요.
let login_status = true;

//4. "사용자 나이" 변수를 선언하고 숫자 값을 할당하세요.
let user_age = 28;

//5. "상품 가격(예: 39,900원)"을 담는 변수를 작성하세요.
let item_price = 39_900 + "원";

//6. 웹 페이지의 "배경색"을 담는 상수를 작성하고 적절한 값을 할당하세요.
const background_color = "#fcfcfc";

//7. 사용자가 작성한 "댓글 수(예: 12)"를 담는 변수를 선언하고 값을 할당하세요.
let comment_number = "12";

//8. "현재 페이지 번호(예: 3)"를 담는 변수를 작성하고 적절한 값을 할당하세요.
let current_page = 3;

//9. "회원 등급('VIP', '골드', '실버' 중 하나)"을 담는 변수를 작성해보세요.
let user_grade = "silver";

//10. "버튼이 클릭되었는지 여부"를 담는 변수를 선언하고 불리언 타입 값을 설정하세요.
let button_click = false;

//-------------------------------------------------------
//함수 작성 과제

//1. 인사말 메시지
//사용자로부터 이름을 입력받아 인사말을 출력하는 함수를 작성합니다.
function greetUser(username) {
  return "안녕하세요! " + username + "님. 좋은 하루되세요!";
}
console.log(greetUser("심우섭"));

//2. 원가 계산
//판매가를 입력 받아 원가를 계산하는 함수를 작성합니다.
const calculateOriginalPrice = function (priceWithTax) {
  return priceWithTax / 1.033;
};
console.log(calculateOriginalPrice(12000));

//3. 주류 판매 가능 여부
//신분증의 나이를 확인해 주류 구매 가능 여부를 반환하는 함수를 작성합니다.
const registrationCard = {
  name: "심우섭",
  age: 28,
  gender: "male",
};

const canSellAlcohol = (registrationCard) => registrationCard.age >= 19;

console.log(canSellAlcohol(registrationCard));
