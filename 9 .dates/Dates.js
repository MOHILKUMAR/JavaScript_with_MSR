
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Date 
// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

// // typeof  Date 
// console.log(typeof myDate);  //object 

// month are started with 0;
// _____________________________________________________________

//1. Several ways to create a Date object

// const today = new Date();
// console.log(today)

// const birthday = new Date("December 17, 1995 03:24:00"); // DISCOURAGED: may not work in all runtimes
// console.log(birthday);

// const birthday2 = new Date("1995-12-17T03:24:00"); // This is standardized and will work reliably
// console.log(birthday2);

// const birthday3 = new Date(1995, 11, 17); // the month is 0-indexed //yy-mm--dd
// console.log(birthday3);

//// india me iss ko jadya follow kar hai  MM-DD-YY
// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());

// const birthday4 = new Date(1995, 11, 17, 3, 24, 0);  //Sun Dec 17 1995 03:24:00 GMT+0530 (India Standard Time)
// console.log(birthday4);

// const birthday5 = new Date(628021800000); // passing epoch timestamp
// console.log(birthday5);

// ______________________________________________________________

// Formats of toString method return values

// const date = new Date("2020-05-12T23:50:21.817Z");

// //a) Date convert in to tostring()
// console.log(date.toString()); // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)

// // b) Date convert into toDateString()
// console.log(date.toDateString());// Tue May 12 2020

// // c) Date convert into toTimeString(); 
// console.log(date.toTimeString()); // 18:50:21 GMT-0500 (Central Daylight Time)

// // d) Date convert into toPrimitive
// console.log(date[Symbol.toPrimitive]("string")); // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)

// // e) Date convert in toISOString()
// console.log(date.toISOString()); // 2020-05-12T23:50:21.817Z

// f)date convert in toJson()
// console.log(date.toJSON()); // 2020-05-12T23:50:21.817Z

// g) date convert into tiUTCString();
// console.log(date.toUTCString()); // Tue, 12 May 2020 23:50:21 GMT

// h) date convert toLocaleString() 
// console.log(date.toLocaleString()); // 5/12/2020, 5:50:21 AM

// f) date convert into toLocaleString()
// console.log(date.toLocaleDateString()); // 5/12/2020

// g) date convert into toLocaleString();
// console.log(date.toLocaleTimeString()); // 6:50:21 PM

// ____________________________________________________________

// //4. Timestamp
// let myTimeStamp  = Date.now();
// console.log(myTimeStamp);

// //5. if i want to milisec convert into seconds 
// console.log(Math.floor(Date.now()/1000)); //  problem hai iss me ki yeah decimal values ko bhi provide kar deta hai

// In this case, it's important to return only an integer—so a simple division won't do. It's also important to only return actually elapsed seconds. (That's why this code uses Math.floor(), and not Math.round().)

// ____________________________________________________________
//6. To get Date,Day,Month and Year 

// 1.Date.prototype.getDate()

// The getDate() method of Date instances returns the day of the month for this date according to local time.

// const birthday = new Date('August 19, 1975 23:15:30');
// const date1 = birthday.getDate();

// console.log(date1);
// // Expected output: 19

// 2.Date.prototype.getDay()

// The getDay() method of Date instances returns the day of the week for this date according to local time, where 0 represents Sunday. For the day of the month, see Date.prototype.getDate().

// const birthday = new Date('August 19, 1975 23:15:30');
// const day1 = birthday.getDay();
// // Sunday - Saturday : 0 - 6
// console.log(day1);
// // Expected output: 2 //tuesday = 2

// example 

// const valentines = new Date("1995-02-14");
// const day = valentines.getDay();
// const dayNames = ["Sunday", "Monday", "Tuesday" /* , … */];

// console.log(dayNames[day]); // "Monday"

// 3) .getFullYear()

// The getFullYear() method of Date instances returns the year for this date according to local time.

// const moonLanding = new Date('July 20, 69 00:20:18');
// console.log(moonLanding.getFullYear());
// // Expected output: 1969

// 4).getMonth()

// The getMonth() method of Date instances returns the month for this date according to local time, as a zero-based value (where zero indicates the first month of the year).

// const moonLanding = new Date('July 20, 69 00:20:18');
// console.log(moonLanding.getMonth()); // (January gives 0)
// // Expected output: 6

// 7.)Time, hours, minutes, second, milisecond.

// 1) .getTime()

// The getTime() method of Date instances returns the number of milliseconds for this date since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC

// const moonLanding = new Date('July 20, 69 20:17:40 GMT+00:00');

// // Milliseconds since Jan 1, 1970, 00:00:00.000 GMT
// console.log(moonLanding.getTime());
// // Expected output: -14182940000 , in milliseconds, of this date. Returns

// 2) .getHours()
// The getHours() method of Date instances returns the hours for this date according to local time.

// const birthday = new Date('March 13, 08 04:20');

// console.log(birthday.getHours());
// // Expected output: 4

// 3..getMinutes ()
// The getMinutes() method of Date instances returns the minutes for this date according to local time.

// const birthday = new Date('March 13, 08 04:20');

// console.log(birthday.getMinutes());
// // Expected output: 20

// 4) .getSeconds()
// The getSeconds() method of Date instances returns the seconds for this date according to local time.

// const moonLanding = new Date('July 20, 69 00:20:18');

// console.log(moonLanding.getSeconds());
// // Expected output: 18

// 5) .getMilliseconds
// The getMilliseconds() method of Date instances returns the milliseconds for this date according to local time.

// const moonLanding = new Date('July 20, 69 00:20:18');
// moonLanding.setMilliseconds(123);

// console.log(moonLanding.getMilliseconds());
// // Expected output: 123

// const xmas95 = new Date("1995-12-25T23:15:30");
// const milliseconds = xmas95.getMilliseconds();

// console.log(milliseconds); // 0

// examples
//a) const date = new Date("2000-01-17T16:45:30");

// const [month, day, year] = [
//   date.getMonth(),
//   date.getDate(),
//   date.getFullYear(),
// ];
// console.log([month, day, year])  // [0, 17, 2000] as month are 0-indexed

// b)const [hour, minutes, seconds] = [
//   date.getHours(),
//   date.getMinutes(),
//   date.getSeconds(),
// ];
// console.log(hour, minutes, seconds); // [16, 45, 30]

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//6. To set Date,Month and Year 

// 1.Date.prototype.setDate()

// The setDate() method of Date instances changes the day of the month for this date according to local time.

// const event = new Date('August 19, 1975 23:15:30');

// event.setDate(24);

// console.log(event.getDate());
// // Expected output: 24

// event.setDate(32);
// // Only 31 days in August!

// console.log(event.getDate());
// // Expected output: 1



// 2) .setMonth()
// The setMonth() method of Date instances changes the month and/or day of the month for this date according to local time.

// const event = new Date('August 19, 1975 23:15:30');

// event.setMonth(3);

// console.log(event.getMonth());
// // Expected output: 3

// console.log(event);
// // Expected output: "Sat Apr 19 1975 23:15:30 GMT+0100 (CET)"
// // Note: your timezone may vary



// 3) .setFullYear()

// The setFullYear() method of Date instances changes the year, month, and/or day of month for this date according to local time

// const event = new Date('August 19, 1975 23:15:30');

// event.setFullYear(1969);

// console.log(event.getFullYear());
// // Expected output: 1969

// event.setFullYear(0);

// console.log(event.getFullYear());
// // Expected output: 0

// setFullYear(yearValue)
// setFullYear(yearValue, monthValue)
// setFullYear(yearValue, monthValue, dateValue)


// 7.)Time, hours, minutes, second, milisecond.

// 1) .setTime()

// The setTime() method of Date instances changes the timestamp for this date, which is the number of milliseconds since the epoch, defined as the midnight at the beginning of January 1, 1970, UTC.

// const launchDate = new Date('July 1, 1999, 12:00:00');
// const futureDate = new Date();
// futureDate.setTime(launchDate.getTime());

// console.log(futureDate);
// // Expected output: "Thu Jul 01 1999 12:00:00 GMT+0200 (CEST)"

// const fiveMinutesInMillis = 5 * 60 * 1000;
// futureDate.setTime(futureDate.getTime() + fiveMinutesInMillis);

// console.log(futureDate);
// // Expected output: "Thu Jul 01 1999 12:05:00 GMT+0200 (CEST)"
// // Note: your timezone may vary


// 2) .setHours()

// The setHours() method of Date instances changes the hours, minutes, seconds, and/or milliseconds for this date according to local time.

// const event = new Date('August 19, 1975 23:15:30');
// event.setHours(20);

// console.log(event);
// // Expected output: "Tue Aug 19 1975 20:15:30 GMT+0200 (CEST)"
// // Note: your timezone may vary

// event.setHours(20, 21, 22);

// console.log(event);
// // Expected output: "Tue Aug 19 1975 20:21:22 GMT+0200 (CEST)"



// 3..setMinutes()

// The setMinutes() method of Date instances changes the minutes for this date according to local time.
// const event = new Date('August 19, 1975 23:15:30');

// event.setMinutes(45);

// console.log(event.getMinutes());
// // Expected output: 45

// console.log(event);
// // Expected output: "Tue Aug 19 1975 23:45:30 GMT+0200 (CEST)"
// // Note: your timezone may vary


// 4) .setSeconds()

// The setSeconds() method of Date instances changes the seconds and/or milliseconds for this date according to local time.

// const event = new Date('August 19, 1975 23:15:30');

// event.setSeconds(42);

// console.log(event.getSeconds());
// // Expected output: 42

// console.log(event);
// // Expected output: "Sat Apr 19 1975 23:15:42 GMT+0100 (CET)"
// // Note: your timezone may vary


// 5) .setMilliseconds
// The setMilliseconds() method of Date instances changes the milliseconds for this date according to local time.

// const event = new Date('August 19, 1975 23:15:30');

// console.log(event.getMilliseconds());
// // Expected output: 0

// event.setMilliseconds(456);

// console.log(event.getMilliseconds());
// // Expected output: 456


// # UTC 
// UTC stands for Coordinated Universal Time. It is a standard used to establish time zones worldwide. For example, New York City is in the UTC-5 time zone, which means the time in NYC is five hours behind UTC (except during U.S. daylight savings, when it is four hours behind
// 1.set {
//     1).setUTCDate(), 
//     2).setUTCDay(), 
//     3).setUTCMonth(), 
//     4).setUTCFullYear(), 
//     5).setUTCTime(), 
//     6).setUTCTimezoneOff(),
//     7).setUTCHours(), 
//     8).setUTCMinutes(), 
//     9).setUTCSeconds(), 
//     10).setUTCMilliseconds() 
//  }
// 2.get{
//     1).getUTCDate(), 
//     2).getUTCDay(), 
//     3).getUTCMonth(), 
//     4).getUTCFullYear(), 
//     5).getUTCTime(), 
//     6).getUTCTimezoneOff(),
//     7).getUTCHours(), 
//     8).getUTCMinutes(), 
//     9).getUTCSeconds(), 
//     10).getUTCMilliseconds() 

// }
