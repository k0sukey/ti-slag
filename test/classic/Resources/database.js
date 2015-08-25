var db = Ti.Database.open('TEST'),
	result = db.execute('SELECT * FROM test');

while (result.isValidRow()) {
	result.next();
}

result.close();
db.close();