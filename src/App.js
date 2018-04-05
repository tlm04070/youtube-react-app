import _ from "lodash";
import React, { Component } from "react";
import SearchBar from "./components/search_bar.js";
import VideoList from "./components/video_list.js";
import YTSearch from "youtube-api-search";
import VideoDetail from "./components/video_detail.js";
import "../src/style/App.css";
const API_KEY = "AIzaSyDeyPUi8l-AuSTuB1K40NTcUDkboF5Zmfs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("surfboards");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({ videos: videos, selectedVideo: videos[0] });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 1000);

    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
