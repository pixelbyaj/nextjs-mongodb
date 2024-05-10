import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-wrap justify-center">

      <Link href="/your-link-here">
        <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl m-4 relative overflow-hidden block">

          {/* Magazine Cover Image and Title/Subtitle */}
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
              src="/mexico_2.jpg"
              alt="Peru"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* Magazine Cover Header */}
          {/* <div className="magazine-header absolute top-0 w-full bg-white h-5 flex items-center justify-center">
            <span>Zeit Sprachen</span>
          </div> */}
          <div className="card-body absolute inset-0 p-5 flex flex-col text-white">
            {/* Magazine Title */}
            <h2 className="magazine-title text-7xl font-bold text-center mb-4">ECCOS</h2>

            {/* Magazine Subtitle */}
            <p className="magazine-subtitle text-2xl text-center absolute bottom-4 left-1/2 transform -translate-x-1/2">El día de los Muertos</p>
          </div>
        </div>
      </Link>

      <Link href="/your-link-here">
        <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl m-4 relative overflow-hidden block">

          {/* Magazine Cover Image and Title/Subtitle */}
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
              src="/costa_rica_1.jpg"
              alt="Costa Rica"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="card-body absolute inset-0 p-4 flex flex-col text-white">
            {/* Magazine Title */}
            <h2 className="magazine-title text-7xl font-bold text-center mb-4">ECCOS</h2>

            {/* Magazine Subtitle */}
            <p className="magazine-subtitle text-2xl text-center absolute bottom-4 left-1/2 transform -translate-x-1/2">La Salva</p>
          </div>
        </div>
      </Link>

      <Link href="/your-link-here">
        <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl m-4 relative overflow-hidden block">

          {/* Magazine Cover Image and Title/Subtitle */}
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
              src="/sevilla_1.jpg"
              alt="Sevilla"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="card-body absolute inset-0 p-4 flex flex-col text-white">
            {/* Magazine Title */}
            <h2 className="magazine-title text-7xl font-bold text-center mb-4">ECCOS</h2>

            {/* Magazine Subtitle */}
            <p className="magazine-subtitle text-2xl text-center absolute bottom-4 left-1/2 transform -translate-x-1/2">La Danza</p>
          </div>
        </div>
      </Link>

      <Link href="/your-link-here">
        <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl m-4 relative overflow-hidden block">
          {/* Magazine Cover Image and Title/Subtitle */}
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
              src="/peru_1.jpg"
              alt="Mach Picchu Peru"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="card-body absolute inset-0 p-4 flex flex-col text-white">
            {/* Magazine Title */}
            <h2 className="magazine-title text-7xl font-bold text-center mb-4">ECCOS</h2>

            {/* Magazine Subtitle */}
            <p className="magazine-subtitle text-2xl text-center absolute bottom-4 left-1/2 transform -translate-x-1/2">Machu Picchu</p>
          </div>
        </div>
      </Link>


    </main>
  );
}



