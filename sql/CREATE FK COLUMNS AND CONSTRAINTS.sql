ALTER TABLE league
ADD  player_id INTEGER;

ALTER TABLE league
ADD CONSTRAINT league_id_player_id_fkey FOREIGN KEY (player_id) REFERENCES player(player_id);

ALTER TABLE player
ADD song_id INTEGER;

ALTER TABLE player
ADD CONSTRAINT player_id_song_id_fkey FOREIGN KEY (song_id) REFERENCES song(song_id);

ALTER TABLE song
ADD play_id INTEGER;

ALTER TABLE song
ADD CONSTRAINT song_id_play_id_fkey FOREIGN KEY (play_id) REFERENCES play(play_id);

ALTER TABLE SONG
ADD  plays_since_2016 integer;


ALTER TABLE SONG
ADD  plays_since_2018 integer;

