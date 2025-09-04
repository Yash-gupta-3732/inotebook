import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                <a className="nav-link active" aria-current="page"href="/">Home</a>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="/about">About</Link> */}
              </li>
            </ul>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Change Theme
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><button className='container' onClick={()=>props.changeTheme('violet')} style={{backgroundColor:'violet',border:'none',color:'white'}}>Violet Theme</button> {/*here if arrrow func is not use then props.changeTheme('violet') will immediately be executed and will not work with onclick but with arrow funct props.changeTheme('violet') will only execute when btn is clicked*/}
            </li>
            <li><button className='container' onClick={()=>props.changeTheme('indigo')} style={{backgroundColor:'indigo',border:'none',color:'white'}}>Indigo Theme</button>
            </li>
            <li><button className='container' onClick={()=>props.changeTheme('blue')} style={{backgroundColor:'blue',border:'none',color:'white'}}>Blue Theme</button>
            </li>
            <li><button className='container' onClick={()=>props.changeTheme('green')} style={{backgroundColor:'green',border:'none',color:'white'}}>Green Theme</button>
            </li>
            
          </ul>
        </li>
      </ul>
    </div>
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <input className="form-check-input mx-3" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable DarkMode</label>
        </div>
      </nav>
    </>
  )
}

export default Navbar

Navbar.propTypes = {
  title: PropTypes.string
}
Navbar.defaultProps = {
  title: 'set title'
}