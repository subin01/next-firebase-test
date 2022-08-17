import * as functions from 'firebase-functions';

import { matchOnUpdate } from './matchOnUpdate';

// Admin Invoked functions
exports.matchOnUpdate = functions.firestore
  .document('match/{mid}')
  .onUpdate(matchOnUpdate);
