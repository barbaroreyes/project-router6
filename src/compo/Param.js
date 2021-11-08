import React from 'react'
import {useParams} from 'react-router-dom'

const Param = () => {
    const params = useParams()
    const words = ['papa1','papa2','papa3']
    console.log(params,'params')
  return (
    <div>
      {words[params.first]}{params.second}
    </div>
  )
}

export default Param
