import { Link } from "@inertiajs/react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

const CreateSurvey = () => {
    return (
        <>
            <div className="my-4">
                <div className="flex justify-between items-center">
                    <strong>Hi, Admin</strong>
                    <div>
                        <Link
                            href="/"
                            className="bg-sky-500 text-white px-4 py-2 rounded shadow-md"
                        >
                            Back
                        </Link>
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex justify-between items-center mt-4">
                <form className="w-1/3">
                    <div className="flex flex-col gap-4">
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="first-name"
                                className="block text-md/6 font-medium text-gray-900"
                            >
                                Question :
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="about"
                                    name="about"
                                    rows={3}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600 sm:text-sm/6"
                                    defaultValue={""}
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="rounded-md bg-sky-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                        >
                            Create
                        </button>
                    </div>
                </form>

                <table class="w-1/2 table-auto border-collapse text-center border rounded">
                    <thead>
                        <tr class="bg-gray-200">
                            <th class="px-4 py-2 border-b">#</th>
                            <th class="px-4 py-2 border-b">Questions</th>
                            <th class="px-4 py-2 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white">
                            <td class="px-4 py-2 border-b">1</td>
                            <td class="px-4 py-2 border-b">John Doe</td>
                            <td class="px-4 py-2 border-b flex justify-center gap-2">
                                <Link
                                    href="#"
                                    className="bg-green-500 text-white px-2 py-1 rounded shadow-md"
                                >
                                    Edit
                                </Link>
                                <Link
                                    href="#"
                                    className="bg-red-500 text-white px-2 py-1 rounded shadow-md"
                                >
                                    Delete
                                </Link>
                            </td>
                        </tr>
                        <tr class="bg-gray-50">
                            <td class="px-4 py-2 border-b">2</td>
                            <td class="px-4 py-2 border-b">Jane Smith</td>
                            <td class="px-4 py-2 border-b flex justify-center gap-2">
                                <Link
                                    href="#"
                                    className="bg-green-500 text-white px-2 py-1 rounded shadow-md"
                                >
                                    Edit
                                </Link>
                                <Link
                                    href="#"
                                    className="bg-red-500 text-white px-2 py-1 rounded shadow-md"
                                >
                                    Delete
                                </Link>
                            </td>
                        </tr>
                        <tr class="bg-white">
                            <td class="px-4 py-2 border-b">3</td>
                            <td class="px-4 py-2 border-b">Mike Johnson</td>
                            <td class="px-4 py-2 border-b flex justify-center gap-2">
                                <Link
                                    href="#"
                                    className="bg-green-500 text-white px-2 py-1 rounded shadow-md"
                                >
                                    Edit
                                </Link>
                                <Link
                                    href="#"
                                    className="bg-red-500 text-white px-2 py-1 rounded shadow-md"
                                >
                                    Delete
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default CreateSurvey;
