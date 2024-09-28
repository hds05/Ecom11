import './App.css';
import { Fragment } from 'react';
function Headr() {
    return (
        <Fragment>
            <div className='headr'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Ecom</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="https://www.google.com/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="https://www.headphonezone.in/?gad_source=1&gclid=Cj0KCQjwiMmwBhDmARIsABeQ7xQyhdtp2whUJGhBmw5pYznPvQVIb4cfPrRx5ttkS6FcpXj5eJn8hVMaArHkEALw_wcB">shop</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        About Us
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Messege</a></li>
                                        <li><a className="dropdown-item" href="#">Call us</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Mail Us</a></li>
                                    </ul>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                                </li> */}
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </Fragment>
    );
}
export default Headr;
