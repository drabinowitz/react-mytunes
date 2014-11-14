var App = React.createClass({displayName: 'App',
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
      React.createElement("div", {className: "commentBox"}, 
        React.createElement("h1", null, "My Tunes"), 
        React.createElement(Library, {library: this.props.library, onSongClick: this.enqueue}), 
        React.createElement(SongQueue, {queue: this.state.queue, onSongClick: this.dequeue}), 
        React.createElement(Player, null)
      )
    );
  }
});

React.render(
  React.createElement(App, {library: songData}),
  document.getElementById('content')
);