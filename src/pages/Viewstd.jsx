import React, { useState } from 'react'
import Header from '../components/Header'
import '../components/StudentCard.css'
import { Link } from 'react-router-dom'

const Viewstd = ({ students,handelDelete,handelEdit }) => {
    return (
        <>
            <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
                {/* Sidebar Start */}
                <Header />
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
                                    <h4 className="mb-4">Students Directory (Att = Attandance)</h4>
                                    <div className="row">
                                        {
                                            students.map((student) => {
                                                const nameInitial = student.name ? student.name.charAt(0).toUpperCase() : 'S'
                                                return (
                                                    <div className="col-md-6 col-lg-4 mb-4">
                                                        <div className="student-card">
                                                            <div className="student-card-header">
                                                                <h5 className="student-name d-flex align-items-center justify-content-between">
                                                                    <span className='d-flex'><span className="name-icon">{nameInitial}</span>
                                                                    <span className='ms-1'>{student.name}</span></span>
                                                                    <Link to={`/attandance/${student.id}`} className='btn btn-primary'>Att</Link>
                                                                </h5>
                                                            </div>
                                                            <div className="student-card-body">
                                                                <div className="info-row">
                                                                    <span className="info-label">
                                                                        <span className="info-label-icon">📋</span>
                                                                        Roll No.
                                                                    </span>
                                                                    <span className="info-value">{student.rollNo}</span>
                                                                </div>

                                                                <div className="info-row">
                                                                    <span className="info-label">
                                                                        <span className="info-label-icon">✉️</span>
                                                                        Email
                                                                    </span>
                                                                    <span className="info-value">{student.email}</span>
                                                                </div>

                                                                <div className="info-row">
                                                                    <span className="info-label">
                                                                        <span className="info-label-icon">📱</span>
                                                                        Phone
                                                                    </span>
                                                                    <span className="info-value">{student.phone}</span>
                                                                </div>

                                                                <div className="info-row">
                                                                    <span className="info-label">
                                                                        <span className="info-label-icon">🎓</span>
                                                                        Course
                                                                    </span>
                                                                    <span className="info-value">{student.course}</span>
                                                                </div>
                                                            </div>
                                                            <div className="student-card-footer">
                                                                <button
                                                                    className="btn-action btn-edit"
                                                                    title="Edit Student"
                                                                    onClick={()=> handelEdit(student.id)}
                                                                >
                                                                    <i className="ti ti-edit"></i>
                                                                    Edit
                                                                </button>
                                                                <button
                                                                    className="btn-action btn-delete"
                                                                    title="Delete Student"
                                                                    onClick={()=> handelDelete(student.id)}
                                                                >
                                                                    <i className="ti ti-trash"></i>
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
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

export default Viewstd