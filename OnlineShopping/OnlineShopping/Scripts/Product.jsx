var OnlineProducts = React.createClass({
  render: function() {
    return (
      <table>
		<th>Brand</th>
		<th>Products</th>
			<tr>
				<td>Lakme</td>
				<td><a href = "/Home/LakmeProducts">Click to view products</a></td>
			</tr>
			<tr>
				<td>Maybelline</td>
				<td>
					<div><a href = "/Home/MaybellineProducts">Click to view products</a></div>
				</td>
			</tr>
			<tr>
				<td>Blue Heaven</td>
				<td><a href = "/Home/BlueHeavenProducts">Click to view products</a></td>
			</tr>
			<tr>
				<td>Oriflame</td>
				<td><a href = "/Home/OriflameProducts">Click to view products</a></td>
			</tr>
			<tr>
				<td>Amway</td>
				<td><a href = "http://www.amway.com/">Click to view products</a></td>
			</tr>
		</table>
    );
  }
});
ReactDOM.render(
  <OnlineProducts />,
  document.getElementById('body')
);

