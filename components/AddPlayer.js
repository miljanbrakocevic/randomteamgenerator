import React from 'react';
import { connect } from 'react-redux';
import { addPlayer } from '../redux/actions/playerActions';

class AddPlayer extends React.Component {
    static getInitialProps({store}) {}
    constructor(props) {
        super(props);
        this.state = {
            playersName: ''
        };
    }
    setPlayersName(value) {
        this.setState({ playersName: value})
    }
    addPlayer(playersName) {
        const playersNameRaw = playersName.trim()
        if (playersNameRaw) {
            this.props.addPlayer(playersNameRaw)
            this.setState({ playersName: ''})
        }
    }
    render() {
        return (
            <div className="d-flex align-input-left justify-content-center mt-5">
                <div className="row">
                    <div className="form-group">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control text-center"
                                aria-label="Amount (to the nearest dollar)"
                                value={this.state.playersName}
                                placeholder="Players name"
                                onKeyPress={event =>
                                {
                                    if (event.key === 'Enter') {
                                        this.addPlayer(this.state.playersName)
                                    }
                                }
                                }
                                onChange={
                                    (event) => this.setPlayersName(event.target.value)}
                            />
                            <div className="input-group-append">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    style={ {zIndex: '0'} }
                                    onClick={() => this.addPlayer(this.state.playersName)}
                                >
                                    Add player
                                </button>
                            </div>
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
    addPlayer: addPlayer,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer);