import React from 'react';
import CaseStudies from './caseStudies2';
import CaseDetails from './caseDetails';
import CaseAttorney from './CaseAttorney';
import CaseInfo from './CaseInfo';

function CaseStudyDetails() {
    return (
        <section className="service-single-section section-padding mt-64">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-12 col-12">
                        <div className="service-content">
                            <div className="service-content-top">
                                <h3 className="text-2xl font-semibold mb-2">
                                    A Personal Injury Suit Can Arise When Someone Is Harmed
                                </h3>
                                <span className="text-gray-600">
                                    Case Study, Insurance Law, Law Firm
                                </span>
                            </div>
                            <div className="img-holder mb-6">
                                <img
                                    src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAcIAAAKKBAMAAABc1UbqAAAAG1BMVEW8vLwAAACkpKReXl4vLy91dXUXFxdGRkaNjY3K+oU8AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAJu0lEQVR4nO3bvXPbRhrHcYkvIsvAlqWUZBL72iBjn1MKkWJfaSZRnFL0eC4pTfkuk1KYXDL5s0/7/jyLhSiJUJP5fhqTELjYH/YF4BLe2wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDf29P/rKt/v/7uAY8wevuqOnr/38WwhVbXvkzvV5VynP7yT7/p27hlff3ucbe0T/UR/nj+av1IvJ/qI1Qf4l/Ga7fl8M0QyYJJlrDuS/hj3PZL2NSad4tOaR/klmljNsmE476E03XYdHQ1VLw932Yi4aYn4RdiY9h9Zt6c5KUdLcSGf7hPyISznoSjJm3TPWMno3WWsNGHP1b75bHNxid5aXKDD6gSTnoSPis27M5mqlF8pQthdLXC8dusyfJGjR1SJjzoSajOrRj/O2rzhNnhw5E25s3hi/O39gyEZpplpzsbmKnfyYT75YTuXJ+en/9qXww22axvl3BuX5u6zxvRbrZXfqpLE53U97uj1x+/2p7Qnp1L8+p/5tW7gQL6UZ8Smun+0WeJj2J6lp/gxrLdVmZ7/LD900kqy52+bxf6mMvrbeIIn/nNZmc/S9cDdtM2T2ga65PufivRVrXodfpas9Sd1DbhkWy+eMzuEexV8sq9HutydrLOE5oDXXT3a8TIMKnCbK6v8E2l5vkmGwDeSjZ7NJEdvCl+8D7MyVqr0sZVdoWzRrIzqjemcQ/9a9sMF6qodHeQ1OkTwlJ+dlk+z/dgOsyqk7B7LRqrGWST+pPqps9ER9vrXkqCujjIajl/zqrOvd89Xbff41YlnBX7x0SNTvkJ2039qNzoCaLpmRE3xVuWRo7OeTXQbY1pmgudcFKVLkX7qmUPZE+uYzed60467WlCk+VJd6s+O+tiT747092vdMKDYsJWbVUtau9Q3sRXV2qvYk9blxLO1TjQLbqDxpw3nXBf1TKo1ew9FpcL13Lvwk6iGdriiN6zrdVNrsrMD3hvU1u3bsJu0Rt1SueqjmH0pahpe7GSOos309fhtnii72xp+5dOuCx2j0ZdwkZqHgidcxK7q1P13JeMqtI9xURfH5bDXBBtJ80StsXLcTbwVeXDBCOvjHuug3Sbyu9/0dmqZq98arsvXwedcFWcxLL20G83tknlZcOYFW8d/GG7f8giDZPwmetVOmH5cpxdnnST2gv9Iu+kB339rHxPsa93P+g7P3eycfXUCe3l2C55iUW1UTeh6Mr2Zu0k66R2JC3c+tz7r+Vh3T2F3S4W1ZbdhBc7pdtLA6WT8ElY8vpX2Jgn1BOPu+FeZ+NuZffxy1fHKYpN+Mav2x1e9SScDJHwmS9TJ7yu7WFcyAgR85uoLOEy7C97pe0hf4a/iE+byr8K22PE9gESbnw1ddl6mebLWyUMC6BqEjYTtVg3/Cb+QS/ThGIfIGG8bOuy1eHlGsYNCcMakrpTMTf1Ym0p3aFmixhiDWPghAehdFX2SB/e/2FbwqWqrGNSyZLeZTtnjfgACUMnLScMlXtyq4TjbieNBZ2ev7Qv4jwbEobx8OaBEqZ7S1W2vUGpzCz+u6vB4jYJ3ehVndQV5GYSttGRpB6+OrIFZ91K4U4yV4idFeU5gr1OKF8vRcdmGMCUXFUlU0LVqs6hPxHUtqG"
                                    alt="Personal Injury Case Study"
                                    className="w-full h-96 object-cover mb-6" // Set height to 64 and maintain aspect ratio
                                />
                            </div>
                            {/* Include other case components here */}
                            <CaseDetails />
                            <CaseInfo />
                            <CaseAttorney />
                            <CaseStudies />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CaseStudyDetails;
