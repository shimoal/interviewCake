// Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.
// To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as a tuple of integers (start_time, end_time) . These integers represent the number of 30-minute blocks past 9:00am.


//ex: [(0, 1), (3, 5), (4, 8), (10, 12), (9, 10)]


function mergeMeetings(meetings) {

  meetings.sort(function(meetingA, meetingB) {
    return meetingA[0] > meetingB[0]
  });

  var i = 0;
  while (i < meetings.length - 1) {
    var meeting = meetings[i];
    var nextMeeting = meetings[i+1];

    if (nextMeeting[0] <= meeting[1]) {
      meetings[i] = merge(nextMeeting, meeting);
      meetings.splice(i+1, 1);
    } else {
      i++;
    }
  }
  return meetings;
}


function merge(meetingOne, meetingTwo) {
  return [Math.min(meetingOne[0], meetingTwo[0]), Math.max(meetingOne[1], meetingTwo[1])];
}


module.exports = mergeMeetings;