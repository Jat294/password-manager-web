<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AccountController extends Controller
{
    private $encryptionKey;

    public function __construct()
    {
        $this->middleware('auth');
        $this->encryptionKey = file_get_contents(storage_path('app/encryption_key.txt')); // Cargar la clave de encriptación desde el archivo
    }

    public function index()
    {
        $accounts = Account::with('category')->get();
        return Inertia::render('Accounts/Index', ['accounts' => $accounts]);
    }

    public function create()
    {
        $categories = Category::all();
        return Inertia::render('Accounts/Create', ['categories' => $categories]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'username' => 'required',
            'encrypted_password' => 'required',
            'category_id' => 'required',
        ]);

        Account::create([
            'name' => $request->name,
            'username' => $request->username,
            'encrypted_password' => $this->encryptPassword($request->encrypted_password),
            'category_id' => $request->category_id,
            'user_id' => Auth::id(),
        ]);

        return redirect()->route('accounts.index');
    }

    public function show(Account $account)
    {
        $account->encrypted_password = $this->decryptPassword($account->encrypted_password);
        return Inertia::render('Accounts/Show', ['account' => $account]);
    }

    public function edit(Account $account)
    {
        return Inertia::render('Accounts/Edit', ['account' => $account]);
    }

    public function update(Request $request, Account $account)
    {
        $request->validate([
            'name' => 'required',
            'username' => 'required',
            'encrypted_password' => 'required',
            'category_id' => 'required',
        ]);

        $account->update([
            'name' => $request->name,
            'username' => $request->username,
            'encrypted_password' => $this->encryptPassword($request->encrypted_password),
            'category_id' => $request->category_id,
        ]);

        return redirect()->route('accounts.index');
    }

    public function destroy(Account $account)
    {
        $account->delete();

        return redirect()->route('accounts.index');
    }

    private function encryptPassword($password)
    {
        $ivlen = openssl_cipher_iv_length('aes-256-cbc');
        $iv = openssl_random_pseudo_bytes($ivlen);

        $encrypted_data = openssl_encrypt($password, 'aes-256-cbc', $this->encryptionKey, OPENSSL_RAW_DATA, $iv);
        $encrypted_data = base64_encode($iv . $encrypted_data);

        return $encrypted_data;
    }

    private function decryptPassword($encryptedPassword)
    {
        $encrypted_data = base64_decode($encryptedPassword);
        $ivlen = openssl_cipher_iv_length('aes-256-cbc');
        $iv = substr($encrypted_data, 0, $ivlen);
        $encrypted_data = substr($encrypted_data, $ivlen);

        $decrypted_data = openssl_decrypt($encrypted_data, 'aes-256-cbc', $this->encryptionKey, OPENSSL_RAW_DATA, $iv);
        return $decrypted_data;
    }
}
