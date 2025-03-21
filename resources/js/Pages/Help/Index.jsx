import { useRef } from "react";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";

import Layout from "../../Layouts/PagesLayout";

const Help = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    console.log("SUCCESS!");
                    alert("Terimakasih, Pesan Anda Sudah Terkirim.");
                    form.current.reset();
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };

    return (
        <div>
            <Helmet>
                <title>Vicentra - Bantuan</title>
            </Helmet>

            {/* HELP SECTION */}
            <section>
                <h1 className="text-xl text-center font-semibold text-gray-800">
                    Ada Yang Bisa Dibantu?
                </h1>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="lg:w-[50%] mx-auto space-y-4 mt-[2.5rem]"
                >
                    <input
                        type="text"
                        placeholder="Masukan Nama"
                        name="user_name"
                        className="w-full border-2 border-gray-500 focus:outline-none px-4 py-2 rounded-md"
                    />
                    <input
                        type="email"
                        placeholder="Masukan Email"
                        name="user_email"
                        className="w-full border-2 border-gray-500 focus:outline-none px-4 py-2 rounded-md"
                    />
                    <input
                        type="text"
                        placeholder="Masukan Subyek"
                        name="subject"
                        className="w-full border-2 border-gray-500 focus:outline-none px-4 py-2 rounded-md"
                    />
                    <textarea
                        placeholder="Tuliskan Pesan Anda"
                        name="message"
                        cols="30"
                        rows="10"
                        className="w-full border-2 border-gray-500 focus:outline-none px-4 py-2 rounded-md"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-vicentra-blue text-white text-base font-medium px-5 py-2 rounded-md"
                    >
                        Kirim
                    </button>
                </form>
            </section>
            {/* HELP SECTION */}
        </div>
    );
};

Help.layout = (page) => <Layout children={page} />;
export default Help;
