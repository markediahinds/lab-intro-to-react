import React from 'react'
import './posts.scss'
import Post from './Post/Post'

const Posts = () => {
  return (
    <div className='posts-container'>
      <p className='posts-container__header'>Posts</p>
      <div className='posts-container__post'>
      <Post />
      <Post />
      <Post />
      </div>
    </div>
  )
}

export default Posts