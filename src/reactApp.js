var App = React.createClass({
  getInitialState: function() {
    return {queue: []};
  },
  enqueue: function(song) {
    this.setState({queue: this.state.queue.concat(song)});
  },
  dequeue: function(song) {
    var newState = this.state.queue.filter(function(queuedSong){
      return queuedSong !== song;
    });
    this.setState({queue: newState});
  },
/*  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.url,status,err.toString());
      }.bind(this)
    })
  },
  handleCommentSubmit: function(comment){
    var comments = this.state.data;
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.url,status,err.toString());
      }.bind(this)
    })
  },*/
  componentDidMount: function() {
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>My Tunes</h1>
        <Library library={this.props.library} onSongClick={this.enqueue}/>
        <SongQueue queue={this.state.queue} onSongClick={this.dequeue}/>
      </div>
    );
  }
});

React.render(
  <App library={songData} />,
  document.getElementById('content')
);