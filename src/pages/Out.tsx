import React, { FC } from 'react'
import queryString from 'query-string'

import { Finish } from '../components/Finish'

const Out: FC = () => {
  const values = queryString.parse(window.location.search)
  const num = parseInt(values.num as string) || 0
  const cityName = (values.cityName as string) || ''

  return (
    <Finish
      pOne={'К сожалению твое время вышло!'}
      pTwo={'Твой противник победил!'}
      pThee={`Всего было перечислено городов: ${num}`}
      city={cityName}
    />
  )
}

export default Out
