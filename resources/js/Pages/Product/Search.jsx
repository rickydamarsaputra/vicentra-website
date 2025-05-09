import { Link, Head, usePage } from "@inertiajs/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Layout from "../../Layouts/PagesLayout";

const Search = ({ keyword, products }) => {
    const { currentUrl, keywords } = usePage().props;

    return (
        <div>
            <Head>
                <title>
                    {`Vicentra - Cari ${keyword.replace(/\b\w/g, (char) =>
                        char.toUpperCase()
                    )}` ?? ""}
                </title>
                <meta
                    name="description"
                    content={
                        `Hasil pencarian Anda dengan keyword ${keyword.replace(
                            /\b\w/g,
                            (char) => char.toUpperCase()
                        )} telah kami temukan! Berikut adalah produk-produk pilihan yang sesuai untuk memenuhi kebutuhan Anda. Temukan kualitas terbaik, penawaran menarik, dan solusi yang tepat hanya dalam satu kali klik!` ??
                        ""
                    }
                />
                <meta name="keywords" content={keywords} />
                <link rel="canonical" href={currentUrl ?? ""} />
            </Head>

            {/* SEARCHING SECTION */}
            <section>
                <h1 className="text-xl text-center capitalize font-semibold text-gray-800">
                    Cari {keyword}
                </h1>
            </section>
            {/* SEARCHING SECTION */}

            {/* PRODUCT CONTENT */}
            <div className="h-full flex flex-col justify-start items-start col-span-12 lg:col-span-9 lg:mt-auto">
                <div className="w-full mt-[1.875rem]">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1.25rem]">
                        {products.data.map((item, index) => {
                            const linkProduct =
                                item.category.slug === "mesin" ||
                                item.category.slug === "consumable"
                                    ? `/product/${item.category.slug}/${item.category.subCategory.slug}/${item.category.subCategory.subSubCategory.slug}/${item.slug}`
                                    : `/product/${item.category.slug}/${item.category.subCategory.slug}/${item.slug}`;

                            return (
                                <Link
                                    key={index}
                                    href={linkProduct}
                                    className="rounded-lg overflow-hidden"
                                >
                                    <div className="rounded-lg overflow-hidden relative">
                                        <img
                                            src={`/storage/${item.thumbnail}`}
                                            alt={item.slug}
                                        />
                                        {item.is_out_of_stock ? (
                                            <div className="w-full h-[1.5rem] flex justify-center items-center absolute top-[50%] left-0 transform translate-y-[-50%] bg-[#B31B1B]">
                                                <h2 className="text-base font-bold text-white uppercase">
                                                    out of stock
                                                </h2>
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className="mt-2">
                                        <h2 className="text-center text-base font-bold">
                                            {item.name}
                                        </h2>
                                        <h3 className="text-center text-sm font-normal">
                                            {item.another_name}
                                        </h3>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                    {/* PAGINATION */}
                    <div className="w-full flex justify-end mt-[3.125rem]">
                        <div className="flex gap-2">
                            {products.links.map((link, index) => {
                                if (index === 0) {
                                    return (
                                        <Link
                                            key={index}
                                            href={
                                                link.url != null
                                                    ? `${link.url}&q=${keyword}`
                                                    : null
                                            }
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

                                if (index === products.links.length - 1) {
                                    return (
                                        <Link
                                            key={index}
                                            href={
                                                link.url != null
                                                    ? `${link.url}&q=${keyword}`
                                                    : null
                                            }
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
                                        href={`${link.url}&q=${keyword}`}
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
            </div>
            {/* PRODUCT CONTENT */}
        </div>
    );
};

Search.layout = (page) => <Layout children={page} />;

export default Search;
