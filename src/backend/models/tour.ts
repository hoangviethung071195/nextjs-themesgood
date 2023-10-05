import db from '../db/db';

export const Tour = db.then(r => r.collection('tours'));