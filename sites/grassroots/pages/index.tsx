import Head from "next/head"
import Image from "next/image"
import { Layout } from "@components/Layout"
import { Config } from "config"

const { founder, volunteers, people } = Config

const networks = [
  {
    name: "Asia Pacific Refugee Rights Network",
    filename: "asia-pacific-refugee-rights-network.png",
  },
  {
    name: "Refugee Concern Network Hong Kong",
    filename: "refugee-concern-network.png",
  },
]

const Callout = ({ children }) => (
  <div className="bg-white shadow-2xl rounded-xl overflow-hidden lg:p-8 p-4">
    {children}
  </div>
)
export default function Home() {
  return (
    <>
      <Head>
        <title>{Config.title}</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com/css2?family=Nunito&family=Roboto+Slab&display=swap"
        />
      </Head>

      <Layout>
        <div className="relative">
          <div className="relative sm:overflow-hidden bg-gray-100">
            <Image
              src="/hero/demonstration.webp"
              layout="responsive"
              height={590}
              width={1024}
              loading="eager"
              priority
            />
          </div>
        </div>

        <main>
          <section className="max-w-4xl mx-auto py-8 px-6">
            <h1>Mission</h1>
            <p>
              Grassroots Future is a registered charity in Hong Kong which came
              out of a desire to help refugee-led initiatives and grassroots
              organizations working with refugees build capacity. Our journey to
              setting up Grassroots Future started with Table of Two Cities, a
              grassroots storytelling initiative to showcase refugee narratives
              through the medium of food.
            </p>

            <p>
              We have held community events around Hong Kong over several years,
              bringing two sides of the city across one table - united by food,
              the greatest social equalizer.{" "}
              <a target="_blank" href="https://tableoftwocities.org/">
                Table of Two Cities
              </a>{" "}
              started in 2016 and is an ongoing initiative within Grassroots
              Future to this day.
            </p>

            <div className="relative rounded-2xl shadow-xl sm:overflow-hidden my-4 bg-gray-100">
              <Image
                src="/hero/DSCF5736.webp"
                layout="responsive"
                height={590}
                width={1024}
                priority
              />
            </div>

            <div className="py-4">
              <p>
                Grassroots Future represents the expansion of this original idea
                into a holistic organization. We believe in using collective
                action at the local level to effect change and engage
                refugee-led initiatives to drive forward and innovate solutions
                together.
              </p>
            </div>
          </section>

          <div className="relative sm:overflow-hidden bg-gray-100">
            <Image
              src="/hero/DSF1996.webp"
              height={590}
              width={900}
              loading="lazy"
              layout="responsive"
            />
          </div>

          <section className="max-w-4xl mx-auto py-8 px-6">
            <p>
              We believe in holding space for refugee initiatives because there
              are undiscovered talents within the community which need a
              platform and support to succeed. We hope to incubate these ideas
              to scale and become sustainable. We also believe in using the
              power of art and culture to provide safe spaces for survivors of
              trauma. Grassroots Future focusses and develops programming around
              four key areas:
            </p>
          </section>

          <section className="max-w-4xl mx-auto py-8 px-6 border-t-2">
            <h1>Activites</h1>
            <p>
              <a target="_blank" href="https://www.tableoftwocities.org/">
                Through Table of Two Cities
              </a>
              , a food and culture initiative, we have been organising food and
              culture events since 2016. Through participating in our events,
              you can support the refugee community while learning something
              new.
            </p>

            <div className="relative rounded-2xl shadow-xl sm:overflow-hidden my-4 bg-gray-100">
              <Image
                src="/hero/DSCF8788.webp"
                layout="responsive"
                height={670}
                width={1024}
                loading="lazy"
              />
            </div>
            <div className="pt-4">
              <h3>Other Activites</h3>
              <ul>
                <li>Crafts workshops</li>
                <li>Cooking demonstrations / workshops</li>
                <li>Food / culture sharing</li>
                <li>Concerts / Shows</li>
                <li>Exhibitions</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="bg-white">
              <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="py-2">
                  <h2 className="text-2xl font-extrabold text-center">
                    Our Partners
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4">
                  {Config.partners.map((partner) => {
                    return (
                      <div className="col-span-1 sm:col-span-1 flex justify-center">
                        <img
                          className="object-contain md:h-20 md:object-cover"
                          src={`./partners/${partner.filename}`}
                          alt={`${partner.name}`}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            {/* networks */}
            <div className="pb-8">
              <div className="py-4">
                <h2 className="text-2xl font-extrabold text-center">
                  Our Network Partners
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2">
                {networks?.map((network) => {
                  return (
                    <div className="col-span-1 flex justify-center">
                      <img
                        className="h-20"
                        src={`./networks/${network.filename}`}
                        alt={`${network.name}`}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          <section className="max-w-4xl mx-auto py-8 px-6 border-t-2">
            <div>
              <h1>Who are the people behind Grassroots Future?</h1>
            </div>

            <div className="py-2">
              <p>
                Grassroots Future is composed of volunteers, grassroots
                organisers and community leaders that collaborate together.
                However, the cohesiveness of this collaboration was crafted and
                maintained by the founder of Grassroots Future, Tegan Smyth.
              </p>
            </div>

            <div>
              <div className="aspect-w-3 aspect-h-1 mb-2">
                <img
                  className="object-cover shadow-lg rounded-lg"
                  src={Config.founder.imageUrl}
                  alt=""
                />
              </div>
              <div className="space-y-2">
                <div className="text-lg leading-6 font-medium">
                  <h3>{founder.name}</h3>
                  <p className="text-highlight">{founder.role}</p>
                </div>
              </div>
              <div>
                {founder?.bio?.map((b) => (
                  <p>{b}</p>
                ))}
              </div>
            </div>

            {/* people */}
            <div className="py-4">
              <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-2 lg:gap-x-8 list-none px-0">
                {people.map((person) => (
                  <li key={person.name}>
                    <div className="space-y-4">
                      <div className="aspect-w-3 aspect-h-2 mb-2">
                        <img
                          className="h-60 w-60 rounded-full md:w-full md:h-full md:object-cover shadow-lg md:rounded-lg"
                          src={person.imageUrl}
                          alt=""
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="text-lg leading-6 font-medium">
                          <h3>{person.name}</h3>
                          <p className="text-highlight">{person.role}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Volunteers */}
            <div className="py-4">
              <h3 className="text-lg leading-6 py-2 font-medium">Volunteers</h3>
              <ul>
                {volunteers.map((volunteer) => (
                  <li>
                    {volunteer.linkedin ? (
                      <a
                        className="underline"
                        target="_blank"
                        href={volunteer.linkedin}
                      >
                        {volunteer.name}
                      </a>
                    ) : (
                      <span>{volunteer.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>

        <section className="py-8 px-6 border-t-2 bg-emerald">
          <div className="max-w-4xl mx-auto space-8 gap-8 grid grid-cols-1 md:grid-cols-2">
            <Callout>
              <p>
                If you'd like to support Grassroots Future in their on-going
                mission to empowering others through education, please reach out
                to us on Instagram{" "}
                <a
                  className="underline cursor-pointer"
                  href="https://www.instagram.com/grassrootsfuture/"
                  target="_blank"
                >
                  @GrassrootsFuture
                </a>{" "}
                or...
              </p>
            </Callout>

            <Callout>
              <div>
                <div className="pb-2">
                  If you would like to donate to support our initiatives
                  financially, you can donate directly to:
                </div>
                <div>
                  <span>Grassroots Future Limited</span>
                </div>
                <div>
                  <span>Bank: Public Bank (Hong Kong)</span>
                </div>
                <div>
                  <span>Account: 0714393415233</span>
                </div>
              </div>
            </Callout>
          </div>
        </section>
      </Layout>
    </>
  )
}
