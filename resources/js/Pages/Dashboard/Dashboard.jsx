import { Link, usePage } from "@inertiajs/react";

const Dashboard = ({ totalCustomers, totalQuestions }) => {
    const { auth } = usePage().props;
    if (auth.user.role !== "admin") {
        window.location.href = "/";
    } else {
        return (
            <>
                <div className="my-4">
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                            <strong>Hi, {auth.user.name}</strong>
                            <span className="text-sm text-uppercase">
                                {auth.user.role}
                            </span>
                        </div>
                        <Link
                            href="/questions"
                            className="bg-sky-500 text-white px-4 py-2 rounded shadow-md"
                        >
                            Create Question
                        </Link>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="w-1/5 bg-sky-200 text-center border p-4 rounded shadow-md">
                        <h3>Total Question</h3>
                        <h2 className="text-2xl mt-4">{totalQuestions}</h2>
                    </div>
                    <div className="w-1/5 bg-sky-200 text-center border p-4 rounded shadow-md">
                        <h3>Response Received</h3>
                        <h2 className="text-2xl mt-4">0</h2>
                    </div>
                    <div className="w-1/5 bg-sky-200 text-center border p-4 rounded shadow-md">
                        <h3>Response Pending</h3>
                        <h2 className="text-2xl mt-4">0</h2>
                    </div>
                    <div className="w-1/5 bg-sky-200 text-center border p-4 rounded shadow-md">
                        <h3>Total Customer</h3>
                        <h2 className="text-2xl mt-4">{totalCustomers}</h2>
                    </div>
                </div>
            </>
        );
    }
};

export default Dashboard;
