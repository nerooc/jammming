import React from 'react';
import './App.css';
import  SearchBar  from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


class App extends React.Component {

    constructor(props){
      super(props);

      this.state = {
        searchResults: [name, artist, album, id],
        playlistName: 'test',
        playlistTracks: [{
          name: 'test',
          artist: 'test',
          album: 'test',
          id: 'test'
        }, {
          name: 'test',
          artist: 'test',
          album: 'test',
          id: 'test'
        },
      ]
      }

      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
    }

    addTrack(track){
      let tracks = this.state.playlistTracks;
      if (tracks.find(savedTrack => savedTrack.id === track.id)) {
        return;
      } else {
        tracks.push(track);
        this.setState({playlistTracks: tracks});
      }
    }

    removeTrack(track){
      let tracks = this.state.playlistTracks;
      tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
      this.setState({playlistTracks: tracks});

    }

    render(){
    return (
        <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
              <SearchBar />
                <div className="App-playlist">
                  <SearchResults onAdd = {this.addTrack} searchResults = {this.state.searchResults} />
                  <Playlist onRemove = {this.removeTrack} playlistName = {this.state.playlistName} playlistTracks = {this.state.playlistTracks}/>
                </div>
            </div>
        </div>
    );
    }
}

export default App;
