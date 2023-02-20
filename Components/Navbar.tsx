import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div style={{width:"100%",backgroundColor:"rgb(131,188,255)",height:"25px" }}>
      <Link href={"/people"}>People</Link>
      <button>Dark mode</button>
    </div>
  )
}

export default Navbar