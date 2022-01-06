/* eslint-disable @next/next/no-img-element */
import Layout from "components/Layout";
import ShowCases from "components/ShowCases";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { BsInstagram } from "react-icons/bs";

export default function Homepage() {
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
        <div className="container pt-10 pb-40">
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
          <div className="grid grid-cols-3 gap-8">
            {[
              Array(8)
                .fill("")
                .map((_, index) => (
                  <ShowCases
                    key={index}
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
