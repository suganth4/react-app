import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import { fetchData } from './utils';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function App() {

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 700;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const [data, setData] = useState("")
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  useEffect(() => {
    fetchData().then((res) => {
      console.log("asd", res)
      setData(res)
    })
  }, [])

  if (data == "") {
    return <>loading</>
  }
  return (
    <div className="App">


      {width < 450 ? <> <div className="header-mobile" ><img className="header-img-mobile" src={data.logo} /> </div> <Slider {...settings}>
        {data.features.map((value, index) => {
          return (
            <Card data={value} index={index} />
          )
        })}
      </Slider> </> : <> <div className="header" ><img className="header-img" src={data.logo} /> </div> {data.features.map((value, index) => {
        return (
          <Card data={value} index={index} />
        )
      })}</>}

    </div>
  );
}

export default App;
