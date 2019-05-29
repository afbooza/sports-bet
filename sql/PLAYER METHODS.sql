/*POPULATE VALUES INTO player */
--INSERT INTO player VALUES (DEFAULT, 'Antonio');


--GET ALL playerS
PREPARE get_all_players AS
	select * from player
--EXECUTE get_all_players

--GET player BY ID
PREPARE get_player_by_id (int) AS
	select * from player
	where player_id = $1;
--EXECUTE get_player_by_id(1);

--CREATE NEW player
PREPARE insert_new_player(text) AS
	INSERT INTO player
	VALUES (DEFAULT,$1);
--EXECUTE insert_new_player('test');
--EXECUTE insert_new_player('test2');

--UPDATE player NAME BY ID
PREPARE update_player_name AS
	UPDATE player 
	SET NAME = $1
	where player_ID = $2;
--EXECUTE update_player_name('test', 3);

--DELETE player BY NAME
PREPARE delete_player_by_name AS
	DELETE FROM player
	WHERE NAME = $1
--EXECUTE delete_player_by_name('test');

--DELETE player BY ID
PREPARE delete_player_by_id AS
	DELETE FROM player
	WHERE player_id = $1
--EXECUTE delete_player_by_id(1)