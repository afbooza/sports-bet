--DROP TABLE league;
CREATE TABLE league(
	league_id int IDENTITY(1,1) PRIMARY KEY,
	name VARCHAR(250) UNIQUE NOT NULL	
);


CREATE TABLE player(
	player_id int IDENTITY(1,1) PRIMARY KEY,
	name VARCHAR(250) NOT NULL
);


CREATE TABLE league_player(
	league_id int REFERENCES league(league_id) ON UPDATE CASCADE ON DELETE CASCADE,
	player_id int REFERENCES player(player_id) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT league_player_pkey PRIMARY KEY (league_id, player_id) 
);


--DROP TABLE song CASCADE;
CREATE TABLE song(
	song_id int IDENTITY(1,1) PRIMARY KEY,
	name VARCHAR(250) NOT NULL,
	location VARCHAR(500),
	score int NOT NULL,
	play_id INTEGER
);



--DROP TABLE play CASCADE;
CREATE TABLE play(
	play_id int IDENTITY(1,1) PRIMARY KEY,
	song_name VARCHAR(250),
	length decimal,
	location VARCHAR(250)
);






