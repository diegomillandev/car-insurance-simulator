import { Form } from ".";

export const SecureApp = () => {
    return (
        <>
            <header className="my-10">
                <h1 className="text-white text-center text-4xl font-black">
                    Auto Insurance Quote
                </h1>
            </header>

            <main className="bg-white mx-3  md:w-2/3 lg:w-2/4 sm:mx-auto shadow rounded-lg p-10">
                <Form />
            </main>
        </>
    );
};
