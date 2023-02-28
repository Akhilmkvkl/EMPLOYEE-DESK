import { Route, Routes } from "react-router-dom";
import AddEmployee from "./Pages/Add-Employee/AddEmploye";
import Homepage from "./Pages/Homepage/Homepage";
import ViewEmployee from "./Pages/View-Employee/ViewEmployee";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/Add-Employee" element={<AddEmployee />}></Route>
        <Route path="/View-Employee" element={<ViewEmployee />}></Route>


      </Routes>
    </div>
  );
}

export default App;
