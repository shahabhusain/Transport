import React from 'react'
import BlogSengle2 from '../components/Blog/BlogSengle2'
import { useParams } from 'react-router-dom'

const BlogSengle = () => {
  const id = useParams().blogId
  return (
    <div>
      <BlogSengle2 id={id} />
    </div>
  )
}

export default BlogSengle