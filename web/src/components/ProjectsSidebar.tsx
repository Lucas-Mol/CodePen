import Link from 'next/link'

export function ProjectsSidebar() {
  return (
    <div className="absolute left-0 top-0 z-[1000] mt-[115px] h-[calc(100%-115px)] w-32 border-r-[1px] border-r-gray-100 border-opacity-20 p-1">
      <div className="m-0 flex h-full flex-col items-start justify-center gap-3 p-1">
        <div className="mb-auto flex w-full flex-col gap-y-1 py-3 pl-2">
          <Link className="pl-3" href={'/'}>
            Canva
          </Link>
          <Link className="text-xl font-bold" href={'/projects'}>
            Projects
          </Link>
        </div>
      </div>
    </div>
  )
}
