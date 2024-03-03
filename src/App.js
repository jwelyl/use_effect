import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((current) => current + 1);
  const onChange = (event) => setKeyword(event.target.value);

  //  최초 렌더링 시 로그
  useEffect(() => {
    console.log("I run only once.");
  }, []);

  // 버튼 누를 때마다 출력
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  //  검색창에 입력할 때마다 출력
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);

  //  버튼 누르거나, 검색창에 입력할 때마다 출력
  useEffect(() => {
    console.log("I run when 'counter' or 'keyword' changes.");
  }, [counter, keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
