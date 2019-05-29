/*POPULATE VALUES INTO song */
--INSERT INTO song VALUES (DEFAULT, 'Antonio');


--GET ALL songS
PREPARE get_all_songs AS
	select * from song;
--EXECUTE get_all_songs

--GET song BY ID
PREPARE get_song_by_id (int) AS
	select * from song
	where song_id = $1;
--EXECUTE get_song_by_id(1);

--CREATE NEW song
PREPARE insert_new_song(name, location, score) AS
	INSERT INTO song
	VALUES (DEFAULT,$1, $2, $3);
--EXECUTE insert_new_song('test', 'blossom', 3);


--UPDATE song NAME BY ID
PREPARE update_song_name AS
	UPDATE song 
	SET NAME = $1
	where song_ID = $2;
--EXECUTE update_song_name('test', 3);

--DELETE song BY NAME
PREPARE delete_song_by_name AS
	DELETE FROM song
	WHERE NAME = $1;
--EXECUTE delete_song_by_name('test');

--DELETE song BY ID
PREPARE delete_song_by_id AS
	DELETE FROM song
	WHERE song_id = $1;
--EXECUTE delete_song_by_id(1)