/**
 * 标签组导航条，默认隐藏仅在移动端显示
 * @param tags
 * @param currentTag
 * @returns {JSX.Element}
 * @constructor
 */
const StickyBar = ({ children }) => {
  if (!children) return <></>
  return (
    <div id='sticky-bar' className='sticky top-14 duration-500 z-10 pb-16'>
      <div className='glassmorphism absolute w-full dark:border-gray-600 border-t rounded-none md:rounded-xl shadow-xl hidden-scroll'>
          <div id='tag-container' className="pl-4 overflow-x-auto">
              { children }
          </div>
      </div>
    </div>
  )
}

export default StickyBar
