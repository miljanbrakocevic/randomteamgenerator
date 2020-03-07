import Layout from  "../components/Layout";
import PlayerList from "../components/PlayerList";
import AddPlayer from "../components/AddPlayer";
import PlayerCounter from "../components/PlayerCounter";
import TeamNumberCounter from "../components/TeamNumberCounter";
import TeamListModal from "../components/TeamListModal";
import { connect } from 'react-redux';


const Index = () => (
    <Layout title="Generate random teams">
        <div>
            <div className="jumbotron">
                <h2 className="display-3 text-center">Get your teams</h2>
                <p className="lead">
                    Get your randomly generated teams, just add players and choose number of teams that you expect :)
                </p>
            </div>
            <div className="container pb-5">
            <div className="row">
                    <div className="col-xs-12 col-md-4 d-flex justify-content-center">
                        <TeamNumberCounter/>
                    </div>
                    <div className="col-xs-12 col-md-4 d-flex justify-content-center">
                        <PlayerCounter/>
                    </div>
                    <div className="col-xs-12 col-md-4 d-flex justify-content-center">
                        <TeamListModal/>
                    </div>
            </div>
                <AddPlayer/>
                <PlayerList/>
            </div>
        </div>
    </Layout>
);
export default connect()(Index);