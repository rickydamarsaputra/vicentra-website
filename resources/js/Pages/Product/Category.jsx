import { Link, Head, usePage } from "@inertiajs/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Layout from "../../Layouts/PagesLayout";

const Category = ({ category, productCategory }) => {
    const { currentUrl, keywords } = usePage().props;
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: `Vicentra - Produk ${category.name}` ?? "",
        image: "https://vicentra.co.id/assets/images/logo-vicentra-black.webp",
        description:
            `Vicentra menyediakan berbagai produk ${category.name} terbaik di Surabaya, dengan kualitas unggulan, harga bersaing, dan layanan yang ramah untuk memenuhi setiap kebutuhan Anda. Temukan beragam pilihan produk yang dirancang untuk memberikan kenyamanan, keandalan, dan kepuasan, hanya di Vicentra solusi terbaik untuk gaya hidup modern Anda!` ??
            "",
        url: currentUrl ?? "",
        potentialAction: {
            "@type": "SearchAction",
            target: "https://vicentra.co.id/product/search?q={search_term}",
            "query-input": "required name=search_term",
        },
        mainEntity: [
            {
                "@type": "WebPage",
                name: "Vicentra - Syarat & Ketentuan Perbaikan Mesin",
                url: "https://vicentra.co.id/terms-and-conditions",
            },
            {
                "@type": "WebPage",
                name: "Vicentra - Tentang Kami",
                url: "https://vicentra.co.id/about-us",
            },
            {
                "@type": "WebPage",
                name: "Vicentra - Produk Mesin",
                url: "https://vicentra.co.id/product/mesin",
            },
            {
                "@type": "WebPage",
                name: "Vicentra - Produk Consumable",
                url: "https://vicentra.co.id/product/consumable",
            },
            {
                "@type": "WebPage",
                name: "Vicentra - Produk Sparepart",
                url: "https://vicentra.co.id/product/sparepart",
            },
            {
                "@type": "WebPage",
                name: "Vicentra - Produk Mesin Digital Printing Outdoor",
                url: "https://vicentra.co.id/product/mesin/digital-printing/outdoor",
            },
            {
                "@type": "WebPage",
                name: "Vicentra - Produk Mesin Digital Printing UV",
                url: "https://vicentra.co.id/product/mesin/digital-printing/uv",
            },
        ],
    };

    return (
        <div>
            <Head>
                <title>{`Vicentra - Produk ${category.name}` ?? ""}</title>
                <meta
                    name="description"
                    content={
                        `Vicentra menyediakan berbagai produk ${category.name} terbaik di Surabaya, dengan kualitas unggulan, harga bersaing, dan layanan yang ramah untuk memenuhi setiap kebutuhan Anda. Temukan beragam pilihan produk yang dirancang untuk memberikan kenyamanan, keandalan, dan kepuasan, hanya di Vicentra solusi terbaik untuk gaya hidup modern Anda!` ??
                        ""
                    }
                />
                <meta name="keywords" content={keywords} />
                <link rel="canonical" href={currentUrl ?? ""} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content={`Vicentra - Produk ${category.name}` ?? ""}
                />
                <meta
                    property="og:description"
                    content={
                        `Vicentra menyediakan berbagai produk ${category.name} terbaik di Surabaya, dengan kualitas unggulan, harga bersaing, dan layanan yang ramah untuk memenuhi setiap kebutuhan Anda. Temukan beragam pilihan produk yang dirancang untuk memberikan kenyamanan, keandalan, dan kepuasan, hanya di Vicentra solusi terbaik untuk gaya hidup modern Anda!` ??
                        ""
                    }
                />
                <meta
                    property="og:image"
                    content="https://vicentra.co.id/assets/images/logo-vicentra-black.webp"
                />
                <meta
                    property="og:url"
                    content={
                        `https://vicentra.co.id/product/${category.slug}` ?? ""
                    }
                />
                <meta property="og:site_name" content="Vicentra" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content={`Vicentra - Produk ${category.name}` ?? ""}
                />
                <meta
                    name="twitter:description"
                    content={
                        `Vicentra menyediakan berbagai produk ${category.name} terbaik di Surabaya, dengan kualitas unggulan, harga bersaing, dan layanan yang ramah untuk memenuhi setiap kebutuhan Anda. Temukan beragam pilihan produk yang dirancang untuk memberikan kenyamanan, keandalan, dan kepuasan, hanya di Vicentra solusi terbaik untuk gaya hidup modern Anda!` ??
                        ""
                    }
                />
                <meta
                    name="twitter:image"
                    content="https://vicentra.co.id/assets/images/logo-vicentra-black.webp"
                />
                <meta
                    name="twitter:site"
                    content={
                        `https://vicentra.co.id/product/${category.slug}` ?? ""
                    }
                />

                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Head>

            {/* HERO SECTION */}
            <section>
                <div>
                    <div className="w-full flex justify-center items-center rounded-tl-[10px] rounded-tr-[10px] lg:rounded-tl-[20px] lg:rounded-tr-[20px] overflow-hidden">
                        <img
                            src={`/storage/${category.banner}`}
                            alt={category.slug}
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </section>
            {/* HERO SECTION */}

            {/* SUB CATEGORY SECTION */}
            <section className="mt-[3.125rem] lg:mt-[6.25rem]">
                <h1 className="text-xl text-center capitalize font-semibold text-gray-800">
                    Kategori {category.name} Kami
                </h1>
                <div className="mt-[1.875rem]">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1.25rem]">
                        {productCategory.data.map((item, index) => {
                            if (item.thumbnail) {
                                if (category.slug === "mesin") {
                                    return (
                                        <Link
                                            href={`/product/${item.category.slug}/${item.category.subCategory.slug}/${item.category.subCategory.subSubCategory.slug}`}
                                            key={index}
                                            className="rounded-lg shadow-md overflow-hidden"
                                        >
                                            <img
                                                src={`/storage/${item.thumbnail}`}
                                                alt={item.slug}
                                            />
                                        </Link>
                                    );
                                } else if (category.slug === "consumable") {
                                    return (
                                        <Link
                                            href={`/product/${item.category.slug}/${item.category.subCategory.slug}`}
                                            key={index}
                                            className="rounded-lg shadow-md overflow-hidden"
                                        >
                                            <img
                                                src={`/storage/${item.thumbnail}`}
                                                alt={item.slug}
                                            />
                                        </Link>
                                    );
                                }
                            }

                            return (
                                <Link
                                    href={`/product/${item.category.slug}/${item.slug}`}
                                    key={index}
                                    className="min-h-[18.263rem] flex justify-center items-center rounded-lg shadow-md overflow-hidden bg-[#f0f0f0]"
                                >
                                    <h1 className="text-lg font-semibold">
                                        {item.name}
                                    </h1>
                                </Link>
                            );
                        })}
                    </div>
                    {/* PAGINATION */}
                    <div className="flex justify-end mt-[3.125rem]">
                        <div className="flex gap-2">
                            {productCategory.links.map((link, index) => {
                                if (index === 0) {
                                    return (
                                        <Link
                                            key={index}
                                            href={link.url}
                                            aria-label="link prev"
                                            className={`w-[2.5rem] h-[2.5rem] font-medium flex justify-center items-center ${
                                                link.active
                                                    ? `bg-vicentra-blue text-white`
                                                    : `bg-gray-200 text-gray-800`
                                            } rounded-lg`}
                                        >
                                            <FaChevronLeft />
                                        </Link>
                                    );
                                }

                                if (
                                    index ===
                                    productCategory.links.length - 1
                                ) {
                                    return (
                                        <Link
                                            key={index}
                                            href={link.url}
                                            aria-label="link next"
                                            className={`w-[2.5rem] h-[2.5rem] font-medium flex justify-center items-center ${
                                                link.active
                                                    ? `bg-vicentra-blue text-white`
                                                    : `bg-gray-200 text-gray-800`
                                            } rounded-lg`}
                                        >
                                            <FaChevronRight />
                                        </Link>
                                    );
                                }

                                return (
                                    <Link
                                        key={index}
                                        href={link.url}
                                        aria-label={`link pagination ${link.label}`}
                                        className={`w-[2.5rem] h-[2.5rem] font-medium flex justify-center items-center ${
                                            link.active
                                                ? `bg-vicentra-blue text-white`
                                                : `bg-gray-200 text-gray-800`
                                        } rounded-lg`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    {/* PAGINATION */}
                </div>
            </section>
            {/* SUB CATEGORY SECTION */}
        </div>
    );
};

Category.layout = (page) => <Layout children={page} />;
export default Category;
