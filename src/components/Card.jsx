export default function Card({title}) {
  const imgNumber = Math.floor(Math.random()*(6 - 1 + 1))+1 
  return (
    <div className='flex flex-col gap-1'>
        <div className='w-72 h-32 overflow-hidden rounded-md'>
          <img className='w-full h-full object-cover' src={`/blogImg/img${imgNumber}.jpg`} alt="blogs" />
        </div>
        <span className='w-72'>{title}</span>
    </div>
  )
}
