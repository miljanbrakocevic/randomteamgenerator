import Layout from  "../components/Layout";

const About = () => (
    <Layout title="About">
        <div>
            <div className="jumbotron">
                <div className="col-md-12 text-center">
                    <h1> Random Team Generator APP</h1>
                    This is a React / Next.js App developed by <br/>
                    <a href="https://rs.linkedin.com/in/brakocevicmiljan" target="_blank">
                         Miljan Brakocevic
                    </a>

                    <div className="donate">
                        <h5> Support me to drink more beers after futsal :) </h5>
                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                            <input type="hidden" name="cmd" value="_donations" />
                            <input type="hidden" name="business" value="tebrex93@gmail.com" />
                            <input type="hidden" name="item_name" value="Donations for sport related app! :)" />
                            <input type="hidden" name="currency_code" value="USD" />
                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </Layout>
);
export default About;