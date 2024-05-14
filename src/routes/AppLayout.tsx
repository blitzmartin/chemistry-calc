import { ColorPreferenceProvider } from '@/providers/ColorPreferenceProvider'
import { DialogProvider } from '@/providers/DialogProvider'
import { Footer } from '@/shared/footer'
import { Header } from '@/shared/header'
import { Outlet } from 'react-router'

export const AppLayout = () => {
  return (
    <ColorPreferenceProvider>
      <DialogProvider>
        <Header />
        <Outlet />
        <Footer />
      </DialogProvider>
    </ColorPreferenceProvider>
  )
}
