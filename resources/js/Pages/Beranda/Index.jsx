import { Link } from "@inertiajs/react";
import { Helmet } from "react-helmet";

import Layout from "../../Layouts/PagesLayout";
import Faq from "./components/Faq";
import Testimonial from "./components/Testimonial";
import Hero from "./components/Hero";
import Why from "./components/Why";
import Youtube from "./components/Youtube";

const Beranda = ({ sliders, categoryProducts, testimonials, faqs }) => {
    return (
        <>
            <Helmet>
                <title>
                    Vicentra - Supplier Mesin Dan Bahan Percetakan Surabaya
                </title>
            </Helmet>

            {/* HERO SECTION */}
            <section>
                <Hero sliders={sliders} />
            </section>
            {/* HERO SECTION */}

            {/* WHY VICENTRA SECTION */}
            <section className="my-[3.125rem] lg:my-[6.25rem]">
                <Why />
            </section>
            {/* WHY VICENTRA SECTION */}

            {/* OUR PRODUCT SECTION */}
            <section className="my-[3.125rem] lg:my-[6.25rem]">
                <div className="flex justify-center">
                    <div className="bg-vicentra-yellow rounded-full px-4 py-2 shadow-md">
                        <h1 className="text-gray-800 font-semibold capitalize">
                            Produk Kami
                        </h1>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-3 lg:gap-[2rem] mt-[1.875rem]">
                    {categoryProducts.map((category, index) => (
                        <Link href={`/product/${category.slug}`} key={index}>
                            <img
                                src={`/storage/${category.thumbnail}`}
                                alt={`category-${category.slug}`}
                                className="rounded-xl shadow-md"
                            />
                        </Link>
                    ))}
                </div>
            </section>
            {/* OUR PRODUCT SECTION */}

            {/* YOUTUBE SECTION */}
            <section className="bg-gray-100 my-[3.125rem] lg:my-[6.25rem] p-5 rounded-lg">
                <Youtube />
            </section>
            {/* YOUTUBE SECTION */}

            {/* CUSTOMER TESTIMONIALS SECTION */}
            <section className="my-[3.125rem] lg:my-[6.25rem]">
                <div className="flex justify-center">
                    <div className="bg-vicentra-pink rounded-full px-4 py-2 shadow-md">
                        <h1 className="text-white font-semibold capitalize">
                            Testimoni Customer
                        </h1>
                    </div>
                </div>
                <div className="mt-[1.875rem]">
                    <Testimonial testimonials={testimonials} />
                </div>
            </section>
            {/* CUSTOMER TESTIMONIALS SECTION */}

            {/* FAQ SECTION */}
            <section className="my-[3.125rem]">
                <div className="flex justify-center">
                    <div className="bg-vicentra-black rounded-full px-4 py-2 shadow-md">
                        <h1 className="text-white font-semibold capitalize">
                            FAQ
                        </h1>
                    </div>
                </div>
                <div className="mt-[1.875rem]">
                    <Faq faqs={faqs} />
                </div>
            </section>
            {/* FAQ SECTION */}
        </>
    );
};

Beranda.layout = (page) => <Layout children={page} />;
export default Beranda;
