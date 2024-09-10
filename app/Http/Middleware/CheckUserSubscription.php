<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckUserSubscription
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $status): Response
    {
        $user = Auth::user();
        if ($status == 'true' && !$user->isActive) {
            return redirect(route('user.dashboard.subscriptionPlan.index'));
        } 
        if ($status == 'false' && $user->isActive) {
            return redirect(route('user.dashboard.index'));
        }
        return $next($request);
    }
}
