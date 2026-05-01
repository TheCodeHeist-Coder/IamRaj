import type { ReactNode } from "react"

function Skill({icon, name}: {
    icon: ReactNode,
    name: string
}) {
  return (
    <div className="hover:scale-110 transition-all duration-200">
         <span className="box flex items-center gap-2 text-lg font-normal font-main  border border-gray-500 rounded-xl px-5 py-0.5">
                        {icon} {name}
                    </span>
    </div>
  )
}

export default Skill