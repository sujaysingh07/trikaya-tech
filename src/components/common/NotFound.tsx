import Container from "../ui/Container";

interface NotFoundProps {
  name: string;
}

export default function NotFound({ name }: NotFoundProps) {
  return (
    <Container>

    <div className="flex w-full flex-col items-center justify-center gap-3 py-10 text-center border-2 my-11 rounded-[30px]">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black text-white text-3xl font-bold">
        !
      </div>

      <h2 className="text-xl font-semibold text-white">
        No {name} Found
      </h2>

      <p className="text-black text-sm max-w-[350px]">
        We looked everywhere but couldn’t find any {name.toLowerCase()}.
        Please check back later.
      </p>
    </div>
    </Container>
  );
}
