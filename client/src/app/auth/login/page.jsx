import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const LoginPage = () => {
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
          <div className="w-full space-y-2">
            <Label htmlFor="email" className={"text-base"}>
              Email
            </Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="w-full space-y-2">
            <Label htmlFor="password" className={"text-base"}>
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <p className="w-full text-start text-sm">
            Forgot your password?{" "}
            <Link href="/auth/forgot-password" className="text-blue-500">
              Reset it here
            </Link>
          </p>

          <Button className="w-full">Login</Button>
        </CardContent>
        <CardFooter className={"w-full"}></CardFooter>
      </Card>
    </div>
  );
};
export default LoginPage;
