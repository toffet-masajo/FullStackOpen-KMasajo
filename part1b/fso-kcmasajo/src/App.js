import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const Statistics = (props) => {
    const {good, neutral, bad} = props;
    const total = good + neutral + bad;

    return (
      <div>
        <h2>statistics</h2>
        <div>good {good}</div>
        <div>neutral {neutral}</div>
        <div>bad {bad}</div>
        <div>all {total}</div>
        <div>average {(good-bad)/total}</div>
        <div>positive {(good*100)/total} %</div>
      </div>
    );
  }

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={() => { setGood(good + 1) }}>good</button>
      <button onClick={() => { setNeutral(neutral + 1) }}>neutral</button>
      <button onClick={() => { setBad(bad + 1) }}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  );
}

export default App
