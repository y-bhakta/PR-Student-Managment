import React from 'react'
import Header from '../components/Header'

const Addstd = ({std,handelChange,handelSubmit}) => {
    return (
        <>
            <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
                {/* Sidebar Start */}
                <Header/>
                {/*  Sidebar End */}
                {/*  Main wrapper */}
                <div className="body-wrapper">
                    {/*  Header Start */}
                    <header className="app-header">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <ul className="navbar-nav">
                                <li className="nav-item d-block d-xl-none">
                                    <a className="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="javascript:void(0)">
                                        <i className="ti ti-menu-2" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-icon-hover" href="javascript:void(0)">
                                        <i className="ti ti-bell-ringing" />
                                        <div className="notification bg-primary rounded-circle" />
                                    </a>
                                </li>
                            </ul>
                            <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
                                <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                                    <a href="https://adminmart.com/product/modernize-free-bootstrap-admin-dashboard/" target="_blank" className="btn btn-primary">Download Free</a>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link nav-icon-hover" href="javascript:void(0)" id="drop2" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src="../assets/images/profile/user-1.jpg" alt width={35} height={35} className="rounded-circle" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop2">
                                            <div className="message-body">
                                                <a href="javascript:void(0)" className="d-flex align-items-center gap-2 dropdown-item">
                                                    <i className="ti ti-user fs-6" />
                                                    <p className="mb-0 fs-3">My Profile</p>
                                                </a>
                                                <a href="javascript:void(0)" className="d-flex align-items-center gap-2 dropdown-item">
                                                    <i className="ti ti-mail fs-6" />
                                                    <p className="mb-0 fs-3">My Account</p>
                                                </a>
                                                <a href="javascript:void(0)" className="d-flex align-items-center gap-2 dropdown-item">
                                                    <i className="ti ti-list-check fs-6" />
                                                    <p className="mb-0 fs-3">My Task</p>
                                                </a>
                                                <a href="./authentication-login.html" className="btn btn-outline-primary mx-3 mt-2 d-block">Logout</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </header>
                    {/*  Header End */}
                    <div className="container-fluid">
                        <div className="container-fluid">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title fw-semibold mb-4">{std.id ? "Edit Student" : "Add Student"}</h5>
                                    <div className="card">
                                        <div className="card-body">
                                            <form method='post' onSubmit={handelSubmit}>
                                                <div className="mb-3">
                                                    <label htmlFor="exampleInputPassword1" className="form-label">Roll No.</label>
                                                    <input type="number" onChange={handelChange} value={std.rollNo || ''} name='rollNo' className="form-control" id="exampleInputrollno1" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                                                    <input type="text" onChange={handelChange} value={std.name || ''} name='name' className="form-control" id="exampleInputname1" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                                    <input type="email" onChange={handelChange} value={std.email || ''} name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                                                    <input type="number" onChange={handelChange} value={std.phone || ''} name='phone' className="form-control" id="exampleInputphone1" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="exampleInputPassword1" className="form-label">STD / Course</label>
                                                    <input type="text" onChange={handelChange} value={std.course || ''} name='course' className="form-control" id="exampleInputstd1" />
                                                </div>
                                                <button type="submit" className="btn btn-primary">{std.id ? "Update" : "Submit"}</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Addstd
