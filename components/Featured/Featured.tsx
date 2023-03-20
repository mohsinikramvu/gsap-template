// import firstImage from "../../public/featured/frida-lannerstrom-PgQwv3E-kCo-unsplash.jpg"
// import secondImage from "../../public/featured/sayan-nath-JiDMkpDM3BY-unsplash.jpg"
import Image from "next/image"

const Featured = () => {
    return (
        <>
            <section className="featured-section items-center" data-scroll-section>
                <div className="featured-row-layout grid gap-[10px]">
                    <h6 className="text-[22px] uppercase font-500">green</h6>
                    <img src="/featured/frida-lannerstrom-PgQwv3E-kCo-unsplash.jpg" alt="featured image 1" className="w-full object-cover h-[60vh]" data-scroll />
                </div>
                <div className="featured-column-layout grid gap-[10px] items-end">
                    <h6 className="text-[22px] uppercase font-500 translate-x-[100%] -rotate-90 origin-bottom-left justify-self-end">lily</h6>
                    <img src="/featured/sayan-nath-JiDMkpDM3BY-unsplash.jpg" alt="featured image 2" className="w-full object-cover h-[85vh]" data-scroll />
                </div>
            </section>
        </>
    )
}

export default Featured;