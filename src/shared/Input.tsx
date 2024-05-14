import { cn } from '@/lib/utils'
import * as React from 'react'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  hasErrors?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, hasErrors, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-9 w-full rounded-md p-2 text-sm',
          'border border-chip-border bg-background',
          'ring-offset-background placeholder:text-placeholder disabled:cursor-not-allowed disabled:opacity-50',
          'file:border-0 file:bg-transparent file:text-sm file:font-medium',
          'focus-visible:ring-2',
          hasErrors
            ? 'border border-destructive focus-visible:outline-severity-critical focus-visible:ring-severity-critical'
            : 'focus-visible:outline-ring focus-visible:ring-ring',
          className
        )}
        ref={ref}
        autoComplete={props.autoComplete ?? 'off'}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
