import React, { memo } from 'react'

export const Textarea = (props) => {
  console.log(props.label, 'render');
  return <input type='text' {...props}/>;
}

export default memo(Textarea);