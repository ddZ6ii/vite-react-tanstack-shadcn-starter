import { Loader } from '@/components/ui/loader'
import { cn } from '@/utilities'

export default function DefaultPendingComponent({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={cn(
        'absolute inset-0 grid h-full place-items-center gap-8',
        className,
      )}
    >
      <Loader />
    </div>
  )
}
