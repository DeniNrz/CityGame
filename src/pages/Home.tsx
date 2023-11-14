import { FC } from 'react'
import { Link } from 'react-router-dom'

const Home: FC = () => {
  return (
    <div className="py-5">
      <h1 className="font-bold flex justify-center pt-1">
        Игра в города на время
      </h1>
      <div className="border-t border-gray-300 mt-5"></div>
      <div className="text-sm p-5">
        <p className="mb-7">Цель: Назвать как можно больше реальных городов.</p>
        <ul className="list-disc px-3.5">
          <li className="mb-0.5">Запрещается повторение городов.</li>
          <li className="mb-0.5">
            Названий городов на твердый "ъ" и мягкий "Ъ" знак нет. Из-за этого
            бы пропускаем эту букву и игрок должен назвать город на букву
            стоящую перед ъ или в знаком.
          </li>
          <li className="mb-0.5">
            Каждому игроку дается 2 минуты на размышления, если спустя это время
            игрок не вводит слово он считается проигравшим
          </li>
        </ul>
      </div>
      <Link to="/game">
        <div className="mx-auto w-36 bg-gray-500 rounded-xl cursor-pointer">
          <button className="text-white ml-5 p-2">Начать игру</button>
        </div>
      </Link>
    </div>
  )
}

export default Home
