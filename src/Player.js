var Player = React.createClass({
  render: function(){
    var song;
    if (this.props.hasOwnProperty('song')){
      song = <Song song={this.props.song}/>
    } else {
      song = <p>Select a song to start playing it</p>
    }
    return (
      <div className="player">
        <h2>Currently Playing</h2>
        {song}
      </div>
    );
  }
});