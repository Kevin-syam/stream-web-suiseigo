<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;
// use Session;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    private function activePlan() 
    {
            $activePlan = Auth::user() ? Auth::user()->LastActiveUserSubscription : null;

            if(!$activePlan){
                return null;
            }

            $lastDay = Carbon::parse($activePlan->updated_at)->addMonths($activePlan->SubscriptionPlan->active_period_in_months);
            $activeDays =  Carbon::parse($activePlan->updated_at)->diffInDays($lastDay);
            $remainingActiveDays = Carbon::parse($activePlan->expired_date)->diffInDays(Carbon::now());

            return[
                'name' => $activePlan->SubscriptionPlan->name,
                'remainingActiveDays' => $remainingActiveDays,
                'activeDays' => $activeDays
            ];
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
                'activePlan' => $this->activePlan(),
            ],
            'flashMessage' => [
                'message' => $request->session()->get('message'),
                'type' => $request->session()->get('type'),
            ],
            'ziggy' => function(){
                return (new Ziggy)->toArray();
            },
        ];
    }
}
