import { SiteLayout } from "@/components/layout";

const articles = [
  {
    id: 1,
    title: "Michael Romanenko, constantes et évolutions d'une ligne de vie",
    author: "Orianne Castel",
    date: "Mai 2024",
    url: "https://www.art-critique.com/2024/05/michael-romanenko-constantes-et-evolutions-dune-ligne-de-vie/"
  },
  {
    id: 2,
    title: "Les camaïeux de Michael Romanenko",
    author: "Orianne Castel",
    date: "Juin 2023",
    url: "https://www.art-critique.com/2023/06/les-camaieux-de-michael-romanenko/"
  }
];

export default function Presse() {
  return (
    <SiteLayout>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-semibold tracking-tighter mb-8">Presse</h1>

        <div className="space-y-12">
          {articles.map((article) => (
            <div key={article.id} className="border-t pt-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="col-span-1">
                  <p className="text-sm text-gray-600">{article.author}</p>
                  <p className="text-sm text-gray-600">{article.date}</p>
                </div>

                <div className="col-span-3 flex justify-between items-center">
                  <h2 className="text-lg font-semibold">{article.title}</h2>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-black"
                  >
                    Voir →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
