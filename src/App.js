import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//all components
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Contact from "./components/Home/Contact";
import About from "./components/Home/About";
import Home from "./components/Home/Home";
import { View } from "./components/Home/FormComponent/ViewForm";
import { Create } from "./components/Home/FormComponent/CreateForm";

function App() {
  // const dummyData = [
  //   {
  //     id: 1,
  //     name: "Dhiraj sharma",
  //     dob: new Date(2001, 3, 20),
  //     roll: 27,
  //   },
  //   {
  //     id: 2,
  //     name: "Kartik",
  //     dob: new Date(2001, 3, 20),
  //     roll: 29,
  //   },
  //   {
  //     id: 3,
  //     name: "Sandeep",
  //     dob: new Date(2001, 3, 20),
  //     roll: 78,
  //   },
  // ];

  return (
    <>
      <div>
        <BrowserRouter>
          <div>
            <Routes>
              {/* Sign-up Page */}
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              {/* Home Page */}
              <Route path="/" element={<Home />} />
              <Route path="/view/:ID" element={<View />} />
              <Route path="/create" element={<Create />} />
              <Route path="/edit/:ID" element={<Create />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
