import { useRouter, type ErrorComponentProps } from '@tanstack/react-router'
import { AlertCircleIcon, RefreshCcw } from 'lucide-react'

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { cn } from '@/utilities'

type ErrorMessageProps = ErrorComponentProps &
  React.ComponentProps<typeof Alert>

export default function DefaultErrorComponent({
  className,
  ...props
}: ErrorMessageProps) {
  const router = useRouter()

  const { error, reset, info: _, ...restProps } = props

  return (
    <Alert
      {...restProps}
      variant="destructive"
      className={cn(
        'mx-auto max-w-lg has-data-[slot=alert-action]:pr-2.5',
        className,
      )}
    >
      <AlertCircleIcon />
      <AlertTitle>Failed to load this page.</AlertTitle>
      <AlertDescription>
        <pre className="w-full min-w-0 wrap-anywhere whitespace-pre-line">
          {error.message}
        </pre>
      </AlertDescription>
      <AlertAction className="static col-start-2 my-2 pr-2.5!">
        <Button
          type="button"
          variant="outline"
          className="text-foreground"
          onClick={async () => {
            await router.invalidate() // re-runs loaders
            reset() // resets the boundary in case it was a render error
          }}
        >
          <RefreshCcw />
          <span>Retry</span>
        </Button>
      </AlertAction>
    </Alert>
  )
}
