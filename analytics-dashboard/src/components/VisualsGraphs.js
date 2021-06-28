import { useQuery, gql } from '@apollo/client';
import StaffSection from './../components/StaffSection';
import React from 'react';
import FootfallChart from './../components/FootfallChart';
import RevenueChart from './../components/RevenueChart';

const STAFF_QUERY = gql`
{
    staff {
      id
      staff_name
      efficiency_d1
      efficiency_d2
      nps_d1
      nps_d2
      efficiency
      reported_Issues
      location {
        id
        location
      }
    }
  }  
`;
const FOOTFALL_QUERY = gql`
{
    footfall {
      id
      name
      amnt
    }
  } 
`;
const REVENUE_QUERY = gql`
{
    revenue {
      id
      name
      revenue
    }
  } 
`;

const VisualsGraphs = () => {
var { data } = useQuery(STAFF_QUERY);
const  data_staff = data;

var { data } = useQuery(FOOTFALL_QUERY);
const  data_footfall = data;

var { data } = useQuery(REVENUE_QUERY);
const  data_revenue = data;

 return (   
    <div class="row">
    <div class="col-lg-6 col-12">
        <div class="card">
            <div class="card-header d-flex justify-content-between align-items-end">
                <h4>Foot fall</h4>
              
            </div>

            <div class="card-content"> 
                {data_footfall && (
                <span>
                     <FootfallChart  dbObject={data_footfall.footfall} />              
                </span>
                )}
            </div>            
        </div>
    </div>

    <div class="col-lg-6 col-12">
        <div class="card">
            <div class="card-header d-flex justify-content-between pb-0">
                <h4 class="card-title">Revenue</h4>                                  
            </div>
            <div class="card-content">
               {data_revenue && (
                <span>
                     <RevenueChart  dbObject={data_revenue.revenue} />              
                </span>
                )}                            
            </div>
        </div>
    </div>


    <div class="col-lg-12 col-md-6 col-12">
                <div class="card">

                        <div class="card-content">
                        <div class="card-body table-responsive">
                            <table class="table text-center m-0">
                            <thead>
                                <tr>
                                <th>No</th>
                                <th>Staff Name</th>
                                <th>Efficiency Delta</th>
                                <th>NPS Delta</th>
                                <th>Efficiency</th>
                                <th>Reported Issues</th>             
                                </tr>
                            </thead>            
                            {data_staff && (
                                    <tbody>
                                    {data_staff.staff.map((dbObject) => (
                                        <StaffSection key={dbObject.id} dbObject={dbObject} />
                                    ))}
                                    </tbody>
                                )} 
                            </table>
                        </div>
                        </div>

     </div>
    </div>
</div>
);
};
export default VisualsGraphs;