import { createFileRoute } from '@tanstack/react-router'
import { useRef, useState } from 'react'

export const Route = createFileRoute('/stopwatch')({
  component: RouteComponent,
})

function RouteComponent() {
  const [timeLapse, setTimeLapse] = useState<number>(0)
  const [state, setState] = useState<'initial' | 'running' | 'paused'>('initial')

  const intervalRef = useRef<NodeJS.Timeout>(null)

  const start = () => {
    setState('running')
    intervalRef.current = setInterval(() => {
      setTimeLapse((prev) => prev + 1)
    }, 1000)
  }

  const pauseInterval = () => {
    if (intervalRef.current)
      clearInterval(intervalRef.current)
    intervalRef.current = null;
  }

  const pause = () => {
    setState('paused')
    pauseInterval()
  }

  const reset = () => {
    setState('initial')
    setTimeLapse(0)
  }

  const play = () => {
    setState('running')
    start()
    
  }

  const restart = () => {
    setTimeLapse(0)
    start()
  }

  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen w-screen">
      <p>Stop Watch</p>
      <div className='border border-gray-300 p-8 flex flex-col items-center justify-center gap-4'>
        {timeLapse} seconds lapsed

        {state === 'initial' && (
          <button className='p-4 border bg-green-400' onClick={start}>Start</button>
        )}

        {state === 'paused' && (
          <div className='flex items-center gap-2'>
            <button className='p-4 border bg-blue-400' onClick={play}>Continue</button>

            <button className='p-4 border bg-red-400' onClick={reset}>Reset</button>
            <button className='p-4 border bg-green-400 text-black' onClick={restart}>restart</button>
          </div>
        )}

        {state === 'running' && (
          <button className='p-4 border bg-amber-700' onClick={pause}>pause</button>
        )}
      </div>
    </div>
  )
}
