import { useRouter } from "next/navigation";
import Button from "./Button";

export default function SignInButton() {
  const router = useRouter();
  return (
    <Button
      className="w-28 font-medium"
      color="success"
      variant="solid"
      size="sm"
      rounded="sm"
      onClick={() => {
        router.push("/sign-in");
      }}
    >
      Sign In
    </Button>
  );
}
