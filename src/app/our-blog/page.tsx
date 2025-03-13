"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import BackCicle from "../components/BackCicle";
import Avatar from "../components/Avatar";
import Badge from "../components/Badge";
import CommentBadge from "../components/CommentBadge";
import CommentCard from "../components/CommentCard";
import Button from "../components/Button";

export default function OurBlogPagel() {
  const router = useRouter();
  return (
    <div className="bg-white px-4 pb-10 lg:max-w-[800px] lg:pr-4">
      <div className="mt-7 mb-12">
        <BackCicle />
      </div>

      <div className="flex items-center gap-2">
        <Avatar
          src="https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg"
          alt="avatar"
          isOnline={true}
          className="!h-12 !w-12"
        />
        <div className="test text-text text-sm">Zach</div>
        <div className="text-grey-300 text-xs">5mo. ago</div>
      </div>
      <Badge className="my-4" text="TV" />

      <div>
        <h1 className="text-text text-[28px] font-semibold">
          The Big Short War
        </h1>
        <p className="text-text mt-3 text-sm">
          Tall, athletic, handsome with cerulean eyes, he was the kind of
          hyper-ambitious kid other kids loved to hate and just the type to make
          a big wager with no margin for error. But on the night before the
          S.A.T., his father took pity on him and canceled the bet. “I would’ve
          lost it,” Ackman concedes. He got a 780 on the verbal and a 750 on the
          math. “One wrong on the verbal, three wrong on the math,” he muses.
          “I’m still convinced some of the questions were wrong.”
        </p>
      </div>

      <CommentBadge className="my-6" count={32} />

      <div>
        <Button
          className="h-10 w-36"
          color="success"
          variant="outline"
          rounded="sm"
        >
          Add Comments
        </Button>
      </div>

      <div className="mt-10 flex flex-col gap-7">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index}>
            <CommentCard
              username="Wittawat"
              avatar="https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg"
              date="12h ago"
              comment={`Lorem ipsum dolor sit amet consectetur. Purus cursus vel est a pretium
        quam imperdiet. Tristique auctor sed semper nibh odio iaculis sed
        aliquet. Amet mollis eget morbi feugiat mi risus eu. Tortor sed sagittis
        convallis auctor.`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
