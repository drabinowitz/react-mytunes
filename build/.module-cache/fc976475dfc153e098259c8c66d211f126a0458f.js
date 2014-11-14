var Library = React.createClass({displayName: 'Library',
  render:function(){
    var Songs = this.props.library.map(function (comment){
      return (
        React.createElement(Comment, {author: comment.author}, 
          comment.text
        )
      );
    });
    return (
      React.createElement("div", {className: "commentList"}, 
        commentNodes
      )
    );
  }
});