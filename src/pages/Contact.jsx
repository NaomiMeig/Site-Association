import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import Footer from "../components/footer/Footer";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { t } = useTranslation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="box"
    >
      <div className="p-8">
        <div className="p-8 max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border border-white">
          <h2 className="text-3xl font-bold text-cyan-300 mb-2">{t("contact.title")}</h2>
          <p className="text-gray-500 mb-6">{t("contact.subtitle")}</p>
          <form className="space-y-5">
            <input
              type="text"
              placeholder={t("contact.name")}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all duration-300"
              required
            />
            <input
              type="email"
              placeholder={t("contact.email")}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all duration-300"
              required
            />
            <textarea
              placeholder={t("contact.message")}
              rows="4"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all duration-300"
              required
            ></textarea>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-cyan-300 text-white px-6 py-3 rounded-lg hover:bg-cyan-500 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
              {t("contact.button")}
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

  