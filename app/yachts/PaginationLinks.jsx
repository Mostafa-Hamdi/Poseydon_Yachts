import Link from 'next/link'
import React from 'react'

const PaginationLinks = () => {
  return (
    <div className='pagination-yachts'>
        <span>1</span>
        <Link href="/yachts/yachtsPart2" className='page-number'>2</Link>
        <Link href="/yachts/yachtsPart3" className='page-number'>3</Link>
        <span className='page-number'>...</span>
        <Link href="/yachts/yachtsPart6" className='page-number'>6</Link>
        <Link href="yachts/yachtsPart2" className='page-number'>Next »</Link>
    </div>
  )
}

export default PaginationLinks