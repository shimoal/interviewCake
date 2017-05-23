// Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.
// To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as a tuple of integers (start_time, end_time) . These integers represent the number of 30-minute blocks past 9:00am.


//ex: [(0, 1), (3, 5), (4, 8), (10, 12), (9, 10)]


function mergeMeetings(meetings) {
  var finalSchedule = [];

  for (var i = 0; i < meetings.length; i++) {
    var meeting = meetings[i];
    var merged = false;
    
    finalSchedule.forEach(function(finalMeeting, j){
      if (finalMeeting[1] >= meeting[0]) {
        finalSchedule[j] = merge(finalMeeting, meeting);
        merged = true;
      } 
    });
    if (!merged) {
      finalSchedule.push(meeting);
    }
  }

  return finalSchedule;
}

function merge(meetingOne, meetingTwo) {
  return [Math.min(meetingOne[0], meetingTwo[0]), Math.max(meetingOne[1], meetingTwo[1])];
}


module.exports = mergeMeetings;