package com.app;

public class SongNotFoundException extends RuntimeException{
    SongNotFoundException(Object object){
        super("Could not find song " + object);
    }
}
