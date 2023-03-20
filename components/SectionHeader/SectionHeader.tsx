import React from "react"

type SectionHeaderProps = {
    title?: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
    return (
        <h6 className="section-header uppercase tracking-[1px] font-syncopateBold text-[#626262]">{title}</h6>
    )
}

export default SectionHeader