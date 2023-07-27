import React from 'react'
import { useField } from 'formik';

const TextField = ({ lables,...props}) => {
    const [field, meta] = useField(props);
  return (
    <div>
        <input type="text"/>
    </div>
  )
}

export default TextField;