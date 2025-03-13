import Image from "next/image";
import Button from "../components/Button";
import InputField from "../components/InputField";

export default function SignInPage() {
  return (
    <div className="flex h-full w-full flex-col lg:flex-row-reverse">
      <div className="flex flex-1/6 flex-col items-center justify-center gap-7 bg-green-300">
        <Image
          className="max-w-[171px] lg:max-w-[299px]"
          src={"/paper.png"}
          width={299}
          height={230}
          alt="logo"
          layout="responsive"
        />
        <div className="font-castoro text-[28px]">a Board</div>
      </div>
      <div className="flex w-full flex-2 items-center justify-center bg-green-500">
        <div className="w-full max-w-96 px-3">
          <div className="mb-10 text-[28px]">Sign in</div>

          <InputField className="mb-4" placeholder="Username" />

          <Button
            className="w-full"
            color="success"
            variant="solid"
            size="sm"
            rounded="sm"
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}
