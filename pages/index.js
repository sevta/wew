/* eslint-disable @next/next/no-img-element */
import Layout from "components/layout";
import ShowCases from "components/showcases";
import Template from "models/Template";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { BsInstagram } from "react-icons/bs";

export default function Homepage({ templates }) {
  const { status, error } = useSession();
  const router = useRouter();

  function OnLihatContohClick(index) {
    router.push(`/template/tm-${index + 1}`);
  }

  if (status === "loading") return <div>Loading...</div>;

  if (error) console.log({ error });

  return (
    <Layout>
      <section className="section-1" style={{}}>
        <div className="container pt-16 pb-40">
          <div className="flex space-x-10">
            <img
              className="w-80 rounded-box aspect-square"
              src="https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
              alt=""
            />
            <div className="w-4/5 mt-10">
              <div className="title font-amatic text-6xl leading-none">
                Website Undangan Pernikahan. Sebarkan dengan mudah.
              </div>
              <div className="content mt-2">
                Jadinikah sudah dipercaya selama Delapan tahun oleh lebih dari
                Sebelas Ribu calon pengantin untuk memudahkan penyebaran
                informasi pernikahan mereka secara efektif dan efisien.
              </div>
              <div className="mt-2">
                <button className="link text-lg font-medium">
                  <BsInstagram />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-2">
        <div className="container">
          <div className="title">Template</div>
          <div className="grid mt-5 grid-cols-3 gap-8">
            {[
              templates.map((template, index) => (
                <ShowCases
                  key={index}
                  index={index}
                  name={template.name}
                  price={template.price}
                  OnLihatContohClick={() => OnLihatContohClick(index)}
                />
              )),
            ]}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  /**
   * TODO: sort by asc
   */
  const templates = await Template.find().exec();

  return {
    props: {
      templates: JSON.parse(JSON.stringify(templates)),
    },
  };
}
