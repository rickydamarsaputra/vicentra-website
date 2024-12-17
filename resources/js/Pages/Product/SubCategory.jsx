import { useState } from "react";
import { Link } from "@inertiajs/react";
import { Helmet } from "react-helmet";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import Layout from "../../Layouts/PagesLayout";

const SubCategory = ({ categoryProduct, category, subCategory }) => {
    const currentAccordion = `${category.slug}/${subCategory.slug}`;
    const [categoryOpen, setCategoryOpen] = useState(
        currentAccordion.split("/")[0]
    );
    const [subCategoryOpen, setSubCategoryOpen] = useState(
        currentAccordion.split("/")[1]
    );
    const [subSubCategoryOpen, setSubSubCategoryOpen] = useState(
        currentAccordion.split("/")[2]
    );
    const handleCategoryOpen = (slug) => {
        setCategoryOpen(slug);
    };
    const handleSubCategoryOpen = (slug) => {
        setSubCategoryOpen(slug);
    };

    return (
        <div>
            <Helmet>
                <title>
                    Vicentra - Produk {category.name} {subCategory.name}
                </title>
            </Helmet>

            {/* LIST PRODUCT SECTION */}
            <section className="grid grid-cols-12 lg:gap-4">
                {/* SIDEBAR */}
                <div className="col-span-12 lg:col-span-3">
                    <h1 className="text-xl capitalize font-semibold text-gray-800">
                        Produk Kami
                    </h1>
                    <div className="mt-[1.875rem]">
                        {categoryProduct.map((category, index) => (
                            <Accordion
                                open={categoryOpen === category.slug}
                                key={index}
                            >
                                <AccordionHeader
                                    className="text-start text-sm font-semibold py-2"
                                    onClick={() =>
                                        handleCategoryOpen(category.slug)
                                    }
                                >
                                    {category.name}
                                </AccordionHeader>
                                <AccordionBody className="py-0">
                                    <div className="ml-4">
                                        {category.subMenu.map(
                                            (subMenu, index) => (
                                                <Accordion
                                                    open={
                                                        subCategoryOpen ===
                                                        subMenu.slug
                                                    }
                                                    key={index}
                                                >
                                                    <AccordionHeader
                                                        className={`text-start text-sm font-medium py-2 ${
                                                            subCategoryOpen ===
                                                            subMenu.slug
                                                                ? "text-vicentra-blue font-semibold"
                                                                : ""
                                                        }`}
                                                        onClick={() =>
                                                            handleSubCategoryOpen(
                                                                subMenu.slug
                                                            )
                                                        }
                                                    >
                                                        {subMenu.name}
                                                    </AccordionHeader>
                                                    <AccordionBody className="py-0">
                                                        <ul className="ml-4 mt-6">
                                                            {subMenu.subSubMenu.map(
                                                                (
                                                                    subSubMenu,
                                                                    index
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            index
                                                                        }
                                                                        className="w-full flex justify-between mb-2"
                                                                    >
                                                                        <Link
                                                                            href={`/product/${category.slug}/${subMenu.slug}/${subSubMenu.slug}`}
                                                                            className={`${
                                                                                subSubCategoryOpen ===
                                                                                subSubMenu.slug
                                                                                    ? "w-[90%] text-vicentra-pink font-semibold pl-3 rounded-sm bg-[#acacac1f]"
                                                                                    : "w-full"
                                                                            }`}
                                                                        >
                                                                            {
                                                                                subSubMenu.name
                                                                            }
                                                                        </Link>
                                                                        <span>
                                                                            (
                                                                            {
                                                                                subSubMenu.count
                                                                            }
                                                                            )
                                                                        </span>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </AccordionBody>
                                                </Accordion>
                                            )
                                        )}
                                    </div>
                                </AccordionBody>
                            </Accordion>
                        ))}
                    </div>
                </div>
                {/* SIDEBAR */}
            </section>
            {/* LIST PRODUCT SECTION */}
        </div>
    );
};

SubCategory.layout = (page) => <Layout children={page} />;
export default SubCategory;
