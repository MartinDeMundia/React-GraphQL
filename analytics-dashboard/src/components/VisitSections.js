import React from 'react';

const VisitSections = (props) => {
  const { dbObject } = props;
  return (
    <div>
      <div class="card" >
        <div class="card-content card_style">
          <div class="card-img" >         
            <a href="/" class="btn btn-floating halfway-fab bg-warning"><i class="ft-plus"></i> {dbObject.id} | {dbObject.location} </a>
          </div>    
        </div>      
      </div>
    </div>
  );
};

export default VisitSections;