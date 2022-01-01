import React from 'react'
import TagItem from '@/components/TagItem'
import { useGlobal } from '@/lib/global'
/**
 * 横向的标签列表
 * @param tags
 * @param currentTag
 * @returns {JSX.Element}
 * @constructor
 */
const TagList = ({ tags, currentTag }) => {
  if (!tags) {
    return <></>
  }
  const { locale } = useGlobal()
  return <ul className='flex py-1 space-x-3'>
    <li className='w-16 py-2 dark:text-gray-200 whitespace-nowrap'>{locale.COMMON.TAGS}</li>
    {tags.map(tag => {
      const selected = tag.name === currentTag
      return <TagItem key={tag.name} tag={tag} selected={selected}/>
    })}
  </ul>
}

export default TagList
