<?php

namespace App\Controller;



class Film {

    public int $id;
    public string $name;
    public string $image;
    public string $description;

    public function __construct( int $_id,
     string $name,
     string $image,
     string $description)
    {
       $this->id = $_id;
       $this->name = $name; 
       $this->image = $image;
       $this->description = $description;
    }
}