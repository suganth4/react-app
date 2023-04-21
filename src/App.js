import { useEffect, useState } from 'react';
import './App.css';
import { fetchlivescore } from './utils';
function App() {

  useEffect(() => {
    fetchlivescore().then((res) => {
      setData(res.Stages[0].Events[0].ECo)
    })
  }, []);

  setInterval(function () {
    fetchlivescore().then((res) => {
      setData(res.Stages[0].Events[0].ECo)
    })
  }, 1000 * 60)

  const [data, setData] = useState("")

  if (data == "") {
    return <>loading</>
  }
  return (
    <div className="App">
      {data}
    </div>
  );
}

export default App;
