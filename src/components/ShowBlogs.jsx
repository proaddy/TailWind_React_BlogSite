import Card from "./Card"
import Latest from "./Latest"

import Blogs from '../assets/data.json'

export default function ShowBlogs() {
  const topSix = Blogs.slice(1, 7);
  const latest = Blogs.slice(0, 1);
  return (
    <div className="flex place-content-between">      
        <Latest title={latest[0].title}></Latest>
        <div className="grid grid-cols-2 gap-x-16 gap">
          {
            topSix.map(blog=>{
              return (
                <Card key={blog.id} title={blog.title}></Card>
              )})
          }
        </div>
    </div>
  )
}
