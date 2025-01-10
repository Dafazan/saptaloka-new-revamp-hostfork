'use client'
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion
import { gsap } from "gsap"; // Import GSAP

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null); // Ref untuk kontainer
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]); // Refs untuk slides

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (containerRef.current) {
        // Ambil lebar kontainer
        const containerWidth = containerRef.current.clientWidth;

        // Tentukan arah scroll berdasarkan deltaY
        if (event.deltaY > 0) {
          // Scroll ke kanan
          containerRef.current.scrollLeft += containerWidth;
        } else {
          // Scroll ke kiri
          containerRef.current.scrollLeft -= containerWidth;
        }

        // Mencegah scroll vertikal
        event.preventDefault();
      }
    };

    // Daftarkan event listener untuk wheel
    const container = containerRef.current;

    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    // Animasi GSAP saat komponen mounted
    gsap.fromTo(slideRefs.current,
      { opacity: 0, x: 200 }, // Start with opacity 0 and slide from right (x: 200)
      { opacity: 1, x: 0, duration: 1, stagger: 0.3, ease: "power4.out" } // Animate to full opacity and slide into place
    );

    // Cleanup saat komponen unmount
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, []); // Empty dependency array agar effect hanya dijalankan sekali

  return (
    <div
      ref={containerRef} // Referensi untuk kontainer
      className="flex overflow-x-auto scroll-smooth"
      style={{ width: "100vw", height: "100vh" }} // Pastikan kontainer penuh
    >
      {/* Slide 1 */}
      <main
        ref={(el: HTMLDivElement | null) => { slideRefs.current[0] = el; }} // No return value, just assign the ref
        className="flex-none w-screen h-screen relative bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/images/banner.png)' }}
      >
        <div className="z-50 relative mx-[73px]">
          <div className="flex flex-col justify-between h-screen py-[35px]">
            <div className="flex justify-between">
              <Image
                src={'/assets/images/logo.png'}
                alt={""}
                width={1000}
                height={1000}
                objectFit="cover"
                className="w-[119px]"
              />
              <div>
                <p>MENU</p>
              </div>
            </div>

            {/* Animasi teks utama dengan Framer Motion */}
            <motion.div
              initial={{ opacity: 0, y: 50 }} // Mulai dengan opacity 0 dan posisi y sedikit turun
              animate={{ opacity: 1, y: 0 }} // Animasi ke opacity 1 dan posisi y normal
              transition={{ duration: 1 }} // Durasi animasi 1 detik
            >
              <p className="text-5xl font-bold w-7/12">ENTERPRISE RESOURCE PLANNING</p>
            </motion.div>

            <div>
              <hr />
              <div className="flex justify-between">
                <p>Lead Your Business to Digital Transformation</p>
                <p>We Develop Solution To Solve Digital Transformation</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Slide 2 */}
      <main
        ref={(el: HTMLDivElement | null) => { slideRefs.current[1] = el; }} // No return value, just assign the ref
        className="flex-none w-screen h-screen relative bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/images/banner.png)' }}
      >
        <div className="z-50 relative mx-[73px]">
          <div className="flex flex-col justify-between h-screen py-[35px]">
            <div className="flex justify-between">
              <Image
                src={'/assets/images/logo.png'}
                alt={""}
                width={1000}
                height={1000}
                objectFit="cover"
                className="w-[119px]"
              />
              <div>
                <p>MENU</p>
              </div>
            </div>
            <div>
              <p className="text-5xl font-bold w-7/12">ENTERPRISE RESOURCE PLANNING</p>
            </div>
            <div>
              <hr />
              <div className="flex justify-between">
                <p>Lead Your Business to Digital Transformation</p>
                <p>We Develop Solution To Solve Digital Transformation</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
