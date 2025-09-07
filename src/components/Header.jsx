import claude from "../assets/chef-claude-icon.png";

function Header(){

    return(
        <nav className="nav">
            <img className="nav-image" src={claude} />
            <span className="nav-text">Chef Claude</span>    
        </nav>
        
    )

}

export default Header;