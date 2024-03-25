import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"


export default function app() {
  return (
    <main className="min-h-svh bg-offwhitebg py-20 px-6">
      <section>
        <div className="bg-orange p-12 rounded-t-lg ">
          <img src={iconSedans} alt="ícone dos carros sedan" className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Sedans</h2>
          <p className="font-lexend mb-7">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a className="font-lexend" href="https://www.webmotors.com.br/sedans" target="_blank">Ver mais</a>
        </div>

        <div className="bg-green p-12">
        <img src={iconSuvs} alt="Ícone dos carros SUV" className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">SUVs</h2>
          <p className="font-lexend mb-7">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a className="font-lexend" href="https://www.webmotors.com.br/carros/estoque?idcmp=s08%3Ac03%3A8bcd6c70eb2a4017aac2e34222708902&tipoveiculo=carros&anunciante=Loja%7CConcessionária&carroceria=Utilitário+esportivo&gclsrc=aw.ds&gad_source=1&gclid=CjwKCAjwnv-vBhBdEiwABCYQA7IZp-BWtNKF9QOin6TfRDJkwrhA8eche_LIFeoIlJpsD9nzV4ydLhoCmLIQAvD_BwE" target="_blank">Ver mais</a>
        </div>

        <div className="bg-dark-green p-12 rounded-b-lg">
          <img src={iconLuxury} alt="ícone dos carros de luxo" className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Luxuosos</h2>
          <p className="font-lexend mb-7">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a className="font-lexend" href="https://www.webmotors.com.br/carros-de-luxo" target="_blank">Ver mais</a>
        </div>
      </section>
    </main>

  )


}