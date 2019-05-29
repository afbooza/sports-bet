/*POPULATE VALUES INTO LEAGUE */
--INSERT INTO league VALUES (DEFAULT, 'Phish Summer Tour 2019');


--GET ALL LEAGUES
PREPARE get_all_leagues AS
	select * from league
--EXECUTE get_all_leagues

--GET LEAGUE BY ID
PREPARE get_league_by_id (int) AS
	select * from league
	where league_id = $1;
--EXECUTE get_league_by_id(1);

--CREATE NEW LEAGUE
PREPARE insert_new_league(text) AS
	INSERT INTO league
	VALUES (DEFAULT,$1);
--EXECUTE insert_new_league('test');

--UPDATE LEAGUE NAME BY ID
PREPARE update_league_name AS
	UPDATE LEAGUE 
	SET NAME = $1
	where LEAGUE_ID = $2;
--EXECUTE update_league_name('TEST2', 3);

--DELETE LEAGUE BY NAME
PREPARE delete_league_by_name AS
	DELETE FROM LEAGUE
	WHERE NAME = $1
--EXECUTE delete_league_by_name('TEST2');

--DELETE league BY ID
PREPARE delete_league_by_id AS
	DELETE FROM league
	WHERE league_id = $1
--EXECUTE delete_league_by_id(1)