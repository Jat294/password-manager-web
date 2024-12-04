<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Str;

class GenerateEncryptionKey extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'encryption:key';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate a new encryption key and store it in a file';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $key = Str::random(32);
        $path = storage_path('app/encryption_key.txt');

        file_put_contents($path, $key);

        $this->info("Encryption key generated and stored in {$path}");
    }
}
