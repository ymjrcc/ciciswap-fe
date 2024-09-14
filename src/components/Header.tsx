
'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname()
  return (
    <div className="z-20 w-4/5 h-16 bg-amber-300 px-3 fixed top-4 left-1/2 -translate-x-1/2 rounded-full border-2 border-gray-500 flex justify-between items-center">
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-white mr-4"></div>
        <div>CICI Swap</div>
      </div>
      <ul className='flex'>
        <li className={clsx('mr-4 text-xl', pathname === '/' && 'font-bold underline underline-offset-[6px]')}>
          <Link href='/'>Swap</Link>
        </li>
        <li className={clsx('mr-4 text-xl', pathname === '/pool' && 'font-bold underline underline-offset-[6px]')}>
          <Link href='/pool'>Pool</Link>
        </li>
      </ul>
      <ConnectButton />
    </div>
  )
}

export default Header