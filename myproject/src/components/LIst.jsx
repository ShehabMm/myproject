import React from 'react'

function LIst({tasks}) {
  return (
    <div>
        

        {tasks.map((item, i)=>{
return (
<ul key={i}>

    <li >{item}</li>
</ul>


)

            })}


    </div>
  )
}

export default LIst