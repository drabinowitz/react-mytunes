var Library = React.createClass({displayName: 'Library',
  render:function(){
    var songs = this.props.library.map(function (song){
      return (
        React.createElement(Song, {song: song, onSongClick: this.props.onSongClick})
      );
    });
    return (
      React.createElement("div", {className: "library"}, 
        songs
      )
    );
  }
});