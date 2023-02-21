/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from "next";
import { trpc } from "~/client/utils/trpc";
import Head from "next/head";
import Link from "next/link";

const HomePage: NextPage = () => {
  const { data, isLoading, isFetching, error, isError } =
    trpc.getHello.useQuery();

  if (isLoading || isFetching) {
    return <>
      <center className="text-green-400 text-6xl italic">Rana Shab Ya Sabr ...</center>
      <br /><br />
    </>;
  }

  if (isError) {
    return <>
      <center className="text-green-500 italic text-3xl">Oori Baba Lo Gi Error A Gya: {error.message}
      </center>
      <div className="apnecardsdiv">
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Rana Rabees</h2>

            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              <a href="" className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img id="hacimg" src="https://images.unsplash.com/photo-1565377024937-5e947136c50c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75" />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">Hacker A</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">Rana Rabees</p>
                <div className="grid-uniform">
                  <Link className="btn" href="/">Hack With Us</Link>
                </div>
              </a>

              <a href="#" className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img id="hacimg" src="https://images.unsplash.com/photo-1509479200622-4503f27f12ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="Olive drab green insulated bottle with flared screw lid and flat top." className="h-full w-full object-cover object-center group-hover:opacity-75" />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">Hacker B</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">Rana Rabees</p>
                <div className="grid-uniform">
                  <Link className="btn" href="/">Hack With Us</Link>
                </div>
              </a>

              <a href="#" className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img id="hacimg" src="https://images.unsplash.com/photo-1544890225-2f3faec4cd60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80" alt="Person using a pen to cross a task off a productivity paper card." className="h-full w-full object-cover object-center group-hover:opacity-75" />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">Hacker C</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">Rana Rabees</p>
                <div className="grid-uniform">
                  <Link className="btn" href="/">Hack With Us</Link>
                </div>
              </a>

              <a href="#" className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img id="hacimg" src="https://images.unsplash.com/photo-1544121505-740398defbcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75" />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">Hacker D</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">Rana Rabees</p>
                <div className="grid-uniform">
                  <Link className="btn" href="/">Hack With Us</Link>
                </div>
              </a>

            </div>
          </div>
        </div>
      </div>
      <br /><br />
      <div className="apnecardsdiv">
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Rana Rabees</h2>

            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              <a href="" className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img id="hacimg" src="https://images.unsplash.com/photo-1518351330216-a38c8ab14640?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75" />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">Hacker A</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">Rana Rabees</p>
                <div className="grid-uniform">
                  <Link className="btn" href="/">Hack With Us</Link>
                </div>
              </a>

              <a href="#" className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img id="hacimg" src="https://images.unsplash.com/photo-1524860769472-246b6afea403?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Olive drab green insulated bottle with flared screw lid and flat top." className="h-full w-full object-cover object-center group-hover:opacity-75" />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">Hacker B</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">Rana Rabees</p>
                <div className="grid-uniform">
                  <Link className="btn" href="/">Hack With Us</Link>
                </div>
              </a>

              <a href="#" className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img id="hacimg" src="https://images.unsplash.com/photo-1491743715344-d5eed2a9c5bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Person using a pen to cross a task off a productivity paper card." className="h-full w-full object-cover object-center group-hover:opacity-75" />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">Hacker C</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">Rana Rabees</p>
                <div className="grid-uniform">
                  <Link className="btn" href="/">Hack With Us</Link>
                </div>
              </a>

              <a href="#" className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img id="hacimg" src="https://images.unsplash.com/photo-1568611066080-e54db9abb0f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75" />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">Hacker D</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">Rana Rabees</p>
                <div className="grid-uniform">
                  <Link className="btn" href="/">Hack With Us</Link>
                </div>
              </a>

            </div>
          </div>
        </div>
      </div>
      <br /><br />
    </>;
  }

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css"
        />
        {/* <script src="https://cdn.tailwindcss.com"></script> */}
        <link
          rel="shortcut icon"
          href="//cdn.shopify.com/s/files/1/0436/7371/4851/t/7/assets/favicon.png?v=29818458213238068251642580843"
          type="image/png"
        />

        <link
          href="//cdn.shopify.com/s/files/1/0436/7371/4851/t/7/assets/home-sections.scss.css?1650"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="//cdn.shopify.com/s/files/1/0436/7371/4851/t/7/assets/style.css?v=30686512873233263451654235224"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="//cdn.shopify.com/s/files/1/0436/7371/4851/t/7/assets/slick.scss?v=101226323548799392701629637261"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="//cdn.shopify.com/s/files/1/0436/7371/4851/t/7/assets/prettyPhoto.css?v=127577845115257541841629637244"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="//cdn.shopify.com/s/files/1/0436/7371/4851/t/7/assets/animate.css?v=170469424254788653381629637215"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="//cdn.shopify.com/s/files/1/0436/7371/4851/t/7/assets/font-all.min.css?v=145974524023387984911629637225"
          rel="stylesheet"
          type="text/css"
          media="all"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Montserrat:300,300italic,400,500,600,400italic,600italic,700,700italic,800,800italic"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Montserrat:300,300italic,400,500,600,400italic,600italic,700,700italic,800,800italic"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Montserrat:300,300italic,400,500,600,400italic,600italic,700,700italic,800,800italic"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Montserrat:300,300italic,400,500,600,400italic,600italic,700,700italic,800,800italic"
        />

        <title>DAIG - Online Catering Services In Twin Cities</title>
      </Head>
      
      <section className="bg-ct-blue-600 min-h-screen pt-20">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
          <p className="text-3xl font-semibold">{data?.message}</p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
