import { useState } from "react";
import { useSubmit } from "../hooks/useSubmit";

export function Form(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = useSubmit();

    return(
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(email, password); }} className="flex w-80 flex-col gap-3 rounded-lg border border-slate-700 bg-slate-800 p-8 shadow-lg mx-auto mt-8">
            <p className="m-0 text-sm font-semibold text-slate-300">Email:</p>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-white placeholder-slate-500 outline-none focus:border-blue-500" />
            <p className="m-0 text-sm font-semibold text-slate-300">Password:</p>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-white placeholder-slate-500 outline-none focus:border-blue-500" />
            <button type="submit" className="mt-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700">Login</button>
        </form>
    );
}
