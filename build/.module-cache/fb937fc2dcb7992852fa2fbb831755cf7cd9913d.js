var Song = React.createClass({displayName: 'Song',
  handleClick: function(e){
    e.preventDefault();
    this.props.onSongClick(this.props.song);
  },
  render: function(){
    return (
      React.createElement("div", {className: "song", onClick: this.handleClick}, 
        React.createElement("p", null, this.props.song.author), 
        React.createElement("p", null, this.props.song.text)
      )
    );
  }
});