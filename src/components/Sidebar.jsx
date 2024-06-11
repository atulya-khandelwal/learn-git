import React from 'react'

function Sidebar() {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><a className='text-xl'><i className="fa-brands fa-square-instagram"></i>Instagram</a></li>
                    <li><a className='text-xl'><i className="fa-brands fa-linkedin"></i>Linkdin</a></li>
                    <li><a className='text-xl'><i className="fa-brands fa-facebook"></i>Facebook</a></li>
                    <li><a className='text-xl'><i className="fa-brands fa-x-twitter"></i>Twitter</a></li>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
