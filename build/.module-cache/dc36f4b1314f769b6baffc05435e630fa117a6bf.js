var Player = React.createClass({displayName: 'Player',
  getInitialState: function(){
    return {song: null};
  },
  render: function(){
    var song;
    if (this.state.song !== null){
      song = React.createElement(Song, {song: this.state.song})
    } else {
      song = React.createElement("p", null, "Select a song to start playing it")
    }
    return (
      React.createElement("div", {className: "player"}, 
        React.createElement("h2", null, "Currently Playing"), 
        song
      )
    );
  }
});