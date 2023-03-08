import Navbar from "./components/navbar/Navbar";
import Secondary from "./components/Secondary/Secondary";
import Video from "./components/video_component/Video";
import Details from "./components/details/Details";
import Comments from "./components/comments/Comments";
function App() {
  return (
    <>
        <Navbar />
        <div className="primary-container"> 
          <Video />
          <Details />
          <Comments />
        </div>
        <Secondary />
      </MetubeProvider>
    </>
  );
}

export default App;
