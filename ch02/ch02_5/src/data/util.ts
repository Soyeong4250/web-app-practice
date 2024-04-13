// null로 채운 새로운 배열 생성 : undefined로 채워진 배열은 map 사용불가능하기 때문
export const makeArray = (length: number) => new Array(length).fill(null);

// 시작 값, 끝 값을 입력받아 배열 내의 데이터 채우기
export const range = (min: number, max: number): number[] =>
  makeArray(max - min).map((notUsed, index) => index + min);

// 시작 값, 끝 값을 입력받아 무작위 정수로 반환
export const random = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min;
