import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
<<<<<<< HEAD
import { useTranslation } from "react-i18next";
import Footer from "../components/footer/Footer";
=======
import { Toaster, toast } from 'react-hot-toast';
import emailjs from 'emailjs-com';
>>>>>>> fd218828a962abf5745688bb889ff465e751cd67

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialisation d'EmailJS
  useEffect(() => {
    emailjs.init("zlLispkVhr8fySJoX");
  }, []);

  // Expressions régulières pour la validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]{2,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
      valid = false;
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = "Nom invalide (minimum 2 caractères alphabétiques)";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
      valid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = "Minimum 10 caractères requis";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Veuillez corriger les erreurs dans le formulaire");
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_dbotjki",
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_e0kjx29",
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "zlLispkVhr8fySJoX"
      );

      toast.success("Message envoyé avec succès !");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erreur d'envoi:", error);
      let errorMessage = "Erreur lors de l'envoi du message";
      
      if (error.status === 400) {
        errorMessage = "Données du formulaire invalides";
      } else if (error.status === 500) {
        errorMessage = "Problème serveur - Veuillez réessayer plus tard";
      }
      
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const { t } = useTranslation();

  return (
<<<<<<< HEAD
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
=======
    <>
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#fff',
            color: '#333',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          },
          success: { iconTheme: { primary: '#06b6d4', secondary: '#fff' } },
          error: { iconTheme: { primary: '#ef4444', secondary: '#fff' } }
        }}
      />
>>>>>>> fd218828a962abf5745688bb889ff465e751cd67

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="box"
      >
        <div className="p-8">
          <div className="p-8 max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border border-white">
            <h2 className="text-3xl font-bold text-cyan-500 mb-2">Contactez-nous</h2>
            <p className="text-gray-600 mb-6">
              Une question ? Une proposition ? Écrivez-nous ici, nous vous répondrons rapidement !
            </p>

            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom complet"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full border ${errors.name ? "border-red-500" : "border-gray-300"} px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300`}
                  disabled={isSubmitting}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="email@exemple.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full border ${errors.email ? "border-red-500" : "border-gray-300"} px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300`}
                  disabled={isSubmitting}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Décrivez votre demande en détail..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full border ${errors.message ? "border-red-500" : "border-gray-300"} px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300`}
                  disabled={isSubmitting}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center justify-center gap-2 ${
                  isSubmitting ? 'bg-cyan-400' : 'bg-cyan-500 hover:bg-cyan-600'
                } text-white px-6 py-3 rounded-lg transition-colors duration-300 shadow-md w-full`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
}