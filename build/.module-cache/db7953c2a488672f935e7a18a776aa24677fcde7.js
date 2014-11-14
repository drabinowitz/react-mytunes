var Library = React.createClass({displayName: 'Library',
  render:function(){
    var songs = this.props.library.map(function (song){
      return (
        React.createElement(Song, {author: song.author}, 
          song.text
        )
      );
    });
    return (
      React.createElement("div", {className: "library"}, 
        songs
      )
    );
  }
});