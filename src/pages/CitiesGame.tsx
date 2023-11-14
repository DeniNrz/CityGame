import React, { useState, useEffect } from 'react'
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined'

interface Message {
  content: string
  sender: 'user' | 'bot'
}

interface CitiesGameProps {
  citiesList: string[]
}

const CitiesGame: React.FC<CitiesGameProps> = ({ citiesList }) => {
  const [usedCities, setUsedCities] = useState<string[]>([])
  const [currentCity, setCurrentCity] = useState<string>('')
  const [timer, setTimer] = useState<number>(120)
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null

    if (timer > 0) {
      timeout = setTimeout(() => {
        setTimer((prevTimer) => prevTimer - 1)
      }, 1000)
    } else {
      window.location.href = '/out';
      setUsedCities([])
      setCurrentCity('')
      setTimer(120)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [timer])

  const handleCitySubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const nextCities = citiesList.filter(
      (city) =>
        city.toLowerCase()[0] === currentCity.toLowerCase().slice(-1) &&
        !usedCities.includes(city)
    )
    if (!nextCities.length) {
      window.location.href = '/out';
      setUsedCities([])
      setCurrentCity('')
      setTimer(120)
      setMessages([])
      return
    }
    const nextCity = nextCities[0]
    const userMessage: Message = { content: currentCity, sender: 'user' }
    const botMessage: Message = { content: nextCity, sender: 'bot' }
    setMessages((prevMessages) => [...prevMessages, userMessage])
    setUsedCities([...usedCities, currentCity])
    setCurrentCity('')
    setTimer(120)

    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, botMessage])
      setUsedCities([...usedCities, nextCity])
      setTimer(120)
    }, 3000)
  }

  return (
    <div>
      <div className="flex justify-between p-3">
        {messages.length > 0 ? (
          <p>
            {messages[messages.length - 1].sender === 'user'
              ? 'Сейчас очередь соперника'
              : 'Сейчас ваша очередь'}
          </p>
        ) : (
          <p>Сейчас ваша очередь</p>
        )}
        <p className="text-gray-950 font-bold">{timer}</p>
      </div>

      <div className="px-3 h-72 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index}>
            {message.sender === 'user' ? (
              <p className="text-right">
                <span className="bg-purple-700 text-white px-2 py-1 rounded-es-lg rounded-tl-lg rounded-tr-lg inline-block bg-gray-500">
                  {message.content}
                </span>
              </p>
            ) : (
              <p>
                <span className="bg-red-500 text-white px-2 py-1 rounded-tl-lg rounded-tr-lg rounded-br-lg inline-block bg-gray-500">
                  {message.content}
                </span>
              </p>
            )}
          </div>
        ))}
      </div>
      <form onSubmit={handleCitySubmit} className="p-3 relative">
        <label>
          <input
            type="text"
            placeholder="Напишите любой город, например: Где вы живете?"
            value={currentCity}
            onChange={(event) => setCurrentCity(event.target.value)}
            className="pr-10 pl-4 py-2 border border-gray-300 rounded-md w-full"
          />
        </label>
        <button
          type="submit"
          className="absolute inset-y-0 right-0 px-2 mr-5 text-gray-500"
        >
          <NearMeOutlinedIcon />
        </button>
      </form>
    </div>
  )
}

export default CitiesGame
