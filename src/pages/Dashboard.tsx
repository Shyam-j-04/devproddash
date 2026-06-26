import { Navbar } from "../components/Navbar";
export function Dashboard (){
    return(
        <div className="flex min-h-screen flex-col bg-slate-900">
            <Navbar></Navbar>
            <div className="flex flex-1 flex-col items-center justify-center px-4">
                <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            </div>
        </div>
    );
}