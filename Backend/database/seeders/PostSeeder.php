<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $fake = Faker::create();
         for($i = 0; $i < 10; $i++)
         {
            DB::table('posts') -> insert([
                "user_id" => 1,
                "title" => $fake -> word,
                "slug" => $fake -> word,
                "content" => $fake -> sentence,
            ]);
         }
    }
}
