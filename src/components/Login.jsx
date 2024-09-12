import React from "react";
import { Button, Input } from "@shadcn/ui";
function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Login
        </h2>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="mt-1 block w-full"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Input
              type="password"
              placeholder="Enter your password"
              className="mt-1 block w-full"
            />
          </div>

          <Button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
