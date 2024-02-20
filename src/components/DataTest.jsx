import Blogs from '../assets/data.json'

export default function DataTest() {
  return(
    Blogs.map(blog=>{
        return (
            <div>
                {blog.title}
            </div>
    )})
  )
}
