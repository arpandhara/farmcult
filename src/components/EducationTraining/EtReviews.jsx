import React from 'react';

const EtReviews = () => {
  return (
    <section className="et-reviews-container py-[80px] md:py-[100px] lg:py-[140px] px-4 md:px-[68px] bg-[#FAFAFA]">
      <div className="mx-auto">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 et-reviews-header">
          <div>
            <h2 className="font-inter text-[24px] md:text-[32px] font-medium leading-[32px] md:leading-[48px] text-black mb-3">
              What Participants Say
            </h2>
            <p className="font-inter text-[16px] md:text-[15px] font-normal leading-[26px] md:leading-[29px] text-text-secondary max-w-2xl">
              Real feedback from students, growers, and professionals who've trained with Farmcult.
            </p>
          </div>
          <button className="bg-[#111827] hover:bg-black text-white px-7 py-3 rounded-full text-[1rem] font-medium transition-colors whitespace-nowrap lg:mr-4">
            Read More Reviews
          </button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 et-reviews-grid">

          {/* Left Card: Overall Rating */}
          <div className="lg:row-span-2 bg-white rounded-[16px] p-8 lg:p-12 flex flex-col items-center justify-center text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-shadow duration-300 h-full min-h-[450px]">
            <h3 className="text-[2.5rem] lg:text-[2.8rem] font-semibold text-[#5F6368] leading-none mb-2">Google</h3>
            <p className="text-[#5F6368] text-[1.1rem] mb-6">average rating</p>

            <div className="text-[#4285F4] text-[6.5rem] lg:text-[7.5rem] font-bold leading-none tracking-tight mb-4">
              4.7
            </div>

            <div className="flex gap-1.5 mb-14">
              {[1, 2, 3, 4].map((i) => (
                <svg key={i} className="w-10 h-10 lg:w-11 lg:h-11 text-[#FBBC05]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              {/* Half Star */}
              <div className="relative w-10 h-10 lg:w-11 lg:h-11">
                <svg className="w-full h-full text-[#E5E7EB]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <div className="absolute inset-0 overflow-hidden w-[70%]">
                  <svg className="w-10 h-10 lg:w-11 lg:h-11 text-[#FBBC05] absolute left-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Big G logo */}
            <svg width="48" height="48" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
            </svg>
          </div>

          {/* Middle Card */}
          <div className="bg-white rounded-[16px] p-8 lg:p-10 flex flex-col items-center text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-shadow duration-300 h-full">
            <svg width="32" height="32" viewBox="0 0 48 48" className="mb-4">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
            </svg>

            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#FBBC05]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-[#4B5563] text-[0.95rem] leading-[1.7] mb-6 flex-grow px-2">
              I attended a 4-day hydroponics training program and found it extremely well-structured and informative. The sessions were engaging, easy to understand, and packed with practical insights...
            </p>

            <div className="flex flex-col items-center mt-auto">
              <span className="font-bold text-[#111827] text-[1.05rem] mb-0.5">Ramyata Aseri</span>
              <span className="text-[#9CA3AF] text-[0.85rem] mb-5">2 months ago</span>
              <div className="relative">
                <img src="/ourSolutionCard3.jpg" alt="Ramyata" className="w-[50px] h-[50px] rounded-full object-cover shadow-sm bg-gray-200" />
                <div className="absolute -bottom-1 -right-1 bg-[#F26E21] w-[20px] h-[20px] rounded-full border-2 border-white flex justify-center items-center">
                  <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-white fill-current" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-white rounded-[16px] p-8 lg:p-10 flex flex-col items-center text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-shadow duration-300 h-full">
            <svg width="32" height="32" viewBox="0 0 48 48" className="mb-4">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
            </svg>

            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#FBBC05]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-[#4B5563] text-[0.95rem] leading-[1.7] mb-6 flex-grow px-2">
              The hydroponic farming training was an incredibly valuable experience. It provided a perfect balance of theoretical knowledge and practical, hands-on skills. I learned how to set up and maintain a hydroponic system, as well...
            </p>

            <div className="flex flex-col items-center mt-auto">
              <span className="font-bold text-[#111827] text-[1.05rem] mb-0.5">Sandeep dhaliwal</span>
              <span className="text-[#9CA3AF] text-[0.85rem] mb-5">4 months ago</span>
              <div className="relative">
                <img src="/turnkeyIncentivesImg.jpg" alt="Sandeep" className="w-[50px] h-[50px] rounded-full object-cover shadow-sm bg-gray-200" />
                <div className="absolute -bottom-1 -right-1 bg-[#F26E21] w-[20px] h-[20px] rounded-full border-2 border-white flex justify-center items-center">
                  <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-white fill-current" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Card (spanning 2 cols) */}
          <div className="lg:col-span-2 bg-white rounded-[16px] p-8 lg:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-shadow duration-300 h-full justify-center lg:justify-start">
            <img src="/ourSolutionCard2.jpg" alt="Avatar" className="w-[60px] h-[60px] rounded-full object-cover flex-shrink-0 sm:mt-1 shadow-sm bg-gray-200" />
            <div className="flex flex-col text-center sm:text-left">
              <p className="text-[#4B5563] text-[1.05rem] leading-[1.7] mb-4">
                My hydroponics training at Farmcult was an excellent experience. The sessions were clear, practical, and very informative, giving me hands-on exposure to modern...
              </p>
              <div className="flex gap-1 justify-center sm:justify-start">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#FBBC05]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EtReviews;
