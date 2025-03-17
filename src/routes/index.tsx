import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Link to="/rock-paper-scissors">Rock Paper Scissors</Link>
    </div>
  )
}
