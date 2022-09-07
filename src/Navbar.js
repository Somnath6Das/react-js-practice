import { Link }  from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
    <h1>Mojo Blog</h1>
    <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" 
        // style={{color: "white",backgroundColor:'#0f6de9',borderRadius: '8px'}}
        >Create Blog</Link>
    </div>
</nav>
  )
}

export default Navbar