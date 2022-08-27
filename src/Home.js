import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {
  // react match json server 'http://localhost:8000/blogs'   to  'http://localhost:3000'   as a  home page  "/"   -> Home.js  and  App.js
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
    { error && <div>{ error }</div>}
    {isPending && <div>Loading...</div>}
    {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  )
}


export default Home