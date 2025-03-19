import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='container space-y-4 p-4'>
      <div className='flex flex-col gap-4'>
        <ul>
          <li>
            <Link to="/rock-paper-scissors">Rock Paper Scissors</Link>
          </li>
          <li>
            <Link to="/stopwatch">StopWatch</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
