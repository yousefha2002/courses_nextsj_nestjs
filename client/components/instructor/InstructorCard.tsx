import { User } from "@/types/User";
import Image from "next/image";
import Link from "next/link";

export default function InstructorCard({ name, email, image,id }: User) {
  return (
    <div className="border rounded-2xl p-4 shadow-sm hover:shadow-md transition bg-white text-center">
      <Image
        src={image}
        alt={name}
        width={96}
        height={96}
        className="mx-auto rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500 text-sm">{email}</p>
      <Link
          href={`/instructors/${id}`}
          className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition"
        >
          View Profile
      </Link>
    </div>
  )
}