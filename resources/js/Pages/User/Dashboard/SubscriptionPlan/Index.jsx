import SubscriptionCard from "@/Components/SubscriptionCard";
import Authenticated from "@/Layouts/Authenticated";
import { router } from "@inertiajs/react";
import React from "react";

export default function SubscriptionPlan({ auth, subscriptionPlans }) {
    const selectSubscription = (id) => {
        router.post(
            route("user.dashboard.subscriptionPlan.userSubscribe", {
                subscriptionPlan: id,
            })
        );
    };

    return (
        <Authenticated auth={auth}>
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from
                    movies.
                </p>

                {/* Pricing Card */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    {subscriptionPlans.map((subscriptionPlan) => (
                        <SubscriptionCard
                            name={subscriptionPlan.name}
                            price={subscriptionPlan.price}
                            durationInMonth={subscriptionPlan.durationInMonth}
                            features={JSON.parse(subscriptionPlan.features)}
                            isPremium={subscriptionPlan.name === "Premium"}
                            key={subscriptionPlan.id}
                            onSelectSubsciption={() =>
                                selectSubscription(subscriptionPlan.id)
                            }
                        />
                    ))}
                </div>
                {/* /Pricing Card */}
            </div>
        </Authenticated>
    );
}
