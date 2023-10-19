// export default function App() {
import { useState, useEffect } from "react";
import UserInfo from "./components/UserInfo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbarr from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import Home from "./components/Home/Home";
// import
const App = () => {
  const [users, setUsers] = useState([
    { name: "1", age: 20, gender: "Male" },
    { name: "2", age: 21, gender: "Male" },
  ]);
  const UserList = users.map((el) => {
    <UserInfo name={el.name} age={el.age} gender={el.gender} />;
  });
  const insertData = () => {
    console.log("dataaa");
    setUsers([{ name: "3", age: 40, gender: "male" }, ...users]);
  };
  useEffect(() => {
    // on comp mount
  }, []);
  // useEffect(() => {
  //   // on comp change
  // }, [first]);
  return (
    <BrowserRouter>
      <Header />
      {/* <Navbarr /> */}
      {/* <Button variant="primary">Primary</Button>
      <button onClick={insertData}>click me</button>
      {UserList} 
      <UserInfo name="mohamed" age={25} gender="male"></UserInfo>
      <UserInfo name="Noha" age={25} gender="Female"></UserInfo> */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Shop/:name/:id" element={<Shop />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
