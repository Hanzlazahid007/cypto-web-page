import "./App.css";
import Chart from "./componenets/Chart";

import Header from "./componenets/Header";
import Ttitle from "./componenets/Ttitle";

function App() {
  return (
    <>
      <Header />
      <div
        className="lg:flex lg:justify-around  ">
        <div className="lg:w-[55%]">
          <Ttitle />
        </div>
        <div className="lg:w-[60%] ">
          <Chart />
        </div>
      </div>
    </>
  );
}

export default App;
