import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";
function App() {

  return (
    <>
      <BrowserRouter basename="/nikhilApp">
        <Routes>
          <Route path="/" element={<Body />}>
            {/* above is parent route */}
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            {/* above are children routes for parent route / */}
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <NavBar></NavBar> this will come for all routes
      <h1 className="text-3xl font-bold underline"> Hello world!</h1> */}
      </>
  )
}

export default App;
