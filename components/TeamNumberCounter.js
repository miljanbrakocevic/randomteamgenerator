import React from 'react';
import { connect } from 'react-redux';
import { updateNumberOfTeams } from "../redux/actions/teamsActions";

class TeamNumberCounter extends React.Component {
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
                    Choose number of teams:
                </label>
                <input
                    className="form-control text-center"
                    type="number" min="2"
                    value={this.props.numberOfTeams}
                    onChange={(event) => this.props.updateNumberOfTeams(event.target.value)}
                />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    numberOfTeams: state.teams.numberOfTeams
});
const mapDispatchToProps = {
    updateNumberOfTeams: updateNumberOfTeams,
};
export default connect(mapStateToProps, mapDispatchToProps)(TeamNumberCounter);