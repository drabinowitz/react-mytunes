var App = React.createClass({
  getInitialState: function() {
    return {queue: []};
  },
  enqueue: function(song) {
    if (!_(this.state.queue).contains(song)){
      this.setState({queue: this.state.queue.concat(song)});
    }
  },
  dequeue: function(song) {
    var newState = this.state.queue.filter(function(queuedSong){
      return queuedSong !== song;
    });
    this.setState({queue: newState});
  },
  componentDidMount: function() {
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>My Tunes</h1>
        <Library library={this.props.library} onSongClick={this.enqueue}/>
        <SongQueue queue={this.state.queue} onSongClick={this.dequeue}/>
        <Player/>
      </div>
    );
  }
});

React.render(
  <App library={songData} />,
  document.getElementById('content')
);