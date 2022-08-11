function createEmployeeRecord(array) {
    let employee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee
}

function createEmployeeRecords(arrays) {
    return arrays.map(array => createEmployeeRecord(array))
}

function createTimeInEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ');
    let eventObj = {
        type: 'TimeIn',
        hour: parseInt(hour, 0),
        date: date
    }
    this.timeInEvents.push(eventObj)
    return this
}

function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ');
    let eventObj = {
        type: 'TimeOut',
        hour: parseInt(hour, 0),
        date: date
    }
    this.timeOutEvents.push(eventObj)
    return this
}

function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(e => e.date === date)
    let timeOut = this.timeOutEvents.find(e => e.date === date)
    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(date) {
    let hours = hoursWorkedOnDate.call(this, date)
    return this.payPerHour * hours
}

function findEmployeeByFirstName(srcArr, firstName) {
    return srcArr.find(arr => arr.firstName === firstName)
}

function calculatePayroll(employeeRec) {
    return employeeRec.map(employee => allWagesFor.call(employee)).reduce((value, sum) => value + sum)
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

