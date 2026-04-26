import { useNavigate, type NotFoundRouteProps } from '@tanstack/react-router'

import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { cn } from '@/utilities'

type DefaultNotFoundComponentProps = NotFoundRouteProps &
  React.ComponentProps<'div'>

export default function DefaultNotFoundComponent({
  className,
  ...props
}: DefaultNotFoundComponentProps) {
  const navigate = useNavigate()

  const {
    isNotFound: _isNotFound,
    routeId: _routeId,
    data: _data,
    ...restProps
  } = props

  return (
    <div
      {...restProps}
      className={cn('flex flex-col items-center gap-8', className)}
    >
      <div className="space-y-2">
        <Heading as="h1">Page Not Found</Heading>
        <p>Please check the URL and try again.</p>
      </div>

      <img src="/not-found.svg" alt="" className="mx-auto max-w-1/2" />

      <Button
        type="button"
        className="mx-auto block"
        variant="outline"
        onClick={() => {
          void navigate({
            to: '/',
            replace: true,
          })
        }}
      >
        Go back home
      </Button>
    </div>
  )
}
