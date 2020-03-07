import { connect } from 'react-redux';
import { setSelectedTeams } from "../redux/actions/teamsActions";

class TeamChooser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: []
        };
    }
    componentDidMount() {
        this.getTeams()
    }
    getShuffledPlayers() {
       const shuffledPlayers =  this.props.players
        for (var i = shuffledPlayers.length - 1; i > 0; i--) {
            var rand = Math.floor(Math.random() * (i + 1));
            [shuffledPlayers[i], shuffledPlayers[rand]] = [shuffledPlayers[rand], shuffledPlayers[i]]
        }
        return shuffledPlayers
    }
    getTeams() {
     const selectedTeams = [] ;
     let teamNumber = 1;
     this.getShuffledPlayers().forEach((player, index) => {
        selectedTeams[teamNumber] = Array.isArray(selectedTeams[teamNumber]) ? selectedTeams[teamNumber] : []
        selectedTeams[teamNumber].push(index)
        if (teamNumber === this.props.numberOfTeams) {
            teamNumber = 1;
            return
        }
        teamNumber++
    })
        this.props.setSelectedTeams(selectedTeams)
    }

    render() {
        return (
            <div>
                {this.props.selectedTeams.map( (team, teamIndex) =>
                    <div key={teamIndex}>
                        <h5>Team {teamIndex} </h5>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col"> Player name:</th>
                                </tr>
                            </thead>
                            <tbody>
                            { team.map(playersIndex =>
                                <tr className="table-active" key={playersIndex}>
                                    <td>{this.props.players[playersIndex]}</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                 )
                }
            </div>
        )
    }
}
const mapStateToProps = state => ({
    numberOfTeams: state.teams.numberOfTeams,
    selectedTeams: state.teams.selectedTeams,
    players: state.player.players
});

const mapDispatchToProps = {
    setSelectedTeams: setSelectedTeams,
};
export default connect(mapStateToProps, mapDispatchToProps)(TeamChooser);