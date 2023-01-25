import React, { useContext } from 'react'
import { data2, data3 } from '../../App';

const FirstChildComp = () => {
  const fullName = useContext(data2);
     const fatherName = useContext(data3);
  return (
    <div>
    <h2>hello my name is {fullName}</h2>
    <h2>my fatherName is {fatherName}</h2>
    </div>
  )
}

export default FirstChildComp