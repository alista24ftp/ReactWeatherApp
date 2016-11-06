var React = require('react');

// Stateless functional component (ie. only contain render method and nothing else,
// and doesn't keep track of any states), does exact same thing as above
var About = () => {
  return (
    <div>
      <h3>About</h3>
      <p>Welcome to the about page!</p>
    </div>
  );
};

module.exports = About;
