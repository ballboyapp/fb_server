import { CtxMe, activityModel } from '../../types'
import { createActivity } from './create-activity'
import { updateActivity } from './update-activity'
import { cancelActivity } from './cancel-activity'
import { addAttendee } from './add-attendee'
import { removeAttendee } from './remove-attendee'
import { getActivities } from './get-activities'
import { getActivityDetails } from './get-activity-details'
// const getSpotActivities = require('./get-spot-activities');
// const setChatRoomId = require('./set-chat-room-id');

export const genActivityModel
  : (ctx: CtxMe) => activityModel
  = (ctxMe) => ({
    createActivity: args => createActivity(ctxMe, args),
    updateActivity: args => updateActivity(ctxMe, args),
    cancelActivity: args => cancelActivity(ctxMe, args),
    addAttendee: args => addAttendee(ctxMe, args),
    removeAttendee: args => removeAttendee(ctxMe, args),
    getActivities: args => getActivities(args),
    getActivityDetails: args => getActivityDetails(args),
    // getSpotActivities: args => getSpotActivities(ctxMe, args),
    // setChatRoomId: args => setChatRoomId(ctxMe, args),
  })
