import React from 'react'
import HomeHeader from '../module/HomeHeader'
import CoursesModule from '../module/CoursesModule'
import Team from '../module/Team'

export default function Home() {
  return (
    <div>
      <HomeHeader/>
      <CoursesModule/>
      <Team/>
    </div>
  )
}
