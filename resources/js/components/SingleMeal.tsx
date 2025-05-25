import React from 'react'
import { MealProps } from '@/propTypes'
import { router } from '@inertiajs/react'


const SingleMeal = ({strMeal,strMealThumb,idMeal}:MealProps) => {
  function handleSelect(){
router.get(`singleMeal/${idMeal}`);
  }
  return (
   <>
   
   <div onClick={()=>handleSelect()} className="bg-blur-card flex flex-col  rounded-3xl p-3 w-max gap-2 max-w-[250px] items-center h-[280px]">
    <img src={strMealThumb} alt="placeholder" className='rounded-t-3xl ' width={200} height={200} />
    <p className='text-wrap'>{strMeal}</p>
   </div>
   
   </>
  )
}

export default SingleMeal