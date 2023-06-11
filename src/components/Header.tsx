import Image from 'next/image'

import pencilLogo from '@/app/icon.png'

export function Header() {
  return (
    <header className="flex items-center justify-center gap-3 border-b-[1px] border-b-gray-100 border-opacity-20 pb-4 pl-11 pt-2">
      <Image src={pencilLogo} alt="CodePen Logo" height={90} />
      <h1 className="font text-4xl font-extrabold text-blue-400">CodePen</h1>
    </header>
  )
}
