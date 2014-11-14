var Player = React.createClass({displayName: 'Player',
  render: function(){
    return (
      React.createElement("div", {className: "player"}, 
        React.createElement(Song, {song: this.props.song})
      )
    );
  }
});