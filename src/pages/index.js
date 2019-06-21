import React from "react"
import { Link } from "gatsby"
import "./index.css"
import TodoInput from '../components/TodoInput'

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <div className="todo">
      <Link>
        <h1>Task Manager</h1>
       
      </Link>
      <TodoInput>

      </TodoInput>
    </div>
  </div>
)

export default IndexPage
