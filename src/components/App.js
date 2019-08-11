import React from 'react';
import SearchBar from './SearchBar';
import utube from '../Apis/utube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
const KEY = 'AIzaSyCT6Nlt1mKE0vl31QexBhg1DBmi1myjlGs';

class App extends React.Component{
    componentDidMount(){
     this.onFormSubmit('buildings');
    }

    state={
        videos:[],
        selectedVideo: null
    };

    onFormSubmit = async term => {
     const response = await utube.get('/search', {
      params:{
            q: term,
            part: 'snippet',
            maxResults: 5,
            key: KEY
           }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

     onVideoSelect = (video) => {
         this.setState({
             selectedVideo: video
         })
     };
render(){
    return(
        <div className="ui container">
            <SearchBar onFoSubmit={this.onFormSubmit} />
            <div className="ui grid">
            <div className="ui row">
            <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
            </div>
            </div>
        </div>
    );
}
}

export default App;
