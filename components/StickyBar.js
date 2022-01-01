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
    <div id='sticky-bar' className='sticky flex-grow justify-center top-14 duration-500 z-10 pb-16'>
      <div className='glassmorphism dark:border-gray-600 px-4 absolute rounded-none md:rounded-xl shadow-xl border w-full hidden-scroll'>
          <div id='tag-container' className="md:pl-3 overflow-x-auto">
              { children }
          </div>
      </div>
    </div>
  )
}

export default StickyBar
