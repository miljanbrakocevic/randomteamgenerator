import { connect } from 'react-redux';
import { setSelectedTeams } from "../redux/actions/teamsActions";
import React from "react";

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
    getShuffledPlayers(players) {
       const shuffledPlayers =  players
        for (var i = shuffledPlayers.length - 1; i > 0; i--) {
            var rand = Math.floor(Math.random() * (i + 1));
            [shuffledPlayers[i], shuffledPlayers[rand]] = [shuffledPlayers[rand], shuffledPlayers[i]]
        }
        return shuffledPlayers
    }
    getTeams() {
     const selectedTeams = [] ;
     let teamNumber = 1;
     const allPlayers = this.props.players
     let superStarPlayersIndexes = [];
     let basicPlayersIndexes = [];

        allPlayers.forEach((player, index) => {
             if (player.isPlayerSuperStar) {
                 superStarPlayersIndexes.push(index)
             } else {
                 basicPlayersIndexes.push(index)
             }
         })
        const shuffledSuperStars = this.getShuffledPlayers(superStarPlayersIndexes)
        shuffledSuperStars.forEach((superStarPlayersIndex) => {
            this.addPlayerToTeam(selectedTeams, teamNumber, superStarPlayersIndex)
            if (teamNumber === this.props.numberOfTeams) {
                teamNumber = 1;
                return
            }
            teamNumber++
        })
    const shuffledBasicPlayers = this.getShuffledPlayers(basicPlayersIndexes)
        shuffledBasicPlayers.forEach((basicPlayersIndex) => {
            this.addPlayerToTeam(selectedTeams, teamNumber, basicPlayersIndex)
            if (teamNumber === this.props.numberOfTeams) {
                teamNumber = 1;
                return
            }
            teamNumber++
    })
        this.props.setSelectedTeams(selectedTeams)
    }
    addPlayerToTeam(selectedTeams, teamNumber, playersIndex) {
        selectedTeams[teamNumber] = Array.isArray(selectedTeams[teamNumber]) ? selectedTeams[teamNumber] : []
        selectedTeams[teamNumber].push(playersIndex)
    }

    render() {
        return (
            <div className="mh-100 overflow-x">
                {this.props.selectedTeams.map( (team, teamIndex) =>
                    <div key={teamIndex}>
                        <h5>Team {teamIndex} </h5>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col"> Player name:</th>
                                    <th scope="col"> Superstar status:</th>
                                </tr>
                            </thead>
                            <tbody>
                            { team.map(playersIndex =>
                                <tr className="table-light table-row" key={playersIndex}>
                                    <td>{this.props.players[playersIndex].playersName}</td>
                                    <td>{this.props.players[playersIndex].isPlayerSuperStar ?
                                        <i className="icon icon-star icon-superstar-small pl-5"> </i> :
                                        <span className="pl-5"> - </span> }
                                    </td>
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