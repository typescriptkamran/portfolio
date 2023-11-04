import React from 'react'

const Nav = () => {
  return (
    <header
  id="page-header"
  className="l-header id_12590 pos_fixed bg_solid shadow_none sticky"
>
  <div className="l-subheader at_top">
    <div className="l-subheader-h">
      <div className="l-subheader-cell at_left">
        <div className="w-html hidden_for_mobiles ush_html_1 header-contact">
          <div className="contact-link-wrapper contact-link-wrapper-2">
            <img
              src="https://exposureninja.com/wp-content/uploads/2016/10/uk-flag.png"
              alt="UK"
            />
            <a href="tel:+441158962348"> +44 115 896 2348 </a>
          </div>
        </div>
        <div className="w-html hidden_for_mobiles ush_html_5 header-contact">
          <div className="contact-link-wrapper contact-link-wrapper-3">
            <img
              src="https://exposureninja.com/wp-content/uploads/2016/10/us-flag.png"
              alt="UK"
            />
            <a href="tel:+18004131909"> +1 800 413 1909 </a>
          </div>
        </div>
        <div className="w-html hidden_for_mobiles ush_html_2 header-contact">
          <div className="contact-link-wrapper">
            <a href="mailto:hello@exposureninja.com">
              <i className="fas fa-envelope"></i>
              hello@exposureninja.com
            </a>
          </div>
        </div>
        <div
          className="w-search ush_search_1 header-search elm_in_header layout_fullwidth"
        >
          <a className="w-search-open" aria-label="Search" href="#"
            ><i className="fas fa-search"></i
          ></a>
          <div className="w-search-form">
            <form
              className="w-form-row for_text"
              action="https://exposureninja.com/"
              method="get"
            >
              <div className="w-form-row-field">
                <input
                  type="text"
                  name="s"
                  placeholder="Search"
                  aria-label="Search"
                  value=""
                /><input type="hidden" name="post_type[]" value="post" /><input
                  type="hidden"
                  name="post_type[]"
                  value="case_studies"
                /><input
                  type="hidden"
                  name="post_type[]"
                  value="podcasts"
                /><input type="hidden" name="post_type[]" value="jobs" /><input
                  type="hidden"
                  name="post_type[]"
                  value="popups"
                /><input type="hidden" name="post_type[]" value="news" />
              </div>
              <button
                aria-label="Close"
                className="w-search-close"
                type="button"
              ></button>
            </form>
          </div>
        </div>
      </div>
      <div className="l-subheader-cell at_center"></div>
      <div className="l-subheader-cell at_right">
        <nav
          className="w-nav hidden_for_tablets hidden_for_mobiles ush_menu_1 secondary-menu-wrapper dropdown_height m_align_left m_layout_dropdown type_desktop"
        >
          <a className="w-nav-control" aria-label="Menu" href="#"
            ><div className="w-nav-icon"><div></div></div
          ></a>
          <ul className="w-nav-list level_1 hover_simple">
            <li
              id="menu-item-210"
              className="newsletter-popup-wrapper menu-item menu-item-type-custom menu-item-object-custom w-nav-item level_1 menu-item-210"
            >
              <a className="w-nav-anchor level_1 newsletter-popup"
                ><span className="w-nav-title">Get Weekly Marketing Tips</span
                ><span className="w-nav-arrow"></span
              ></a>
            </li>
            <li className="w-nav-close"></li>
          </ul>
          <div
            className="w-nav-options hidden"
            // onClick ={return {"mobileWidth":300,"mobileBehavior":1}}
          ></div>
        </nav>
      </div>
    </div>
  </div>
  <div className="l-subheader at_middle">
    <div className="l-subheader-h">
      <div className="l-subheader-cell at_left">
        <div className="w-image ush_image_1 logo-wrapper retina-image">
          <a href="/" aria-label="Link" className="w-image-h">
            <img
              width="283"
              height="80"
              src="https://exposureninja.com/wp-content/uploads/2020/06/logo.png"
              className="attachment-full size-full"
              alt=""
              decoding="async"
              loading="lazy"
            />
          </a>
        </div>
      </div>
      <div className="l-subheader-cell at_center"></div>
      <div className="l-subheader-cell at_right">
        <nav
          className="w-nav hidden_for_tablets hidden_for_mobiles ush_menu_3 primary-menu-wrapper spread dropdown_height m_align_left m_layout_dropdown type_desktop"
        >
          <a className="w-nav-control" aria-label="Menu" href="#"
            ><div className="w-nav-icon"><div></div></div
          ></a>
          <ul className="w-nav-list level_1 hover_simple">
            <li
              id="menu-item-151"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item w-nav-item level_1 menu-item-151"
            >
              <a className="w-nav-anchor level_1" href="https://exposureninja.com/"
                ><span className="w-nav-title">Home</span
                ><span className="w-nav-arrow"></span
              ></a>
            </li>
            <li
              id="menu-item-119"
              className="has-two-columns menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children w-nav-item level_1 menu-item-119 togglable"
            >
              <a
                className="w-nav-anchor level_1"
                href="https://exposureninja.com/services/"
                ><span className="w-nav-title">Services</span
                ><span className="w-nav-arrow"></span
              ></a>
              <ul className="w-nav-list level_2">
                <li
                  id="menu-item-120"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children w-nav-item level_2 menu-item-120 togglable"
                >
                  <a
                    className="w-nav-anchor level_2"
                    href="https://exposureninja.com/services/content-marketing/"
                    ><span className="w-nav-title">Content Marketing</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                  <ul className="w-nav-list level_3" style={{width: 325}}>
                    <li
                      id="menu-item-121"
                      className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-121"
                    >
                      <a
                        className="w-nav-anchor level_3"
                        href="https://exposureninja.com/services/content-marketing/blogger-outreach/"
                        ><span className="w-nav-title">Blogger Outreach</span
                        ><span className="w-nav-arrow"></span
                      ></a>
                    </li>
                    <li
                      id="menu-item-5166"
                      className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-5166"
                    >
                      <a
                        className="w-nav-anchor level_3"
                        href="https://exposureninja.com/services/content-marketing/copywriting/"
                        ><span className="w-nav-title">Copywriting</span
                        ><span className="w-nav-arrow"></span
                      ></a>
                    </li>
                    <li
                      id="menu-item-122"
                      className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-122"
                    >
                      <a
                        className="w-nav-anchor level_3"
                        href="https://exposureninja.com/services/content-marketing/digital-pr/"
                        ><span className="w-nav-title">Digital PR</span
                        ><span className="w-nav-arrow"></span
                      ></a>
                    </li>
                    <li
                      id="menu-item-123"
                      className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-123"
                    >
                      <a
                        className="w-nav-anchor level_3"
                        href="https://exposureninja.com/services/content-marketing/influencer-marketing/"
                        ><span className="w-nav-title">Influencer Marketing</span
                        ><span className="w-nav-arrow"></span
                      ></a>
                    </li>
                    <li
                      id="menu-item-5165"
                      className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-5165"
                    >
                      <a
                        className="w-nav-anchor level_3"
                        href="https://exposureninja.com/services/content-marketing/link-building/"
                        ><span className="w-nav-title">Link Building</span
                        ><span className="w-nav-arrow"></span
                      ></a>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-136"
                  className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_2 menu-item-136"
                >
                  <a
                    className="w-nav-anchor level_2"
                    href="https://exposureninja.com/services/conversion-rate-optimisation/"
                    ><span className="w-nav-title"
                      >Conversion Rate Optimisation</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                </li>
                <li
                  id="menu-item-5145"
                  className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_2 menu-item-5145"
                >
                  <a
                    className="w-nav-anchor level_2"
                    href="https://exposureninja.com/services/email-marketing/"
                    ><span className="w-nav-title">Email Marketing</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                </li>
                <li
                  id="menu-item-125"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children w-nav-item level_2 menu-item-125 togglable"
                >
                  <a
                    className="w-nav-anchor level_2"
                    href="https://exposureninja.com/services/ppc/"
                    ><span className="w-nav-title">Pay Per Click</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                  <ul className="w-nav-list level_3" style={{width: 325}}>
                    <li
                      id="menu-item-126"
                      className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-126"
                    >
                      <a
                        className="w-nav-anchor level_3"
                        href="https://exposureninja.com/services/ppc/facebook-ads/"
                        ><span className="w-nav-title">Facebook Ads Management</span
                        ><span className="w-nav-arrow"></span
                      ></a>
                    </li>
                    <li
                      id="menu-item-127"
                      className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-127"
                    >
                      <a
                        className="w-nav-anchor level_3"
                        href="https://exposureninja.com/services/ppc/google-ads/"
                        ><span className="w-nav-title">Google Ads Management</span
                        ><span className="w-nav-arrow"></span
                      ></a>
                    </li>
                    <li
                      id="menu-item-5162"
                      className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-5162"
                    >
                      <a
                        className="w-nav-anchor level_3"
                        href="https://exposureninja.com/services/ppc/instagram-ads/"
                        ><span className="w-nav-title"
                          >Instagram Ads Management</span
                        ><span className="w-nav-arrow"></span
                      ></a>
                    </li>
                    <li
                      id="menu-item-5164"
                      className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-5164"
                    >
                      <a
                        className="w-nav-anchor level_3"
                        href="https://exposureninja.com/services/ppc/linkedin-ads/"
                        ><span className="w-nav-title">LinkedIn Ads Management</span
                        ><span className="w-nav-arrow"></span
                      ></a>
                    </li>
                    <li
                      id="menu-item-11051"
                      className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-11051"
                    >
                      <a
                        className="w-nav-anchor level_3"
                        href="https://exposureninja.com/services/ppc/microsoft-ads/"
                        ><span className="w-nav-title"
                          >Microsoft Ads Management</span
                        ><span className="w-nav-arrow"></span
                      ></a>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-128"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children w-nav-item level_2 menu-item-128 togglable"
                >
                  <a
                    className="w-nav-anchor level_2"
                    href="https://exposureninja.com/services/seo/"
                    ><span className="w-nav-title">SEO</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                  <ul className="w-nav-list level_3" style={{width: 325}}>
                    <li
                      id="menu-item-129"
                      className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-129"
                    >
                      <a
                        className="w-nav-anchor level_3"
                        href="https://exposureninja.com/services/seo/ecommerce-seo/"
                        ><span className="w-nav-title">eCommerce SEO</span
                        ><span className="w-nav-arrow"></span
                      ></a>
                    </li>
                    <li
                      id="menu-item-130"
                      className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-130"
                    >
                      <a
                        className="w-nav-anchor level_3"
                        href="https://exposureninja.com/services/seo/local-seo/"
                        ><span className="w-nav-title">Local SEO</span
                        ><span className="w-nav-arrow"></span
                      ></a>
                    </li>
                    <li
                      id="menu-item-11925"
                      className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-11925"
                    >
                      <a
                        className="w-nav-anchor level_3"
                        href="https://exposureninja.com/services/seo/shopify-seo/"
                        ><span className="w-nav-title">Shopify SEO</span
                        ><span className="w-nav-arrow"></span
                      ></a>
                    </li>
                    <li
                      id="menu-item-152"
                      className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-152"
                    >
                      <a
                        className="w-nav-anchor level_3"
                        href="https://exposureninja.com/services/seo/wordpress-seo/"
                        ><span className="w-nav-title">WordPress SEO</span
                        ><span className="w-nav-arrow"></span
                      ></a>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-134"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children w-nav-item level_2 menu-item-134 togglable"
                >
                  <a
                    className="w-nav-anchor level_2"
                    href="https://exposureninja.com/services/website-development/"
                    ><span className="w-nav-title"
                      >Website Design &amp; Development</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                  <ul className="w-nav-list level_3" style={{width: 325}}>
                    <li
                      id="menu-item-10722"
                      className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-10722"
                    >
                      <a
                        className="w-nav-anchor level_3"
                        href="https://exposureninja.com/services/website-development/branding/"
                        ><span className="w-nav-title">Branding and Design</span
                        ><span className="w-nav-arrow"></span
                      ></a>
                    </li>
                    <li
                      id="menu-item-135"
                      className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-135"
                    >
                      <a
                        className="w-nav-anchor level_3"
                        href="https://exposureninja.com/services/website-development/custom-website-design/"
                        ><span className="w-nav-title">Custom Website Design</span
                        ><span className="w-nav-arrow"></span
                      ></a>
                    </li>
                    <li
                      id="menu-item-137"
                      className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-137"
                    >
                      <a
                        className="w-nav-anchor level_3"
                        href="https://exposureninja.com/services/website-development/ecommerce-development/"
                        ><span className="w-nav-title"
                          >eCommerce Website Development</span
                        ><span className="w-nav-arrow"></span
                      ></a>
                    </li>
                    <li
                      id="menu-item-138"
                      className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-138"
                    >
                      <a
                        className="w-nav-anchor level_3"
                        href="https://exposureninja.com/services/website-development/hosting/"
                        ><span className="w-nav-title">Hosting</span
                        ><span className="w-nav-arrow"></span
                      ></a>
                    </li>
                    <li
                      id="menu-item-139"
                      className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-139"
                    >
                      <a
                        className="w-nav-anchor level_3"
                        href="https://exposureninja.com/services/website-development/lead-generation-website/"
                        ><span className="w-nav-title"
                          >Enhanced Theme-based Websites</span
                        ><span className="w-nav-arrow"></span
                      ></a>
                    </li>
                    <li
                      id="menu-item-7873"
                      className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-7873"
                    >
                      <a
                        className="w-nav-anchor level_3"
                        href="https://exposureninja.com/services/website-development/ux-design/"
                        ><span className="w-nav-title">User Experience</span
                        ><span className="w-nav-arrow"></span
                      ></a>
                    </li>
                    <li
                      id="menu-item-140"
                      className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-140"
                    >
                      <a
                        className="w-nav-anchor level_3"
                        href="https://exposureninja.com/services/website-development/wordpress-website-support/"
                        ><span className="w-nav-title">Website Support</span
                        ><span className="w-nav-arrow"></span
                      ></a>
                    </li>
                    <li
                      id="menu-item-10716"
                      className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-10716"
                    >
                      <a
                        className="w-nav-anchor level_3"
                        href="https://exposureninja.com/services/website-development/website-fixes/"
                        ><span className="w-nav-title">Website Fixes</span
                        ><span className="w-nav-arrow"></span
                      ></a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li
              id="menu-item-10578"
              className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_1 menu-item-10578"
            >
              <a
                className="w-nav-anchor level_1"
                href="https://exposureninja.com/case-studies/"
                ><span className="w-nav-title">Case Studies</span
                ><span className="w-nav-arrow"></span
              ></a>
            </li>
            <li
              id="menu-item-141"
              className="has-two-columns guide-ancestor-item training-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children w-nav-item level_1 menu-item-141 togglable"
            >
              <a
                className="w-nav-anchor level_1"
                href="https://exposureninja.com/training/"
                ><span className="w-nav-title">Training</span
                ><span className="w-nav-arrow"></span
              ></a>
              <ul className="w-nav-list level_2">
                <li
                  id="menu-item-147"
                  className="guide-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children w-nav-item level_2 menu-item-147 togglable"
                >
                  <a
                    className="w-nav-anchor level_2"
                    href="https://exposureninja.com/training/guides/"
                    ><span className="w-nav-title">Guides</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                  <ul className="w-nav-list level_3" style={{width: 285}}>
                    <li
                      id="menu-item-1432"
                      className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-1432"
                    >
                      <a
                        className="w-nav-anchor level_3"
                        href="https://exposureninja.com/training/guides/content-marketing/"
                        ><span className="w-nav-title">Content Marketing</span
                        ><span className="w-nav-arrow"></span
                      ></a>
                    </li>
                    <li
                      id="menu-item-1433"
                      className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-1433"
                    >
                      <a
                        className="w-nav-anchor level_3"
                        href="https://exposureninja.com/training/guides/digital-marketing/"
                        ><span className="w-nav-title">Digital Marketing</span
                        ><span className="w-nav-arrow"></span
                      ></a>
                    </li>
                    <li
                      id="menu-item-1434"
                      className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-1434"
                    >
                      <a
                        className="w-nav-anchor level_3"
                        href="https://exposureninja.com/training/guides/ppc/"
                        ><span className="w-nav-title">PPC</span
                        ><span className="w-nav-arrow"></span
                      ></a>
                    </li>
                    <li
                      id="menu-item-1435"
                      className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-1435"
                    >
                      <a
                        className="w-nav-anchor level_3"
                        href="https://exposureninja.com/training/guides/seo/"
                        ><span className="w-nav-title">SEO</span
                        ><span className="w-nav-arrow"></span
                      ></a>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-145"
                  className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_2 menu-item-145"
                >
                  <a
                    className="w-nav-anchor level_2"
                    href="https://exposureninja.com/training/books/"
                    ><span className="w-nav-title">Our Books</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                </li>
                <li
                  id="menu-item-142"
                  className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_2 menu-item-142"
                >
                  <a
                    className="w-nav-anchor level_2"
                    href="https://exposureninja.com/training/webinars/"
                    ><span className="w-nav-title">Live Streams and Webinars</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                </li>
              </ul>
            </li>
            <li
              id="menu-item-146"
              className="podcast-menu-item menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_1 menu-item-146"
            >
              <a
                className="w-nav-anchor level_1"
                href="https://exposureninja.com/podcast/"
                ><span className="w-nav-title">Podcast</span
                ><span className="w-nav-arrow"></span
              ></a>
            </li>
            <li
              id="menu-item-154"
              className="blog-menu-item menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_1 menu-item-154"
            >
              <a
                className="w-nav-anchor level_1"
                href="https://exposureninja.com/blog/"
                ><span className="w-nav-title">Blog</span
                ><span className="w-nav-arrow"></span
              ></a>
            </li>
            <li
              id="menu-item-12504"
              className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_1 menu-item-12504"
            >
              <a
                className="w-nav-anchor level_1"
                href="https://exposureninja.com/contact/"
                ><span className="w-nav-title">Contact</span
                ><span className="w-nav-arrow"></span
              ></a>
            </li>
            <li className="w-nav-close"></li>
          </ul>
          <div
            className="w-nav-options hidden"
            // onClick='return {"mobileWidth":300,"mobileBehavior":1}'
          ></div>
        </nav>
        <a
          className="w-btn us-btn-style_6 ush_btn_1 header-featured-button"
          href="/review/"
          ><span className="w-btn-label">Request My Free Review</span></a
        >
      </div>
    </div>
  </div>
  <div className="l-subheader for_hidden hidden">
    <nav
      className="w-nav hidden_for_laptops ush_menu_2 primary-menu-wrapper spread dropdown_opacity m_align_left m_layout_panel m_effect_afl type_desktop"
    >
      <a className="w-nav-control" aria-label="Menu" href="#"
        ><div className="w-nav-icon"><div></div></div
      ></a>
      <ul className="w-nav-list level_1 hover_simple">
        <li
          id="menu-item-1006"
          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item w-nav-item level_1 menu-item-1006"
        >
          <a className="w-nav-anchor level_1" href="https://exposureninja.com/"
            ><span className="w-nav-title">Home</span
            ><span className="w-nav-arrow"></span
          ></a>
        </li>
        <li
          id="menu-item-1007"
          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children w-nav-item level_1 menu-item-1007 togglable"
        >
          <a
            className="w-nav-anchor level_1"
            href="https://exposureninja.com/services/"
            ><span className="w-nav-title">Services</span
            ><span className="w-nav-arrow"></span
          ></a>
          <ul className="w-nav-list level_2">
            <li
              id="menu-item-1008"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children w-nav-item level_2 menu-item-1008 togglable"
            >
              <a
                className="w-nav-anchor level_2"
                href="https://exposureninja.com/services/content-marketing/"
                ><span className="w-nav-title">Content Marketing</span
                ><span className="w-nav-arrow"></span
              ></a>
              <ul className="w-nav-list level_3">
                <li
                  id="menu-item-1009"
                  className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-1009"
                >
                  <a
                    className="w-nav-anchor level_3"
                    href="https://exposureninja.com/services/content-marketing/blogger-outreach/"
                    ><span className="w-nav-title">Blogger Outreach Service</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                </li>
                <li
                  id="menu-item-5157"
                  className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-5157"
                >
                  <a
                    className="w-nav-anchor level_3"
                    href="https://exposureninja.com/services/content-marketing/copywriting/"
                    ><span className="w-nav-title">Copywriting</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                </li>
                <li
                  id="menu-item-1010"
                  className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-1010"
                >
                  <a
                    className="w-nav-anchor level_3"
                    href="https://exposureninja.com/services/content-marketing/digital-pr/"
                    ><span className="w-nav-title">Digital PR</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                </li>
                <li
                  id="menu-item-1011"
                  className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-1011"
                >
                  <a
                    className="w-nav-anchor level_3"
                    href="https://exposureninja.com/services/content-marketing/influencer-marketing/"
                    ><span className="w-nav-title">Influencer Marketing</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                </li>
                <li
                  id="menu-item-5156"
                  className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-5156"
                >
                  <a
                    className="w-nav-anchor level_3"
                    href="https://exposureninja.com/services/content-marketing/link-building/"
                    ><span className="w-nav-title">Link Building</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                </li>
              </ul>
            </li>
            <li
              id="menu-item-1023"
              className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_2 menu-item-1023"
            >
              <a
                className="w-nav-anchor level_2"
                href="https://exposureninja.com/services/conversion-rate-optimisation/"
                ><span className="w-nav-title">Conversion Rate Optimisation</span
                ><span className="w-nav-arrow"></span
              ></a>
            </li>
            <li
              id="menu-item-5151"
              className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_2 menu-item-5151"
            >
              <a
                className="w-nav-anchor level_2"
                href="https://exposureninja.com/services/email-marketing/"
                ><span className="w-nav-title">Email Marketing</span
                ><span className="w-nav-arrow"></span
              ></a>
            </li>
            <li
              id="menu-item-1012"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children w-nav-item level_2 menu-item-1012 togglable"
            >
              <a
                className="w-nav-anchor level_2"
                href="https://exposureninja.com/services/ppc/"
                ><span className="w-nav-title">Pay Per Click</span
                ><span className="w-nav-arrow"></span
              ></a>
              <ul className="w-nav-list level_3">
                <li
                  id="menu-item-1013"
                  className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-1013"
                >
                  <a
                    className="w-nav-anchor level_3"
                    href="https://exposureninja.com/services/ppc/facebook-ads/"
                    ><span className="w-nav-title">Facebook Ads Management</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                </li>
                <li
                  id="menu-item-1014"
                  className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-1014"
                >
                  <a
                    className="w-nav-anchor level_3"
                    href="https://exposureninja.com/services/ppc/google-ads/"
                    ><span className="w-nav-title">Google Ads Management</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                </li>
                <li
                  id="menu-item-5153"
                  className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-5153"
                >
                  <a
                    className="w-nav-anchor level_3"
                    href="https://exposureninja.com/services/ppc/instagram-ads/"
                    ><span className="w-nav-title">Instagram Ads Management</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                </li>
                <li
                  id="menu-item-5155"
                  className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-5155"
                >
                  <a
                    className="w-nav-anchor level_3"
                    href="https://exposureninja.com/services/ppc/linkedin-ads/"
                    ><span className="w-nav-title">LinkedIn Ads Management</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                </li>
                <li
                  id="menu-item-11052"
                  className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-11052"
                >
                  <a
                    className="w-nav-anchor level_3"
                    href="https://exposureninja.com/services/ppc/microsoft-ads/"
                    ><span className="w-nav-title">Microsoft Ads Management</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                </li>
              </ul>
            </li>
            <li
              id="menu-item-1015"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children w-nav-item level_2 menu-item-1015 togglable"
            >
              <a
                className="w-nav-anchor level_2"
                href="https://exposureninja.com/services/seo/"
                ><span className="w-nav-title">SEO</span
                ><span className="w-nav-arrow"></span
              ></a>
              <ul className="w-nav-list level_3">
                <li
                  id="menu-item-1016"
                  className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-1016"
                >
                  <a
                    className="w-nav-anchor level_3"
                    href="https://exposureninja.com/services/seo/ecommerce-seo/"
                    ><span className="w-nav-title">eCommerce SEO</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                </li>
                <li
                  id="menu-item-1017"
                  className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-1017"
                >
                  <a
                    className="w-nav-anchor level_3"
                    href="https://exposureninja.com/services/seo/local-seo/"
                    ><span className="w-nav-title">Local SEO</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                </li>
                <li
                  id="menu-item-11924"
                  className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-11924"
                >
                  <a
                    className="w-nav-anchor level_3"
                    href="https://exposureninja.com/services/seo/shopify-seo/"
                    ><span className="w-nav-title">Shopify SEO</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                </li>
                <li
                  id="menu-item-1018"
                  className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-1018"
                >
                  <a
                    className="w-nav-anchor level_3"
                    href="https://exposureninja.com/services/seo/wordpress-seo/"
                    ><span className="w-nav-title">WordPress SEO</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                </li>
              </ul>
            </li>
            <li
              id="menu-item-1022"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children w-nav-item level_2 menu-item-1022 togglable"
            >
              <a
                className="w-nav-anchor level_2"
                href="https://exposureninja.com/services/website-development/"
                ><span className="w-nav-title"
                  >Website Design &amp; Development</span
                ><span className="w-nav-arrow"></span
              ></a>
              <ul className="w-nav-list level_3">
                <li
                  id="menu-item-10721"
                  className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-10721"
                >
                  <a
                    className="w-nav-anchor level_3"
                    href="https://exposureninja.com/services/website-development/branding/"
                    ><span className="w-nav-title">Branding and Design</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                </li>
                <li
                  id="menu-item-1025"
                  className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-1025"
                >
                  <a
                    className="w-nav-anchor level_3"
                    href="https://exposureninja.com/services/website-development/custom-website-design/"
                    ><span className="w-nav-title">Custom Website Design</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                </li>
                <li
                  id="menu-item-1027"
                  className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-1027"
                >
                  <a
                    className="w-nav-anchor level_3"
                    href="https://exposureninja.com/services/website-development/ecommerce-development/"
                    ><span className="w-nav-title"
                      >eCommerce Website Development</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                </li>
                <li
                  id="menu-item-1028"
                  className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-1028"
                >
                  <a
                    className="w-nav-anchor level_3"
                    href="https://exposureninja.com/services/website-development/hosting/"
                    ><span className="w-nav-title">Hosting</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                </li>
                <li
                  id="menu-item-1024"
                  className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-1024"
                >
                  <a
                    className="w-nav-anchor level_3"
                    href="https://exposureninja.com/services/website-development/lead-generation-website/"
                    ><span className="w-nav-title"
                      >Enhanced Theme-based Websites</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                </li>
                <li
                  id="menu-item-7874"
                  className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-7874"
                >
                  <a
                    className="w-nav-anchor level_3"
                    href="https://exposureninja.com/services/website-development/ux-design/"
                    ><span className="w-nav-title">User Experience</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                </li>
                <li
                  id="menu-item-1026"
                  className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-1026"
                >
                  <a
                    className="w-nav-anchor level_3"
                    href="https://exposureninja.com/services/website-development/wordpress-website-support/"
                    ><span className="w-nav-title">Website Support</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                </li>
                <li
                  id="menu-item-10717"
                  className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-10717"
                >
                  <a
                    className="w-nav-anchor level_3"
                    href="https://exposureninja.com/services/website-development/website-fixes/"
                    ><span className="w-nav-title">Website Fixes</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li
          id="menu-item-10580"
          className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_1 menu-item-10580"
        >
          <a
            className="w-nav-anchor level_1"
            href="https://exposureninja.com/case-studies/"
            ><span className="w-nav-title">Case Studies</span
            ><span className="w-nav-arrow"></span
          ></a>
        </li>
        <li
          id="menu-item-1035"
          className="guide-ancestor-item training-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children w-nav-item level_1 menu-item-1035 togglable"
        >
          <a
            className="w-nav-anchor level_1"
            href="https://exposureninja.com/training/"
            ><span className="w-nav-title">Training</span
            ><span className="w-nav-arrow"></span
          ></a>
          <ul className="w-nav-list level_2">
            <li
              id="menu-item-1037"
              className="guide-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children w-nav-item level_2 menu-item-1037 togglable"
            >
              <a
                className="w-nav-anchor level_2"
                href="https://exposureninja.com/training/guides/"
                ><span className="w-nav-title">Guides</span
                ><span className="w-nav-arrow"></span
              ></a>
              <ul className="w-nav-list level_3">
                <li
                  id="menu-item-1436"
                  className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-1436"
                >
                  <a
                    className="w-nav-anchor level_3"
                    href="https://exposureninja.com/training/guides/digital-marketing/"
                    ><span className="w-nav-title">Digital Marketing</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                </li>
                <li
                  id="menu-item-1439"
                  className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-1439"
                >
                  <a
                    className="w-nav-anchor level_3"
                    href="https://exposureninja.com/training/guides/seo/"
                    ><span className="w-nav-title">SEO Training Guide</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                </li>
                <li
                  id="menu-item-1437"
                  className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-1437"
                >
                  <a
                    className="w-nav-anchor level_3"
                    href="https://exposureninja.com/training/guides/content-marketing/"
                    ><span className="w-nav-title"
                      >Content Marketing Training Guide</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                </li>
                <li
                  id="menu-item-1438"
                  className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_3 menu-item-1438"
                >
                  <a
                    className="w-nav-anchor level_3"
                    href="https://exposureninja.com/training/guides/ppc/"
                    ><span className="w-nav-title">PPC Training Guide</span
                    ><span className="w-nav-arrow"></span
                  ></a>
                </li>
              </ul>
            </li>
            <li
              id="menu-item-1041"
              className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_2 menu-item-1041"
            >
              <a
                className="w-nav-anchor level_2"
                href="https://exposureninja.com/training/books/"
                ><span className="w-nav-title">Our Books</span
                ><span className="w-nav-arrow"></span
              ></a>
            </li>
            <li
              id="menu-item-1043"
              className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_2 menu-item-1043"
            >
              <a
                className="w-nav-anchor level_2"
                href="https://exposureninja.com/training/webinars/"
                ><span className="w-nav-title">Live Streams and Webinars</span
                ><span className="w-nav-arrow"></span
              ></a>
            </li>
          </ul>
        </li>
        <li
          id="menu-item-1044"
          className="podcast-menu-item menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_1 menu-item-1044"
        >
          <a
            className="w-nav-anchor level_1"
            href="https://exposureninja.com/podcast/"
            ><span className="w-nav-title">Podcast</span
            ><span className="w-nav-arrow"></span
          ></a>
        </li>
        <li
          id="menu-item-1045"
          className="blog-menu-item menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_1 menu-item-1045"
        >
          <a className="w-nav-anchor level_1" href="https://exposureninja.com/blog/"
            ><span className="w-nav-title">Blog</span
            ><span className="w-nav-arrow"></span
          ></a>
        </li>
        <li
          id="menu-item-1047"
          className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_1 menu-item-1047"
        >
          <a
            className="w-nav-anchor level_1"
            href="https://exposureninja.com/about/"
            ><span className="w-nav-title">About Us</span
            ><span className="w-nav-arrow"></span
          ></a>
        </li>
        <li
          id="menu-item-9374"
          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children w-nav-item level_1 menu-item-9374 togglable"
        >
          <a
            className="w-nav-anchor level_1"
            href="https://exposureninja.com/careers/"
            ><span className="w-nav-title">Careers</span
            ><span className="w-nav-arrow"></span
          ></a>
          <ul className="w-nav-list level_2">
            <li
              id="menu-item-9436"
              className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_2 menu-item-9436"
            >
              <a
                className="w-nav-anchor level_2"
                href="https://exposureninja.com/digital-marketing-mentoring/"
                ><span className="w-nav-title">Digital Marketing Mentoring</span
                ><span className="w-nav-arrow"></span
              ></a>
            </li>
          </ul>
        </li>
        <li
          id="menu-item-1049"
          className="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_1 menu-item-1049"
        >
          <a
            className="w-nav-anchor level_1"
            href="https://exposureninja.com/contact/"
            ><span className="w-nav-title">Contact</span
            ><span className="w-nav-arrow"></span
          ></a>
        </li>
        <li
          id="menu-item-1046"
          className="newsletter-popup-wrapper menu-item menu-item-type-custom menu-item-object-custom w-nav-item level_1 menu-item-1046"
        >
          <a className="w-nav-anchor level_1 newsletter-popup"
            ><span className="w-nav-title">Get Weekly Marketing Tips</span
            ><span className="w-nav-arrow"></span
          ></a>
        </li>
        <li
          id="menu-item-5609"
          className="has-button menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_1 menu-item-5609"
        >
          <a
            className="w-nav-anchor level_1 w-btn"
            href="https://exposureninja.com/review/"
            ><span className="w-nav-title">Request My Free Review</span
            ><span className="w-nav-arrow"></span
          ></a>
        </li>
        <li className="w-nav-close"></li>
      </ul>
      <div
        className="w-nav-options hidden"
        // onClick='return {"mobileWidth":992,"mobileBehavior":0}'
      ></div>
    </nav>
    <div
      className="w-html hidden_for_laptops hidden_for_tablets ush_html_4 header-contact"
    >
      <div className="contact-link-wrapper">
        <a href="tel:0115 896 2348">
          <i className="fas fa-phone fa-rotate-90"></i>
        </a>
      </div>
    </div>
    <div
      className="w-html hidden_for_laptops hidden_for_tablets ush_html_3 header-contact"
    >
      <div className="contact-link-wrapper">
        <a href="mailto:hello@exposureninja.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  </div>
</header>

  )
}

export default Nav