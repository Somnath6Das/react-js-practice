import { useState} from 'react';
import BlogList from './BlogList';

function Home() {
  const [ blogs, setBlog] = useState([
    {title: 'My new Website', body: 'It going to build with react', author: 'somnath', id: 1},
    {title: 'My already builded website', body: 'I have made with flutter', author: 'somnath', id: 2},
    {title: 'My futute website', body: 'I would love to make with typescript and nextjs', author: 'NextSom', id: 3}
  ])


  //  this is out of the box   !==
  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlog(newBlogs);
  }

  return (
    <div className="home">
    <BlogList blogs={blogs} title="All Blog" handleDelete={handleDelete}/>
    {/*this is in the box   === */}
    {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'somnath')} title="Som Blog"/> */}
    </div>
  )
}


export default Home