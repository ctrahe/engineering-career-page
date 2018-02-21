import React from 'react';

import Page from '../Page';
import CoreValues from './coreValues/CoreValues';
import './entryPage.css';

class EntryPage extends React.Component {

  render() {
    return (
      <Page>
        <CoreValues/>
        <h1 className="title font-h2 margin-bottom-none padding-vertical-xl">Working at Scout</h1>
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
            <div className="grid-item palm-one-whole one-half">
              <h2 className="font-m margin-bottom-m article-title margin-top-m">Our Mission</h2>
              <p className="article-text font-lightgray font-light">Scout24 brings consumers and suppliers together on
                its online marketplaces. We make searching and finding
                simple, efficient and stress-free for both sides. We want users to have successful experiences and to
                look
                forward to using our services again. We therefore develop innovative, digital products with high
                standards. We drive innovation in real estate and automotive marketplaces, and help our consumers and
                suppliers quickly meet their goal.</p>
            </div>
            <div className="grid-item palm-one-whole one-half">
              <h2 className="font-m margin-bottom-m article-title margin-top-m">Diversity</h2>
              <p className="article-text font-lightgray font-light">Scout24 brings consumers and suppliers together on
                its online marketplaces. We make searching and finding
                simple, efficient and stress-free for both sides. We want users to have successful experiences and to
                look
                forward to using our services again. We therefore develop innovative, digital products with high
                standards. We drive innovation in real estate and automotive marketplaces, and help our consumers and
                suppliers quickly meet their goal.</p>
            </div>
            <div className="grid-item palm-one-whole one-half">
              <h2 className="font-m margin-bottom-m article-title margin-top-m">Benefits</h2>
              <p className="article-text font-lightgray font-light">Our company locations in Berlin and Munich offer
                creative and innovative people ideal conditions. Our employees spend many hours at their workplace
                every day. We therefore make sure that they feel good about being there. We have bright and generously
                sized offices, and suitable private areas. What else do we offer our employees?
                Care support by pme Familienservice GmbH (placement of au-pairs, nannies, child daycare spots, after
                school and afternoon care centers), Subsidies for the company pension plan, Sports and perks in nearby
                fitness studios, Discounted meals in the cafeterias and bistros, Fresh fruit as a vitamin boost and a
                diverse selection of coffees and beverages. People who work as hard as our employees, also need to
                party. And no matter whether it’s at our Christmas Party, October Fest, after-work parties or at team
                events – the Scout24 celebrations are legendary.</p>
            </div>
            <div className="grid-item palm-one-whole one-half">
              <h2 className="font-m margin-bottom-m article-title margin-top-m">The “Scout” Spirit</h2>
              <p className="article-text font-lightgray font-light">Day after day, our employees are totally committed
                to assisting Scout24 customers and users. The Scout24 group is returning the favor. The Group creates
                the conditions for open and constructive cooperation, thereby enabling employees to enhance their
                skills and actively shape their careers. For a group whose products and services are available in
                numerous countries, internationality plays an important role at Scout24. Overall, employees from more
                than 40 different nations enrich the corporate image with their experience and ideas and support the
                cross-cultural dialogue between the individual departments. Close cooperation within and among the
                Scout24 Group teams is further promoted by open and unrestricted communication by all employees.</p>
            </div>
            <div className="grid-item palm-one-whole one-half">
              <h2 className="font-m margin-bottom-m article-title margin-top-m">Work-Life Balance</h2>
              <p className="article-text font-lightgray font-light">Travel, hobbies and socializing form an important
                balance to the challenges of everyday working life. Scout24 actively supports employee efforts to
                combine professional commitment and their private lives. Flexible working hours help balance one’s
                career and private life. Scout24 thus uses an honor-based flex-time work schedule, amongst other
                things. Furthermore, employees have the option to work part-time, to tele-commute or to take a
                sabbatical. And an in-house yoga course is offered to all takers for relaxation and rejuvenation.</p>
            </div>
            <div className="grid-item palm-one-whole one-half">
              <h2 className="font-m margin-bottom-m article-title margin-top-m">Development and Support</h2>
              <p className="article-text font-lightgray font-light">The Scout24 Group is continuously growing and as a
                result always offers opportunities for professional development and continuing education for new
                applicants as well as for existing employees. A customized training and seminar program is one aspect
                of personnel development. Team leaders use our regular “Scouties” dialogues to determine the future
                prospects for the employee resulting from these measures. The particular focus is on expanding the
                employee's range of responsibilities.</p>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default EntryPage;
