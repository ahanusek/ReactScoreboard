var React = require('react');
var ListItem = require('ListItem');


var ScoreboardList = React.createClass({
	render: function () {
		var {players} = this.props;
		var listGenerator = () => {
			if(players.length > 0){
				return players.map(player => {
					var {name, points, id} = player;
					return <ListItem key={id} id={id} name={name} points={points} onRemove={this.props.onRemove} onChangePoints={this.props.onChangePoints}/>;
				})
			} else {
				return <div className="empty-list">Dodaj nowego zawodnika</div>
			}
		};

		return (
			<div>
				<ul className="players-list">
					{listGenerator()}
				</ul>
			</div>
		)
	}
})


module.exports = ScoreboardList;
