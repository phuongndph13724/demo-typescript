import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../components/NavBar'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <aside>Menu Admin</aside>
      <main>
        <Outlet />
      </main>
      <footer className="bg-dark py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto">
              <div className="small m-0 text-white">
                Copyright © Your Website 2021
              </div>
            </div>
            <div className="col-auto">
              <a className="link-light small" href="#!">
                Privacy
              </a>
              <span className="text-white mx-1">·</span>
              <a className="link-light small" href="#!">
                Terms
              </a>
              <span className="text-white mx-1">·</span>
              <a className="link-light small" href="#!">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AdminLayout