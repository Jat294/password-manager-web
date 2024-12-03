<?php

namespace App\Http\Controllers;

use App\Models\Session;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SessionController extends Controller
{
    public function index()
    {
        $sessions = Session::all();
        return Inertia::render('Sessions/Index', ['sessions' => $sessions]);
    }

    public function create()
    {
        return Inertia::render('Sessions/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'start_time' => 'required|date',
            'end_time' => 'nullable|date',
            'user_id' => 'required|exists:users,id',
        ]);

        Session::create($request->all());

        return redirect()->route('sessions.index');
    }

    public function show(Session $session)
    {
        return Inertia::render('Sessions/Show', ['session' => $session]);
    }

    public function edit(Session $session)
    {
        return Inertia::render('Sessions/Edit', ['session' => $session]);
    }

    public function update(Request $request, Session $session)
    {
        $request->validate([
            'start_time' => 'required|date',
            'end_time' => 'nullable|date',
            'user_id' => 'required|exists:users,id',
        ]);

        $session->update($request->all());

        return redirect()->route('sessions.index');
    }

    public function destroy(Session $session)
    {
        $session->delete();

        return redirect()->route('sessions.index');
    }
}
