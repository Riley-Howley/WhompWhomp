import './Sidebar.css';

export const Sidebar = ({isOpen, setIsOpen}) => {
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }
    return (
        isOpen &&
        <aside className="aside">
            <div className="aside-wrapper">
            <div className="logo-section">
                <a className="logo" rel="home" href="#">
                <span>Nicola</span>
                </a>
                <span>Web Developer</span>
            </div>
            <div className="nav-section">
            <nav className="nav-links">
                <a onClick={toggleSidebar} href="#section-about">About</a>
                <a onClick={toggleSidebar} href="#section-about">My Skills</a>
                <a onClick={toggleSidebar} href="#section-work">Work</a>
                <a onClick={toggleSidebar} href="#section-blog">Blog</a>
                <a onClick={toggleSidebar} href="#section-contact">Contact</a>
            </nav>
            <ul className="social-icons">
                <li>
                <a href="">
                    <i className="fab fa-linkedin"></i>
                </a>
                </li>
                <li>
                <a href="">
                    <i className="fab fa-github"></i>
                </a>
                </li>
                <li>
                <a href="">
                    <i className="fas fa-rss"></i>
                </a>
                </li>
            </ul>
            </div>
            </div>
        </aside>
    )
}