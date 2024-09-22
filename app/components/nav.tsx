'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Nav() {
  const pathname = usePathname();

  return (<nav className='text-white'>
    <Link 
    href={'/'} 
    className= {`link ${pathname === '/' ? 'active' : ''} rounded-full bg-black px-5 py-1.5 font-bold`}>£</Link>
    
    <Link 
    href={'/add'} 
    className={`link ${pathname === '/add' ? 'active' : ''} rounded-full bg-black px-5 py-1.5 font-bold`}>+</Link>
  </nav>)
}