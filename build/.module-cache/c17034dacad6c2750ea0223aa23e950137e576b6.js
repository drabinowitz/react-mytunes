var Player = React.createClass({displayName: 'Player',
  render: function(){
    return (
      React.createElement("div", {className: "player"}, 
        React.createElement("h2", null, "Currently Playing"), 
        React.createElement(Song, {song: this.props.song})
      )
    );
  }
});