package com.app;
import java.util.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

@CrossOrigin
@RestController
@RequestMapping("songs")
public class songController {

    @Autowired
    private SongService service;

    //Get
    @GetMapping("/")
    public List<Song> getAllSongs(){
      return service.getAllSongs();
    }
    @GetMapping("/{id}")
    public Optional<Song> getSongById(@PathVariable String id){
      return service.getSongById(id);
    }
    @GetMapping("/artist/{artist}")
    public List<Song> getSongsByArtist(@PathVariable String artist){

        return service.getAllSongsByArtist(artist);
    }

    //Post
    @PostMapping("/edit/{id}")
    public List<Song> update(@PathVariable String id, @RequestBody Song song){
        service.updateSong(id, song);
        return service.getAllSongs();
    }


    //put
    @PutMapping("/addSong")
    public List<Song> add(@RequestBody Song song){
        service.addSong(song);
        return service.getAllSongs();
    }

    //Delete
    @DeleteMapping("/delete/{id}")
    public List<Song> deleteSongById(@PathVariable String id){
      service.deleteById(id);
      return service.getAllSongs();
    }
}






    // @RequestMapping(value = "/test", method = RequestMethod.GET)
    // public String testMe(){
    //   Song song = new Song();
    //   SongRepository.updateSong((song.getId()),song);
    //   return "";
    // }
    // SongController(SongRepository repository) {
    //   this.repository = repository;
    // }

    // // ● Get all songs

    // @GetMapping("/songs")
    // List<Song> all() {
    //   return repository.findAll();
    // }

    // // ● Get specific song by id
    // // @GetMapping("/songs/{id}")
    // Song songById(int id) {
    //     return repository.findById(id);
    // }

    //   // ● Get all songs of a specific artist

    //   @GetMapping("/songs/{artist}")
    //   List<Song> allByArtist(String artist) {
    //     return repository.findSongsByArtist(artist);
    //   }

    // // ● Add song

    // @PostMapping("/song")
    // void newSong(@RequestBody Song newSong) {
    //   repository.addSong(newSong);
    // }

    // // ● Delete song by id

    // @DeleteMapping("/song/{id}")
    // void deleteSong(@PathVariable int id) {
    //   repository.deleteById(id);
    // }

    // // ● Update song

    // @PutMapping
    // void updateSong(@PathVariable int id, Song newSong){
    //   repository.updateSongById(id, newSong);
    // }
  
  
  // @GetMapping("/songs/{artist}")
  // Song one(@PathVariable String artist) {
  //   return repository.findByArtist(artist)
  //     .orElse(() -> new SongNotFoundException(artist));
  // }

 
//===Replace old song by new song (by id)===//

// @PutMapping("/songs/{id}")
// Song replaceSong(@RequestBody Song newSong, @PathVariable int id) {
  
//   return repository.findById(id).map(song -> {
//     s
//       return repository.save(song);
//     })
//     .orElseGet(() -> {
//       newSong.setId(id);
//       return repository.save(newSong);
//     });
// }