package com.app;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public interface SongService {

    Song addSong(Song song);

    Song updateSong(String id, Song song);

    List<Song> getAllSongs();

    List<Song> getAllSongsByArtist(String artist);

    Optional<Song> getSongById(String id);

    List<Song> deleteById(String id);

}