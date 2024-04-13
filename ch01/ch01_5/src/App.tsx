import './App.css';
import * as data from './data'

function App() {
  console.log('App called.')
  return (
    <div>
    <h1>chance & luxon을 이용한 가짜 데이터 생성 실습</h1>
    <p>{data.randomName()}, {data.randomJobTitle()}, {data.randomDayMonthYear()}</p>
    <img src={data.randomAvatar()} height='50' alt='randomAvatar'/>
    <img src={data.randomImage()} height='300' alt="randomImage" />
    </div>
  );
}

export default App;
