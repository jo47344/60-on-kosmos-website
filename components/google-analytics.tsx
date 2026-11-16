"use client"

import Script from "next/script"

export function GoogleAnalytics() {
  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-GE9K8ZZ7RL" />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            try {
              if (localStorage.getItem('kosmos_analytics_opt_out') === '1') {
                window['ga-disable-G-GE9K8ZZ7RL'] = true;
              }
            } catch (e) {}
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GE9K8ZZ7RL', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
