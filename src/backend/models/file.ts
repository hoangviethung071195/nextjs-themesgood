import db from '../db/db';

export const File = db.then(r => r.collection('imgsrcs'));