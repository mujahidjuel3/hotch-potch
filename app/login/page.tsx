
"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Link from "next/link";
import Header from "@/components/heder";
import Footer from "@/components/footer";
import FooterBottom from "@/components/footer-bottom";
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password should be at least 6 characters long"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function Login() {
  const { register, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });
  

  

  return (
    <div className="bg-gray-900">
        <Header />
    
    <div className="mt-16 mb-10 flex justify-center items-center bg-gray-900">
      <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center  mb-4">Login</h2>
        <form  className="space-y-4">
          <div>
           
            <input
              id="email"
              type="email"
              placeholder="Email"
              {...register("email")}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div>
           
           <input
             id="password"
             type="password"
             placeholder="Password"
             {...register("password")}
             className="w-full p-2 border border-gray-300 rounded-md"
           />
           {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
         </div>
          <Link href="/register">
          <button
            type="submit"
            className="w-full mt-6 py-2 bg-gradient-to-r from-blue-600 to-pink-600 text-white font-medium rounded-md"
          >
            Login
          </button>
          </Link>
        </form>
      </div>
    </div>
    <Footer />
    <FooterBottom />
    </div>
  );
}
