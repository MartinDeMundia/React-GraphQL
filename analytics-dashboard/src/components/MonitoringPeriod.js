//import { useQuery, gql } from '@apollo/client';
import React from 'react';
/*
const FEED_QUERY = gql`
  {
    visits {
      id,
      location
    }
  }
`;*/
 const MonitoringPeriod = () => {
 //const { data } = useQuery(FEED_QUERY);

 return (   
    <div class="row">
    <div class="col-lg-12 col-md-6 col-12">
        <div class="card">
            <div class="card-header d-flex justify-content-between align-items-end">
                <h4 class="card-title">Heading</h4>
                <p class="font-medium-5 mb-0"><i class="feather icon-settings text-muted cursor-pointer"></i></p>
            </div>
            <div class="card-content">
                <div class="card-body pb-0">
                    <div class="d-flex justify-content-start">
                        <div class="mr-2">
                            <p class="mb-50 text-bold-600">Date funcion</p>
                            <h2 class="text-bold-400">
                                <sup class="font-medium-1">Blah blah blah</sup>
                                <span class="text-success">111</span>
                            </h2>
                        </div>
                        <div>
                            <p class="mb-50 text-bold-600">Blah blah blah</p>
                            <h2 class="text-bold-400">
                                <sup class="font-medium-1">KES</sup>
                                <span>111</span>
                            </h2>
                        </div>

                    </div>
                    <div id="revenue-chart"></div>
                </div>
            </div>
        </div>
    </div>

</div>

);
};

export default MonitoringPeriod;