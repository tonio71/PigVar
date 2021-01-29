module.exports = {
    database:{
            name: 'pigvar',
            user: 'root',
            password: '@Rubelia73',
            host: '127.0.0.1',
            dialect: 'mysql',
			port:3306,
			
			//dados para pool de até 10 conexoes
			waitForConnections: true,
			connectionLimit: 10,
            queueLimit: 0,

    }
}