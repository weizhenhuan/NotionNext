import { useImperativeHandle, useRef } from 'react'
import SearchInput from './SearchInput'
const SearchDrawer = ({ cRef }) => {
  const searchDrawer = useRef()
  const searchInputRef = useRef()
  useImperativeHandle(cRef, () => {
    return {
      show: () => {
        searchDrawer.current.classList.replace('hidden', 'flex')
        searchInputRef.current.focus()
      }
    }
  })
  const hidden = () => {
    searchDrawer.current.classList.replace('flex', 'hidden')
  }
  return (
    <>
      <div ref={searchDrawer} onClick={hidden} className="hidden animate__animated animate__fadeIn fixed w-screen h-screen glassmorphism z-50 items-center justify-center ">
        <div className="absolute top-14 w-96">
          <SearchInput cRef={searchInputRef}/>
        </div>
      </div>
    </>
  )
}

export default SearchDrawer
