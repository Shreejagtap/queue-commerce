"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const LoginPage = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    console.log("Submitted values:", values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className={"max-w-[400px] w-full"}>
        <CardHeader className={"text-center"}>
          <CardTitle className={"text-xl font-bold"}>Login</CardTitle>
          <CardDescription className={"text-base"}>
            Please enter your credentials
          </CardDescription>
        </CardHeader>
        <CardContent className={"flex flex-col items-center gap-4 w-full"}>
          <Form {...form} className="w-full">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-4"
            >
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" placeholder="Email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p className="w-full text-start text-sm">
                Forgot your password?{" "}
                <Link href="/auth/forgot-password" className="text-blue-500">
                  Reset it here
                </Link>
              </p>
              <Button type={"submit"} className="w-full">
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className={"w-full"}></CardFooter>
      </Card>
    </div>
  );
};
export default LoginPage;
