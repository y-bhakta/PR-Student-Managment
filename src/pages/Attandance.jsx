import React, { useEffect, useState } from 'react'
import Header from '../components/Header'

const Attandance = ({ students }) => {

    const [attandance, setAttandance] = useState([]);

    const handelSelect = (e, id) => {
        const { name, value } = e.target;
        const stu = students.find((std) => std.id === id);
        const data={[name]:value,name:stu.name,date:new Date().toLocaleDateString()};
        setAttandance([...attandance,data]);
    };
    const handelAttandance=()=>{
        students.forEach((std)=>{
            const att=attandance.find((a)=> a.name === std.name);
            if(att){
                std.attandance.push(att);
            }else{
                std.attandance=[];
            }
        });  
        localStorage.setItem('Students',JSON.stringify(students));     
    }

    console.log(students); 
    console.log(attandance);

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
                            <div className="row">
                                <div className="col-12 d-flex align-items-center justify-content-between">
                                    <h4>Mark Today's Attandance</h4>
                                    <h4>Today's Date : {new Date().toLocaleDateString()}</h4>
                                </div>
                                <div className="col-12 py-2 d-flex justify-content-end">
                                    <div>
                                        <div className="btn btn-primary" onClick={handelAttandance} >Mark</div>
                                    </div>
                                </div>
                                <div className="col-12 py-2">
                                    <table className='col-12 table table-bordered'>
                                        <thead>
                                            <tr>
                                                <th>Sr. No</th>
                                                <th>Name</th>
                                                <th>Course</th>
                                                <th>Date</th>
                                                <th>Attandance</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                students.map((std, i) => {
                                                    return (
                                                        <tr key={i + 1}>
                                                            <td>{i + 1}</td>
                                                            <td>{std.name}</td>
                                                            <td>{std.course}</td>
                                                            <td>{new Date().toLocaleDateString()}</td>
                                                            <td>
                                                                {
                                                                    std.attandance.length === 0 
                                                                    ? <select name="status" id="attStatus" onChange={(e) => handelSelect(e, std.id)} >
                                                                        <option value="Status" selected disabled >Status</option>
                                                                        <option value="Present">P</option>
                                                                        <option value="Absent">A</option>
                                                                    </select>
                                                                    : "Marked"
                                                                }
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Attandance
