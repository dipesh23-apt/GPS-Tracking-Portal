function HeaderIcon({Icon,Title,active}){
    return (
            <div className="group flex flex-col cursor-pointer items-center md:px-10 md:pt-2 sm:h-14 sm:pt-4
                            md:hover:bg-gray-100 rounded-xl
                            active:border-blue-500 ">
                <Icon className={`m: h-6 fill-gray-500 group-hover:fill-blue-500 mx-auto 
                                group-hover:fill-blue-500s
                                ${active && "fill-blue-500"}`}/>
                <p className="invisible md:visible group-hover:text-blue-700 text-black-500 text-xs mt-1 font-bold ">{Title}</p>
            </div>
    )
}
export default HeaderIcon