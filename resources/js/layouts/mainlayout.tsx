import React from "react";
import { Link, usePage } from "@inertiajs/react";

export default function Mainlayout({ children }: any) {
    const{url}=usePage();
    return (
        <>
            <div className="max-h-screen h-screen flex flex-col  px-5 ">
                <nav className="flex flex-row justify-between text-xl px-20 py-2  ">
                    <div className="How2EatLogo p-5">How2Eat</div>
                    <ul className="flex flex-row justify-between gap-20 text-white">
                        <li className="bg-blur border-1 border-blue-100 rounded-lg p-5 hover:underline hover:border-white ">
                            <Link className={url==='/'?'underline':''} href={"/"}>Home</Link>
                        </li>
                        <li className="bg-blur border-1 border-blue-100 rounded-lg p-5 hover:underline hover:border-white">
                            <Link className={url==='/menu'?'underline':''}  href={"/menu"}>Menu</Link>
                        </li>
                        <li className="bg-blur border-1 border-blue-100 rounded-lg p-5 hover:underline hover:border-white">
                            <Link className={url==='/contact'?'underline':''}  href={"/"}>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <main className="flex-grow">{children}</main>
                <footer className="flex flex-row justify-between px-30 py-5 text-white">
                    <i>never stop eating</i>
                    <p>&copy; 2025</p>
                </footer>
            </div>
        </>
    );
}
