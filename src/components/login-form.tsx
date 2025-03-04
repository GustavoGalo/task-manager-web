import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useSignIn } from "@/services/auth/sign-in";
import { Link, useRouter } from "@tanstack/react-router";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { toast } from "sonner";

export function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const { mutate, isPending } = useSignIn({
    onSuccess: (data) => {
      localStorage.setItem("task-manager-token", data.token);
      toast.success("Successfully logged in!", {
        description: "Redirecting you to your dashboard...",
      });
      router.navigate({ to: "/dashboard" });
    },
    onError: () => {
      form.setError("email", {
        message: "Invalid email or password.",
      });
      form.setError("password", {
        message: "Invalid email or password.",
      });
      toast.error("Login failed", {
        description: "Invalid email or password. Please try again.",
      });
    },
    throwOnError: false,
  });

  async function onSubmit({ email, password }: z.infer<typeof formSchema>) {
    mutate({ email, password });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your@email.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="••••••••" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isPending} className="w-full">
              {isPending ? (
                <>
                  <Loader2 className="animate-spin" /> Please wait
                </>
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </Form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="underline underline-offset-4">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 8 characters.",
  }),
});
