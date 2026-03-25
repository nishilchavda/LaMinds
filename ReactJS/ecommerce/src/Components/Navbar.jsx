import React from 'react'

const Navbar = () => {
  return (
    <>
        <section>
            {/* desktop navbar */}
            <nav>
                {/* logo */}
                <div>
                    <img src="/logo.png" alt="logo" />
                </div>
                {/* Links */}
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Collection</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </section>
    </>
  )
}

export default Navbar