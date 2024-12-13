import { CallToAction } from '@/components/CallToAction'
import { FAQSimple } from '@/components/FAQSimple'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import Script from 'next/script'

export default function Home() {
  return (
    <> 
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <CallToAction />
        <Pricing />
        <FAQSimple />
        <Script id="chatwood">
          {`
      (function(d,t) {
        var BASE_URL="https://app.chatwoot.com";
        var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
        g.src=BASE_URL+"/packs/js/sdk.js";
        g.defer = true;
        g.async = true;
        s.parentNode.insertBefore(g,s);
        g.onload=function(){
          window.chatwootSettings = {
            hideMessageBubble: false,
            position: 'right', // This can be left or right
            locale: 'de', // Language to be set
            type: 'standard', // [standard, expanded_bubble]
          };
          window.chatwootSDK.run({
            websiteToken: 'VEsfYg2xaejGmiArkzgJpvPq',
            baseUrl: BASE_URL
          });
        }
      })(document,"script");
       `}
        </Script>
      </main>
      <Footer />
    </>
  )
}
