
import { useEffect, useState } from 'react'

function useIsScreenSize(screenSize: number = 1024) {
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  const query = `(min-width: ${screenSize}px)`
  useEffect(() => {
    setIsLargeScreen(window.matchMedia(query).matches)

    // I write this into a function for better visibility
    const handleResize = (e: any) => {
      setIsLargeScreen(e.matches)
    }

    const mediaQuery = window.matchMedia(query)

    mediaQuery.addEventListener('change', handleResize)

    // Clean up the event listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener('change', handleResize)
    }
  }, [])

  return isLargeScreen
}

export default useIsScreenSize
