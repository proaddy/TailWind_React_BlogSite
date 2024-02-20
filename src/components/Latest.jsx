export default function Latest({title}) {
  return (
    <div className='flex flex-col gap-1'>
        <div className='w-[700px] h-[500px] overflow-hidden rounded-md'>
          <img className='w-full h-full object-cover' src="/blogImg/img6.jpg" alt="latest" />        
        </div>
        <span>Guide // Security</span>
        <span className='text-5xl font-[heavyFont] w-[500px]'>{title}</span>
    </div>
  )
}
