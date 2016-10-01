class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: window.exampleVideoData[0],
      videoList: window.exampleVideoData
    };
  }

  onVideoListClick(event, video) {
    console.log('i was clicked!');
    this.setState({
      currentVideo: video
    });
  }

  componentDidMount () {
    var options = {
      key: window.YOUTUBE_API_KEY,
      max: 15,
      query: 'React'
    }
    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videoList: videos
      })
    });
  }

  render() {

    return (
      <div>
        <Nav />
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
        <div className="col-md-5">
          <VideoList onClick={this.onVideoListClick.bind(this)} videos={this.state.videoList}/>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
