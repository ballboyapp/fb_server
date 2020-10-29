import { CtxMe, activityModel } from '../../types'
import { createActivity } from './create-activity'
// const updateActivity = require('./update-activity');
// const cancelActivity = require('./cancel-activity');
// const addAttendee = require('./add-attendee');
// const removeAttendee = require('./remove-attendee');
import { getActivities } from './get-activities'
import { getActivityDetails } from './get-activity-details'
// const getSpotActivities = require('./get-spot-activities');
// const setChatRoomId = require('./set-chat-room-id');

export const genActivityModel
  : (ctx: CtxMe) => activityModel
  = (ctxMe) => ({
    createActivity: args => createActivity(ctxMe, args),
    // updateActivity: args => updateActivity(ctxMe, args),
    // cancelActivity: args => cancelActivity(ctxMe, args),
    // addAttendee: args => addAttendee(ctxMe, args),
    // removeAttendee: args => removeAttendee(ctxMe, args),
    getActivities: args => getActivities(args),
    // getSpotActivities: args => getSpotActivities(ctxMe, args),
    getActivityDetails: args => getActivityDetails(args),
    // setChatRoomId: args => setChatRoomId(ctxMe, args),
  })
