import React from 'react';

import Page from '../Page';
import Cover from '../Cover';
import Button from './Button';
import CoreValues from './coreValues/CoreValues';
import './entryPage.css';
import WorkingAtScout from '../sharedComponents/WorkingAtScout';

class EntryPage extends React.Component {

  render() {
    return (
      <Page cover={<Cover image="cover"
                          phrase={<p>Inspiring your best decisions.<br/>We connect people, cars and homes.</p>}
                          button={<Button/>}/>}>
        <CoreValues/>
        <h1 className="grid-item margin-top-xl title font-h2 margin-bottom-none padding-vertical-xl">Working at
          Scout</h1>
        <div className="grid-item one-whole margin-bottom-xl">
          <div className="grid grid-flex grid-align-stretch gutter-l">
            <div className="grid-item palm-one-whole two-thirds">
              <div className="foyer-img"/>
            </div>
            <div className="grid-item palm-one-whole one-third">
              <div className="grid grid-flex grid-align-stretch gutter-l">
                <div className="grid-item one-whole">
                  <div className="boat-img"/>
                </div>
                <div className="grid-item one-whole">
                  <div className="run-img"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-item one-whole">
          <div className="grid grid-flex gutter-xl">
            <WorkingAtScout />
            <div className="grid-item one-whole">
              <Button/>
            </div>
            <div className="grid-item one-whole">
              <div className="divider margin-vertical-l"/>
              <div className="social-media-links margin-bottom-m">
                <a target="_blank" href="https://www.linkedin.com/company/scout24-group" rel="noopener noreferrer" title="Linked In" className="linkedin" />
                <a target="_blank" href="https://www.xing.com/companies/scout24holdinggmbh" rel="noopener noreferrer" title="Xing" className="xing" />
                <a target="_blank" href="https://twitter.com/Scout24" rel="noopener noreferrer" title="Twitter" className="twitter" />
                <a target="_blank" href="https://www.youtube.com/user/scout24" rel="noopener noreferrer" title="YouTube" className="youtube" />
                <a target="_blank" href="https://www.facebook.com/Scout24" rel="noopener noreferrer" title="Facebook" className="facebook" />
                <a target="_blank" href="https://www.instagram.com/scout24_official/" rel="noopener noreferrer" title="Instagram" className="instagram" />
              </div>
              <a className="block margin-bottom-s" target="_blank" href="http://blog.scout24.com/" rel="noopener noreferrer">Corporate Blog</a>
              <a className="block" target="_blank" href="http://techblog.scout24.com/" rel="noopener noreferrer">Tech Blog</a>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default EntryPage;
