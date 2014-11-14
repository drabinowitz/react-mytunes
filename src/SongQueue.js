var SongQueue = React.createClass({
  handleSongClick: function(song){
    this.props.onSongClick(song);
  },
  render: function(){
    var songs = this.props.queue.map(function(song){
      return (
        <Song song={song} onSongClick={this.handleSongClick}/>
      );
    }.bind(this));
    return (
      <div className="songQueue">
        <h2>Song Queue</h2>
        {songs}
      </div>
    );
  }
});