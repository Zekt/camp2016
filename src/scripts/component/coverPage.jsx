
var React = require('react');
var ReactDOM = require('react-dom');

var CoverPage = React.createClass({
	render: function(){
		return (
			<div className="coverPage">
				<img className="bg" src="img/background.png"/>
				<img className="grass" src="img/grass.png"/>
				<img className="bg" src="img/front.png"/>
			</div>
		);
	}
});

ReactDOM.render(
	<CoverPage />,
	document.getElementById('coverPage')
);