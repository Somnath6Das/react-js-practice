import { Link } from "react-router-dom"
const NotFound = () => {
    return ( 
    <div className="not-found">
        <h2>Sorry</h2>
        <p>Page not found error: 404</p>
        <Link to="/">Back to home</Link>
    </div> 
    );
}
 
export default NotFound;