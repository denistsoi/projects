import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./style.css";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <img src="./demonstration.jpg" />
      {/* Summary */}
      <article className="px-4 lg:px-8 max-w-2xl items-center justify-center xl:m-auto">
        <section className="py-4">
          <div className="py-2">
            <p className="py-2">
              <strong>Grassroots Future</strong> looks at empowering grassroots
              movements and advocacy in the refugee and asylum seeker community.
            </p>
          </div>

          <span>We achieve this through the following model:</span>
          <ul className="py-2 pl-4 list-disc">
            <li className="md:pl-4 py-2">
              <strong>Education</strong>: Supporting the needs of young people
              and adults through vocational training, mentorship, workshops and
              general skills training to improve capacity and self sufficiency.
            </li>
            <li className="md:pl-4 py-2">
              <strong>Community outreach</strong>: Community outreach and
              cultural events, which are curated by the refugee community, to
              engage different groups within society.
            </li>
            <li className="md:pl-4 py-2">
              <strong>Well-being</strong>: Provide safe spaces for healing and
              mental well-being through the arts and recreational activities.
            </li>
            <li className="md:pl-4 py-2">
              <strong>Investing in the future</strong>: Supporting the
              educational expenses of children through our event programming.
            </li>
          </ul>
        </section>

        {/* Activities */}
        <section className="py-4">
          <div className="py-2">
            <h3 className="font-bold">Activities</h3>
            <p className="py-2">
              <a
                className="underline text-blue-700"
                href="www.tableoftwocities.org"
              >
                Through Table of Two Cities
              </a>
              , a food and culture initiative, we have been organising food and
              culture events since 2016. Through participating in our events,
              you can support the refugee community while learning something
              new.
            </p>
          </div>

          <div className="py-2">
            <h3 className="font-bold">Other Activities</h3>
            <ul className="py-2 pl-4 list-disc">
              <li className="md:pl-4 py-2">Crafts workshops</li>
              <li className="md:pl-4 py-2">
                Cooking demonstrations / workshops
              </li>
              <li className="md:pl-4 py-2">Food / culture sharings</li>
              <li className="md:pl-4 py-2">Concerts / Shows </li>
              <li className="md:pl-4 py-2">Exhibitions </li>
            </ul>
          </div>
        </section>
      </article>
      <footer className="bg-green-900 pt-4 pb-8 px-4 lg:px-8 text-white xl:m-auto">
        <div>
          Grassroots © 2020. All rights reserved. <br /> Made with ❤️ by Denis
          Tsoi
        </div>
      </footer>
    </Layout>
  );
}

export default IndexPage;
