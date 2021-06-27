import { useQuery, gql } from '@apollo/client';
import KeyIssuesSections from './../components/KeyIssuesSections';
import React from 'react';

const FEED_QUERY = gql`
{
    keyissues {
      id
      issue
      location {
        id
        location
      }
    }
  }
`;
 const KeyIssues = () => {
 const { data } = useQuery(FEED_QUERY);
 return (   
    <div class="row">
      {data && (
        <div class="">
          {data.keyissues.map((dbObject) => (
            <KeyIssuesSections key={dbObject.id} dbObject={dbObject} dbObject_Loc={dbObject.location} />
          ))}
        </div>
      )}
</div> 
);
};

export default KeyIssues;