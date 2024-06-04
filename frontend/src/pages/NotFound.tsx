import { giphy404, messages } from "@/config";

function NotFound() {
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <iframe src={giphy404} width="100%" height="50%" style={{ maxHeight: "60%", maxWidth: "100%" }} frameBorder="0" allowFullScreen />
                <div className="flex flex-col">
                    <h4 color="error" className="mt-2">
                        404 Not Found
                    </h4>
                    <div className="divider" />
                    <h4>{messages[404]}</h4>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
