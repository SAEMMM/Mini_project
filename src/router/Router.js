import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Main from '../main/Main'
import Season from '../season/Season'

function Routers() {
  return (
    <Routes>
        <Route>
            {/* 계절분류 */}
            <Route path="/" element={<Season />} />
            {/* 메인(글 목록) */}
            <Route path="/main" element={<Main />} />
            {/* 로그인 */}
            <Route path="/login" />
            {/* 회원가입 */}
            <Route path="/singup" />
            {/* 글 작성 */}
            <Route path="/board" />
        </Route>
    </Routes>
  )
}

export default Routers