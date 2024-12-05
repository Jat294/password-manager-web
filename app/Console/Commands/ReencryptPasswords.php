<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Account;

class ReencryptPasswords extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'passwords:reencrypt';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Reencrypt all passwords with the current encryption key';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $encryptionKey = file_get_contents(storage_path('app/encryption_key.txt'));

        $accounts = Account::all();
        foreach ($accounts as $account) {
            $decryptedPassword = openssl_decrypt(
                base64_decode($account->encrypted_password),
                'aes-256-cbc',
                $encryptionKey,
                OPENSSL_RAW_DATA,
                substr(base64_decode($account->encrypted_password), 0, openssl_cipher_iv_length('aes-256-cbc'))
            );

            $iv = openssl_random_pseudo_bytes(openssl_cipher_iv_length('aes-256-cbc'));
            $encryptedPassword = openssl_encrypt($decryptedPassword, 'aes-256-cbc', $encryptionKey, OPENSSL_RAW_DATA, $iv);
            $account->encrypted_password = base64_encode($iv . $encryptedPassword);
            $account->save();
        }

        $this->info('All passwords have been reencrypted.');
    }
}
