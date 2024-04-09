import Link from "next/link"

 const links=[
    {url:"/", title:"Home"},
    {url:"/about", title:"About"},
    {url:"/portfolio", title:"Portfolio"},
    {url:"/contact", title:"Contact"},
  ];


const Navbar = () => {

  return (
    <div className="h-full flex items-center justify-between px-8 sm:px-12 md:px-16 lg:px-20 xl:px-48">
      {/*LOGO */}
      <div className="">
      <Link href='/' className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
        <span className="text-white mr-1">Smail</span>
        <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">.dev</span>
      </Link>
      </div>
      {/*RESPONSIVE MENU */}
      <div>
        <button className="w-10 h-8 flex flex-col justify-between">
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
        </button>
        {/* MENU LIST */}
        <div className="">
          {links.map(link=>(
            <link href= {links.url}key={link.title}>{links.title}</link>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Navbar