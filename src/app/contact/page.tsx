import { SiteLayout } from "@/components/layout";

export default function Contact() {
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

        <h1 className="text-3xl font-semibold tracking-tighter mb-6">Contact</h1>

        <div className="space-y-8">
          <p className="text-gray-600">Pour tout renseignement:</p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 relative">
                <img
                  src="https://ext.same-assets.com/774688965/2158582071.png"
                  alt="Email icon"
                  className="object-contain w-full h-full"
                />
              </div>
              <a
                href="mailto:contact.romanenko@gmail.com"
                className="text-gray-600 hover:text-black"
              >
                contact.romanenko
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 relative">
                <img
                  src="https://ext.same-assets.com/1320112597/1898172399.png"
                  alt="Instagram icon"
                  className="object-contain w-full h-full"
                />
              </div>
              <a
                href="https://www.instagram.com/romanenkomichael"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black"
              >
                @romanenkomichael
              </a>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
