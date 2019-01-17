var express = require('express');
var app = express();
var pg = require('pg');
var udm = new pg.Pool({ // DB : udm
	user: 'postgres',
	host: 'localhos',
	database: 'postgres',
	password: 'choi',
	port: '5432',
	application_name: 'udmtek_in'
}); 

var obj = new Object();

app.listen(14101, function (err, res) {
	console.log("server is running ...")
});

app.get('/aa', function (req, res) {
	console.log('/aa');
});	

app.get('/bb', function (req, res) {   //
	console.log('okok');
	res.send('okok');
});

app.get('/carid', (req, res) => {
	obj = new Object();
	udm.connect(function (err, client, done) {
		client.query(
			'select carid ' +
			'from smallsuv ' +
			'where brand = \'' + req.query.br + '\''
			, function (err, result) {
				done();  
				obj.code = "carid";
				obj.data = result.rows;
				res.send(JSON.stringify(obj));  
				console.log('/carid');   //test 용
			});
	});

});

app.get('/brand', (req, res) => {
	obj = new Object();  // code & data가 있음
	udm.connect(function (err, client, done) {
		client.query(
			'select brand from smallsuv '

			, function (err, result) {
				done();
				obj.code = "brand";
				obj.data = result.rows;
				res.send(JSON.stringify(obj));
				console.log('/brand');
			});
	});

});


app.get('/carinfor', (req, res) => {
	obj = new Object();
	udm.connect(function (err, client, done) {
		client.query(
			'select carid,price,release,size,type,oil,mileage,hp ' +
			'from smallsuv ' +
			'where carid = \'' + req.query.car + '\''
			, function (err, result) {
				done();
				obj.code = "carinfor";
				obj.data = result.rows;
				res.send(JSON.stringify(obj));
				console.log('/carinfor');   //test 용
			});
	});

});

app.get('/caridlist', (req, res) => {
	obj = new Object();
	udm.connect(function (err, client, done) {
		client.query(
			'select carid ' +
			'from smallsuv '
			, function (err, result) {
				done();
				obj.code = "caridlist";
				obj.data = result.rows;
				res.send(JSON.stringify(obj));
				console.log('/caridlist');   //test 용
			});
	});

});

app.get('/caridlist1', (req, res) => {
	obj = new Object();
	udm.connect(function (err, client, done) {
		client.query(
			'select carid ' +
			'from smallsuv ' +
			'where not carid = \'' + req.query.caridd + '\''
			, function (err, result) {
				done();
				obj.code = "caridlist1";
				obj.data = result.rows;
				res.send(JSON.stringify(obj));
				console.log('/caridlist1');   //test 용
			});
	});

});
app.get('/carinfor2', (req, res) => {
	obj = new Object();
	udm.connect(function (err, client, done) {
		client.query(
			'select carid,price,release,size,type,oil,mileage,hp ' +
			'from smallsuv ' +
			'where carid = \'' + req.query.car + '\''
			, function (err, result) {
				done();
				obj.code = "carinfor2";
				obj.data = result.rows;
				res.send(JSON.stringify(obj));
				console.log('/carinfor2');   //test 용
			});
	});

}); app.get('/carinfor3', (req, res) => {
	obj = new Object();
	udm.connect(function (err, client, done) {
		client.query(
			'select carid,price,release,size,type,oil,mileage,hp ' +
			'from smallsuv ' +
			'where carid = \'' + req.query.car + '\''
			, function (err, result) {
				done();
				obj.code = "carinfor3";
				obj.data = result.rows;
				res.send(JSON.stringify(obj));
				console.log('/carinfor3');   //test 용
			});
	});

});

 //values(\'' + req.query.brand + '\', \'carid\')
app.get('/user', (req, res) => {
	obj = new Object();
	udm.connect(function (err, client, done) {
		client.query(
			'insert into suvuser ' +
			'values(\'' + req.query.brand + '\', \'' + req.query.carid + '\' , \'' + req.query.price + '\', \'' + req.query.release + '\', \'' + req.query.size + '\', \'' + req.query.type + '\', \'' + req.query.oil + '\', \'' + req.query.mileage + '\',\'' + req.query.hp + '\') '
		                                                        
			, function (err, result) {
				done();	
				obj.code = "user";
				obj.data = result.rows;
				res.send(JSON.stringify(obj));
				console.log('/user');   //test 용
			});
	});

});


app.get('/user_d', (req, res) => {
	obj = new Object();
	udm.connect(function (err, client, done) {
		client.query(
			'delete from suvuser'
			, function (err, result) {
				done();
				obj.code = "user_d";
				obj.data = result.rows;
				res.send(JSON.stringify(obj));
				console.log('/user_d');   //test 용
			});
	});

});
////

app.get('/user_in', (req, res) => {
	obj = new Object();
	udm.connect(function (err, client, done) {
		client.query(
			'select brand from suvuser '
			, function (err, result) {
				done();
				obj.code = "user_in";
				obj.data = result.rows;
				res.send(JSON.stringify(obj));
				console.log('/user_in');   //test 용
			});
	});

});

app.get('/mycarinfor', (req, res) => {
	obj = new Object();
	udm.connect(function (err, client, done) {
		client.query(
			'select carid,price,release,size,type,oil,mileage,hp ' +
			'from suvuser ' 
		
			, function (err, result) {
				done();
				obj.code = "mycarinfor";
				obj.data = result.rows;
				res.send(JSON.stringify(obj));
				console.log('/mycarinfor');   //test 용
			});
	});

});