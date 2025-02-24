function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arrays) {
   return arrays.map(array => createEmployeeRecord(array))
}

function createTimeInEvent(timeStamp) {
    let [date, hour] = timeStamp.split(" ")
    let timeInObj = {
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    }
    this.timeInEvents.push(timeInObj)
    return this
}

function createTimeOutEvent(timeStamp) {
    let [date, hour] = timeStamp.split(" ")
    let timeOutObj = {
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    }
    this.timeOutEvents.push(timeOutObj)
    return this
}

function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(event => event.date === date)
    let timeOut = this.timeOutEvents.find(event => event.date === date)
    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(date) {
    let timeWorked = hoursWorkedOnDate.call(this, date)
    return this.payPerHour * timeWorked
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(element => element.firstName === firstName)
}

function calculatePayroll(array) {
    return array.map(employee => allWagesFor.call(employee)).reduce((val, sum) => val + sum)
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
























// function createEmployeeRecord(array) {
//     let employee = {
//         firstName: array[0],
//         familyName: array[1],
//         title: array[2],
//         payPerHour: array[3],
//         timeInEvents: [],
//         timeOutEvents: []
//     }
//     return employee
// }

// function createEmployeeRecords(arrays) {
//     return arrays.map(array => createEmployeeRecord(array))
// }

// function createTimeInEvent(dateStamp) {
//     let [date, hour] = dateStamp.split(' ');
//     let eventObj = {
//         type: 'TimeIn',
//         hour: parseInt(hour, 0),
//         date: date
//     }
//     this.timeInEvents.push(eventObj)
//     return this
// }

// function createTimeOutEvent(dateStamp) {
//     let [date, hour] = dateStamp.split(' ');
//     let eventObj = {
//         type: 'TimeOut',
//         hour: parseInt(hour, 0),
//         date: date
//     }
//     this.timeOutEvents.push(eventObj)
//     return this
// }

// function hoursWorkedOnDate(date) {
//     let timeIn = this.timeInEvents.find(e => e.date === date)
//     let timeOut = this.timeOutEvents.find(e => e.date === date)
//     return (timeOut.hour - timeIn.hour) / 100
// }

// function wagesEarnedOnDate(date) {
//     let hours = hoursWorkedOnDate.call(this, date)
//     return this.payPerHour * hours
// }

// function findEmployeeByFirstName(srcArr, firstName) {
//     return srcArr.find(arr => arr.firstName === firstName)
// }

// function calculatePayroll(employeeRec) {
//     return employeeRec.map(employee => allWagesFor.call(employee)).reduce((value, sum) => value + sum)
// }