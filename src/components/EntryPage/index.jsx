import React from 'react';

import Page from '../Page';
import SocialMedia from '../SocialMedia';
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
          <div className="grid grid-flex">
            <WorkingAtScout />
            <div className="grid-item one-whole">
              <Button/>
            </div>
            <SocialMedia/>
          </div>
        </div>
      </Page>
    );
  }
}

export default EntryPage;
