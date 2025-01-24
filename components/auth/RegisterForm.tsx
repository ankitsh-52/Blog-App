"use client"

import { User } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import * as z from 'zod';
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
    name: z.string().min(3, {message: "Name must be at least 3 characters."}),
    email: z.string().email({message : "Please enter a valid email address"}),
    password: z.string().min(6, {message: "Password must be at least 8 characters long"})
});

export default function RegisterForm() {
    const [isLoading, setIsloading] = useState(false);
    const {
        register, 
        handleSubmit, 
        formState: {errors},
    } = useForm({
        resolver: zodResolver(schema),
    })

    const {toast} = useToast();

    return <form>
        <div className="space-y-4">
            <div className="relative">
                <User className="absolute left-3 top-2 w-5 h-5 text-gray-400"/>
                <Input 
                    {...register('name')}
                    placeholder="Enter your name"
                    disabled={isLoading}
                    className="pl-10 bg-gray-50 border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <div className="relative">
                <User className="absolute left-3 top-2 w-5 h-5 text-gray-400"/>
                <Input 
                    {...register('email')}
                    placeholder="Enter your email"
                    disabled={isLoading}
                    className="pl-10 bg-gray-50 border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500"/>
            </div>
            <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-gray-400"/>
                <Input 
                    type="password"
                    {...register('password')}
                    placeholder="Password"
                    disabled={isLoading}
                    className="pl-10 bg-gray-50 border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500"/>
            </div>
            <Button 
                type="submit"
                disabled={isLoading}
                className="w-full mt-3 hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105">Register</Button>
        </div>
    </form>
}