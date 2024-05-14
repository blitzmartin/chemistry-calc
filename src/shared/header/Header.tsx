import { PhMoon, PhSun } from '@/icons'
import { useColorPreference } from '@/providers/ColorPreferenceProvider'

export const Header = () => {
  const { colorScheme, setColorScheme } = useColorPreference()
  const toggleTheme = () => {
    const newTheme = colorScheme === 'light' ? 'dark' : 'light'
    setColorScheme(newTheme)
  }
  return (
    <div className="flex justify-between pr-4">
      {/*  <Navbar /> */}
      <div className="p-4">
        <button onClick={toggleTheme}>
          {colorScheme === 'light' ? (
            <PhMoon width="20px" height="20px" />
          ) : (
            <PhSun width="20px" height="20px" />
          )}
        </button>
      </div>
    </div>
  )
}
