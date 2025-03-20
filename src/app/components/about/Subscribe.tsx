import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function SubscribeButton() {
  return (
    <Link
      href="https://www.youtube.com/@Techworld-e4w?sub_confirmation=1"
      target="_blank"
      className="flex items-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
    >
      <FaYoutube size={20} className="mr-2" />
      Subscribe
    </Link>
  );
}
