/*POPULATE VALUES INTO play */
--INSERT INTO play VALUES (DEFAULT, 'Antonio');


--GET ALL playS
PREPARE get_all_plays AS
	select * from play;
--EXECUTE get_all_plays

--GET play BY ID
PREPARE get_play_by_id (int) AS
	select * from play
	where play_id = $1;
--EXECUTE get_play_by_id(1);

--CREATE NEW play
--DEALLOCATE insert_new_play
PREPARE insert_new_play(text, decimal, text) AS
	INSERT INTO play
	VALUES (DEFAULT,$1, $2, $3);
--EXECUTE insert_new_play('test', 12.33, 3);


--UPDATE play SONG_NAME BY ID
PREPARE update_play_name AS
	UPDATE play 
	SET SONG_NAME = $1
	where play_ID = $2;
--EXECUTE update_play_name('test', 3);

--DELETE play BY SONG_NAME
PREPARE delete_play_by_name AS
	DELETE FROM play
	WHERE SONG_NAME = $1;
--EXECUTE delete_play_by_name('test');

--DELETE play BY ID
PREPARE delete_play_by_id AS
	DELETE FROM play
	WHERE play_id = $1;
--EXECUTE delete_play_by_id(1)