import React, { useContext } from 'react'
import { Usercontext } from '../App'

const childC = () => {

const user = useContext(Usercontext)
  return (
    <div>


        data = {user.name}
    </div>
  )
}

export default childC