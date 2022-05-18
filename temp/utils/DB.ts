import Dexie from 'dexie'

const db = new Dexie('bioplastik')

db.version(1).stores({
    data: 'key, value'
});

export default db