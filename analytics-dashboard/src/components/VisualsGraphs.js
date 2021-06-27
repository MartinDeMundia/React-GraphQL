import { useQuery, gql } from '@apollo/client';
import React from 'react';
import StaffSection from './../components/StaffSection';

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
const VisualsGraphs = () => {
const { data } = useQuery(STAFF_QUERY);
const  data_staff = data;

console.log(data_staff);
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