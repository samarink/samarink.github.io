import React from "react"
import NavLink from "./NavLink"

export default function NavBar() {
  return (
    <>
      <NavLink to="/">home</NavLink>
      <NavLink to="/projects">projects</NavLink>
      <NavLink to={"/cv.pdf"} file>resume.pdf</NavLink>
    </>
  )
}
