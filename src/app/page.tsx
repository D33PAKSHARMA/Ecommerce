import Products from "@/components/Products";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="hero py-18">
        <div className="container mx-auto flex items-center justify-between mt-40">
          <div className="w-1/2 ml-5">
            <h6 className="text-lg">
              <em>Are you Hungry?</em>
            </h6>
            <h1 className="text-3xl md:text-6xl font-bold">Don't wait!</h1>
            <button className="bg-yellow-500 rounded-full text-white px-2 py-2 mt-4 hover:bg-yellow-600">
              <Link href="#products">Order Now</Link>
            </button>
          </div>

          <div className="w-1/2">
            <img className="w-4/5" src="../Images/pizza.png" alt="pizza" />
          </div>
        </div>
      </div>

      <div className="ml-5">
        <Products />
      </div>
    </>
  );
}
