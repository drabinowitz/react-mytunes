var SongQueue = React.createClass({displayName: 'SongQueue',
  render: function(){
    var songs = this.props.queue.map(function(song){
      return (
        React.createElement(Song, {song: song, onSongClick: this.props.onSongClick})
      );
    });
    return (
      React.createElement("div", {className: "songQueue"}, 
        React.createElement("h2", null, "Song Queue"), 
        songs
      )
    );
  }
});