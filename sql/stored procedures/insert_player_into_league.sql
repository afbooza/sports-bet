use phantasy;

GO
CREATE PROCEDURE insert_player_into_league
	@LeagueName nvarchar(50),
	@PlayerName nvarchar(50)

AS 

INSERT INTO LEAGUE_PLAYER (LEAGUE_ID, PLAYER_ID)
VALUES
(
	(
		SELECT league_id 
		FROM league
		WHERE name = @LeagueName), 
	(
		SELECT PLAYER_ID 
		FROM PLAYER 
		WHERE name = @PlayerName
		)
);
GO

--EXECUTE insert_player_into_league N'Champions', N'Antonio';
