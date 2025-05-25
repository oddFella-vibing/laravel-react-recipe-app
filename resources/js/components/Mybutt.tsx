import React from 'react'

interface buttonprops{
    title:String,
    handleClick: ()=>void
};

const Mybutt = ({title,handleClick}:buttonprops) => {
  return (
<button onClick={()=>{handleClick()}} className='px-10 py-3 border-1 border-white bg-blur-card rounded-full text-white hover:underline max-w-fit mx-auto'>
{title}
</button>
  )
}

export default Mybutt