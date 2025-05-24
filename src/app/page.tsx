import { SiteLayout } from "@/components/layout";

export default function Home() {
  return (
    <SiteLayout>
      <div className="max-w-3xl">
        <div className="mb-8">
          <img
            src="https://ext.same-assets.com/469626687/4172846660.png"
            alt="Michael Romanenko studio"
            className="w-full h-auto"
          />
        </div>

        <h1 className="text-3xl font-semibold tracking-tighter mb-6">Biographie</h1>

        <div className="space-y-4 text-gray-600">
          <p>
            Michael Romanenko est né à Paris en 1972. Il vit et travaille à Paris. Représenté à ses débuts par la
            <a href="https://www.galeriahilariogalguera.com/" target="_blank" rel="noopener noreferrer" className="text-black underline mx-1">
              galerie Hilario Galguera
            </a>
            (Mexico), son travail est maintenant défendu par la
            <a href="https://galerielafonte.com/" target="_blank" rel="noopener noreferrer" className="text-black underline mx-1">
              galerie La Fonte
            </a>
            (Montréal).
          </p>

          <p>
            Formé à l'Ecole Supérieure d'Arts Graphiques Penninghen il s'inscrit dans le registre de l'abstraction depuis les années 2000.
            Peintre, il travaille principalement à l'acrylique et à l'encre japonaise qu'il détourne pour créer différentes émulsions.
            Il est influencé par les démarches d'Ellsworth Kelly, d'Agnes Martin et de Roman Opalka et puise son inspiration dans les thèmes
            du temps qui s'écoule et de l'illusion de la permanence. Il conçoit le tableau comme une empreinte de cette dynamique et
            cherche à donner forme à cette dimension immatérielle.
          </p>
        </div>
      </div>
    </SiteLayout>
  );
}
