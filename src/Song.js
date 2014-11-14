var Song = React.createClass({
  handleClick: function(e){
    e.preventDefault();
    this.props.onSongClick(this.props.song);
  },
  render: function(){
    return (
      <div className="song" onClick={this.handleClick}>
        <p>{this.props.song.artist}</p>
        <p>{this.props.song.title}</p>
      </div>
    );
  }
});