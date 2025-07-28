"use client";

import { SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
import { Trello } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {

    const { isSignedIn} = useUser()

    return (
        <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Trello className="h-6 w-6 sm:w-8 sm:w-8 text-blue-600" />
                    <span className="text-xl sm:text-2xl font-bold text-gray-900">Trelloid</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-4">
                    {
                        isSignedIn  ? <div>

                        </div> : 
                        <div>
                        <SignInButton>
                            <Button variant="ghost" size="sm" className="text-xs sm:text-sm">Sign In</Button>
                        </SignInButton>
                        <SignUpButton>
                            <Button size="sm" className="text-xs sm:text-sm">Sign Up</Button>
                        </SignUpButton>
                    </div>
                    }
                </div>
            </div>
        </header>
    )
}