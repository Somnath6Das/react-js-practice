import React from 'react'

function Navbar() {
  return (
    <nav className="navbar">
    <h1>Mojo Blog</h1>
    <div className="links">
        <a href="/">Home</a>
        <a href="/create" style={{
            color: "white",
            backgroundColor:'#0f6de9',
            borderRadius: '8px'
        }}>NewBlog</a>
    </div>
</nav>
  )
}

export default Navbar