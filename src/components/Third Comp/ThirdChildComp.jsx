import React, { useContext } from 'react'

import { data, data1 } from '../../App'

const ThirdChildComp = () => {
     const name = useContext(data);
     const gender = useContext(data1);
  return (
    <div>
    <h1>hello my name is {name}</h1>
    <h1> my gender is {gender}</h1>

    </div>
  )
}

export default ThirdChildComp