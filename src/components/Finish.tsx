import { FC } from 'react'
import { Link } from 'react-router-dom'

interface Text {
  pOne: string
  pTwo: string
}

export const Finish: FC<Text> = ({ pOne, pTwo }) => {
  return (
    <div className="h-96 items-center pt-7">
      <p className="flex justify-center">{pOne}</p>
      <p className="flex justify-center">{pTwo}</p>
      <p className="flex justify-center my-5 text-2xl font-bold">00:00</p>
      <p className="flex justify-center">Всего было перечислено городов: 31</p>
      <p className="flex justify-center">Очень не плохой результат!</p>
      <p className="flex justify-center mt-5">
        Последний город названный победителем
      </p>
      <p className="flex justify-center mb-5 text-2xl font-bold">Москва</p>
      <Link to="/">
        <div className="mx-auto w-40 bg-gray-500 rounded-xl cursor-pointer">
          <button className="text-white ml-1 p-2 px-3 text-sm">Начать новую игру</button>
        </div>
      </Link>
    </div>
  )
}
