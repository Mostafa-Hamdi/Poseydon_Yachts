import Link from 'next/link'
import React from 'react'

const PaginationLinks = () => {
  return (
    <div className='pagination-yachts'>
        <Link href="/yachts" className='page-number'>Previous »</Link>
        <Link href="/yachts" className='page-number'>1</Link>
        <span className='page-number'>2</span>
        <Link href="/yachts/yachtsPart3" className='page-number'>3</Link>
        <Link href="/yachts/yachtsPart4" className='page-number'>4</Link>
        <span className='page-number'>...</span>
        <Link href="/yachts/yachtsPart5" className='page-number'>6</Link>
        <Link href="/yachts/yachtsPart3" className='page-number'>Next »</Link>
    </div>
  )
}

export default PaginationLinks