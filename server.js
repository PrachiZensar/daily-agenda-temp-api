var express = require('express');


var app = express();

// var appHelpers = {};
app.use(express.static(__dirname + '/static'));

//to get list of all timezons
app.get('/assigned-store-list', function(req, res) {

  var storeArray  = [
    { id: 11, name: 'Melrose' },
    { id: 12, name: 'West Hollywood' },
    { id: 13, name: 'Santa Monica' },
    { id: 14, name: 'East Hollywood' }
  ];

  res.send({
   "msg": "Store data",
   "success": true,
   "stores": storeArray
  });
});

//to employees list
app.get('/get-employee-list', function(req, res) {

  var empArray  = [
      {key:1, label:"Unassigned", open: true, children: [
        {key:20, label:"https://semantic-ui.com/images/avatar2/large/matthew.png,Unassigned"}
      ]},
{key:2, label:"Field Leader", open: true, children: [
{key:20, label:"https://semantic-ui.com/images/avatar2/large/matthew.png,Elizabeth,Taylor,40"},
{key:40, label:"https://semantic-ui.com/images/avatar/large/elliot.jpg,John,Williams,40"},
{key:50, label:"https://semantic-ui.com/images/avatar2/large/kristy.png,Kristy,Miller,32"},
{key:60, label:"https://semantic-ui.com/images/avatar2/large/molly.png,Linda,Brown,40"},
{key:70, label:"https://semantic-ui.com/images/avatar/large/elliot.jpg,George,Luca,40"}
]},
{key:3, label:"Leadership", open:true, children: [
{key:80, label:"https://semantic-ui.com/images/avatar2/large/elyse.png,Kate,Moss,40"},
{key:90, label:"https://semantic-ui.com/images/avatar2/large/matthew.png,Dian,Fossey,40"}
      ]},
      {key:4, label:"Floor Coverage", open: true, children: [
        {key:100, label:"https://semantic-ui.com/images/avatar2/large/elyse.png,Kate,Moss,40"},
{key:110, label:"https://semantic-ui.com/images/avatar2/large/matthew.png,Dian,Fossey,40"}
      ]},
      {key:5, label:"Design Team", open: true, children: [
        {key:120, label:"https://semantic-ui.com/images/avatar2/large/elyse.png,Kate,Moss,40"},
{key:130, label:"https://semantic-ui.com/images/avatar2/large/matthew.png,Dian,Fossey,40"}
      ]},
      {key:6, label:"Trade Team", open: true, children: [
        {key:140, label:"https://semantic-ui.com/images/avatar2/large/elyse.png,Kate,Moss,40"},
{key:150, label:"https://semantic-ui.com/images/avatar2/large/matthew.png,Dian,Fossey,40"}
      ]},
      {key:7, label:"Support Team", open: true, children: [
        {key:160, label:"https://semantic-ui.com/images/avatar2/large/elyse.png,Kate,Moss,40"},
{key:170, label:"https://semantic-ui.com/images/avatar2/large/matthew.png,Dian,Fossey,40"}
      ]},
      {key:8, label:"Curating Team", open: true, children: [
        {key:180, label:"https://semantic-ui.com/images/avatar2/large/elyse.png,Kate,Moss,40"},
{key:190, label:"https://semantic-ui.com/images/avatar2/large/matthew.png,Dian,Fossey,40"}
      ]},
      {key:9, label:"Facilities Team", open: true, children: [
        {key:200, label:"https://semantic-ui.com/images/avatar2/large/elyse.png,Kate,Moss,40"},
{key:210, label:"https://semantic-ui.com/images/avatar2/large/matthew.png,Dian,Fossey,40"}
      ]}
    ];

  res.send({
   "msg": "Store data",
   "success": true,
   "employees": empArray
  });
});


//get events
app.get('/get-wekly-events', function(req, res) {

  var weeklyEvents  = [
      { start_date: "2018-07-16 00:00", end_date: "2018-07-16 24:00", text:"9AM - 6PM", section_id:20},
      { start_date: "2018-07-16 00:00", end_date: "2018-07-16 24:00", text:"9AM - 6PM", section_id:40},
      { start_date: "2018-07-16 00:00", end_date: "2018-07-16 24:00", text:"9AM - 6PM", section_id:50},
      { start_date: "2018-07-16 00:00", end_date: "2018-07-16 24:00", text:"9AM - 6PM", section_id:60},
      { start_date: "2018-07-16 00:00", end_date: "2018-07-16 24:00", text:"9AM - 6PM", section_id:70},
      { start_date: "2018-07-16 00:00", end_date: "2018-07-16 24:00", text:"9AM - 6PM", section_id:80},
      { start_date: "2018-07-16 00:00", end_date: "2018-07-16 24:00", text:"9AM - 6PM", section_id:90},

      { start_date: "2018-07-18 00:00", end_date: "2018-07-18 24:00", text:"9AM - 6PM", section_id:40},
      { start_date: "2018-07-18 00:00", end_date: "2018-07-18 24:00", text:"9AM - 6PM", section_id:50},
      { start_date: "2018-07-18 00:00", end_date: "2018-07-18 24:00", text:"9AM - 6PM", section_id:60},
      { start_date: "2018-07-18 00:00", end_date: "2018-07-18 24:00", text:"9AM - 6PM", section_id:80},
      { start_date: "2018-07-18 00:00", end_date: "2018-07-18 24:00", text:"9AM - 6PM", section_id:90}
];

var storeOpeningHours = [
{date:"2018-07-15", opening_hours:"9AM - 6PM"},
{date:"2018-07-16", opening_hours:"9AM - 6PM"},
{date:"2018-07-17", opening_hours:"9AM - 6PM"},
{date:"2018-07-18", opening_hours:"9AM - 6PM"},
{date:"2018-07-19", opening_hours:"9AM - 6PM"},
{date:"2018-07-20", opening_hours:"8AM - 6PM"},
{date:"2018-07-21", opening_hours:"9AM - 6PM"}
];


  res.send({
   "msg": "Weekly event",
   "success": true,
   "stores": weeklyEvents
  });
});


//error api
app.get('/error-occured', function(req, res) {

  res.send({
   "msg": "Something went wrong while getting weekly schedule. Please try again.",
   "success": false,
   "stores": []
  });
});

//profile page
app.get('/profile-details', function(req, res) {

  var profileArray  = {
    id: 11,
    first_name: "Kumudini",
    last_name: "Sahu",
    alias_name: "KS",
    profile_pic: "https://semantic-ui.com/images/avatar2/large/molly.png",
    designation: "Field Leader"
  }

  res.send({
   "msg": "Profile data",
   "success": true,
   "stores": profileArray
  });
});

app.listen(process.env.PORT || 8000);


