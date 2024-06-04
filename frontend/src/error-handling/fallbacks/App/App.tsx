import { email, messages } from "@/config";
import resetApp from "@/utils/reset-app";
import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import Navbar from "@/components/navbar";
import Footer from "@/sections/Footer";

function AppErrorBoundaryFallback() {
    return (
        <div>
            <div className="h-screen flex flex-col">
                <Navbar />
                <div className="flex items-center justify-center flex-1">
                    <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden">
                        <div className="px-6 py-8">
                            <p className="text-xl mb-6">Internal Server Error</p>
                            <p className="mb-8">{messages.app.crash.title}</p>
                            <Button variant="bordered" target="_blank" rel="noreferrer" href={`mailto: ${email}`}>
                                {messages.app.crash.options.email}
                            </Button>
                            <Link href="/" className="mt-2">
                                Go back to homepage
                            </Link>
                            <Button onClick={resetApp} color="danger" className="block mt-6">
                                {messages.app.crash.options.reset}
                            </Button>
                        </div>
                        <div className="px-6 py-4 border-t border-gray-200 text-sm text-gray-700">
                            If the problem persists, please contact our support team.
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default AppErrorBoundaryFallback;
