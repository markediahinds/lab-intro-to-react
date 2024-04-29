import React from 'react'
import './posts.scss'
import Post from './Post/Post'

const Posts = () => {
  return (
    <div className='posts-container'>
      <p className='posts-container__header'>Posts</p>
      <Post className='posts-container__post'/>
      <Post className='posts-container__post'/>
      <Post className='posts-container__post'/>
    </div>
  )
}

export default Posts