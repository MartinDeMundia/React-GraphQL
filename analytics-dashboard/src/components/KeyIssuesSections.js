import React from 'react';

const KeyIssuesSections = (props) => {
  const { dbObject , dbObject_Loc } = props;
  return (          
            <div class="card keyissues">
                <div class="card-header d-flex flex-column align-items-start pb-0">                   
                    <h2 class="text-bold-700 mt-1">{dbObject.issue}</h2>
                    <p class="mb-0">{dbObject_Loc[0].location}</p>
                </div>
                <div class="card-content">
                    <div id="line-area-chart-1"></div>
                </div>
            </div>
       
  );
};
export default KeyIssuesSections;