import "./App.css";
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";
import MiddleContent from "./components/MiddleContent/MiddleContent";
import RightSideBar from "./components/RightSideBar/RightSideBar";
import MainNav from "./components/MainNav/MainNav";

function App() {
  return (
    <div className="App">
      <div>
        <MainNav />
        <div className="main-wrapper">
          <LeftSideBar />
          <MiddleContent />
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}

export default App;
