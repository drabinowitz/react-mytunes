var Library = React.createClass({displayName: 'Library',
  handleSongClick: function(song){
    this.props.onSongClick(song);
  },
  render:function(){
    var songs = this.props.library.map(function (song){
      return (
        React.createElement(Song, {song: song, onSongClick: this.handleSongClick})
      );
    }.bind(this));
    return (
      React.createElement("div", {className: "library"}, 
        React.createElement("h2", null, "Library"), 
        songs
      )
    );
  }
});