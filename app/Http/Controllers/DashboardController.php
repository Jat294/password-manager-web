<?php

namespace App\Http\Controllers;

use App\Models\Account;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth; // Importar el facade Auth

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Utilizar el facade Auth para obtener el usuario autenticado
        $accounts = Account::where('user_id', Auth::id())->get();

        return Inertia::render('Dashboard', [
            'auth' => [
                'user' => Auth::user(),
            ],
            'accounts' => $accounts,
        ]);
    }
}
