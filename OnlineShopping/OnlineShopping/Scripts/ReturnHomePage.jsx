var BackButtonFunctionality = React.createClass({
  render: function() {
    return (
      <a href = "/Home/OnPageLoad">Click here to return to home page</a>
    );
  }
});
ReactDOM.render(
  <BackButtonFunctionality />,
  document.getElementById('btnBack')
);