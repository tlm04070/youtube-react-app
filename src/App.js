import React, { Component } from "react";
import SearchBar from "./components/search_bar.js";
import VideoList from "./components/video_list.js";
import YTSearch from "youtube-api-search";
const API_KEY = "AIzaSyDeyPUi8l-AuSTuB1K40NTcUDkboF5Zmfs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
