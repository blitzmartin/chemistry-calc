import { Dialog } from '@/shared'
import type { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react'
import { createContext, useContext, useState } from 'react'

const DialogContext = createContext<{
  show: (content: ReactElement) => void
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  a11yAttrs: {
    'aria-haspopup': 'dialog'
    'aria-expanded': boolean
    'data-state': 'open' | 'closed'
    type: 'button'
  }
} | null>(null)

export const DialogProvider = ({ children }: { children: ReactNode }) => {
  const [dialogContent, setDialogContent] = useState<ReactElement | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleShow = (dialogContent: ReactElement) => {
    setDialogContent(dialogContent)
    setIsOpen(true)
  }

  return (
    <DialogContext.Provider
      value={{
        show: handleShow,
        isOpen,
        setIsOpen,
        a11yAttrs: {
          'aria-haspopup': 'dialog',
          'aria-expanded': isOpen,
          'data-state': isOpen ? 'open' : 'closed',
          type: 'button'
        }
      }}
    >
      <>
        {children}
        {dialogContent && (
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            {dialogContent}
          </Dialog>
        )}
      </>
    </DialogContext.Provider>
  )
}

export const useDialog = () => {
  const context = useContext(DialogContext)?.show
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider')
  }
  return context
}

export const useDialogContext = () => {
  const context = useContext(DialogContext)
  if (!context) {
    throw new Error('useDialogContext must be used within a DialogProvider')
  }
  return context
}
