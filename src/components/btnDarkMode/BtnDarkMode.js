import { useEffect, useRef } from 'react'
import { useLocalStorage } from './../../utils/useLocalSorage'
import detectDarkMode from '../../utils/detectDarkMode'

import sun from './sun.svg'
import moon from './moon.svg'

import './style.css'


const BtnDarkMode = () => {

  const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode())

  const btnRef = useRef(null)

  //Меняем цвет темы
  useEffect(() => {
    if(darkMode === 'dark'){
      document.body.classList.add('dark')
      btnRef.current.classList.add('dark-mode-btn--active')
    } else {
      document.body.classList.remove('dark')
      btnRef.current.classList.remove('dark-mode-btn--active')
    }
  }, [darkMode])

  //Меняем тему на уровне системных настроек
  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
          const newColorScheme = event.matches ? "dark" : "light";
          setDarkMode(newColorScheme)
        });
  }, [setDarkMode])

  function setMode(){
    setDarkMode((currentValue) => {
      return currentValue === 'light' ? 'dark' : 'light'
    })
  }


  return (
    <button ref={btnRef} className="dark-mode-btn" onClick={setMode}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
    </button>
  )
}
 
export default BtnDarkMode;