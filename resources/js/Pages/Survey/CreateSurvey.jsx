import { Link, router, useForm } from "@inertiajs/react";
import { useState } from "react";

const CreateSurvey = ({ questions }) => {
    const { data, setData, post, put, processing, errors, reset } = useForm({
        question_text: "",
    });

    const [isEdit, setIsEdit] = useState(false);
    const [getEditId, setGetEditId] = useState(null);

    const addQuestion = (e) => {
        e.preventDefault();
        post("/questions", {
            onSuccess: () => {
                reset();
            },
        });
    };

    const editFunc = (id) => {
        setIsEdit(true);
        setGetEditId(id);
        const question = questions.data.find((q) => {
            if (q.id == id) {
                return q;
            }
        });
        setData("question_text", question.question_text);
    };

    const updateQuestion = (e) => {
        e.preventDefault();
        put(`/questions/${getEditId}`, {
            onSuccess: () => {
                setIsEdit(false);
                setGetEditId(null);
                reset();
            },
        });
    };

    const deleteQuestion = (id) => {
        if (confirm("Are you sure you want to delete?")) {
            router.delete(`/questions/${id}`);
        }
    };
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
            <div className="flex justify-between items-baseline mt-4">
                <form
                    onSubmit={isEdit ? updateQuestion : addQuestion}
                    className="w-1/3"
                >
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
                                    value={data.question_text}
                                    onChange={(e) =>
                                        setData("question_text", e.target.value)
                                    }
                                    rows={3}
                                    className={`block w-full rounded-md ${
                                        errors.question_text
                                            ? "outline-red-500"
                                            : ""
                                    } bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600 sm:text-sm/6`}
                                />
                                {errors.question_text && (
                                    <span className="text-red-500">
                                        {errors.question_text}
                                    </span>
                                )}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className={`rounded-md ${
                                isEdit ? "bg-green-600" : " bg-sky-950"
                            } px-3 py-2 text-sm font-semibold text-white shadow-sm ${
                                isEdit
                                    ? "hover:bg-green-700"
                                    : "hover:bg-sky-900"
                            } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600`}
                            disabled={processing}
                        >
                            {isEdit ? "Update" : "Create"}
                        </button>
                    </div>
                </form>

                <table className="w-1/2 table-auto border-collapse text-center border rounded">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2 border-b">#</th>
                            <th className="px-4 py-2 border-b">Questions</th>
                            <th className="px-4 py-2 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.data.map((question, index) => (
                            <tr key={index} className="bg-white">
                                <td className="px-4 py-2 border-b">
                                    {index + 1}
                                </td>
                                <td className="px-4 py-2 border-b">
                                    {question.question_text}
                                </td>
                                <td className="px-4 py-2 border-b flex justify-center gap-2">
                                    <button
                                        value={question.id}
                                        onClick={(e) =>
                                            editFunc(e.target.value)
                                        }
                                        className="bg-green-500 text-white px-2 py-1 rounded shadow-md"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-2 py-1 rounded shadow-md"
                                        value={question.id}
                                        onClick={(e) =>
                                            deleteQuestion(e.target.value)
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default CreateSurvey;
