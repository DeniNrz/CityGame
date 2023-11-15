import { FC } from 'react'
import queryString from 'query-string'

import { Finish } from '../components/Finish'

const Victoty: FC = () => {
  const values = queryString.parse(window.location.search)
  const num = parseInt(values.num as string) || 0
  const cityName = (values.cityName as string) || ''

  return (
    <Finish
      pOne={'Поздравляем тебя с победой! '}
      pTwo={'Твой противник не вспомнил нужный город!'}
      pThee={`Всего было перечислено городов: ${num}`}
      city={cityName}
    />
  )
}

export default Victoty
