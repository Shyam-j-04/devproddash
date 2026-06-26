import useAuthStore from "../stores/useAuthStore"

export function Navbar(){
    const logout = useAuthStore((state)=>state.logout)
    return(
        <nav className="flex w-full items-center justify-between border-b border-slate-700 bg-slate-800 px-6 py-4 shadow-lg">
            <span className="text-lg font-bold text-white">DevProdDash</span>
            <button onClick={()=> logout()} className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700">Signout</button>
        </nav>
    )
}