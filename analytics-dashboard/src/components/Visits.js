import { useQuery, gql } from '@apollo/client';
import VisitSections from './../components/VisitSections';
import React from 'react';
const FEED_QUERY = gql`
  {
    visits {
      id,
      location
    }
  }
`;
 const Visits = () => {
 const { data } = useQuery(FEED_QUERY);
 return (   
  <div class="col-3">  
  <div class="card">
      <div class="card-header d-flex flex-column align-items-start pb-0 visits_section">
      <h2 class="text-bold-700 mt-1">Visits</h2>          
      {data && (
        <span>
          {data.visits.map((dbObject) => (
            <VisitSections key={dbObject.id} dbObject={dbObject} />
          ))}
        </span>
      )}
    </div>                      
  </div>  
</div>   
);
};
export default Visits;