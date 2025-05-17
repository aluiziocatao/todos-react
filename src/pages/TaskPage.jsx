import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import Title from "../components/Title";

function TaskPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px] space-y-4">                
                <div className="flex justify-center relative mb-6">
                    <button className="absolute left-0 top-0 bottom-0 text-slate-100" onClick={() => navigate(-1)}>
                        <ChevronLeftIcon className="text-slate-100 w-6 h-6" />
                    </button>
                    <Title>Detalhes da Tarefa</Title>
                </div>
                <div className="bg-slate-200 rounded-md p-4">
                    <h2 className="text-xl font-bold text-slate-600">{title}</h2>
                    <p className="text-slate-500">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default TaskPage;