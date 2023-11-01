import './App.css';
import Header from "./components/header/Header";
import RecommendedVideos from "./components/recommended/RecommendedVideos";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Sidebar */}
      <div className="app-page">
        <Sidebar />
      {/* Recommended Videos */}
        <RecommendedVideos />
      </div>

    </div>
  );
}

export default App;
