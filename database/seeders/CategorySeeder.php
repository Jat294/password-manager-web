<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create(['name' => 'Social Media', 'description' => 'All your social media accounts']);
        Category::create(['name' => 'Work', 'description' => 'Work-related accounts and passwords']);
        Category::create(['name' => 'Personal', 'description' => 'Personal accounts and passwords']);
    }
}
