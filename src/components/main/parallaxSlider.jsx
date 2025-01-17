// 'use client';
// import React, { useEffect, useRef } from 'react';

// function ParallaxSlider() {
//   const slider = useRef(null);
//   const imagesArray = [
//     'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fbanner.png?alt=media&token=e5561bb9-1af4-4224-8743-0462f5f34c58',
//     'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fbanner.png?alt=media&token=e5561bb9-1af4-4224-8743-0462f5f34c58',
//     'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fbanner.png?alt=media&token=e5561bb9-1af4-4224-8743-0462f5f34c58',
//     'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fbanner.png?alt=media&token=e5561bb9-1af4-4224-8743-0462f5f34c58',
//     'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fbanner.png?alt=media&token=e5561bb9-1af4-4224-8743-0462f5f34c58',
//     'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fbanner.png?alt=media&token=e5561bb9-1af4-4224-8743-0462f5f34c58',
//   ];
//   let sliderWidth;
//   let imageWidth;
//   let current = 0;
//   let target = 0;
//   const ease = 0.06;
//   let images = [];

//   useEffect(() => {
//     images = [...document.querySelectorAll('.img')];
//     images.forEach((image, idx) => {
//       if (imagesArray[idx]) {
//         image.style.backgroundImage = `url(${imagesArray[idx]})`;
//       }
//     });

//     const lerp = (start, end, t) => {
//       return start * (1 - t) + end * t;
//     };

//     const setTransform = (el, transform) => {
//       el.style.transform = transform;
//     };

//     const init = () => {
//       sliderWidth = slider.current.getBoundingClientRect().width;
//       imageWidth = sliderWidth / images.length;
//       document.body.style.height = `${
//         sliderWidth - (window.innerWidth - window.innerHeight)
//       }px`;
//     };

//     const animateImages = () => {
//       let ratio = current / imageWidth;
//       let intersectioRatioValue;

//       images.forEach((image, idx) => {
//         intersectioRatioValue = ratio - idx * 0.7;
//         setTransform(image, `translateX(${intersectioRatioValue * 70}px)`);
//       });
//     };

//     const animate = () => {
//       current = parseFloat(lerp(current, target, ease)).toFixed(2);
//       target = window.scrollY;
//       setTransform(slider.current, `translateX(${-current}px)`);
//       animateImages();
//       requestAnimationFrame(animate);
//     };

//     init();
//     animate();
//   }, [imagesArray]);

//   return (
//     <div>
//       <main className="fixed top-[0] left-[0] w-[100%] h-[100vh] ">
//         <div ref={slider} className="absolute top-0 left-0 w-[2800px] h-[100%]">
//           <div className=" absolute top-[15%] h-[70%] w-[100%] flex justify-around">
//             {imagesArray.map((_, idx) => (
//               <div key={idx} className="relative w-[400px] h-[100%] overflow-hidden bg-white">
//                 <div className="img absolute left-[-100px] w-[600px] h-[100%] bg-cover bg-center"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default ParallaxSlider;


'use client';
import React, { useEffect, useRef } from 'react';

function ParallaxSlider() {
  const slider = useRef(null);
  const imagesArray = [
    'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fbanner.png?alt=media&token=e5561bb9-1af4-4224-8743-0462f5f34c58',
    'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fbanner.png?alt=media&token=e5561bb9-1af4-4224-8743-0462f5f34c58',
    'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fbanner.png?alt=media&token=e5561bb9-1af4-4224-8743-0462f5f34c58',
    'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fbanner.png?alt=media&token=e5561bb9-1af4-4224-8743-0462f5f34c58',
    'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fbanner.png?alt=media&token=e5561bb9-1af4-4224-8743-0462f5f34c58',
    'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fbanner.png?alt=media&token=e5561bb9-1af4-4224-8743-0462f5f34c58',
  ];

  let sliderWidth;
  let current = 0;
  let target = 0;
  const ease = 0.08;

  useEffect(() => {
    const images = [...document.querySelectorAll('.img')];

    // Set background images
    images.forEach((image, idx) => {
      image.style.backgroundImage = `url(${imagesArray[idx]})`;
    });

    const lerp = (start, end, t) => start * (1 - t) + end * t;

    const setTransform = (el, transform) => {
      el.style.transform = transform;
    };

    const init = () => {
      const totalImages = images.length;
      const viewportWidth = window.innerWidth;

      sliderWidth = totalImages * viewportWidth;
      slider.current.style.width = `${sliderWidth}px`;

      // Set body height to enable scrolling through all images
      document.body.style.height = `${sliderWidth - viewportWidth + window.innerHeight}px`;
    };

    const animateImages = () => {
      const viewportWidth = window.innerWidth;
      const ratio = current / viewportWidth;

      images.forEach((image, idx) => {
        // Adjust the offset multiplier to control the parallax effect
        const offset = (ratio - idx) * 100; // Modify multiplier for a stronger effect
        setTransform(image, `translateX(${offset}px)`);
      });
    };

    const animate = () => {
      target = window.scrollY;
      current = lerp(current, target, ease);
      setTransform(slider.current, `translateX(${-current}px)`);
      animateImages();
      requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener('resize', init);

    return () => {
      window.removeEventListener('resize', init);
    };
  }, [imagesArray]);

  return (
    <div>
      <main className="fixed top-0 left-0 w-full h-screen overflow-hidden">
        <div ref={slider} className="absolute top-0 left-0 h-screen flex">
          {imagesArray.map((_, idx) => (
            <div
              key={idx}
              className="relative flex-shrink-0 w-screen h-screen overflow-hidden"
            >
              <div className="img absolute top-0 left-0 w-full h-full bg-cover bg-center"></div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ParallaxSlider;


// 'use client';
// import React, { useEffect, useRef, useState } from 'react';

// function ParallaxSlider() {
//   const slider = useRef(null);
//   const imagesArray = [
//     'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fbanner.png?alt=media&token=e5561bb9-1af4-4224-8743-0462f5f34c58',
//     'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fbanner.png?alt=media&token=e5561bb9-1af4-4224-8743-0462f5f34c58',
//     'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fbanner.png?alt=media&token=e5561bb9-1af4-4224-8743-0462f5f34c58',
//     'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fbanner.png?alt=media&token=e5561bb9-1af4-4224-8743-0462f5f34c58',
//   ];

//   const ease = 0.08;
//   let sliderWidth, viewportWidth;
//   let current = 0;
//   let target = 0;

//   const [scrollState, setScrollState] = useState(0);

//   useEffect(() => {
//     const images = [...document.querySelectorAll('.img')];

//     // Duplicate images for seamless looping
//     const duplicatedArray = [...imagesArray, ...imagesArray];

//     images.forEach((image, idx) => {
//       if (duplicatedArray[idx]) {
//         image.style.backgroundImage = `url(${duplicatedArray[idx]})`;
//       }
//     });

//     const lerp = (start, end, t) => start * (1 - t) + end * t;

//     const setTransform = (el, transform) => {
//       el.style.transform = transform;
//     };

//     const init = () => {
//       viewportWidth = window.innerWidth;
//       sliderWidth = duplicatedArray.length * viewportWidth;

//       slider.current.style.width = `${sliderWidth}px`;

//       // Set body height to enable looping
//       document.body.style.height = `${sliderWidth / 2}px`;
//     };

//     const handleLooping = () => {
//       // Dynamically adjust `target` and `current` for smooth looping
//       const halfWidth = sliderWidth / 2;
//       if (target >= halfWidth) {
//         target -= halfWidth;
//         current -= halfWidth;
//       } else if (target < 0) {
//         target += halfWidth;
//         current += halfWidth;
//       }
//     };

//     const animateImages = () => {
//       const ratio = current / viewportWidth;

//       images.forEach((image, idx) => {
//         const offset = (ratio - idx) * 100;
//         setTransform(image, `translateX(${offset}px)`);
//       });
//     };

//     const animate = () => {
//       target = lerp(target, window.scrollY, ease);
//       current = target;
//  setScrollState(current.toFixed(2));
//       handleLooping(); // Ensure seamless looping
//       setTransform(slider.current, `translateX(${-current}px)`);
//       animateImages();
//       requestAnimationFrame(animate);
//     };

//     init();
//     animate();

//     window.addEventListener('resize', init);

//     return () => {
//       window.removeEventListener('resize', init);
//     };
//   }, [imagesArray]);

//   return (
//     <div>
//       <main className="fixed top-0 left-0 w-full h-screen overflow-hidden">
//         <p className='text-green-300'>{scrollState}</p>
//         <div ref={slider} className="absolute top-0 left-0 h-screen flex">
//           {[...imagesArray, ...imagesArray].map((_, idx) => (
//             <div
//               key={idx}
//               className="relative flex-shrink-0 w-screen h-screen overflow-hidden"
//             >
//               <div className="img absolute top-0 left-0 w-full h-full bg-cover bg-center"></div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default ParallaxSlider;
