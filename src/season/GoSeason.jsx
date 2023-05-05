import React from 'react'
import * as st from './StSeason'
import spring from '../image/spring.png'
import summer from '../image/summer.png'
import fall from '../image/fall.png'
import winter from '../image/winter.png'
import { useNavigate } from 'react-router-dom'

function GoSeason() {

  let navigate = useNavigate()

  return (
      <st.Background>
        <st.AllSeasonBox>
          <st.SeasonBox season="봄" style={{ backgroundImage: 'url(' + spring + ')' }}>
            <p className='SeasonBoxp'>봄</p>
          </st.SeasonBox>
          <st.SeasonBox season="여름" style={{ backgroundImage: 'url(' + summer + ')' }}>
            <p className='SeasonBoxp'>여름</p>
          </st.SeasonBox>
          <st.SeasonBox season="가을" style={{ backgroundImage: 'url(' + fall + ')' }}>
            <p className='SeasonBoxp'>가을</p>
          </st.SeasonBox>
          <st.SeasonBox season="겨울" style={{ backgroundImage: 'url(' + winter + ')' }}>
            <p className='SeasonBoxp'>겨울</p>
          </st.SeasonBox>
        </st.AllSeasonBox>
      </st.Background>
  )
}

export default GoSeason