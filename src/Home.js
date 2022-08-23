import { useState, useEffect } from 'react';
import BlogList from './BlogList';

function Home() {
  const [ blogs, setBlog] = useState([
    {title: 'My new Website', body: 'It going to build with react', author: 'somnath', id: 1},
    {title: 'My already builded website', body: 'I have made with flutter', author: 'somnath', id: 2},
    {title: 'My futute website', body: 'I would love to make with typescript and nextjs', author: 'NextSom', id: 3}
  ]);

  const [name, setName] = useState('okSom')


  //  this is out of the box   !==
  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlog(newBlogs);
  }

  //useEffect calls when the page rerender when the function not have arrey.
  //[] empty arrey call the function once 
  //if put any function in the arrey that function only run when that function clicked
  useEffect(()=> {
    console.log('use effect run');
    console.log(name);
  }, [name])

  return (
    <div className="home">
    <BlogList blogs={blogs} title="All Blog" handleDelete={handleDelete}/>
    <button onClick={()=> setName('goNinja')}>change name</button>
    <p>{ name }</p>
    </div>
  )
}


export default Home