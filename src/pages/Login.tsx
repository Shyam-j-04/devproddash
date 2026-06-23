import { Form } from "../components/Form";


export function Login (){
    return(
            <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 px-4">
                <h1 className="text-3xl font-bold text-white">Welcome to DevProdDash</h1>
                <p className="mt-2 text-base text-slate-400">A Dashboard for developer productivity tracking</p>
                <Form></Form>
            </div>
            
        
    );
}