import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const StatisticLine = (props) => {
    const {text, value} = props;

    return (
      <div>{text} {value}</div>
    );
  }

  const Statistics = (props) => {
    const {good, neutral, bad} = props;
    const total = good + neutral + bad;

    if(total <= 0 ) {
      return (
        <div>
          <h2>statistics</h2>
          No feedback given
        </div>
      );
    }
    return (
      <div>
        <h2>statistics</h2>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={(good-bad)/total} />
        <StatisticLine text="positive" value={(good*100)/total} />
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
