const db = require('./database')



db.serialize(()=>{
	const dropTablePlayerInfo = 'DROP TABLE player_info'
	const createTablePlayerInfo = 'CREATE TABLE IF NOT EXISTS player_info (char_name TEXT, player_name TEXT, score INTEGER)'
	
	db.run(dropTablePlayerInfo, (err)=>{
		if(err){
			console.log('Failed to drop player_info table')
		}else{
			console.log('Dropped player_info table')
		}
	})

	db.run(createTablePlayerInfo, (err)=>{
		if(err){
			console.log('Failed to create player_info table')
		}else{
			console.log('Created player_info table')
		}
	})
})