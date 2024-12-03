<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NotificationController extends Controller
{
    public function index()
    {
        $notifications = Notification::all();
        return Inertia::render('Notifications/Index', ['notifications' => $notifications]);
    }

    public function create()
    {
        return Inertia::render('Notifications/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'message' => 'required',
            'user_id' => 'required|exists:users,id',
        ]);

        Notification::create($request->all());

        return redirect()->route('notifications.index');
    }

    public function show(Notification $notification)
    {
        return Inertia::render('Notifications/Show', ['notification' => $notification]);
    }

    public function edit(Notification $notification)
    {
        return Inertia::render('Notifications/Edit', ['notification' => $notification]);
    }

    public function update(Request $request, Notification $notification)
    {
        $request->validate([
            'message' => 'required',
            'user_id' => 'required|exists:users,id',
        ]);

        $notification->update($request->all());

        return redirect()->route('notifications.index');
    }

    public function destroy(Notification $notification)
    {
        $notification->delete();

        return redirect()->route('notifications.index');
    }
}
