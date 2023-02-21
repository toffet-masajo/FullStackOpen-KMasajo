import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const getTotal = () => (good + neutral + bad);

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={() => { setGood(good + 1)}}>good</button>
      <button onClick={() => { setNeutral(neutral + 1)}}>neutral</button>
      <button onClick={() => { setBad(bad + 1)}}>bad</button>
      <h2>statistics</h2>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {getTotal()}</div>
      {getTotal() > 0 && <div>average {(good-bad)/getTotal()}</div>}
      {getTotal() > 0 && <div>positive {((good*100)/getTotal())} %</div>}
    </div>
  );
}

export default App
