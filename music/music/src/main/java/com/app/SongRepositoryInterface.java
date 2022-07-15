package com.app;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;


public interface SongRepositoryInterface extends MongoRepository<Song, String> {
    public List<Song> findAllByArtist(String artist);
}
