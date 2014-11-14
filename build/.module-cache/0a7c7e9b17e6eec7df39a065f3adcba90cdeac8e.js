var SongQueue = React.createClass({displayName: 'SongQueue',
  handleSongClick: function(song){
    this.props.onSongClick(song);
  },
  render: function(){
    var songs = this.props.queue.map(function(song){
      return (
        React.createElement(Song, {song: song, onSongClick: this.handleSongClick})
      );
    }.bind(this));
    return (
      React.createElement("div", {className: "songQueue"}, 
        React.createElement("h2", null, "Song Queue"), 
        songs
      )
    );
  }
});