import React from 'react'
import HeaderIcon from './HeaderIcon'
import {HomeIcon} from '@heroicons/react/solid'
import {BriefcaseIcon} from '@heroicons/react/solid'
import {DesktopComputerIcon} from '@heroicons/react/solid'
import {AtSymbolIcon} from '@heroicons/react/solid'

function Appbar(){
  return(
    <div className="sticky top-0 z-40 bg-white flex items-center shadow-md">
      {/*Left Section Header*/}
      <div className="p-3 ">
          <img width={110} src="/images/criodo.png"/>
    </div>
    {/*Right Section Header*/}
    <div className="flex flex-row-reverse justify-right flex-grow ">
      <div className="flex sm:space-x-2 lg:space-x-6">
      <HeaderIcon active Icon={HomeIcon} Title="HOME"/>
      <HeaderIcon Icon={DesktopComputerIcon}Title="SERVICES"/>
      <HeaderIcon Icon={BriefcaseIcon}Title="PORTFOLIO"/>
      <HeaderIcon Icon={AtSymbolIcon}Title="CONTACT"/>
      </div>
    </div>
    </div>
    )
}

export default Appbar