import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/Topbar";
import SignUp from "./components/SignUp";
import Allposts from "./components/Allposts";
import Login from "./components/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import Write from "./components/Write";
import Viewpost from "./components/Viewpost";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <TopBar />

          <Routes>
            <Route exact path="/" element={<Allposts/>}/>
       
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/viewpost" element={<Viewpost/>}/>
            <Route
              exact
              path="/write"
              element={
                <ProtectedRoutes>
                  <Write/>
                </ProtectedRoutes>
              }
            />
            <Route
              exact
              path="/addpost"
              element={
                <ProtectedRoutes>
                  <AddPost />
                </ProtectedRoutes>
              }
            />
            <Route
              exact
              path="/editpost"
              element={
                <ProtectedRoutes>
                  <EditPost/>
                </ProtectedRoutes>
              }
            />

        
              
           
          </Routes>
         
        </div>
      </Router>
    </div>
  );
}

export default App;
