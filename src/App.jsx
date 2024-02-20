import Heading from "./components/Heading"
import SearchBar from "./components/SearchBar"
import ShowBlogs from "./components/ShowBlogs"
// import DataTest from "./components/DataTest"
import './App.css'

function App() {
  return (
    <div className="mx-20 my-5 font-[mediumFont]">
      <Heading></Heading>
      <SearchBar></SearchBar>
      <div className="my-3">Stories, trends and insignts from your friends at github</div>
      <ShowBlogs></ShowBlogs> 
    </div>
    // <DataTest></DataTest>
  )
}

export default App
