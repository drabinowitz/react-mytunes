var App = React.createClass({displayName: 'App',
  getInitialState: function() {
    return {queue: []};
  },
  enqueue: function(song) {
    this.setState({queue: this.state.queue.concat(song)});
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
      React.createElement("div", {className: "commentBox"}, 
        React.createElement("h1", null, "My Tunes"), 
        React.createElement(Library, {songs: this.props.library, onSongClick: this.enqueue}), 
        React.createElement(SongQueue, {songs: this.state.queue})
      )
    );
  }
});

React.render(
  React.createElement(CommentBox, {library: songData}),
  document.getElementById('content')
);