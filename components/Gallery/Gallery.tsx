import { GalleryProps, galleryData } from "@/utils/data";
import { useState } from "react";

type GalleryItemProps = {
    img?: GalleryProps,
    index?: number,
    updateActiveImage?: (index: number) => void
}

const GalleryItem = ({ img }: GalleryItemProps) => {
    return (
        <div className="gallery-item-wrapper aspect-[16/9]" data-scroll-section>
            <div />
            <div className="gallery-item w-full h-full relative will-change-transform">
                <div className="gallery-item-info absolute bottom-[10%] z-10 translate-x-[-20%] text-[#dbd8d6]">
                    <h1 className="gallery-info-title leading-[6vw] font-baiJamjureeSemiBold600 text-[6vw]">{img?.title}</h1>
                    <h6 className="gallery-info-subtitle relative leading-[6vw] font-baiJamjureeRegular400 text-[6vw] text-transparent stroke-[2px] stroke-[#dbd8d6]">{img?.subtitle}</h6>
                    <p className="gallery-info-category relative leading-[24px] font-baiJamjureeMedium500 text-[24px] mt-[2vh]">{img?.category}</p>
                </div>
                <div className="gallery-item-image bg-cover bg-center origin-center w-full h-full will-change-transform scale-[1]" style={{ backgroundImage: `url(${img?.src})` }}></div>
            </div>
            <div />
        </div>
    )
}

const Gallery = () => {
    const [activeImage, setActiveImage] = useState<number>(1);

    return (
        <>
            <section className="section-wrapper gallery-wrap bg-[#d53f41] mx-[-5vw] relative">
                <div className="gallery h-[80vh] py-[10vh] w-[400%] flex flex-nowrap">
                    <div className="gallery-counter absolute top-[10%] left-[100px] z-10 mix-blend-difference leading-[16px] text-[#dbd8d6] font-baiJamjureeSemiBold600 text-[16px] inline-block">
                        <span>{activeImage}</span>
                        <span className="divider bg-white w-[6.25vw] my-[7px] mx-[10px] h-[1px] inline-block" />
                        <span>{galleryData.length}</span>
                    </div>
                    {galleryData.map((img: GalleryProps, index: number) => {
                        return (
                            <GalleryItem key={index} index={index} img={img} updateActiveImage={(index) => setActiveImage(index + 1)} />
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Gallery;