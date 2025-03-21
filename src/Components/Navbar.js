import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">AstroMitra AI</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">{/*HOme */}</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">{/*LInk */}</a>
                    </li>
                    <li className="nav-item dropdown">
                    {/* <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a> */}
                    {/* <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/">Action</a></li>
                        <li><a className="dropdown-item" href="/">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                    </ul> */}
                    </li>
                    {/* <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true" href='/'>Disabled</a>
                    </li> */}
                </ul>
                <div className="buttons d-flex gap-2">
                    <a href="https://linktr.ee/iamvishant02" target='about_blank'><button type="button" class="btn btn-primary"><i class="fa-solid fa-code"></i>&nbsp;Developers</button></a>
                    <a href="https://github.com/Iamvishant01/AstroMitra-AI-web" target='about_blank'><button type="button" class="btn btn-warning"><i class="fa-brands fa-github"></i>&nbsp;Source Code</button></a>
                    <a href="https://drive.google.com/file/d/1X0OeDogN_igqkxEW9i_YERm1ZX2c-JK3/view?usp=sharing" target='about_blank'><button type="button" class="btn btn-dark"><i class="fa-brands fa-android"></i>&nbsp;Android App</button></a>
                </div>
                </div>
            </div>
        </nav>
    </div>
  )
}
