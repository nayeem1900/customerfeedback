import { Link } from "@inertiajs/react";

const Home = () => {
    return (
        <>
            <div className="my-4">
                <div className="flex justify-between items-center">
                    <strong>Hi, Admin</strong>
                    <Link
                        href="/create_survey"
                        className="bg-sky-500 text-white px-4 py-2 rounded shadow-md"
                    >
                        Create Survey
                    </Link>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="w-1/5 bg-sky-200 text-center border p-4 rounded shadow-md">
                    <h3>Total Survey</h3>
                    <h2 className="text-2xl mt-4">34</h2>
                </div>
                <div className="w-1/5 bg-sky-200 text-center border p-4 rounded shadow-md">
                    <h3>Response Received</h3>
                    <h2 className="text-2xl mt-4">34</h2>
                </div>
                <div className="w-1/5 bg-sky-200 text-center border p-4 rounded shadow-md">
                    <h3>Response Pending</h3>
                    <h2 className="text-2xl mt-4">34</h2>
                </div>
                <div className="w-1/5 bg-sky-200 text-center border p-4 rounded shadow-md">
                    <h3>Total Customer</h3>
                    <h2 className="text-2xl mt-4">34</h2>
                </div>
            </div>
        </>
    );
};

export default Home;
