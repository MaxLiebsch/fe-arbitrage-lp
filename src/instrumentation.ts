import * as Sentry from "@sentry/nextjs";
export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    Sentry.init({
      dsn: "https://7aa92ce2332a127776f8304bae60af96@o4507283007012864.ingest.de.sentry.io/4507283018022992",
    
      // Adjust this value in production, or use tracesSampler for greater control
      tracesSampleRate: 1,
    
      // Setting this option to true will print useful information to the console while you're setting up Sentry.
      debug: false,
    
      // Uncomment the line below to enable Spotlight (https://spotlightjs.com)
      // spotlight: process.env.NODE_ENV === 'development',
      
    });
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    Sentry.init({
      dsn: "https://7aa92ce2332a127776f8304bae60af96@o4507283007012864.ingest.de.sentry.io/4507283018022992",

      // Adjust this value in production, or use tracesSampler for greater control
      tracesSampleRate: 1,

      // Setting this option to true will print useful information to the console while you're setting up Sentry.
      debug: false,
    });
  }
}