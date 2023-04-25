let basicData = {
  header : {
    id: "header",
    type: "div",
    children: null,
  },
  main : {
    id: "main",
    type: "div",
    children: null,
  },
  footer : {
    id: "footer",
    type: "div",
    children: null,
  }
}

let elementData = ["게시판", "수업과제", "사용자", "성적", "로그아웃"];

function exampleOne(object,array) {
  let result= "";
  for ( const key in object ){
  // if(basicData[key].children === null){
    if(object[key].children === null){
      //! 선생님 고민을 하다가 gpt 의 설명을 들었습니다 . 이해를 하고싶었는데 어려웠어요.
      //객체 비구조화 할당(Destructuring Assignment):
      // 해당 객체의 id와 type 속성을 비구조화 할당을 통해 각각 id와 type 변수에 할당합니다. 이렇게 하면 id와 type 값을 각각 따로 사용할 수 있게 됩니다.
      const {id,type} = object[key]; //어려움 
      const children = array.map(item => `<li>${item}</li>`).join(''); // 이해됨 
      const htmlTag = `<${type} id="${id}"><ul>${children}</ul></${type}>`; //이해됨 
      //result 변수에 문자열 누적
      //result = htmlTag;
      result += htmlTag; // 이해됨 혼자 못씀 
      }
    }
    return result;
  }
console.log(exampleOne(basicData, elementData));
//<div id="header"><ul><li>게시판</li><li>수업과제</li><li>사용자</li><li>성적</li><li>로그아웃</li></ul></div>
//<div id="main"><ul><li>게시판</li><li>수업과제</li><li>사용자</li><li>성적</li><li>로그아웃</li></ul></div>
//<div id="footer"><ul><li>게시판</li><li>수업과제</li><li>사용자</li><li>성적</li><li>로그아웃</li></ul></div> 