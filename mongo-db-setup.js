print();
print();
print('Start DB Setup ######################################################');

db = db.getSiblingDB('bookcurator');
db.createUser(
  {
    user: 'bookcurator',
    pwd: 'bookcurator',
    roles: [{ role: 'readWrite', db: 'bookcurator' }],
  },
);
db.createCollection('users');

print('END DB Setup #########################################################');
print();
print();
