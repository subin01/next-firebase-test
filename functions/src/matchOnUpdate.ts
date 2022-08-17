import { getFirestore } from 'firebase-admin/firestore';
import { info, error } from 'firebase-functions/lib/logger';
import { getMessaging } from 'firebase-admin/messaging';
// import { ISuccessResponse, IErrorResponse } from '../../shared/types'
// import { SuccessResponse, ErrorResponse } from './Response'

import * as admin from 'firebase-admin';
// // @ts-ignore
const app = !admin.apps.length ? admin.initializeApp() : admin.app();
const db = getFirestore(app);

export async function matchOnUpdate(change: any) {
  const match = change.after.data();
  info('::::::::START', match);
  const gameRoomId = match.id;
  const gameRoomRef = db.collection('gameRooms').doc(gameRoomId);

  const gameRoomDoc = await gameRoomRef.get();

  if (!gameRoomDoc.exists) {
    error('Could not find gameRoom for ', match);
    return;
  }
  const gameRoom = gameRoomDoc.data() || {};
  const registrationTokens = gameRoom.fcmTokens || [];
  info('::::::::registrationTokens: ', registrationTokens);

  const message = {
    data: { score: '850', time: '2:45' },
    notification: {
      title: `Match: ${match.name}`,
      body: `Status updated to ${match.status}`,
    },
    tokens: registrationTokens,
  };

  getMessaging()
    .sendMulticast(message)
    .then((response) => {
      info(
        response.successCount + ' messages were sent successfully',
        response
      );
    });

  // await gameRoomRef.set(updatedGameRoomObj, { merge: true })
}
