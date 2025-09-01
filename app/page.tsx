import Image from 'next/image';
import {AnimatedSection} from '@/components/animated-section';
import {BentoSection} from '@/components/bento';
import Features04Page from '@/components/features';
import {Hero} from '@/components/hero';

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pb-0">
      <div className="relative z-10">
        <main className="mx-auto relative">
          <Hero />
          {/* Dashboard Preview Wrapper */}
          <div className="absolute bottom-[-400px] md:bottom-[0px] left-1/2 transform -translate-x-1/2 z-30">
            <AnimatedSection>
              <div className="w-[calc(100vw-32px)] md:w-[1160px]">
                <div className="bg-primary/10 rounded-2xl p-2 shadow-2xl">
                  <Image
                    src="/banner.jpg"
                    alt="Dashboard preview"
                    width={1160}
                    height={700}
                    unoptimized
                    className="object-cover rounded-xl shadow-lg w-[1160px] h-[700px]"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </main>
        <AnimatedSection
          id="features-section"
          className="relative z-10 max-w-[1320px] mx-auto px-6 mt-[411px] md:mt-0"
          delay={0.2}
        >
          <BentoSection />
        </AnimatedSection>
        <AnimatedSection
          id="pricing-section"
          className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-0"
          delay={0.2}
        >
          <Features04Page />
        </AnimatedSection>
        {/* <AnimatedSection
          id="testimonials-section"
          className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
          delay={0.2}
        >
          <TestimonialGridSection />
        </AnimatedSection>
        <AnimatedSection
          id="faq-section"
          className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
          delay={0.2}
        >
          <FAQSection />
        </AnimatedSection>
        <AnimatedSection
          className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
          delay={0.2}
        >
          <FooterSection />
        </AnimatedSection> */}
      </div>
    </div>
  );
}
