//REF : https://developer.okta.com/blog/2018/09/27/build-a-simple-api-service-with-express-and-graphql
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const cors = require('cors');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    visits:[Visits]
    visit(id: ID): Visits  

    keyissues:[KeyIssues]
    keyissue(id: ID):KeyIssues
    
    staff:[Staff]   
  }


  type Visits {
    id: ID
    location: String    
  }

  type KeyIssues {
    id: ID
    issue: String  
    location: [Visits] 
  }

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

`);

const VISITS = new Map()
const KEYISSUES = new Map()
const STAFF = new Map()

class Visits {
  constructor (data) { Object.assign(this, data) }
    get visit() {
      return VISITS.get(this.id)
    }
}

class KeyIssues {
  constructor (data) { Object.assign(this, data) }
    get location() {
    return [...VISITS.values()].filter(visit => visit.id === this.visit)
  }
}

class Staff {
  constructor (data) { Object.assign(this, data) }
    get location() {
    return [...VISITS.values()].filter(visit => visit.id === this.visit)
  }
}


const root = {
  visits: () => VISITS.values(),
  visit: ({ id }) => VISITS.get(id),

  keyissues: () => KEYISSUES.values(),
  keyissue: ({ id }) => KEYISSUES.get(id),

  staff: () => STAFF.values()
 
}

const initializeData = () => {
 //fake visits
 const fakeVisits = [
  { id: '7', location: 'Kiambu'},
  { id: '12', location: 'Mukuru Kwa Ruben'},
  { id: '26', location: 'Mukuru Kwa Njenga'},
  { id: '38', location: 'Baba Dogo'},
  { id: '41', location: 'Kosovo'},
  { id: '24', location: 'Mukuru Kayaba'}
]
fakeVisits.forEach(visit => VISITS.set(visit.id, new Visits(visit)))

//fake keyissues data
const fakeKeyIssues = [
  { id: '1', issue: 'Wrong Prescription' , visit :'41'},
  { id: '2', issue: 'Opened Late' , visit :'7'},
  { id: '3', issue: 'Bad Receipts' , visit :'38'},
  { id: '4', issue: 'Late Check In' , visit :'26'},
  { id: '5', issue: 'Delay In Lab' , visit :'7'},
  { id: '6', issue: 'Careless Waste Disposal' , visit :'7'},
]
fakeKeyIssues.forEach(keyissues => KEYISSUES.set(keyissues.id, new KeyIssues(keyissues)))


//fake staff data
const fakeStaff = [
  { id: '1', staff_name: 'Mercy Mukoya' , efficiency_d1 :'1,3', efficiency_d2:'+0,2',nps_d1:'1,2',nps_d2:'+0,3', efficiency:'96',reported_Issues:'3',visit :'41'},
  { id: '2', staff_name: 'Kennedy Ayako' , efficiency_d1 :'1,8', efficiency_d2:'+0,4',nps_d1:'1,8',nps_d2:'+0,2', efficiency:'92',reported_Issues:'6', visit :'7'},
  { id: '3', staff_name: 'Stephanie Tomsett' , efficiency_d1 :'2,7', efficiency_d2:'2,5',nps_d1:'2,0',nps_d2:'1,8', efficiency:'58',reported_Issues:'1', visit :'38'},
  { id: '4', staff_name: 'Faith Kityo' , efficiency_d1 :'2,8', efficiency_d2:'-0,5',nps_d1:'2,5',nps_d2:'-2,1', efficiency:'74',reported_Issues:'8', visit :'26'},
 
]
fakeStaff.forEach(staff => STAFF.set(staff.id, new Staff(staff)))


}

initializeData()

 
var app = express();
app.use("/", function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});
app.use('/', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
var corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true 
};
app.use(cors(corsOptions));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000');