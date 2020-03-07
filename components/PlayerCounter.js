import React from 'react';
import { connect } from 'react-redux';
import { addPlayer } from "../redux/actions/playerActions";

class PlayerCounter extends React.Component {
    static getInitialProps({store}) {}
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="text-center">
                <label
                    className="control-label p-1"
                    htmlFor="disabledInput"
                >
                    Number of players:
                </label>
                <input
                    className="form-control text-center"
                    type="text"
                    disabled
                    value={this.props.players.length}
                />
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
export default connect(mapStateToProps, mapDispatchToProps)(PlayerCounter);