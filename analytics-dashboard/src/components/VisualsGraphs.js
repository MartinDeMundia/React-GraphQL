import { useQuery, gql } from '@apollo/client';
import React from 'react';

const FEED_QUERY = gql`
  {
    visits {
      id,
      location
    }
  }
`;
 const VisualsGraphs = () => {
 const { data } = useQuery(FEED_QUERY);

 return (   
    <div class="row">
    <div class="col-lg-6 col-12">
        <div class="card">
            <div class="card-header d-flex justify-content-between align-items-end">
                <h4>Graph 1</h4>
              
            </div>
            <div class="card-content">
                <div class="card-body pt-0">
                    <div id="client-retention-chart">
                    </div>
                  
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-6 col-12">
        <div class="card">
            <div class="card-header d-flex justify-content-between pb-0">
                <h4 class="card-title">Graph 2</h4>                                  
            </div>
            <div class="card-content">
                <div class="card-body py-0">
                    <div id="customer-chart"></div>
                </div>                             
            </div>
        </div>
    </div>
</div>
);
};

export default VisualsGraphs;