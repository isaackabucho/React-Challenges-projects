import { createFileRoute } from '@tanstack/react-router'
import { BrickWall, ScrollText, Scissors, Handshake, Skull, PartyPopper } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/rock-paper-scissors')({
  component: RouteComponent,
})

type Weapon = 'rock' | 'paper' | 'scissors'
const choices = ['rock', 'paper', 'scissors'] as const

function RouteComponent() {
  const [userChoice, setUserChoice] = useState<Weapon | null>(null)
  const [computerChoice, setComputerChoice] = useState<Weapon | null>(null)
  const [gameState, setGameState] = useState<'playing' | 'done'>('playing')

  const handleUserChoice = (choice: Weapon) => {
    setUserChoice(choice)
    handleComputerChoice()
    setGameState('done')
  }

  const handleComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }

  const playAgain = () => {
    setUserChoice(null)
    setComputerChoice(null)
    setGameState('playing')
  }

  const determineWinner = () => {
    let message = <></>

    if (userChoice === computerChoice) {
      message = <>
        <Handshake size={24} />
        It's a draw!
      </>
    }
    else if (userChoice === 'rock' && computerChoice === 'scissors' ||
      userChoice === 'paper' && computerChoice === 'rock' ||
      userChoice === 'scissors' && computerChoice === 'paper') {
      message = (
        <>
          <PartyPopper size={24} />
          You win!
        </>
      )
    } else {
      message = (
        <>
          <Skull size={24} />
          You lose!
        </>
      )
    }

    return (
      <div className="flex flex-col gap-4 items-center justify-center">
        {message}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen w-screen">
      <h1 className="text-4xl font-bold">Choose your weapon</h1>
      {gameState === 'playing' ? (
        <div className="flex gap-4">
          <button
            onClick={() => handleUserChoice('rock')}
            className="text-white p-8 flex flex-col gap-4 items-center justify-center border-2 border-gray-500 rounded-md w-52 h-80"
          >
            <BrickWall size={14} />
            Rock
          </button>
          <button
            onClick={() => handleUserChoice('paper')}
            className="text-white p-8 flex flex-col gap-4 items-center justify-center border-2 border-gray-500 rounded-md w-52 h-80"
          >
            <ScrollText size={14} />
            Paper
          </button>
          <button
            onClick={() => handleUserChoice('scissors')}
            className="text-white p-8 flex flex-col gap-4 items-center justify-center border-2 border-gray-500 rounded-md w-52 h-80"
          >
            <Scissors size={14} />
            Scissors
          </button>
        </div>
      ) : (

        <div className="mt-4 flex flex-col gap-4 items-center">
          <h2 className="text-2xl font-bold">Results</h2>
          <p>You chose {userChoice}, computer chose {computerChoice}</p>
          <p>{determineWinner()}</p>
          <button className="bg-blue-500 text-white p-4 rounded-md" onClick={playAgain}>Play again</button>
        </div>
      )}
    </div>
  )
}
