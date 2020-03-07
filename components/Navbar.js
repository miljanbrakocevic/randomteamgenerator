import Link from "next/link";
class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsedMode: 'collapse'
        };
    }
    setCollapsedMode =() => {
        this.setState({ collapsedMode: this.state.collapsedMode === 'collapse' ? 'show' : 'collapse'})
    }
 render() {
 return (
     <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
         <Link  href="/">
             <a className="navbar-brand">
                 <img className="football" src="/static/img/soccer-png.png"/>
                 Team Generator App
             </a>
         </Link>
         <button className="navbar-toggler show" onClick={this.setCollapsedMode} type="button"
                 aria-controls="navbarsExample03" aria-expanded="true" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
         </button>

         <div className={`navbar-collapse ${this.state.collapsedMode} `}>
             <ul className="navbar-nav ml-auto">
                 <li className="nav-item">
                     <Link href="/" >
                         <a className="nav-link"> Get your teams</a>
                     </Link>
                 </li>
                 <li className="nav-item">
                     <Link href="/about" >
                         <a className="nav-link"> About</a>
                     </Link>
                 </li>
             </ul>
         </div>
     </nav>
            )
    };
}

export default Navbar;