import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                <Track track = {{name: "test", artist: "test", album:"test"}} />
                <Track track = {{name: "test", artist: "test", album:"test"}} />
            </div>
        )
    }
}

export default TrackList;
