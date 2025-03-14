import { useRouter } from "next/navigation";
import Button from "./Button";
import useUserTokenStore from "../store/userToken";
import Avatar from "./Avatar";

export default function SignInButton() {
  const router = useRouter();
  const { token, user } = useUserTokenStore();
  return (
    <>
      {!token ? (
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
      ) : (
        <div className="hidden items-center gap-3 lg:flex">
          <span className="text-white">{user?.username}</span>
          <Avatar
            className="!h-10 !w-10"
            src={user?.avatar ?? "/avatar.svg"}
            alt="avatar"
          />
        </div>
      )}
    </>
  );
}
