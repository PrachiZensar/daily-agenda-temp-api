var express = require('express');
var moment = require('moment');
var bodyParser = require('body-parser');
// var cookieParser  = require('cookie-parser');
// var jwt = require('jsonwebtoken');
// var fs = require("fs");
//test
var app = express();

// var appHelpers = {};
app.use(express.static(__dirname + '/static'));

// app.route('/api/login')
//     .post(loginRoute);

// const RSA_PRIVATE_KEY = fs.readFileSync('./demos/private.key');



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/get-scheduled-appointments/:shopid/:selecteddate', function(req, res, next) {
    res.send({
	   "msg": "Authentication successful",
	   "success": true,
	   "data": [
	   {
	id : "1",
	time: "12:00 AM - 1:00 PM",
	client_name: "Marry Rose Apparcio",
	phone_number: "014-4314-4567",
	type: "Interior",
	assigned_to: "Kate Moss",
	note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{
	id : "2",
	time: "12:00 AM - 1:00 PM",
	client_name: "Keshia Michaelson",
	phone_number: "014-4314-5555",
	type: "Design",
	assigned_to: "Kristy Miller",
	note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
},
{
	id : "3",
	time: "1:00 PM - 4:00 PM",
	client_name: "John Michaelson",
	phone_number: "014-1314-1212",
	type: "Design",
	assigned_to: "John Doe",
	note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
},
{
	id : "4",
	time: "1:00 PM - 4:00 PM",
	client_name: "Johny",
	phone_number: "014-1314-1214",
	type: "Design",
	assigned_to: "Kristy Miller",
	note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
},
{
	id : "5",
	time: "2:00 PM - 3:00 PM",
	client_name: "John Michaelson",
	phone_number: "014-1314-1213",
	type: "Design",
	assigned_to: "Kate Moss",
	note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
},
{
	id : "6",
	time: "3:00 PM - 4:00 PM",
	client_name: "John Michaelson",
	phone_number: "014-1314-1212",
	type: "Design",
	assigned_to: "John Doe",
	note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
},
{
	id : "7",
	time: "3:00 PM - 4:00 PM",
	client_name: "John Michaelson",
	phone_number: "014-1314-1212",
	type: "Design",
	assigned_to: "John Doe",
	note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
},
{
	id : "8",
	time: "3:00 PM - 4:00 PM",
	client_name: "John Michaelson",
	phone_number: "014-1314-1212",
	type: "Design",
	assigned_to: "John Doe",
	note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
},
{
	id : "9",
	time: "3:00 PM - 4:00 PM",
	client_name: "John Michaelson",
	phone_number: "014-1314-1212",
	type: "Design",
	assigned_to: "John Doe",
	note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
},
{
	id : "10",
	time: "3:00 PM - 4:00 PM",
	client_name: "John Michaelson",
	phone_number: "014-1314-1212",
	type: "Design",
	assigned_to: "John Doe",
	note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
},
	]
	  });
});
// app.use(bodyParser.json());
app.get('/my-schedule/:id', function(req, res, next) {
    
	res.send({
	   "msg": "Authentication successful",
	   "success": true,
	   "data": [
	   {text:"VM",    start_date:"2018-12-24 14:00", end_date:"2018-12-24 17:00",id:"100"},
{text:"DOR", start_date:"2018-12-25 12:00", end_date:"2018-12-25 19:00",id:"200"},
{text:"DEL",  start_date:"2018-12-28 09:00", end_date:"2018-12-28 10:00",id:"300"}
	]
	  });
});

// export function loginRoute(req: Request, res: Response) {
app.get('/login', function(req, res, next) {
    const email = req.body.email,
          password = req.body.password;

	res.send({
	   "msg": "Authentication successful",
	   "success": true,
	   "data": "3"
	  });
});
app.get('/markOnLeave/:date/:shopId/:empId', function(req, res, next) {
  
   res.send({
   "msg": "Unread notification count",
   "success": true,
   "data": ""
  });
});

app.get('/extendShortenActivity/:date/:id', function(req, res, next) {
  
   res.send({
   "msg": "Extended/shortened successfully",
   "success": true,
   "data": ""
  });
});

app.get('/moveActivity/:date/:id', function(req, res, next) {
  
   res.send({
   "msg": "Moved successfully",
   "success": true,
   "data": ""
  });
});


app.get('/getNotificationCount/:userId', function(req, res, next) {
  
   res.send({
   "msg": "Unread notification count",
   "success": true,
   "data": "3"
  });
});



//API to get all notifications
app.get('/getAllNotifications/:userId', function(req, res, next) {
   var notifications =  [
    {
        "status": "unread",
        "message":"Site Visit",
        "updatedAt": "2018-09-26 14:20",
        "employeeId": "FFGDFDFGFDGG"
    },
    {
        "status": "unread",
        "message":"Site Visit",
        "updatedAt": "2018-09-26 12:20",
        "employeeId": "FFGDFDFGFDGG"
    },
    {
        "status": "unread",
        "message":"Site Visit",
        "updatedAt": "2018-09-26 10:20",
        "employeeId": "FFGDFDFGFDGG"
    },
    {
        "status": "read",
        "message":"Site Visit",
        "updatedAt": "2018-09-25 10:20",
        "employeeId": "FFGDFDFGFDGG"
    }

];
   res.send({
   "msg": "All notifications",
   "success": true,
   "data": notifications
  });
});

//API to get unread notifications
app.get('/getUnreadNotifications/:userId', function(req, res, next) {
   var notifications =  [
    {
        "message":"Site Visit",
        "updatedAt": "2018-09-26 14:20",
        "employeeId": "FFGDFDFGFDGG"
    },
    {
        "message":"Site Visit",
        "updatedAt": "2018-09-26 12:20",
        "employeeId": "FFGDFDFGFDGG"
    },
    {
        "message":"Site Visit",
        "updatedAt": "2018-09-26 10:20",
        "employeeId": "FFGDFDFGFDGG"
    }
];
   res.send({
   "msg": "Unread notifications",
   "success": true,
   "data": notifications
  });
});

//API to get read notifications
app.get('/getReadNotifications/:userId', function(req, res, next) {
   var notifications =  [
    {
        "message":"Site Visit",
        "updatedAt": "2018-09-25 10:20",
        "employeeId": "FFGDFDFGFDGG"
    }
];
   res.send({
   "msg": "Read notifications",
   "success": true,
   "data": notifications
  });
});

app.get('/get-employee-details/:id', function(req, res, next) {
  
   res.send({
   "msg": "Store data",
   "success": true,
   "data": "https://semantic-ui.com/images/avatar/large/elliot.jpg,John,Doe"
  });
});

//API to update activity
app.post('/editActivity/:shopId/:selectedDate/:activityId', function(req, res, next) {

   res.send({
   "msg": "Activity Updated successfully",
   "success": true,
   "data": "updated"
  });

});

//API to update forectas and goals
app.post('/forecastAndGoals/:selectedDate/:shopId', function(req, res, next) {

   res.send({
   "msg": "Forecast and goals updated",
   "success": true,
   "data": "updated"
  });

});

app.get('/forecastAndGoals/:selectedDate/:shopId', function(req, res, next) {
   res.send({
   "msg": "Store data",
   "success": true,
   "data": {
   		"yesterdays_actual" : "15760",
      "week_to_date_actual" : "16789",
      "ly_demand" : "16789",
      "todays_sales" : "56600",
      "sales_goal" : "60000"
	  }
  });
});

//API to get employee data
app.post('/get-employee-details', function(req, res, next) {
  var empDetails = [];
//   var array = JSON.parse("[" + req.body.userIds + "]");
  var array = req.body.userIds;
 
  for(var i = 0; i < array.length; i++) {
    empDetails.push({
      "user_details": "https://semantic-ui.com/images/avatar/large/elliot.jpg,John,Doe",
      "section_id": array[i]
    });
  }
   res.send({
   "msg": "Store data",
   "success": true,
   "data": empDetails
  });

});

//to get list of all timezons
app.get('/store-opening-hours/:id/:startDate/:endDate', function(req, res, next) {

  var storeOpeningHours = [
    {date: "2018-09-16", start_time: "9:00AM", end_time:"6:00PM"},
    {date: "2018-09-17", start_time: "9:00AM", end_time:"6:00PM"},
    {date: "2018-09-18", start_time: "9:00AM", end_time:"6:00PM"},
    {date: "2018-09-19", start_time: "9:00AM", end_time:"6:00PM"},
    {date: "2018-09-20", start_time: "8:00AM", end_time:"6:00PM"},
    {date: "2018-09-21", start_time: "9:00AM", end_time:"6:00PM"},
    {date: "2018-09-22", start_time: "9:00AM", end_time:"6:00PM"}
];
  
  res.send({
   "msg": "Store data",
   "success": true,
   "storeHours": storeOpeningHours
  });
});

app.get('/daily-agenda/:date/:storeId', (req, res) => {
  let momentDate = moment(req.params.date);
    let date = moment(req.params.date).format('YYYY-MM-DD');
    let todaysDate = moment(new Date());
    let daysDiff = momentDate.diff(todaysDate, 'days');
    let isScheduleAvailable = true;
  
       var dailyDate = [
        { "start_date": `${date} 09:00`, "end_date": `${date} 12:00`, "draggable":false, "resizeable": false, "text":"FL", "section_id":"5b7551d09a3a8a060074ad52"},
        { "start_date": `${date} 12:00`, "end_date": `${date} 12:30`, "draggable":false, "resizeable": false,"text":"MB", "section_id":"5b7551d09a3a8a060074ad52"},
        { "start_date": `${date} 12:30`, "end_date": `${date} 16:00`, "draggable":false, "resizeable": false,"text":"CC", "section_id":"5b7551d09a3a8a060074ad52"},
        { "start_date": `${date} 16:00`, "end_date": `${date} 18:00`, "draggable":false, "resizeable": false,"text":"TB", "section_id":"5b7551d09a3a8a060074ad52"},
        { "start_date": `${date} 10:00`, "end_date": `${date} 14:00`, "draggable":false, "resizeable": false,"text":"FL", "section_id":"5b7551d09a3a8a060074ad53"},
        { "start_date": `${date} 14:00`, "end_date": `${date} 15:30`, "draggable":false, "resizeable": false,"text":"GH", "section_id":"5b7551d09a3a8a060074ad53"},
        { "start_date": `${date} 15:30`, "end_date": `${date} 16:00`, "draggable":false, "resizeable": false,"text":"MB", "section_id":"5b7551d09a3a8a060074ad53"},
        { "start_date": `${date} 16:00`, "end_date": `${date} 17:00`, "draggable":false, "resizeable": false,"text":"CG", "section_id":"5b7551d09a3a8a060074ad53"},
        { "start_date": `${date} 17:00`, "end_date": `${date} 18:00`, "draggable":false, "resizeable": false,"text":"INTV", "section_id":"5b7551d09a3a8a060074ad53"},
        { "start_date": `${date} 18:00`, "end_date": `${date} 19:00`, "draggable":false, "resizeable": false,"text":"EDU", "section_id":"5b7551d09a3a8a060074ad53"},
        { "start_date": `${date} 09:00`, "end_date": `${date} 11:00`,"draggable":false, "resizeable": false, "text":"DEL", "section_id":"5b7551d09a3a8a060074ad55"},
        { "start_date": `${date} 12:00`, "end_date": `${date} 14:00`,"draggable":false, "resizeable": false, "text":"HV", "section_id":"5b7551d09a3a8a060074ad55"},
        { "start_date": `${date} 14:00`, "end_date": `${date} 14:30`,"draggable":false, "resizeable": false, "text":"MB", "section_id":"5b7551d09a3a8a060074ad55"},
        { "start_date": `${date} 14:30`, "end_date": `${date} 16:30`,"draggable":false, "resizeable": false, "text":"INST", "section_id":"5b7551d09a3a8a060074ad55"},
        { "start_date": `${date} 16:30`, "end_date": `${date} 17:00`,"draggable":false, "resizeable": false, "text":"DD", "section_id":"5b7551d09a3a8a060074ad55"},
        { "start_date": `${date} 17:00`, "end_date": `${date} 18:00`,"draggable":false, "resizeable": false, "text":"CD", "section_id":"5b7551d09a3a8a060074ad55"},
    
    ];
  var onLeaveId = ["40"];
  
  if(daysDiff > 3) {
//     dailyDate = [];
     dailyDate = [
    { "start_date": `${date} 09:00`, "end_date": `${date} 12:00`, "draggable":false, "resizeable": false, "text":"FL", "section_id":20 },
    { "start_date": `${date} 12:00`, "end_date": `${date} 12:30`, "draggable":false, "resizeable": false,"text":"MB", "section_id":20 },
    { "start_date": `${date} 12:30`, "end_date": `${date} 16:00`, "draggable":false, "resizeable": false,"text":"CC", "section_id":20},
    { "start_date": `${date} 16:00`, "end_date": `${date} 18:00`, "draggable":false, "resizeable": false,"text":"TB", "section_id":40},
    { "start_date": `${date} 10:00`, "end_date": `${date} 14:00`, "draggable":false, "resizeable": false,"text":"FL", "section_id":40}
];
    onLeaveId = [];
    isScheduleAvailable = false;
     }
  
  
  
  res.send({
   "msg": "daily data",
   "success": true,
   "data": dailyDate,
   "onLeaveIds":onLeaveId,
    "isScheduleAvailable": isScheduleAvailable
  });
  
})
//to get list of all timezons
app.get('/storesList/:userId', function(req, res, next) {

  var storeArray  = [
    { id: 11, name: 'Melrose', type: "gallery" },
    { id: 12, name: 'West Hollywood', type: "outlet" },
    { id: 13, name: 'Santa Monica', type: "gallery" },
    { id: 14, name: 'East Hollywood', type: "gallery" }
  ];
  
  res.send({
   "msg": "Store data",
   "success": true,
   "stores": storeArray
  });
});

//to employees list
app.get('/associates-names/11/:date', function(req, res, next) {
  var empArray  = [
    {id:40, name:`John Doe`},
    {id:50, name:`Kristy Miller`},
    {id:60, name:`Linda Brown`},
    {id:70, name:`George Luca`},
    {id:80, name:`Kate Moss`},
    {id:90, name:`Dian Fossey`}
  ];
  
  res.send({
   "msg": "Store data",
   "success": true,
   "data": empArray
  });
});

//to employees list
app.get('/associates/11/:type/:startDate/:endDate/:storeType', function(req, res, next) {
  if(req.params.type == "weekly") {
     var timing = "40";
     } else {
     var timing = "10:30AM-6:30PM";
     }
  var empArray  = [
{key:3, label:"Leadership", open:true, children: [
  {key:20, label:`https://semantic-ui.com/images/avatar2/large/matthew.png,Elizabethhhhhhhhhhh,Taylorrrrrrrrrrrrrrrrrrrrrrrrr,${timing}`},
{key:40, label:`https://semantic-ui.com/images/avatar/large/elliot.jpg,John,Doe,${timing}`},
{key:50, label:`https://semantic-ui.com/images/avatar2/large/kristy.png,Kristy,Miller,${timing}`},
{key:60, label:`https://semantic-ui.com/images/avatar2/large/molly.png,Linda,Brown,${timing}`},
{key:70, label:`https://semantic-ui.com/images/avatar/large/elliot.jpg,George,Luca,${timing}`},
{key:80, label:`https://semantic-ui.com/images/avatar2/large/elyse.png,Kate,Moss,${timing}`},
{key:90, label:`https://semantic-ui.com/images/avatar2/large/matthew.png,Dian,Fossey,${timing}`}
      ]},
      {key:4, label:"Design Experience", open: true, children: [
        {key:100, label:`https://semantic-ui.com/images/avatar2/large/elyse.png,William,Moss,${timing}`},
{key:110, label:`https://semantic-ui.com/images/avatar2/large/matthew.png,Dian,David,${timing}`}
      ]},
      {key:5, label:"Design Atelier", open: true, children: [
        {key:120, label:`https://semantic-ui.com/images/avatar2/large/elyse.png,Bob,Moss,${timing}`},
{key:130, label:`https://semantic-ui.com/images/avatar2/large/matthew.png,Mike,Fossey,${timing}`}
      ]},
      {key:6, label:"Trade", open: true, children: [
        {key:140, label:`https://semantic-ui.com/images/avatar2/large/elyse.png,Ross,Moss,${timing}`},
{key:150, label:`https://semantic-ui.com/images/avatar2/large/matthew.png,Diana,Fossey,${timing}`}
      ]},
      {key:7, label:"Client Services", open: true, children: [
        {key:160, label:`https://semantic-ui.com/images/avatar2/large/elyse.png,Ketty,Moss,${timing}`},
{key:170, label:`https://semantic-ui.com/images/avatar2/large/matthew.png,Blessy,Fossey,${timing}`}
      ]},
      {key:8, label:"Support", open: true, children: [
        {key:180, label:`https://semantic-ui.com/images/avatar2/large/elyse.png,Jobin,Moss,${timing}`},
{key:190, label:`https://semantic-ui.com/images/avatar2/large/matthew.png,Jerry,Fossey,${timing}`}
      ]},
      {key:9, label:"Curating", open: true, children: [
        {key:200, label:`https://semantic-ui.com/images/avatar2/large/elyse.png,Kate,Moss,${timing}`},
{key:210, label:`https://semantic-ui.com/images/avatar2/large/matthew.png,Dian,Fossey,${timing}`}
      ]},
    {key:10, label:"Faciliies", open: true, children: [
        {key:200, label:`https://semantic-ui.com/images/avatar2/large/elyse.png,Kate,Moss,${timing}`},
{key:210, label:`https://semantic-ui.com/images/avatar2/large/matthew.png,Dian,Fossey,${timing}`}
      ]}
    ];

  res.send({
   "msg": "Store data",
   "success": true,
   "employees": empArray
  });
});


//to employees list
app.get('/associates/12/:type', function(req, res, next) {

  var empArray  = [
 
{key:3, label:"Leadership", open:true, children: [
  {key:80, label:"https://semantic-ui.com/images/avatar2/large/elyse.png,Kate,Moss,40"},
{key:90, label:"https://semantic-ui.com/images/avatar2/large/matthew.png,John,Doe,40"},
{key:20, label:"https://semantic-ui.com/images/avatar2/large/matthew.png,Elizabeth,Taylor,40"},
{key:40, label:"https://semantic-ui.com/images/avatar/large/elliot.jpg,John,Williams,40"},
{key:50, label:"https://semantic-ui.com/images/avatar2/large/kristy.png,Kristy,Miller,32"},
{key:60, label:"https://semantic-ui.com/images/avatar2/large/molly.png,Linda,Brown,40"},
{key:70, label:"https://semantic-ui.com/images/avatar/large/elliot.jpg,George,Luca,40"}
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
app.get('/get-weekly-events/:storeId/:startDate/:endDate', function(req, res, next) {

var weeklyEvents  = [
      
      { start_date: "2018-09-16 00:00", end_date: "2018-09-16 24:00", text:"sick", section_id:40},
      { start_date: "2018-09-16 00:00", end_date: "2018-09-16 24:00", text:"9:30AM - 6:30PM", section_id:50},
      { start_date: "2018-09-16 00:00", end_date: "2018-09-16 24:00", text:"vacation", section_id:60},
      { start_date: "2018-09-16 00:00", end_date: "2018-09-16 24:00", text:"9:00AM - 6:00PM", section_id:70},
      { start_date: "2018-09-16 00:00", end_date: "2018-09-16 24:00", text:"9:00AM - 6:00PM", section_id:80},
      { start_date: "2018-09-16 00:00", end_date: "2018-09-16 24:00", text:"9:00AM - 6:00PM,O-8:00PM - 11:00PM", section_id:90},
      { start_date: "2018-09-16 00:00", end_date: "2018-09-16 24:00", text:"9:00AM - 6:00PM", section_id:100},
      { start_date: "2018-09-16 00:00", end_date: "2018-09-16 24:00", text:"temporary", section_id:110},
      { start_date: "2018-09-16 00:00", end_date: "2018-09-16 24:00", text:"9:00AM - 6:00PM", section_id:120},
      { start_date: "2018-09-16 00:00", end_date: "2018-09-16 24:00", text:"9:00AM - 6:00PM", section_id:130},
      { start_date: "2018-09-16 00:00", end_date: "2018-09-16 24:00", text:"9:00AM - 6:00PM", section_id:140},
      { start_date: "2018-09-16 00:00", end_date: "2018-09-16 24:00", text:"9:00AM - 6:00PM", section_id:150},
      { start_date: "2018-09-16 00:00", end_date: "2018-09-16 24:00", text:"9:00AM - 6:00PM", section_id:160},
      { start_date: "2018-09-16 00:00", end_date: "2018-09-16 24:00", text:"9:00AM - 6:00PM", section_id:170},
      { start_date: "2018-09-16 00:00", end_date: "2018-09-16 24:00", text:"9:00AM - 6:00PM", section_id:180},
      { start_date: "2018-09-16 00:00", end_date: "2018-09-16 24:00", text:"9:00AM - 6:00PM", section_id:190},
      { start_date: "2018-09-16 00:00", end_date: "2018-09-16 24:00", text:"9:00AM - 6:00PM", section_id:200},
      { start_date: "2018-09-16 00:00", end_date: "2018-09-16 24:00", text:"9:00AM - 6:00PM", section_id:210},


      { start_date: "2018-09-18  00:00", end_date: "2018-09-18  24:00", text:"9:00AM - 6:00PM", section_id:20},
      { start_date: "2018-09-18  00:00", end_date: "2018-09-18  24:00", text:"temporary", section_id:40},
      { start_date: "2018-09-18  00:00", end_date: "2018-09-18  24:00", text:"9:00AM - 6:00PM", section_id:50},
      { start_date: "2018-09-18  00:00", end_date: "2018-09-18  24:00", text:"9:00AM - 6:00PM", section_id:60},
      { start_date: "2018-09-18  00:00", end_date: "2018-09-18  24:00", text:"9:00AM - 6:00PM", section_id:70},
      { start_date: "2018-09-18  00:00", end_date: "2018-09-18  24:00", text:"9:00AM - 6:00PM", section_id:80},
      { start_date: "2018-09-18  00:00", end_date: "2018-09-18  24:00", text:"9:00AM - 6:00PM,P-8PM - 11PM", section_id:90},
      { start_date: "2018-09-18  00:00", end_date: "2018-09-18  24:00", text:"9:00AM - 6:00PM", section_id:100},
      { start_date: "2018-09-18  00:00", end_date: "2018-09-18  24:00", text:"9:00AM - 6:00PM", section_id:110},
      { start_date: "2018-09-18  00:00", end_date: "2018-09-18  24:00", text:"9:00AM - 6:00PM", section_id:120},
      { start_date: "2018-09-18  00:00", end_date: "2018-09-18  24:00", text:"9:00AM - 6:00PM", section_id:130},
      { start_date: "2018-09-18  00:00", end_date: "2018-09-18  24:00", text:"9:00AM - 6:00PM", section_id:140},
      { start_date: "2018-09-18  00:00", end_date: "2018-09-18  24:00", text:"9:00AM - 6:00PM", section_id:150},
      { start_date: "2018-09-18  00:00", end_date: "2018-09-18  24:00", text:"9:00AM - 6:00PM", section_id:160},


      { start_date: "2018-09-20 00:00", end_date: "2018-09-20 24:00", text:"9:00AM - 6:00PM", section_id:20},
      { start_date: "2018-09-20 00:00", end_date: "2018-09-20 24:00", text:"sick", section_id:40},
      { start_date: "2018-09-20 00:00", end_date: "2018-09-20 24:00", text:"9:00AM - 6:00PM", section_id:50},
      { start_date: "2018-09-20 00:00", end_date: "2018-09-20 24:00", text:"vacation", section_id:60},
      { start_date: "2018-09-20 00:00", end_date: "2018-09-20 24:00", text:"9:00AM - 6:00PM", section_id:70},
      { start_date: "2018-09-20 00:00", end_date: "2018-09-20 24:00", text:"9:00AM - 6:00PM", section_id:80},
      { start_date: "2018-09-20 00:00", end_date: "2018-09-20 24:00", text:"9:00AM - 6:00PM,P-8:00PM - 11:00PM", section_id:90},
      { start_date: "2018-09-20 00:00", end_date: "2018-09-20 24:00", text:"temporary", section_id:110},
      { start_date: "2018-09-20 00:00", end_date: "2018-09-20 24:00", text:"9:00AM - 6:00PM", section_id:120},
      { start_date: "2018-09-20 00:00", end_date: "2018-09-20 24:00", text:"9:00AM - 6:00PM", section_id:130},
      { start_date: "2018-09-20 00:00", end_date: "2018-09-20 24:00", text:"9:00AM - 6:00PM", section_id:140},
      { start_date: "2018-09-20 00:00", end_date: "2018-09-20 24:00", text:"9:00AM - 6:00PM", section_id:150},
      { start_date: "2018-09-20 00:00", end_date: "2018-09-20 24:00", text:"9:00AM - 6:00PM", section_id:160},
      { start_date: "2018-09-20 00:00", end_date: "2018-09-20 24:00", text:"9:00AM - 6:00PM", section_id:170},
      { start_date: "2018-09-20 00:00", end_date: "2018-09-20 24:00", text:"9:00AM - 6:00PM", section_id:180},
      { start_date: "2018-09-20 00:00", end_date: "2018-09-20 24:00", text:"9:00AM - 6:00PM", section_id:190},
      { start_date: "2018-09-20 00:00", end_date: "2018-09-20 24:00", text:"9:00AM - 6:00PM", section_id:200},
      { start_date: "2018-09-20 00:00", end_date: "2018-09-20 24:00", text:"9:00AM - 6:00PM", section_id:210},

      { start_date: "2018-09-21 00:00", end_date: "2018-09-21 24:00", text:"9:00AM - 6:00PM", section_id:20},
      { start_date: "2018-09-21 00:00", end_date: "2018-09-21 24:00", text:"sick", section_id:40},
      { start_date: "2018-09-21 00:00", end_date: "2018-09-21 24:00", text:"9:00AM - 6:00PM", section_id:50},
      { start_date: "2018-09-21 00:00", end_date: "2018-09-21 24:00", text:"vacation", section_id:60},
      { start_date: "2018-09-21 00:00", end_date: "2018-09-21 24:00", text:"9:00AM - 6:00PM", section_id:70},
      { start_date: "2018-09-21 00:00", end_date: "2018-09-21 24:00", text:"9:00AM - 6:00PM", section_id:80},
      { start_date: "2018-09-21 00:00", end_date: "2018-09-21 24:00", text:"9:00AM - 6:00PM,P-8:00PM - 11:00PM", section_id:90},
    { start_date: "2018-09-21 00:00", end_date: "2018-09-21 24:00", text:"temporary", section_id:110},
];

  res.send({
   "msg": "Weekly event",
   "success": true,
   "weeklyEvents": weeklyEvents
  });
});


//error api
app.get('/error-occured', function(req, res, next) {

  res.send({
   "msg": "Something went wrong while getting weekly schedule. Please try again.",
   "success": false,
   "stores": []
  });
});

//profile page
app.get('/profile-details', function(req, res, next) {

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
