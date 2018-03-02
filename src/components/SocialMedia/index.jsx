import React from 'react'

import './socialMedia.css'

const SocialMedia = () =>
  <SocialMedia className="grid-item one-whole">
    <div className="divider margin-vertical-l"/>
    <div className="social-media-links margin-bottom-m">
      <a target="_blank" href="https://www.linkedin.com/company/scout24-group" rel="noopener noreferrer" title="Linked In" className="linkedin"> </a>
      <a target="_blank" href="https://www.xing.com/companies/scout24holdinggmbh" rel="noopener noreferrer" title="Xing" className="xing"> </a>
      <a target="_blank" href="https://twitter.com/Scout24" rel="noopener noreferrer" title="Twitter" className="twitter"> </a>
      <a target="_blank" href="https://www.youtube.com/user/scout24" rel="noopener noreferrer" title="YouTube" className="youtube"> </a>
      <a target="_blank" href="https://www.facebook.com/Scout24" rel="noopener noreferrer" title="Facebook" className="facebook"> </a>
      <a target="_blank" href="https://www.instagram.com/scout24_official/" rel="noopener noreferrer" title="Instagram" className="instagram"> </a>
    </div>
    <a className="block margin-bottom-s" target="_blank" href="http://blog.scout24.com/" rel="noopener noreferrer">Corporate Blog</a>
    <a className="block" target="_blank" href="http://techblog.scout24.com/" rel="noopener noreferrer">Tech Blog</a>
  </SocialMedia>;

export default SocialMedia;
