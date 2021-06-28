# React-GraphQL
This is a quick front end using react and a back-end implementation with graphQL

graphQL Schema :

  type Query {
    visits:[Visits]
    visit(id: ID): Visits 
    keyissues:[KeyIssues]
    keyissue(id: ID):KeyIssues    
    staff:[Staff]
    footfall:[Footfall]
    revenue:[Revenue]   
  }
 //To expose the visits API 
  type Visits {
    id: ID
    location: String    
  }
  //To expose the keyissues API  
  type KeyIssues {
    id: ID
    issue: String  
    location: [Visits] 
  }
  //To expose the staff API  (linked to the Visits Object)
  type Staff {
    id: ID
    staff_name: String
    efficiency_d1: String 
    efficiency_d2: String 
    nps_d1: String 
    nps_d2: String
    efficiency: String
    reported_Issues: String         
    location: [Visits] 
  }
   //To expose the footfall charts API 
  type Footfall {
    id: ID
    name: String
    amnt: String      
  }
   //To expose the revenue chart API 
  type Revenue {
    id: ID
    name: String
    revenue: String      
  }
  
Clone and install dependencies , then run node server.js
  