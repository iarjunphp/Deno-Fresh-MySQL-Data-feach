import { Database, MySQLConnector } from 'denodb/mod.ts';
import User from './User.ts';

const connector = new MySQLConnector({
  database: 'your_database_name',
  host: 'localhost',
  username: 'root',
  password: '',
  port: 3306, // optional
});

const db = new Database(connector, true);

db.link([User]);
db.sync();
//db.sync({ drop: true });
const models = {
  user: User
}
export {db, models};