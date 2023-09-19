import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import FileInput from '@/Components/FileInput';

export default function UpdateProfileImage({ className }) {
    const user = usePage().props.auth.user;

    const { setData, patch, post, errors, processing, recentlySuccessful } = useForm();

    const handleImageChange = (imageFile) => {
        setData('image', imageFile);
    };

    const submit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', data.image);

        patch(route('profile.update'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Profile Image</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your profile image.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <label htmlFor="image" className="text-sm font-medium text-gray-700">
                        Profile Image
                    </label>

                    <FileInput
                        id="image"
                        accept="image/*"
                        className="mt-1 block w-full"
                        onChange={handleImageChange}
                        required
                    />

                    <InputError className="mt-2" message={errors.image} />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enterFrom="opacity-0"
                        leaveTo="opacity-0"
                        className="transition ease-in-out"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
