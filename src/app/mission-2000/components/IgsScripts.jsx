'use client';
import Script from 'next/script';

export default function IgsScripts() {
  return (
    <>
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
            var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = '//www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', 'GTM-MDBW9V5');
        `}
      </Script>
      <Script
        src="/mission2000/assets/jquery.min.js.download"
        strategy="beforeInteractive"
      />
      <Script
        src="/mission2000/assets/jquery-migrate.min.js.download"
        strategy="beforeInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-F6FK890WS7');
        `}
      </Script>
      <Script async src="/mission2000/assets/js" strategy="afterInteractive" />
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s){
            if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
            t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)
          }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1858959114651810', {}, {"agent": "wordpress-6.4.3-4.1.5"});
          fbq('track', 'PageView', []);
        `}
      </Script>
      <Script
        src="/mission2000/assets/core.min.js.download"
        strategy="afterInteractive"
      />
      <Script id="popup-maker-vars" strategy="afterInteractive">
        {`
          var pum_vars = {"version":"1.18.2","pm_dir_url":"","ajaxurl":"","restapi":"","rest_nonce":null,"default_theme":"16236","debug_mode":"","disable_tracking":"","home_url":"\\/","message_position":"top","core_sub_forms_enabled":"1","popups":[],"cookie_domain":"","analytics_route":"analytics","analytics_api":""};
          var pum_sub_vars = {"ajaxurl":"","message_position":"top"};
          var pum_popups = {"pum-38451":{"triggers":[],"cookies":[{"event":"on_popup_close","settings":{"name":"pum-38451","key":"","session":false,"path":"1","time":"1 month"}}],"disable_on_mobile":false,"disable_on_tablet":false,"atc_promotion":null,"explain":null,"type_section":null,"theme_id":"16236","size":"custom","responsive_min_width":"0px","responsive_max_width":"100px","custom_width":"100%","custom_height_auto":true,"custom_height":"380px","scrollable_content":false,"animation_type":"fadeAndSlide","animation_speed":"300","animation_origin":"top","open_sound":"none","custom_sound":"","location":"center top","position_top":"0","position_bottom":"0","position_left":"0","position_right":"0","position_from_trigger":false,"position_fixed":true,"overlay_disabled":true,"stackable":true,"disable_reposition":false,"zindex":"1999999999","close_button_delay":"0","fi_promotion":null,"close_on_form_submission":false,"close_on_form_submission_delay":"0","close_on_overlay_click":false,"close_on_esc_press":false,"close_on_f4_press":false,"disable_form_reopen":false,"disable_accessibility":false,"theme_slug":"default-theme","id":38451,"slug":"ultimo-series"}};
        `}
      </Script>
      <Script
        src="/mission2000/assets/site.min.js.download"
        strategy="afterInteractive"
      />
      <Script id="sage-main-js-vars" strategy="afterInteractive">
        {`
          var jsParams = {"ajaxUrl":"","restUrl":"","maxFileSize":"128"};
        `}
      </Script>
      <Script
        src="/mission2000/assets/main.js.download"
        strategy="afterInteractive"
      />
    </>
  );
}
