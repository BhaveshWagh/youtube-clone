import React from 'react'
import Button from './Button'

const ButtonsList = () => {
    const list = ["All","Gaming","Songs","Live","Soccer","Cricket","Cooking","Valentine","Chai or code","Namaste Dev"]
  return (
    <div className='flex'>
      {list.map((item)=>(
        <Button key={item} name={item}/>
      ))}
    </div>
  )
}

export default ButtonsList
