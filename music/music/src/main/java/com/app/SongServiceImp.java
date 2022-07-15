package com.app;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SongServiceImp implements SongService{

    @Autowired
    private SongRepositoryInterface repository;
    
    @Override
    public Song addSong(Song song) {
       return repository.save(song);
    }

    @Override
    public List<Song> deleteById(String id) {
        repository.deleteById(id);  
        return repository.findAll();  
    }

    @Override
    public List<Song> getAllSongsByArtist(String artist) {
        return repository.findAll().stream().filter(song -> song.getArtist().equals(artist)).toList();
    }

    @Override
    public Optional<Song> getSongById(String id) {
        return repository.findById(id);
//        return (Song)(repository.findAll().stream().filter(song -> song.getId() == id));
    }
    
    @Override
    public List<Song> getAllSongs() {
        return repository.findAll();
    }

    @Override
    public Song updateSong(String id, Song song) {
        repository.deleteById(id);
        return addSong(song);
    }

}
