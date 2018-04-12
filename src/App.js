import _ from "lodash";
import React, { Component } from "react";
import SearchBar from "./components/search_bar.js";
import VideoList from "./components/video_list.js";
import YTSearch from "youtube-api-search";
import VideoDetail from "./components/video_detail.js";
import "../src/style/App.css";

//API key for youtube
const API_KEY = "AIzaSyDeyPUi8l-AuSTuB1K40NTcUDkboF5Zmfs";

class App extends Component {
  constructor(props) {
    super(props);

    //selected video is set to null for first time rendering
    //null is changed to videos[0] when api call in finished
    this.state = {
      videos: [],
      selectedVideo: null
    };

    //default serach term on page load
    this.videoSearch("surfboards");
  }

  videoSearch(term) {
    //API call that takes our key and term to search by
    YTSearch({ key: API_KEY, term: term }, videos => {
      //The results are set to our state with selected videos replacing null
      this.setState({ videos: videos, selectedVideo: videos[0] });
    });
  }

  render() {
    //using lodash debounce, we throttle the function call on videoSearch to not fire on every input change
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 1000);

    //onSearchTermChange is a prop that takes in a term that is then used to call the videoSearch function
    //the video prop is the current selected video from our state to get passed into the video detail comp
    //onVideoSelect is a prop that sets the state's selected video value as the one that it was called with
    //videos prop takes in the array of videos to be used in the video list comp
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
