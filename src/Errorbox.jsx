import React, { useState } from 'react'

function Errorbox({prekshya, kattuwal}) {

  return (
    <div className='alertBox' style={{backgroundColor: kattuwal}}>
       {prekshya}
    </div>
  )
}

export default Errorbox;