package com.app;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public class SongRepository{
    List <Song> songs = new ArrayList<>();
    public SongRepository() {
        addSongsDefault();
    }

    private void addSongsDefault(){
        Song s1 = new Song("100", "a", "Yoni", Gener.CLASSICAL, 3, 4);
        Song s2 = new Song("101", "b", "Josh", Gener.POP, 3, 4);
        Song s3 = new Song("102", "c", "Mani", Gener.ROCK, 3, 4);
        songs.add(s1);
        songs.add(s2);
        songs.add(s3);
}
    public Song addSong(Song newSong){
        songs.add(newSong);
        System.out.println("Add successfully!");
        return newSong;
        // this.findAll().add(newSong);
    }
    public Song findById(String id){
        return (Song)(songs.stream().filter(song -> song.getId().equals(id)));
        // return (Song)(this.findAll().stream().filter(song -> song.getId() == id));
    }

    public List<Song> deleteById(String id){
        for (Song s : songs) {
            if (s.getId().equals(id)) {
                songs.remove(s);
                System.out.println("--Remove song successfully--");
            }
        } 
        return songs;
        // this.findAll().remove(this.findById(id));
    }

    public List<Song> findSongsByArtist(String artist){
        return songs.stream().filter(song -> song.getArtist().equals(artist)).toList();
        // return this.findAll().stream().filter(song -> song.getArtist().equals(artist)).toList();
    }

    public Song updateSongById(String id, Song newSong){
        findById(id).setId(newSong.getId());
        findById(id).setTitle(newSong.getTitle());
        findById(id).setArtist(newSong.getArtist());
        findById(id).setLength(newSong.getLength());
        findById(id).setPrice(newSong.getPrice());
        return newSong;
    }
    public List<Song> getAllSongs() {
        return songs;
    }

}