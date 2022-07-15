package com.app;
import lombok.Data;
import lombok.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

enum Gener{ROCK, POP, RAP, CLASSICAL, FUNK, SOUL, HIPHOP}

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "Song")
@Getter
@Setter

public class Song {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;
    private String title;
    private String artist;
    private Gener gener;
    private int length;
    private float price;
}

