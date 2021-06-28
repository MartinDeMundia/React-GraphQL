import React from 'react';

const StaffSection = (props) => {
  const { dbObject } = props;
  return (  
            <tr>
            <td>{dbObject.id}</td>
            <td class='td_style'>{dbObject.staff_name}</td>
            <td>{dbObject.efficiency_d1}  {dbObject.efficiency_d2}</td>
            <td>{dbObject.nps_d1} {dbObject.nps_d2}</td>
            <td class='td_style'>
                <div class="btn-group ml-1">                     
                <a class="" href="/">{dbObject.efficiency} %</a> 
                <div class="progress mb-3" style={{'marginTop': '11%'}}>
                        <div class="progress-bar bg-primary progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="20" aria-valuemin="20" aria-valuemax="100" style={{width:dbObject.efficiency /2 }}></div>
                </div>
                </div>
            </td>
            <td class='td_style'>
                <div class="btn-group ml-1">                     
                <a class="" href="/">{dbObject.reported_Issues}</a> 
                <div class="progress mb-3" style={{'marginTop': '11%'}}>
                        <div class="progress-bar bg-primary progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="20" aria-valuemin="20" aria-valuemax="100" style={{width:dbObject.reported_Issues * 10  }}></div>
                </div>
                </div>
            </td>             
            </tr>  
  );
};
export default StaffSection;