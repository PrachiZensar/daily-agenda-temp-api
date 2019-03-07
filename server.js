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

app.get('/getUnreadNotificationCount/:id', function(req, res, next) {
	res.send({
	   "msg": "count",
	   "success": true,
		"data":4
	});
});

app.get('/getReadNotificationCount/:id', function(req, res, next) {
	res.send({
	   "msg": "count",
	   "success": true,
		"data":14
	});
});
	
app.get('/getReadNotifications/:id/:page', function(req, res, next) {
	res.send({
	   "msg": "count",
	   "success": true,
		"data":[
	{
		title:"New Assigned Activity",
		msg: "A new appointment has been assigned to you. Select View Appointment for details.",
		storeId: "5bf2a818cdbbc70f7924cc71",
		datetime: "2019-02-08 16:40",
		id:1,
		status: "read"
	},
	{
		title:"Employee on leave",
		msg: "Rahul Dabhi is on leave. Please review their activities for the day and reassign as needed.",
		storeId: "5bf2a818cdbbc70f7924cc71",
		datetime: "2019-02-07 16:45",
		id:2,
		status: "read"
	},
	{
		title:"New Assigned Activity",
		msg: "A new appointment has been assigned to you. Select View Appointment for details.",
		storeId: "5bf2a818cdbbc70f7924cc71",
		datetime: "2019-02-07 16:40",
		id:3,
		status: "read"
	},
	{
		title:"New Assigned Activity",
		msg: "A new appointment has been assigned to you. Select View Appointment for details.",
		storeId: "5bf2a818cdbbc70f7924cc71",
		datetime: "2019-02-08 16:40",
		id:4,
		status: "read"
	},
	{
		title:"Employee on leave",
		msg: "Rahul Dabhi is on leave. Please review their activities for the day and reassign as needed.",
		storeId: "5bf2a818cdbbc70f7924cc71",
		datetime: "2019-02-07 16:45",
		id:5,
		status: "read"
	},
	{
		title:"New Assigned Activity",
		msg: "A new appointment has been assigned to you. Select View Appointment for details.",
		storeId: "5bf2a818cdbbc70f7924cc71",
		datetime: "2019-02-07 16:40",
		id:6,
		status: "read"
	},
	{
		title:"New Assigned Activity",
		msg: "A new appointment has been assigned to you. Select View Appointment for details.",
		storeId: "5bf2a818cdbbc70f7924cc71",
		datetime: "2019-02-08 16:40",
		id:7,
		status: "read"
	},
	{
		title:"Employee on leave",
		msg: "Rahul Dabhi is on leave. Please review their activities for the day and reassign as needed.",
		storeId: "5bf2a818cdbbc70f7924cc71",
		datetime: "2019-02-07 16:45",
		id:8,
		status: "read"
	},
	{
		title:"New Assigned Activity",
		msg: "A new appointment has been assigned to you. Select View Appointment for details.",
		storeId: "5bf2a818cdbbc70f7924cc71",
		datetime: "2019-02-07 16:40",
		id:9,
		status: "read"
	},
	{
		title:"New Assigned Activity",
		msg: "A new appointment has been assigned to you. Select View Appointment for details.",
		storeId: "5bf2a818cdbbc70f7924cc71",
		datetime: "2019-02-07 16:40",
		id:10,
		status: "read"
	}
]
	});
});
	



app.get('/getUnreadNotifications/:id/:page', function(req, res, next) {
	res.send({
	   "msg": "count",
	   "success": true,
		data:[
	{
		title:"New Assigned Activity",
		msg: "A new appointment has been assigned to you. Select View Appointment for details.",
		storeId: "5bf2a818cdbbc70f7924cc71",
		datetime: "2019-02-12 15:06",
		id:1,
		status: "unread"
	},
	{
		title:"New Assigned Activity",
		msg: "A new appointment has been assigned to you. Select View Appointment for details.",
		storeId: "5bf2a818cdbbc70f7924cc71",
		datetime: "2019-02-12 13:10",
		id:12,
		status: "unread"
	},
	{
		title:"New Assigned Activity",
		msg: "A new appointment has been assigned to you. Select View Appointment for details.",
		storeId: "5bf2a818cdbbc70f7924cc71",
		datetime: "2019-02-12 10:00",
		id:13,
		status: "unread"
	},
	{
		title:"New Assigned Activity",
		msg: "A new appointment has been assigned to you. Select View Appointment for details.",
		storeId: "5bf2a818cdbbc70f7924cc71",
		datetime: "2019-02-08 16:45",
		id:14,
		status: "unread"
	},
	{
		title:"New Assigned Activity",
		msg: "A new appointment has been assigned to you. Select View Appointment for details.",
		storeId: "5bf2a818cdbbc70f7924cc71",
		datetime: "2019-02-08 12:45",
		id: 23,
		status: "unread"
	},
	{
		title:"New Assigned Activity",
		msg: "A new appointment has been assigned to you. Select View Appointment for details.",
		storeId: "5bf2a818cdbbc70f7924cc71",
		datetime: "2019-02-08 11:45",
		id: 243,
		status: "unread"
	},
	{
		title:"New Assigned Activity",
		msg: "A new appointment has been assigned to you. Select View Appointment for details.",
		storeId: "5bf2a818cdbbc70f7924cc71",
		datetime: "2019-02-08 16:45",
		id: 233,
		status: "unread"
	}
]
	});
});

app.get('/getAllNotifications/:id/:page', function(req, res, next) {
	res.send({
	   "msg": "count",
	   "success": true,
		data: [
	{
		title:"New Assigned Activity",
		msg: "A new appointment has been assigned to you. Select View Appointment for details.",
		storeId: "5bf2a818cdbbc70f7924cc71",
		datetime: "2019-02-08 16:45",
		status: "unread"
	},
	{
		title:"New Assigned Activity",
		msg: "A new appointment has been assigned to you. Select View Appointment for details.",
		storeId: "5bf2a818cdbbc70f7924cc71",
		datetime: "2019-02-012 16:40",
		status: "read",
		id: 1
	},
	{
		title:"New Assigned Activity",
		msg: "A new appointment has been assigned to you. Select View Appointment for details.",
		storeId: "5bf2a818cdbbc70f7924cc71",
		datetime: "2019-02-12 12:45",
		status: "unread",
		id: 2
	},
	{
		title:"New Assigned Activity",
		msg: "A new appointment has been assigned to you. Select View Appointment for details.",
		storeId: "5bf2a818cdbbc70f7924cc71",
		datetime: "2019-02-08 11:45",
		status: "unread",
		id: 3
	},
	{
		title:"Employee on leave",
		msg: "Rahul Dabhi is on leave. Please review their activities for the day and reassign as needed.",
		storeId: "5bf2a818cdbbc70f7924cc71",
		datetime: "2019-02-07 16:45",
		status: "read",
		id: 4
	}
]
	});
});

app.get('/get-available-associates/:shopid/:selecteddate', function(req, res, next) {
	res.send({
	   "msg": "Authentication successful",
	   "success": true,
	   "data": [
	
		
		  	{id:40, details:`John Doe 7:00 PM - 9:00 PM`},
		    {id:50, details:`Kristy Miller 6:00 PM - 9:00 PM`},
		    {id:60, details:`Linda Brown 7:30 PM - 8:00 PM`},
		    {id:70, details:`George Luca 6:30 PM - 9:00 PM`},
		    {id:80, details:`Kate Moss 7:00 PM - 9:00 PM`},
		    {id:90, details:`Dian Fossey 8:00 PM - 9:00 PM`}
		
]
	});
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
	    {text:"DOR", start_date:"2018-12-28 12:00", end_date:"2018-12-28 19:00",id:"200"},
	    {text:"DEL",  start_date:"2018-12-25 09:00", end_date:"2018-12-25 10:00",id:"300"}
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

app.get('/demo-get-employees', function(req, res, next) {
	res.send({
	   "msg": "employee list",
	   "success": true,
	   "data": [{"key":"3","label":"UNASSIGNED","open":true,"children":[{"key":"unassigned","label":"Unassigned"}]},{"label":"LeaderShip","open":true,"children":[{"key":"5c09026caa6f1a6e5393bcc6","label":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDEOKhoTuIKw3ul9CZSKBGkFS0--SgvwFRYzVnFu0gmr0G40FdQ, Ashley, Palovik, -,O-7:00 AM - 4:00 PM","jobRank":15,"firstName":"Ashley","shiftTime":"2019-01-29 12:00 AM"},{"key":"5c090277aa6f1a6e5393f606","label":"http://localhost:3030/image/4af5b996-37a2-499a-9ab9-a7f53e718840.png, Lindsey, Verse, 7:00 AM - 4:00 PM","jobRank":5,"firstName":"Lindsey","shiftTime":"2019-01-29 7:00 AM"},{"key":"5c090278aa6f1a6e5393fa7a","label":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDEOKhoTuIKw3ul9CZSKBGkFS0--SgvwFRYzVnFu0gmr0G40FdQ, Marion, Ashmore, 11:15 AM - 8:15 PM","jobRank":15,"firstName":"Marion","shiftTime":"2019-01-29 11:15 AM"}],"groupRank":2,"key":"11"},{"label":"Design Experience","open":true,"children":[{"key":"5c09027aaa6f1a6e53940259","label":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDEOKhoTuIKw3ul9CZSKBGkFS0--SgvwFRYzVnFu0gmr0G40FdQ, Myrlene, Leiataua, 11:15 AM - 8:15 PM","jobRank":25,"firstName":"Myrlene","shiftTime":"2019-01-29 11:15 AM"},{"key":"5c09027caa6f1a6e53940f56","label":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDEOKhoTuIKw3ul9CZSKBGkFS0--SgvwFRYzVnFu0gmr0G40FdQ, Ryan, Reyes, 11:15 AM - 8:15 PM","jobRank":25,"firstName":"Ryan","shiftTime":"2019-01-29 11:15 AM"}],"groupRank":3,"key":"4"},{"label":"Design Atelier","open":true,"children":[{"key":"5c090275aa6f1a6e5393e753","label":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDEOKhoTuIKw3ul9CZSKBGkFS0--SgvwFRYzVnFu0gmr0G40FdQ, Jordan, Hansen, 8:00 AM - 5:00 PM","jobRank":55,"firstName":"Jordan","shiftTime":"2019-01-29 8:00 AM"},{"key":"5c090277aa6f1a6e5393f4dd","label":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDEOKhoTuIKw3ul9CZSKBGkFS0--SgvwFRYzVnFu0gmr0G40FdQ, Leonardo, Herruzo, 8:30 AM - 5:30 PM","jobRank":40,"firstName":"Leonardo","shiftTime":"2019-01-29 8:30 AM"},{"key":"5c090277aa6f1a6e5393f346","label":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDEOKhoTuIKw3ul9CZSKBGkFS0--SgvwFRYzVnFu0gmr0G40FdQ, Laura, Mahar, 8:30 AM - 5:30 PM","jobRank":45,"firstName":"Laura","shiftTime":"2019-01-29 8:30 AM"},{"key":"5c090275aa6f1a6e5393e6c1","label":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDEOKhoTuIKw3ul9CZSKBGkFS0--SgvwFRYzVnFu0gmr0G40FdQ, Jolynn, Hansen, 8:30 AM - 5:30 PM","jobRank":45,"firstName":"Jolynn","shiftTime":"2019-01-29 8:30 AM"},{"key":"5c09026caa6f1a6e5393be80","label":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDEOKhoTuIKw3ul9CZSKBGkFS0--SgvwFRYzVnFu0gmr0G40FdQ, Bessie, Stavropoulos, 8:30 AM - 5:30 PM","jobRank":45,"firstName":"Bessie","shiftTime":"2019-01-29 8:30 AM"},{"key":"5c090272aa6f1a6e5393d992","label":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDEOKhoTuIKw3ul9CZSKBGkFS0--SgvwFRYzVnFu0gmr0G40FdQ, Gloria, Kiss, 8:30 AM - 5:30 PM","jobRank":45,"firstName":"Gloria","shiftTime":"2019-01-29 8:30 AM"},{"key":"5c09026baa6f1a6e5393b898","label":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDEOKhoTuIKw3ul9CZSKBGkFS0--SgvwFRYzVnFu0gmr0G40FdQ, Andrea, Driver, 8:30 AM - 5:30 PM","jobRank":50,"firstName":"Andrea","shiftTime":"2019-01-29 8:30 AM"}],"groupRank":4,"key":"5"},{"label":"Trade","open":true,"children":[{"key":"5c09027caa6f1a6e53940e39","label":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDEOKhoTuIKw3ul9CZSKBGkFS0--SgvwFRYzVnFu0gmr0G40FdQ, Rosana, Berger, 8:30 AM - 5:30 PM","jobRank":55,"firstName":"Rosana","shiftTime":"2019-01-29 8:30 AM"}],"groupRank":5,"key":"6"},{"label":"Support","open":true,"children":[{"key":"5c09027caa6f1a6e53940d8f","label":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDEOKhoTuIKw3ul9CZSKBGkFS0--SgvwFRYzVnFu0gmr0G40FdQ, Roland, Lopez, 7:00 AM - 4:00 PM","jobRank":85,"firstName":"Roland","shiftTime":"2019-01-29 7:00 AM"}],"groupRank":7,"key":"8"},{"label":"Curating","open":true,"children":[{"key":"5c090272aa6f1a6e5393d9dd","label":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDEOKhoTuIKw3ul9CZSKBGkFS0--SgvwFRYzVnFu0gmr0G40FdQ, Gregory, Abplanalp-Cowan, 7:00 AM - 12:00 PM","jobRank":105,"firstName":"Gregory","shiftTime":"2019-01-29 7:00 AM"},{"key":"5c090277aa6f1a6e5393f1d5","label":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDEOKhoTuIKw3ul9CZSKBGkFS0--SgvwFRYzVnFu0gmr0G40FdQ, Kristina-Marie, McGraw, 11:15 AM - 8:15 PM","jobRank":105,"firstName":"Kristina-Marie","shiftTime":"2019-01-29 11:15 AM"}],"groupRank":8,"key":"9"},{"label":"Facilities","open":true,"children":[{"key":"5c090271aa6f1a6e5393d16a","label":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDEOKhoTuIKw3ul9CZSKBGkFS0--SgvwFRYzVnFu0gmr0G40FdQ, Dukenghia, Truong, 7:00 AM - 4:00 PM","jobRank":115,"firstName":"Dukenghia","shiftTime":"2019-01-29 7:00 AM"},{"key":"5c09026aaa6f1a6e5393b64a","label":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDEOKhoTuIKw3ul9CZSKBGkFS0--SgvwFRYzVnFu0gmr0G40FdQ, Alma, Aldana, 7:00 AM - 4:00 PM","jobRank":115,"firstName":"Alma","shiftTime":"2019-01-29 7:00 AM"},{"key":"5c090274aa6f1a6e5393e303","label":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDEOKhoTuIKw3ul9CZSKBGkFS0--SgvwFRYzVnFu0gmr0G40FdQ, Jenny, Castillo, 11:15 AM - 8:15 PM","jobRank":115,"firstName":"Jenny","shiftTime":"2019-01-29 11:15 AM"}],"groupRank":9,"key":"10"}]
	});
});

app.get('/demo-get-activities', function(req, res, next) {
	res.send({
	   "msg": "activity list",
	   "success": true,
	   "data": [{"start_date":"2019-01-29 11:00:00","end_date":"2019-01-29 12:00:00","section_id":"5c09026caa6f1a6e5393bcc6","text":"MB","resizeable":false,"draggable":false,"id":"5c2c5931b0770d02f45695e1"},{"start_date":"2019-01-29 15:15:00","end_date":"2019-01-29 16:15:00","section_id":"5c09027caa6f1a6e53940f56","text":"MB","resizeable":false,"draggable":false,"id":"5c2c5931b0770d02f45695e9"},{"start_date":"2019-01-29 15:15:00","end_date":"2019-01-29 16:15:00","section_id":"5c09027aaa6f1a6e53940259","text":"MB","resizeable":false,"draggable":false,"id":"5c2c5931b0770d02f456960b"},{"start_date":"2019-01-29 11:30:00","end_date":"2019-01-29 12:30:00","section_id":"5c09026baa6f1a6e5393b898","text":"MB","resizeable":false,"draggable":false,"id":"5c2c5931b0770d02f4569629"},{"start_date":"2019-01-29 11:00:00","end_date":"2019-01-29 12:00:00","section_id":"5c090271aa6f1a6e5393d16a","text":"MB","resizeable":false,"draggable":false,"id":"5c2c5931b0770d02f456962c"},{"start_date":"2019-01-29 12:00:00","end_date":"2019-01-29 13:00:00","section_id":"5c090277aa6f1a6e5393f4dd","text":"MB","resizeable":false,"draggable":false,"id":"5c2c5931b0770d02f4569649"},{"start_date":"2019-01-29 15:15:00","end_date":"2019-01-29 16:15:00","section_id":"5c090271aa6f1a6e5393d4e8","text":"MB","resizeable":false,"draggable":false,"id":"5c2c5931b0770d02f456964a"},{"start_date":"2019-01-29 11:30:00","end_date":"2019-01-29 12:30:00","section_id":"5c09026caa6f1a6e5393be80","text":"MB","resizeable":false,"draggable":false,"id":"5c2c5931b0770d02f4569668"},{"start_date":"2019-01-29 13:00","end_date":"2019-01-29 14:00","section_id":"5c090275aa6f1a6e5393e753","text":"MB","location":null,"clientService":[],"activityTypeArray":[],"resizeable":false,"draggable":false,"id":"5c2c5931b0770d02f456967a"},{"start_date":"2019-01-29 12:30:00","end_date":"2019-01-29 13:30:00","section_id":"5c090272aa6f1a6e5393d992","text":"MB","resizeable":false,"draggable":false,"id":"5c2c5931b0770d02f456967f"},{"start_date":"2019-01-29 11:00:00","end_date":"2019-01-29 12:00:00","section_id":"5c09027caa6f1a6e53940d8f","text":"MB","resizeable":false,"draggable":false,"id":"5c2c5932b0770d02f45696a6"},{"start_date":"2019-01-29 11:00:00","end_date":"2019-01-29 12:00:00","section_id":"5c09026aaa6f1a6e5393b64a","text":"MB","resizeable":false,"draggable":false,"id":"5c2c5932b0770d02f45696aa"},{"start_date":"2019-01-29 12:30:00","end_date":"2019-01-29 13:30:00","section_id":"5c090277aa6f1a6e5393f346","text":"MB","resizeable":false,"draggable":false,"id":"5c2c5932b0770d02f45696ce"},{"start_date":"2019-01-29 11:30:00","end_date":"2019-01-29 12:30:00","section_id":"5c09027caa6f1a6e53940e39","text":"MB","resizeable":false,"draggable":false,"id":"5c2c5932b0770d02f45696e1"},{"start_date":"2019-01-29 15:15:00","end_date":"2019-01-29 16:15:00","section_id":"5c090274aa6f1a6e5393e303","text":"MB","resizeable":false,"draggable":false,"id":"5c2c5932b0770d02f45696f4"},{"start_date":"2019-01-29 15:15:00","end_date":"2019-01-29 16:15:00","section_id":"5c090278aa6f1a6e5393fa7a","text":"MB","resizeable":false,"draggable":false,"id":"5c2c5932b0770d02f456972d"},{"start_date":"2019-01-29 12:00:00","end_date":"2019-01-29 13:00:00","section_id":"5c090277aa6f1a6e5393f606","text":"MB","resizeable":false,"draggable":false,"id":"5c2c5932b0770d02f4569736"},{"start_date":"2019-01-29 12:30:00","end_date":"2019-01-29 13:30:00","section_id":"5c090275aa6f1a6e5393e6c1","text":"MB","resizeable":false,"draggable":false,"id":"5c2c5932b0770d02f4569741"},{"start_date":"2019-01-29 12:00:00","end_date":"2019-01-29 13:00:00","section_id":"5c090279aa6f1a6e5393fea1","text":"MB","resizeable":false,"draggable":false,"id":"5c2c5932b0770d02f4569793"},{"start_date":"2019-01-29 15:15:00","end_date":"2019-01-29 16:15:00","section_id":"5c090277aa6f1a6e5393f1d5","text":"MB","resizeable":false,"draggable":false,"id":"5c318ebd5394640de423d2a4"},{"start_date":"2019-01-29 11:00","end_date":"2019-01-29 12:00","section_id":"5c09027caa6f1a6e53940f56","text":"TRN","location":null,"clientService":[],"activityTypeArray":[],"resizeable":false,"draggable":false,"id":"5c3fe5796a45551774a5666c"},{"start_date":"2019-01-29 11:30","end_date":"2019-01-29 13:30","section_id":"5c09027caa6f1a6e53940f56","text":"DE","location":null,"clientService":[],"activityTypeArray":[],"resizeable":false,"draggable":false,"id":"5c3fe5796a45551774a5664c"},{"start_date":"2019-01-29 13:00","end_date":"2019-01-29 14:00","section_id":"5c09027caa6f1a6e53940f56","text":"VM","location":null,"clientService":[],"activityTypeArray":[],"resizeable":false,"draggable":false,"id":"5c3fe5796a45551774a5669c"},{"start_date":"2019-01-29 11:00","end_date":"2019-01-29 12:00","section_id":"5c090272aa6f1a6e5393d9dd","text":"TRN","location":null,"clientService":[],"activityTypeArray":[],"resizeable":false,"draggable":false,"id":"5c3fe5896a45551774a5666e"},{"start_date":"2019-01-29 11:00","end_date":"2019-01-29 12:00","section_id":"5c090272aa6f1a6e5393d9dd","text":"VM","location":null,"clientService":[],"activityTypeArray":[],"resizeable":false,"draggable":false,"id":"5c1ae5896a45551774a5636e"},{"start_date":"2019-01-29 11:00","end_date":"2019-01-29 12:00","section_id":"5c090272aa6f1a6e5393d9dd","text":"CC","location":null,"clientService":[],"activityTypeArray":[],"resizeable":false,"draggable":false,"id":"5c3ae5696a45551774a5636e"},{"start_date":"2019-01-29 11:00","end_date":"2019-01-29 12:00","section_id":"5c090272aa6f1a6e5393d9dd","text":"DEL","location":null,"clientService":[],"activityTypeArray":[],"resizeable":false,"draggable":false,"id":"5c3ae5896a45551774a5636e"},{"start_date":"2019-01-29 11:00","end_date":"2019-01-29 12:00","section_id":"5c090272aa6f1a6e5393d9dd","text":"DEL","location":null,"clientService":[],"activityTypeArray":[],"resizeable":false,"draggable":false,"id":"5c3fe5896a45551774a5636e"},{"start_date":"2019-01-29 11:00","end_date":"2019-01-29 12:00","section_id":"5c090272aa6f1a6e5393d9dd","text":"CS","location":null,"clientService":[],"activityTypeArray":[],"resizeable":false,"draggable":false,"id":"5c3fe5896a45551774a5136e"},{"start_date":"2019-01-29 08:00","end_date":"2019-01-29 13:00","section_id":"5c090275aa6f1a6e5393e753","text":"CS**Office","location":"Office","clientService":[],"activityTypeArray":[],"resizeable":false,"draggable":false,"id":"5c49e7ca6a45551774a5ad07"},{"start_date":"2019-01-29 14:00","end_date":"2019-01-29 17:00","section_id":"5c090275aa6f1a6e5393e753","text":"CS**Office","location":"Office","clientService":[],"activityTypeArray":[],"resizeable":false,"draggable":false,"id":"5c49e7d76a45551774a5ad09"},{"start_date":"2019-01-29 10:30","end_date":"2019-01-29 11:00","section_id":"5c09026aaa6f1a6e5393b64a","text":"CD","location":"","clientService":[],"activityTypeArray":[],"resizeable":false,"draggable":false,"id":"5c50471a7898ec16683fe747"},{"start_date":"2019-01-29 15:30","end_date":"2019-01-29 16:30","section_id":"5c090278aa6f1a6e5393fa7a","text":"VM","location":null,"clientService":[],"activityTypeArray":[],"resizeable":false,"draggable":false,"id":"5c52e635ddb4000f60cb8acc"},{"start_date":"2019-01-29 15:30","end_date":"2019-01-29 16:30","section_id":"5c09027aaa6f1a6e53940259","text":"VM","location":null,"clientService":[],"activityTypeArray":[],"resizeable":false,"draggable":false,"id":"5c52e7c6ddb4000f60cb8acd"},{"start_date":"2019-01-29 11:30","end_date":"2019-01-29 12:30","section_id":"5c09027caa6f1a6e53940e39","text":"DEL","location":null,"clientService":[],"activityTypeArray":[],"resizeable":false,"draggable":false,"id":"5c52e843ddb4000f60cb8ace"},{"start_date":"2019-01-29 11:30","end_date":"2019-01-29 12:30","section_id":"5c09027caa6f1a6e53940d8f","text":"VM","location":null,"clientService":[],"activityTypeArray":[],"resizeable":false,"draggable":false,"id":"5c52e907ddb4000f60cb8acf"},{"start_date":"2019-01-29 10:30","end_date":"2019-01-29 11:30","section_id":"5c09026aaa6f1a6e5393b64a","text":"VM","location":null,"clientService":[],"activityTypeArray":[],"resizeable":false,"draggable":false,"id":"5c52e994ddb4000f60cb8ad0"}]
	});
});
app.listen(process.env.PORT || 8000);
