export default function Contact() {
    return (
      <div className="p-6 max-w-3xl mx-auto bg-white rounded-2xl ">
        <h2 className="text-2xl font-bold text-cyan-300">Contactez-nous</h2>
        <p className="mt-2 text-gray-600 mb-4">
          Une question ? Une proposition ? Écrivez-nous ici !
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nom"
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
          <textarea
            placeholder="Votre message"
            rows="4"
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-300 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Envoyer
          </button>
        </form>
      </div>
    )
  }
  