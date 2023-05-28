import React from 'react'
import { useSelector } from 'react-redux'
const Readallresumes = () => {
    const { user } = useSelector((state)=>state.userReducer)
  return (
    <div>
        {JSON.stringify(user)}
    </div>
  )
}

export default Readallresumes