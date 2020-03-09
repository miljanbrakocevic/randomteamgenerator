import React from 'react';
import { connect } from 'react-redux';
import { addPlayer } from '../redux/actions/playerActions';

class AddPlayer extends React.Component {
    static getInitialProps({store}) {}
    constructor(props) {
        super(props);
        this.state = {
            playersName: '',
            isSuperStarSelected: false,
            shouldDisplayPopover: false
        };
    }
    setPlayersName(value) {
        this.setState({ playersName: value})
    }
    addPlayer(playersName) {
        const playersNameRaw = playersName.trim()
        if (playersNameRaw) {
            this.props.addPlayer({ playersName: playersNameRaw, isPlayerSuperStar: this.state.isSuperStarSelected })
            this.setState({ playersName: '', isSuperStarSelected: false })
        }
    }
    setSuperStarStatus = () => {
        this.setState({ isSuperStarSelected: !this.state.isSuperStarSelected })
    }
    render() {
        return (
            <div className="d-flex align-input-left justify-content-center mt-5">
                <div className="row">
                    <div className="form-group">
                        <div className="input-group mb-3">
                            <div className="superstar-container"
                                 onMouseEnter={() => this.setState({ shouldDisplayPopover: true })}
                                 onMouseLeave={() => this.setState({ shouldDisplayPopover: false })}
                            >
                                { this.state.shouldDisplayPopover ?
                                    <div className={`popover fade bs-popover-top popover-stick-to-top ${this.state.shouldDisplayPopover ? 'show': 'hide'}`} role="tooltip">
                                    <div className="arrow" />
                                    <h3 className="popover-header">Set player as Superstar</h3>
                                    <div className="popover-body">
                                        Superstar players will be splitted into different teams to make equality of the teams
                                    </div>
                                </div> : ''}
                                <i onClick={this.setSuperStarStatus} className={`icon ${this.state.isSuperStarSelected ? 'icon-star' : 'icon-star-empty'} 
                                    icon-superstar`}></i>
                            </div>
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