import Image from "next/legacy/image";

import { Layout } from "@components/Layout"
import { Callout } from "@components/Callout"
import { MetaHead } from "@components/MetaHead"

import { Config } from "config"

import demonstration from "../public/hero/demonstration.webp"
import falafel from "../public/hero/DSCF5736.webp"
import cooking from "../public/hero/DSF1996.webp"
import spread from "../public/hero/DSCF8788.webp"
import welfare from "../public/hero/welfare-infographic.png"
import { Donation } from "@components/Donation"
import { RaiselyLink } from "@components/Donation/RaiselyLink"

const { founder, networks, people, volunteers } = Config

export default function Home() {
  return (
    <>
      <MetaHead />
      <Layout>
        <div className="relative">
          <div className="relative sm:overflow-hidden bg-gray-100">
            <Image
              placeholder="blur"
              src={demonstration}
              layout="responsive"
              height={590}
              width={1024}
              loading="eager"
              priority
            />
          </div>
        </div>

        <main>

          <section className="bg-dark">
            <div className="max-w-4xl mx-auto py-8 px-6">
              <div className="p-1 rounded-lg">
                <RaiselyLink cta={true} />
              </div>
            </div>
          </section>

          <section className="max-w-4xl mx-auto py-8 px-6">
            <h1>Mission</h1>
            <p>
              Grassroots Future is a registered charity in Hong Kong which came
              out of a desire to help refugee-led initiatives and grassroots
              organizations working with refugees build capacity.
            </p>

            <p>
              Grassroots Future started out as{" "}
              <a target="_blank" href="https://tableoftwocities.org/">
                Table of Two Cities
              </a>{" "}
              (TOTC) in 2016, a grassroots storytelling initiative to showcase
              refugee narratives through the medium of food. We have held
              community events around Hong Kong, united by food, the greatest
              social equaliser. Through our interaction with the members, we
              recognize the immediate and practical needs of the refugee
              community that need to be met, but there is also a great yearning
              to live a self-sufficient, dignified and purposeful life.
            </p>

            <p>We believe that:</p>
            <ul className="list-disc pl-4">
              <li className="py-2">
                Everybody deserves to live with dignity and purpose.
              </li>
              <li className="py-2">
                We can all contribute to a more sustainable world in different
                capacities.
              </li>
              <li className="py-2">
                More thoughtful and interesting interactions between refugees
                and non-refugees can enhance mutual understanding and enrich our
                city.
              </li>
              <li className="py-2">
                We can create a platform and support undiscovered talents to
                develop their skills to become self-reliant and create an
                inclusive environment where we can collectively innovate
                solutions for our society.
              </li>
            </ul>

            <div className="relative rounded-2xl shadow-xl sm:overflow-hidden my-4 bg-gray-100">
              <Image
                placeholder="blur"
                src={falafel}
                layout="responsive"
                height={1151}
                width={2048}
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
              placeholder="blur"
              src={cooking}
              height={590}
              width={900}
              loading="lazy"
              layout="responsive"
            />
          </div>

          <section>
            <div className="bg-white">
              <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="py-2">
                  <h2 className="text-2xl font-extrabold text-center">
                    Our Partners
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
                  {Config.partners.map((partner, index) => {
                    return (
                      <div
                        className="col-span-1 sm:col-span-1 flex justify-center"
                        key={`partner-${index}`}
                      >
                        <img
                          className="object-contain h-16 md:h-20 md:object-cover"
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
              <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid">
                  {networks?.map((network, index) => {
                    return (
                      <div
                        className="flex justify-center"
                        key={`network-${index}`}
                      >
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
            </div>
          </section>

          <section className="max-w-4xl mx-auto py-8 px-6">
            <h1>What we do</h1>
            <p>
              Grassroots Future envisions to build capacity among refugee-led
              initiatives, focusing on community building through events and
              projects driven by members of the refugee community.
            </p>

            <ol className="list-decimal pl-4">
              <li className="py-2">
                <strong>Education:</strong> Supporting the needs of young people
                and adults through privately funded vocational training,
                mentorship, workshops and general skills training to improve
                capacity and self-sufficiency. Supporting the educational
                expenses of children through our initiatives and event
                programming.
              </li>

              <li className="py-2">
                <strong>Community building:</strong>Community outreach and
                cultural events, which are curated by the refugee community, to
                engage different groups within society.
              </li>
              <li className="py-2">
                <strong>Well-being:</strong>Provide safe spaces for healing and
                mental well-being through the arts and recreational activities.
              </li>
            </ol>
          </section>

          <section className="max-w-4xl mx-auto py-8 px-6 border-t-2">
            <h1>Activities</h1>
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
                placeholder="blur"
                src={spread}
                layout="responsive"
                height={670}
                width={1024}
                loading="lazy"
              />
            </div>
            <div className="pt-4">
              <h3>Other Activities</h3>
              <ul>
                <li>Crafts workshops</li>
                <li>Cooking demonstrations / workshops</li>
                <li>Food / culture sharing</li>
                <li>Concerts / Shows</li>
                <li>Exhibitions</li>
              </ul>
            </div>
          </section>

          <section className="max-w-4xl mx-auto py-8 px-6 border-t-2">
            <h2>About refugees and asylum seekers</h2>
            <p>
              There are 13,000-14,000 refugees and asylum seekers seeking
              protection in Hong Kong. Most of them come from countries in
              Africa, Middle East and South Asia, and some from Southeast Asia.
            </p>

            <p>
              Many of them have waited for over 10 years to have their case
              heard. During this long, uncertain wait, they are not given a Hong
              Kong ID and thus the many benefits that come with it, nor are they
              allowed to work. They have little choice but to rely on support
              from charities and the government's symbolic HK$3,000 subsidy,
              which is inclusive of HK$200 for transportation, HK$1,200 in
              vouchers in a designated supermarket, and $1,500 paid directly to
              the landlord for rent.
            </p>
            <div className="relative rounded-2xl shadow-xl sm:overflow-hidden my-4 bg-gray-100">
              <Image
                placeholder="blur"
                src={welfare}
                layout="responsive"
                height={1080}
                width={1920}
                loading="lazy"
              />
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
                {founder?.bio?.map((line, index) => (
                  <p key={`${founder.name}-bio-${index}`}>{line}</p>
                ))}
              </div>
            </div>

            {/* people */}
            {
              people.length > 0 ? (
                <div className="py-4">
                  <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-2 lg:gap-x-8 list-none px-0">
                    {people.map((person) => (
                      <li key={person.name}>
                        <div className="space-y-4">
                          <div className="mb-2 rounded-full md:rounded-none aspect-h-2 aspect-w-2 h-60 w-60 overflow-hidden md:overflow-auto md:w-full md:h-full">
                            <img
                              className="rounded-full md:w-full md:h-full md:object-cover shadow-lg md:rounded-lg"
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
              ) : (
                null
              )
            }
            

            {/* Volunteers */}
            <div className="py-4">
              <h3 className="text-lg leading-6 py-2 font-medium">Volunteers</h3>
              <ul>
                {volunteers.map((volunteer) => (
                  <li key={volunteer.name}>
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

            <Donation />
          </div>
        </section>
      </Layout>
    </>
  )
}
