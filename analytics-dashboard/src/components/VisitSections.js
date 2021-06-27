import React from 'react';

const VisitSections = (props) => {
  const { dbObject } = props;
  return (
    <div>
      <div class="card">
        {dbObject.id} ({dbObject.location})
      </div>
    </div>
  );
};

export default VisitSections;