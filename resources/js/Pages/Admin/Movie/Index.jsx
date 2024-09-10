import Button from "@/Components/Button";
import Authenticated from "@/Layouts/Authenticated/index";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Index({ auth }) {
    return (
        <Authenticated auth={auth}>
            <Link href={route("admin.dashboard.movie.create")}>
                <Button type="button" variant="danger" className="w-40 mb-8">
                    Insert New Movie
                </Button>
            </Link>
        </Authenticated>
    );
}
