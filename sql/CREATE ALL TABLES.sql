--DROP TABLE league;
CREATE TABLE league(
	league_id serial PRIMARY KEY,
	name VARCHAR(250) UNIQUE NOT NULL	
);


CREATE TABLE player(
	player_id serial PRIMARY KEY,
	name VARCHAR(250) NOT NULL
);

--DROP TABLE song CASCADE;
CREATE TABLE song(
	song_id serial PRIMARY KEY,
	name VARCHAR(250) NOT NULL,
	location VARCHAR(500),
	score int NOT NULL,
	play_id INTEGER
);


--DROP TABLE play CASCADE;
CREATE TABLE play(
	play_id serial PRIMARY KEY,
	song_name VARCHAR(250),
	length decimal,
	location VARCHAR(250)
);



