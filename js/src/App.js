import React, { Fragment, Component } from 'react';
//import '@fortawesome/free-solid-svg-icons';
import './Component/fontawesome/index';
import './index.css';
import youtubeapi, { baseParams } from './Api/Youtubeapi';
import HeaderComponent from './Component/HeaderComponent/HeaderComponent';
import VideoList from './VideosComponent/VideoList';
import VideoDetails from './VideosComponent/VideosDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      loading: false,
      selectedVideo: null, //selected one video out of ten
    };
  }

  //calling param by importing,baseparam is in { because it is not default}
  FormSubmit = async (term) => {
    let response = await youtubeapi.get('/search', {
      params: {
        q: term,
        ...baseParams,
      },
    });
    //  console.log(response.data.items);
    this.setState({
      videos: response.data.items,
      loading: true,
      selectedVideo: response.data.items[0],
    });
  };

  //if you want not to refresh and clear,and must come content instead loading then use life cycle
  componentDidMount() {
    this.FormSubmit('humsafar');
  }

  onSelectedVideo = (video) => {
    console.log(video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <Fragment>
        <header>
          <HeaderComponent FromAppFormSubmit={this.FormSubmit} />
        </header>
        <main className="container-fluid my-4 pl-4 pr-4">
          <section id="data_list">
            <article>
              <div className="player_Block">
                <VideoDetails
                  video={this.state.selectedVideo}
                  //rendering purpose only one video
                  loading={this.state.loading}
                />
              </div>
              <div className="list_Block">
                <VideoList
                  videos={this.state.videos}
                  onSelectedVideo={this.onSelectedVideo} //clicking purpose connected to props in videolist
                />
              </div>
            </article>
          </section>
        </main>
      </Fragment>
    );
  }
}

export default App;
