import { SiteLayout } from "@/components/layout";
import { ImageGallery } from "@/components/image-gallery";

const artworks = [
  {
    id: 1,
    title: "Lignes de vie II",
    description: "Les lignes en spirale décrivent l'écoulement du temps pour tout individu. Leurs variations traduisant cette évolution en tourbillon contrastent avec la grille régulière peinte dans une couleur artificielle.",
    technique: "Acrylique sur toile",
    year: "2022-2023",
    dimensions: "192x129cm",
    images: [
      "https://ext.same-assets.com/2153088176/2126545.png", // LDV II.1
      "https://ext.same-assets.com/2644536202/647915283.png",
      "https://ext.same-assets.com/2970594183/3789920384.png"
    ]
  },
  {
    id: 2,
    title: "Empreinte",
    description: "Portant l'empreinte de la texture de la première toile qu'elle a recouverte, le verso d'une « peau » de peinture s'enroule sur un nouveau châssis. Elle est de la couleur immatérielle et vibrante des icônes.",
    technique: "Techniques mixtes",
    year: "2022-2023",
    dimensions: "140x100cm",
    images: [
      "https://ext.same-assets.com/36093108/494519099.png",
      "https://ext.same-assets.com/2951533147/3278983717.png",
      "https://ext.same-assets.com/3922957679/4016292690.png",
      "https://ext.same-assets.com/2206656678/3427191487.png"
    ]
  },
  {
    id: 3,
    title: "Mutation",
    description: "Dessinant l'écoulement du temps, une ligne en spirale est appliquée en continue jusqu'à couvrir entièrement la surface et se fondre dans le support.",
    technique: "Graphite, pigment, émulsion sur bois",
    year: "2019-2023",
    dimensions: "30x23cm",
    images: [
      "https://ext.same-assets.com/2187430468/1335956008.png",
      "https://ext.same-assets.com/2206656678/3427191487.png"
    ]
  },
  {
    id: 4,
    title: "Citations",
    description: "Le tableau est une addition du mot \"Citation\" évoquant les croyances aussi nombreuses que les individus. Sa disparition par sa propre accumulation figure l'illusion de la permanence.",
    technique: "Acrylique, émulsion sur toile",
    year: "2017-2023",
    dimensions: "130x89cm",
    images: [
      "https://ext.same-assets.com/3917828984/688996066.png",
      "https://ext.same-assets.com/3302415130/230946551.png", //4.2
      "https://ext.same-assets.com/1380978334/4122856025.png", //4.3
      "https://ext.same-assets.com/3396602070/3437174997.png",
      "https://ext.same-assets.com/1041866889/3337106001.png"
    ]
  },
  {
    id: 5,
    title: "Lignes de vie I",
    description: "Tracée très lentement, la ligne enregistre la temporalité de son exécution en même temps qu'elle capture le geste de peindre.",
    technique: "Pigment, émulsion sur papier",
    year: "2020-2022",
    dimensions: "70x47cm",
    images: [
      "https://ext.same-assets.com/2004222809/2253646228.png",
      "https://ext.same-assets.com/2549150489/1430671246.png"
    ]
  }
];

export default function Oeuvres() {
  return (
    <SiteLayout>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-semibold tracking-tighter mb-8">Œuvres</h1>

        <div className="space-y-20">
          {artworks.map((artwork) => (
            <div key={artwork.id} className="border-t pt-8">
              <div className="mb-3">
                <h2 className="text-xl font-medium">{artwork.title}</h2>
                <p className="text-sm text-gray-600">{artwork.technique}</p>
              </div>

              <div className="flex flex-col md:flex-row gap-8">
                <ImageGallery
                  images={artwork.images}
                  title={artwork.title}
                  dimensions={artwork.dimensions}
                />

                <div className="flex-1 space-y-4">
                  <p className="text-sm text-gray-600">{artwork.description}</p>
                  <p className="text-sm text-gray-500 text-right">{artwork.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
