import { createLink, type LinkComponent } from '@tanstack/react-router'

import { cn } from '@/utilities'

function BasicLinkComponent({
  ref,
  children,
  className,
  ...props
}: React.ComponentProps<'a'>) {
  return (
    <a
      ref={ref}
      {...props}
      className={cn(
        'text-sm underline-offset-4 hover:underline md:text-base xl:text-lg',
        className,
      )}
    >
      {children}
    </a>
  )
}

const CreatedLinkComponent = createLink(BasicLinkComponent)

const CustomLink: LinkComponent<typeof BasicLinkComponent> = (props) => {
  return (
    <CreatedLinkComponent
      preload={'intent'}
      activeProps={{
        className: 'font-semibold',
      }}
      inactiveProps={{
        className: 'text-muted-foreground',
      }}
      {...props}
    />
  )
}

export default CustomLink
