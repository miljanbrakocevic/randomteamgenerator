import { connect } from 'react-redux';
import { removePlayer } from "../redux/actions/playerActions";

class PlayerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: []
        };
    }

    render() {
        return (
            <div class="d-flex justify-content-center">
                <div className="d-flex justify-content-center flex-column">
                    <div className="row">
                        <h1 className="display-6">
                            {this.props.players.length ? 'Players list:' :  'No players added'}
                        </h1>
                    </div>
                    <div className="row">
                        <div className="list-group">
                            {
                                this.props.players.map((player, index) =>
                                    <a key={index} className="list-group-item list-group-item-action player-item">
                                        {player}
                                        <button
                                            onClick={() => this.props.removePlayer(index)}
                                            type="button" className="close"
                                            aria-label="Close"
                                        >
                                            <span className="text-danger" aria-hidden="true">&times;</span>
                                        </button>
                                    </a>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    players: state.player.players
});

const mapDispatchToProps = {
    removePlayer: removePlayer,
};
export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);