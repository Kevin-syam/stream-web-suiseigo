<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class SubscriptionPlanController extends Controller
{
    //
    public function index()
    {
        $subscriptionPlan= SubscriptionPlan::all();
        // return $subscriptionPlan;
        return inertia('User/Dashboard/SubscriptionPlan/Index', [
            'subscriptionPlans' => SubscriptionPlan::all(),
        ]);
    }
    
    public function userSubscribe(Request $request,SubscriptionPlan $subscriptionPlan)
    {
        // ['user_id','subscription_plan_id','price','expired_date','payment_status','snapToken'];
        $data = [
            'user_id' => Auth::id(),
            'subscription_plan_id' => $subscriptionPlan->id,
            'price' => $subscriptionPlan->price,
            'expired_date' => Carbon::now()->addMonth($subscriptionPlan->active_period_in_months),
            'payment_status' => 'paid'
        ];

        $userSubscribe = UserSubscription::create($data);

        return redirect(route('user.dashboard.index'));
    }
}
