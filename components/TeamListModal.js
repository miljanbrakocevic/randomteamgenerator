import React from 'react';
import Modal from 'react-modal';
import TeamChooser from "./TeamChooser";

import { connect } from 'react-redux';
import { updateNumberOfTeams } from "../redux/actions/teamsActions";

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width                 : '100%',
        zIndex                :  '2'
    }
};

class TeamListModal extends React.Component {
    static getInitialProps({store}) {}
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            contentErrors: [],
        }
    }

    componentDidMount() {
        Modal.setAppElement("#team-list-modal");
    }

    openModal = () =>  {
        this.setContentErrors()
        this.setState({ isModalOpen: true});
    }

     afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    closeModal = () => {
        this.setState({ isModalOpen: false});
    }

    setContentErrors() {
        const contentErrors = [];
        if (this.props.players.length <= 1) {
            contentErrors.push("You didn't add enough players.")
        }
        if (this.props.players.length < this.props.numberOfTeams) {
            contentErrors.push("Number of players must be greater then number of teams.")
        }
        console.log(this.props.numberOfTeams)
        if (this.props.numberOfTeams < 2) {
            contentErrors.push("Number of teams can not be less then 2.")
        }
        this.setState({ contentErrors})
    }

    render() {
        return (
            <div className="text-center label-distance">
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={this.openModal}
                >
                    Get your teams
                </button>
                <div id="team-list-modal" className="modal">
                    <Modal
                        isOpen={this.state.isModalOpen}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Get your teams"
                    >
                    <div className="modal-dialog modal-fullscreen" role="document">
                        <div className="modal-content d-flex justify-content-center">
                            <div className="modal-header">
                                <h5 className={`modal-title ${this.state.contentErrors === 0 ? 
                                    'text-danger' : ''
                                }`
                                }> {
                                    this.state.contentErrors.length === 0
                                    ? 'Your teams have been selected'
                                    : 'There are validation errors'
                                }
                                </h5>
                                <button type="button" onClick={this.closeModal} className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body modal-body-container">
                                {
                                    this.state.contentErrors.length === 0 ?
                                        <TeamChooser/> :
                                        <div className="alert alert-dismissible alert-warning">
                                            <p className="mb-0">
                                                {
                                                    this.state.contentErrors.map((error) =>
                                                        <span key={error}>
                                                            <span> {error}</span> <br/>
                                                        </span>
                                                    )
                                                }
                                            </p>
                                        </div>
                                }
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={this.closeModal}
                                    data-dismiss="modal">Close
                                </button>
                            </div>
                        </div>
                    </div>
                    </Modal>
                </div>
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
    updateNumberOfTeams: updateNumberOfTeams,
};
export default connect(mapStateToProps, mapDispatchToProps)(TeamListModal);