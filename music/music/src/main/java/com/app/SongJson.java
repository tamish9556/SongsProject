package com.app;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class SongJson {

    @Getter
    @Setter
    @JsonProperty("id")
    private int id;
    @Getter
    @Setter
    @JsonProperty("title")
    private String title;
    @Getter
    @Setter
    @JsonProperty("artist")
    private String artist;
    // @JsonProperty("genre")
    // private Genre genre;
    @Getter
    @Setter
    @JsonProperty("length")
    private int length;
    @Getter
    @Setter
    @JsonProperty("price")
    private float price;

}
