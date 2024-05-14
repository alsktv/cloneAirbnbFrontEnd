import {useState} from "react"
function HomeDetail() {

  const [name,setName] = useState("kim")
  return(
    <div>
       <h1>{name}</h1>
    </div>
  )
}

export default HomeDetail