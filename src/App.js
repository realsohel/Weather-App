// import hotBg from "./assets/hot.webp"
import coldBg from "./assets/cold.webp"
import Descriptions from "./components/Descriptions";
import "./index.css"

function App() {
  return (
    <div className="App w-[100%] h-[100vh] bg-center bg-cover " style={{backgroundImage:`url(${coldBg})`}}>
  
      <div className="overlay">
        <div className="container max-w-4xl m-auto h-[100%] flex flex-col items-center justify-between p-4">

          <div className="section section__inputs m-4">
            <input className="text-black" type="text" name="city" placeholder="Enter the City..." />
            <button className="text-black py-3 px-10 border-none rounded-[0.4rem] font-bold cursor-pointer bg-white hover:bg-gray-200">°F</button>
          </div>

          <div className="section section__temperature">
            <div className="icons flex flex-col items-center  justify-center">
              <h2 className=" text-base font-medium capitalize">London, UK</h2>
              <img src="/images/weather_icon.webp" alt="weather_icon" className="w-20"/>
              <h2>Cloudy</h2>
            </div>

            <div className="temperature text-[60px] font-medium">
              28 °C
            </div>
          </div>

          <Descriptions/>
        </div>
      </div>
    </div>
  );
}

export default App;
