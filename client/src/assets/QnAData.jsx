
const questionList = [
    {
      "no": 1,
      "title": "\"꽃피는 아몬드 나무\"에 담겨 있는 의미는 무엇인가요? 과제 제출해야하니 도와주세요.",
      "content": "며칠 전에 경기 전시회 \"빈센트 반 고흐: 향기를 만나다\"에 다녀와 궁금증이 생겼습니다.\n고흐가 이렇게 밝은 색채를 이용해 꽃을 그린 그림이 거의 처음이라던데 이 그림을 그리게 된 배경은 무엇인가요? 그의 가족과 연관이 있는 것인지 아니면 다른 무언가와 연관이 있는 것인지 궁금합니다.",
      "createDate": "2022-11-18",
      "answerCount": 0,
      "exTitle": "빈센트 반 고흐: 향기를 만나다"
    },
    {
      "no": 2,
      "title": "두번째 질문입니다.",
      "content": "두번째 질문 내용입니다.",
      "createDate": "2022-10-25",
      "answerCount": 0,
      "exTitle": "전시회2"
    },
    {
      "no": 3,
      "title": "세번째 질문입니다.",
      "content": "세번째 질문 내용입니다.",
      "createDate": "2022-11-10",
      "answerCount": 0,
      "exTitle": "전시회3"
    },
    {
      "no": 4,
      "title": "네번째 질문입니다.",
      "content": "네번째 질문 내용입니다.",
      "createDate": "2022-10-30",
      "answerCount": 0,
      "exTitle": "전시회4"
    },
    {
      "no": 5,
      "title": "다섯번째 질문입니다.",
      "content": "다섯번째 질문 내용입니다.",
      "createDate": "2022-9-20",
      "answerCount": 0,
      "exTitle": "전시회5"
    },
    {
      "no": 6,
      "title": "여섯번째 질문입니다.",
      "content": "여섯번째 질문 내용입니다.",
      "createDate": "2022-9-20",
      "answerCount": 0,
      "exTitle": "전시회6"
    },
    {
    "no": 7,
    "title": "7",
    "content": "77",
    "createDate": "2022-10-25",
    "answerCount": 0,
    "exTitle": "전시회2"
    },
    {
      "no": 8,
      "title": "8",
      "content": "88",
      "createDate": "2022-11-10",
      "answerCount": 0,
      "exTitle": "전시회3"
    },
    {
      "no": 9,
      "title": "9",
      "content": "99",
      "createDate": "2022-10-30",
      "answerCount": 0,
      "exTitle": "전시회4"
    },
    {
      "no": 10,
      "title": "10",
      "content": "1010",
      "createDate": "2022-9-20",
      "answerCount": 0,
      "exTitle": "전시회5"
    },
    {
      "no": 11,
      "title": "11",
      "content": "1111",
      "createDate": "2022-9-20",
      "answerCount": 0,
      "exTitle": "전시회6"
    }
  ];

  const answerList = [
    {
      "no": 1,
      "qno": 1,
      "title": "첫번째 답변입니다.",
      "content": "고흐 제가 정말 잘 알죠",
      "createDate": "2022-11-18",
      "docentName": "전기범"
    },
    {
      "no": 2,
      "qno": 1,
      "title": "두번째 답변입니다.",
      "content": "두번째 답변 내용입니다.aaaaaaaaaaaaaaaaaaaaaa\naaaaaa\naaaa\naaaaaaaaaaaaa\naaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaa\naaaaaaa\naaaaaaa",
      "createDate": "2022-10-25",
      "docentName": "서우석"
    },
    {
      "no": 3,
      "qno": 2,
      "title": "세번째 답변입니다.",
      "content": "세번째 답변 내용입니다.",
      "createDate": "2022-11-10",
      "docentName": "전기범"
    },
    {
      "no": 4,
      "qno": 3,
      "title": "네번째 답변입니다.",
      "content": "네번째 답변 내용입니다.",
      "createDate": "2022-11-10",
      "docentName": "전기범"
    },
    {
      "no": 5,
      "qno": 4,
      "title": "다섯번째 답변입니다.",
      "content": "다섯번째 답변 내용입니다.",
      "createDate": "2022-11-10",
      "docentName": "전기범"
    }
  ];
  
  const getQnAByNo = no => {
    const array = questionList.filter(x => x.no == no);
    if (array.length == 1) {
      return array[0];
    }
    return null;
  }

  const getAnswerByNo = no => {
    const array = answerList.filter(x => x.qno == no);
    if (array.length == 0) {
      return null;
    }
    return array;
  }
  
  export {
    questionList,
    answerList,
    getQnAByNo,
    getAnswerByNo
  };