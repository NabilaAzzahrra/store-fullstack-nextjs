import Link from "next/link";

export default function Page() {
    return(
        <main className="bg-white p-8 rounded-2xl w-full max-w-md">
        <form method="POST" action="javascript.void(0)" className="space-y-4">
            <div className="space-y-1">
                <label for="email">Email</label>
                <input type="email" placeholder="Email" className="border border-gray-200 block w-full"/>
            </div>
            <div className="space-y-1">
                <label for="password">Password</label>
                <input type="password" placeholder="Password" className="border border-gray-200 block w-full"/>
            </div>
            <div className="space-x-5">
                <button type="submit">Daftar</button>
                <Link href={`/auth/login`}>Sudah Punya Akun?</Link>
            </div>
        </form>
    </main>
    )
}