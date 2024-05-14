import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import { useState } from "react";
import CreatePost from "./components/createpost";
import PostList from "./components/postlist";
import PostListProvider from "./store/post-list-store";

function App() {
const [selectedTab,setSelectedTab]=useState("Home");

  return(
    <PostListProvider>
    <div className="app-container">
    <Sidebar 
    selectedTab={selectedTab}
    setSelectedTab={setSelectedTab}
    ></Sidebar>
    <div className="content">
    <Header></Header>
    {selectedTab ==="Home"?(<PostList></PostList>):(<CreatePost></CreatePost>)}
    <Footer></Footer>
    </div>
    </div>
    </PostListProvider>
  )
  
}
export default App;