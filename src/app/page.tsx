"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function test() {
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  }, []);
  return <></>;
}
