import Link from 'next/link'
import React from 'react'

const PaginationLinks = () => {
  return (
    <div className='pagination-yachts'>
        <Link href="/yachts/yachtsPart2" className='page-number'>Previous »</Link>
        <Link href="/yachts" className='page-number'>1</Link>
        <Link href="/yachts/yachtsPart2" className='page-number'>2</Link>
        <span className='page-number'>3</span>
        <Link href="/yachts/yachtsPart4" className='page-number'>4</Link>
        <Link href="/yachts/yachtsPart5" className='page-number'>5</Link>
        <Link href="/yachts/yachtsPart6" className='page-number'>6</Link>
        <Link href="/yachts/yachtsPart4" className='page-number'>Next »</Link>
    </div>
  )
}

export default PaginationLinks