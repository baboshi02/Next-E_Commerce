import { Link } from "lucide-react";
import Footer from "./components/Footer";
import Hero from "./components/hero";

//TODO: Work on hero page and styling
//TODO: Add custom favicon and logo
export default async function Home() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 relative">
      <Hero />
      <h1 className="font-bold text-5xl py-3 text-primaryColor underline">Our Story</h1>
      <div className="text-gray-300 text-left py-3 font-sans text-2xl">
        At BaboshiBay, we are passionate about providing high-quality products and exceptional customer service. Founded in 2022, our company was born out of a desire to make it easier for people to access the items they need and love, all from the comfort of their own homes.
        We started small, but with a big vision - to build an e-commerce platform that truly puts the customer first. Over the years, we've grown tremendously, expanding our product offerings and reaching customers across the country. But no matter how much we've grown, our commitment to our original mission has never wavered.
        Today, we are proud to offer a curated selection of products spanning a wide range of categories, from home goods and electronics to fashion and beauty. Our team of experts scours the market to find the best items, ensuring that every purchase our customers make is a great one.
        But what truly sets us apart is our dedication to customer satisfaction. We believe that shopping online should be a seamless and enjoyable experience, which is why we have invested heavily in building a user-friendly platform, providing responsive customer support, and ensuring fast and reliable shipping.
        We are grateful to our loyal customers who have supported us along the way, and we look forward to continuing to grow and evolve to better serve your needs. Thank you for being a part of our story, and we can't wait to see what the future holds.</div>
      <Link>
        Products Page
      </Link>
      {/* TODO: add a footer */}
      <Footer />
    </div>
  );
}

