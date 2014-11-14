var Song = React.createClass({displayName: 'Song',
  render: function(){
    return (
      React.createElement("div", {className: "song"}, 
        React.createElement("p", null, this.props.author), 
        React.createElement("p", null, this.props.children)
      )
    );
  }
});