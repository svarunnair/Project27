import React from 'react'

const handleLogout=()=>{
  localStorage.clear()
  window.location.reload()
}


function Home() {
  return (
    <div><h1>Firebase react app<br/>
      <button onClick={handleLogout}>Logout</button></h1></div>
  )
}

export default Home