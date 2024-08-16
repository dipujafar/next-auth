import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOption } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOption);
  console.log({ session });
  return (
    <div>
      <h1>Authentication</h1>
      <h1>{session?.user?.type}</h1>
    </div>
  );
}
