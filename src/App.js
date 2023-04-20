import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import { fetchData } from './utils';

function App() {
const [data , setData] = useState("")

  useEffect(()=>{
    fetchData().then((res)=>{
      console.log("asd",res)
      setData(res)
    })
  }, [])

  if(data == "") {
    return <>dfsf</>
  }
  return (
    <div className="App">
      {data.features.map((value, index)=> {
        return (
          <Card data = {value} index={index}/>
        )
      })}
    </div>
  );
}

export default App;
