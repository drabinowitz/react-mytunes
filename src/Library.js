var Library = React.createClass({
  handleSongClick: function(song){
    this.props.onSongClick(song);
  },
  render:function(){
    var songs = this.props.library.map(function (song){
      return (
        <Song song={song} onSongClick={this.handleSongClick}></Song>
      );
    }.bind(this));
    return (
      <div className="library">
        <h2>Library</h2>
        {songs}
      </div>
    );
  }
});