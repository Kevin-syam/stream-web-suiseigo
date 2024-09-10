import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/Authenticated";
import { Head, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const { setData, post, processing, errors } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: false,
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.dashboard.movie.store"));
    };

    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Create Movie" />

            <h1 className="text-xl">Insert a new Movie</h1>
            <hr className="mb-4" />
            <form className="" onSubmit={submit}>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <InputLabel forinput="name" value="Name" />
                        <TextInput
                            type="text"
                            name="name"
                            variant="primary-outline"
                            placeholder="Enter the name of Movie"
                            onChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel forinput="category" value="Category" />
                        <TextInput
                            type="text"
                            name="category"
                            variant="primary-outline"
                            placeholder="Enter the Movie's Categories"
                            onChange={onHandleChange}
                            required
                        />

                        <InputError
                            message={errors.category}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <InputLabel forinput="video_url" value="Video URL" />
                        <TextInput
                            type="url"
                            name="video_url"
                            variant="primary-outline"
                            placeholder="Enter the Video URL of the Movie"
                            onChange={onHandleChange}
                            required
                        />

                        <InputError
                            message={errors.video_url}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <InputLabel forinput="rating" value="Rating" />
                        <TextInput
                            type="number"
                            min={1}
                            max={10}
                            name="rating"
                            variant="primary-outline"
                            placeholder="Enter the Rating of the Movie"
                            onChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.rating} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel forinput="thumbnail" value="Thumbnail" />
                        <TextInput
                            type="file"
                            name="thumbnail"
                            variant="primary-outline"
                            placeholder="Insert Thumbnail of the Movie"
                            onChange={onHandleChange}
                            required
                        />

                        <InputError
                            message={errors.thumbnail}
                            className="mt-2"
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <InputLabel
                        forinput="is_featured"
                        value="Is Featured"
                        className="mt-4 mr-4"
                    />
                    <Checkbox
                        name="is_featured"
                        variant="primary-outline"
                        placeholder="Enter the Rating of the Movie"
                        onChange={(e) =>
                            setData("is_featured", e.target.checked)
                        }
                    />
                </div>
                <div className="grid space-y-[14px] mt-4">
                    <Button
                        type="submit"
                        processing={processing}
                        variant="primary"
                    >
                        <span className="text-base font-semibold">Upload</span>
                    </Button>
                </div>
            </form>
        </Authenticated>
    );
}
