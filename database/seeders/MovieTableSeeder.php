<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        $movies = [
            [
                'name' => 'The Hobbit and The Desolation of Smaug',
                'slug' => 'the-hobbit-and-the-desolation-of-smaug',
                'category' => 'Adventure',
                'video_url' => 'https://www.youtube.com/watch?v=OPVWy1tFXuc',
                'thumbnail' => 'https://m.media-amazon.com/images/M/MV5BMzU0NDY0NDEzNV5BMl5BanBnXkFtZTgwOTIxNDU1MDE@._V1_.jpg',
                'rating' => 9.1,
                'is_featured' => true,
            ],
            [
                'name' => 'Hello Ghost',
                'slug' => 'hello-ghost',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=ICoxxRSFFgs',
                'thumbnail' => 'https://cdn1-production-images-kly.akamaized.net/oBPdu8DGisDALdPzrE7N9WxozFU=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4408394/original/093613200_1682611233-Onadio_1.jpg',
                'rating' => 8.5,
                'is_featured' => true,
            ],
            [
                'name' => 'Tenki-no-Ko',
                'slug' => 'tenki-no-ko',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=Q6iK6DjV_iE',
                'thumbnail' => 'https://i.redd.it/75b5e3wgjbl41.jpg',
                'rating' => 8.1,
                'is_featured' => false,
            ],
        ];
        Movie::insert($movies);
    }
}
