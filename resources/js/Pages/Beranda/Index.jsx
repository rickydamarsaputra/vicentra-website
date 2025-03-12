import { useState, useEffect } from "react";
import { Link, Head, usePage } from "@inertiajs/react";

import Layout from "../../Layouts/PagesLayout";
import Faq from "./components/Faq";
import Testimonial from "./components/Testimonial";
import Hero from "./components/Hero";
import Why from "./components/Why";
import Youtube from "./components/Youtube";
import Brands from "./components/Brands";

const Beranda = ({ sliders, categoryProducts, testimonials, brands, faqs }) => {
    const { url } = usePage();
    const { currentUrl, keywords } = usePage().props;
    const isServer = typeof window === "undefined";
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.querySelector(".sticky");
            if (heroSection) {
                const isDesktop = window.innerWidth >= 1280;
                if (window.scrollY > heroSection.offsetHeight && isDesktop) {
                    setIsSticky(true);
                } else {
                    setIsSticky(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener saat komponen unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Empty dependency array berarti useEffect hanya dijalankan sekali saat mount

    return (
        <>
            <Head>
                <title>
                    Vicentra - Distributor dan Supplier Mesin Dan Bahan
                    Percetakan Surabaya
                </title>
                <meta
                    name="description"
                    content="Vicentra - Solusi Percetakan Terbaik Sejak 2012. Temukan mesin & bahan baku percetakan berkualitas dengan layanan purna jual terbaik di Indonesia."
                />
                <meta name="keywords" content={keywords} />
                <link rel="canonical" href={currentUrl ?? ""} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Vicentra - Supplier Mesin Dan Bahan Percetakan Surabaya"
                />
                <meta
                    property="og:description"
                    content="Vicentra - Solusi Percetakan Terbaik Sejak 2012. Temukan mesin & bahan baku percetakan berkualitas dengan layanan purna jual terbaik di Indonesia."
                />
                <meta
                    property="og:image"
                    content="https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
                />
                <meta property="og:url" content="https://vicentra.co.id" />
                <meta property="og:site_name" content="Vicentra" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Vicentra - Supplier Mesin Dan Bahan Percetakan Surabaya"
                />
                <meta
                    name="twitter:description"
                    content="Vicentra - Solusi Percetakan Terbaik Sejak 2012. Temukan mesin & bahan baku percetakan berkualitas dengan layanan purna jual terbaik di Indonesia."
                />
                <meta
                    name="twitter:image"
                    content="https://vicentra.co.id/build/assets/webp/logo-vicentra-black-35a77328.webp"
                />
                <meta name="twitter:site" content="https://vicentra.co.id" />
            </Head>

            {/* HERO SECTION */}
            <section className="sticky lg:relative top-0 z-[10] bg-white">
                <Hero sliders={sliders} isSticky={isSticky} />
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

            {/* BRANDS SECTION */}
            <section className="my-[3.125rem] lg:my-[6.25rem]">
                <div className="flex justify-center">
                    <div className="bg-vicentra-pink rounded-full px-4 py-2 shadow-md">
                        <h1 className="text-white font-semibold capitalize">
                            Brand Kami
                        </h1>
                    </div>
                </div>
                <div className="mt-[1.875rem]">
                    <Brands brands={brands} />
                </div>
            </section>
            {/* BRANDS SECTION */}

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
                    {!isServer ? <Faq faqs={faqs} /> : <div>Loading...</div>}
                </div>
            </section>
            {/* FAQ SECTION */}

            {/* ABOUT SECTION */}
            <section className="my-[3.125rem] lg:my-[6.25rem]">
                <div className="flex justify-center">
                    <h1 className="font-semibold">vicentra.co.id</h1>
                </div>
                <div className="mt-[1.875rem]">
                    <p className="text-justify lg:text-left text-sm leading-5">
                        Distributor dan Supplier Mesin Dan Bahan Percetakan
                        Terlengkap Dengan Harga Terbaik, Rekomendasi Distributor
                        dan Supplier Termurah dan Terpercaya. Showroom
                        (Distributor fisik) tersedia di Surabaya , Distributor
                        dan Supplier Mesin Dan Bahan Usaha Digital Printing
                        Terlengkap. CV VICENTRA INDO PERKASA Supplier Mesin Dan
                        Bahan Percetakan Terlengkap dan Termurah memiliki
                        rekanan di beberapa kota yang tersebar{" "}
                        <span className="font-semibold">
                            Sulawesi Utara, Bali, Malang, Jogja Yogyakarta,
                            Bandung, Semarang, Ambon, Nusa Tenggara Timur,
                            Makassar, Medan, Surabaya, Denpasar, Lombok, Kupang,
                            Kalimantan, Balikpapan, Banjarmasin, Pontianak,
                            Samarinda, Palangkaraya, Sulawesi, Manado, Palu,
                            Gorontalo, Gresik, Probolinggo, Jawa Timur, Jawa
                            Barat, Bogor
                        </span>
                        . Distributor dan Supplier Aneka Mesin Dan Bahan Usaha
                        Indonesia Harga Murah Terpercaya yang menjual{" "}
                        <span className="font-semibold">{keywords}</span>.
                        Vicentra Distributor dan Supplier Mesin Dan Bahan
                        Percetakan Menjual Berbagai Mesin Dan Bahan Percetakan
                        Terlengkap dengan Harga Terbaik.
                        <br />
                        <br />
                        Sebagai Distributor, Importir Dan Supplier Mesin dan
                        Bahan Percetakan yang Menjual Produk Mesin dan Bahan
                        dengan Harga Murah Hampir Di Seluruh Indonesia, Vicentra
                        Selalu Melayani Pelanggan dan Melengkapi Ketersediaan
                        Barang Kami dengan Produk Terbaru, Produk Utama, Bahan
                        Pelengkap, dan Produk Pelengkap untuk menjunjang semua
                        kebutuhan pelanggan kami di Seluruh Indonesia.
                    </p>
                </div>
            </section>
            {/* ABOUT SECTION */}
        </>
    );
};

Beranda.layout = (page) => <Layout children={page} />;
export default Beranda;
