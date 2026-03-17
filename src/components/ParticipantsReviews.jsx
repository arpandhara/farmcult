import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParticipantsReviews = () => {
  const sectionRef = useRef(null);

  const reviews = [
    {
      id: 1,
      reviewer: 'Ramyata Aseri',
      time: '2 months ago',
      content: 'I attended a 4-day hydroponics training program and found it extremely well-structured and informative. The sessions were engaging, easy to understand, and packed with practical insights...',
      image: '/icons/people img 1.png',
      stars: '/icons/5 star.png'
    },
    {
      id: 2,
      reviewer: 'Sandeep dhaliwal',
      time: '4 months ago',
      content: 'The hydroponic farming training was an incredibly valuable experience. It provided a perfect balance of theoretical knowledge and practical, hands-on skills. I learned how to set up and maintain a hydroponic system, as well...',
      image: '/icons/people img 2.png',
      stars: '/icons/5 star.png'
    },
    {
      id: 3,
      reviewer: '',
      time: '',
      content: 'My hydroponics training at Farmcult was an excellent experience. The sessions were clear, practical, and very informative, giving me hands-on exposure to modern...',
      image: '/icons/people img 3.png',
      stars: '/icons/5 star.png',
      isHorizontal: true
    }
  ];

  useGSAP(() => {
    gsap.fromTo('.reviews-heading-area',
      { y: 30, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        y: 0, autoAlpha: 1, duration: 1, ease: 'power3.out'
      }
    );

    gsap.fromTo('.review-card-item',
      { y: 40, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.reviews-content-grid', start: 'top 75%' },
        y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out'
      }
    );
  }, { scope: sectionRef });

  return (
    <section className="reviews-section w-full px-[5%] py-16 lg:py-24 bg-[#F9F9F9]" ref={sectionRef}>
      {/* Header Area */}
      <div className="reviews-heading-area flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
        <div className="max-w-[600px]">
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-normal text-text-primary leading-[1.1] mb-4">
            What Participants Say
          </h2>
          <p className="text-base text-text-secondary opacity-80">
            Real feedback from students, growers, and professionals who've trained with Farmcult.
          </p>
        </div>
        <button className="bg-[#343434] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-black transition-colors shrink-0">
          Read More Reviews
        </button>
      </div>

      {/* Content Grid */}
      <div className="reviews-content-grid grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        
        {/* Left Col: Aggregate Rating */}
        <div className="review-card-item lg:col-span-4 bg-white rounded-[24px] p-10 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col items-center justify-center text-center">
          <img src="/icons/Google__G__Logo 1.png" alt="Google" className="w-12 h-12 mb-6" />
          <h3 className="text-[2.8rem] font-bold text-text-primary leading-tight mb-2">Google</h3>
          <p className="text-lg text-text-secondary opacity-60 mb-8">average rating</p>
          <div className="text-[6rem] font-bold text-[#4285F4] leading-none mb-6">4.7</div>
          <img src="/icons/4.5star.png" alt="4.7 Stars" className="h-10 mb-8" />
          <img src="/icons/Google__G__Logo 1.png" alt="Google" className="w-12" />
        </div>

        {/* Right Col: Individual Reviews */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reviews.filter(r => !r.isHorizontal).map((review) => (
            <div key={review.id} className="review-card-item bg-white rounded-[24px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col">
              <div className="flex justify-center mb-6">
                <img src="/icons/Google__G__Logo 1.png" alt="Google" className="w-8 h-8" />
              </div>
              <div className="flex justify-center mb-6">
                <img src={review.stars} alt="Rating" className="h-5" />
              </div>
              <p className="text-[0.95rem] text-text-primary leading-[29px] opacity-90 text-center mb-8 flex-1">
                "{review.content}"
              </p>
              <div className="flex flex-col items-center mt-auto">
                <span className="font-bold text-text-primary text-base mb-1">{review.reviewer}</span>
                <span className="text-sm text-text-secondary opacity-60 mb-4">{review.time}</span>
                <img src={review.image} alt={review.reviewer} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
              </div>
            </div>
          ))}

          {/* Bottom Horizontal Card */}
          {reviews.filter(r => r.isHorizontal).map((review) => (
            <div key={review.id} className="review-card-item md:col-span-2 bg-white rounded-[24px] p-6 lg:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 flex items-center gap-6">
              <img src={review.image} alt="Reviewer" className="w-14 h-14 rounded-full flex-shrink-0" />
              <div className="flex-1">
                <p className="text-[0.95rem] text-text-primary leading-[29px] opacity-90 mb-2">
                  "{review.content}"
                </p>
                <img src={review.stars} alt="Rating" className="h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ParticipantsReviews;
