import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';
import Logo from './Logo';
import JD from './JD';
import DrugHandle from './DrugHandle';
import Rivian from './Rivian';
import DrugHandle2 from './DrugHandle2';
import './header.css';
// import Logo from '@/components/Logo';
// import Bounded from './Bounded';
export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle('settings');
  return (
    <div className="px-7 lg:px-10 xl:px-14 mt-6 lg:mt-6 xl:mt-8">
      <nav className="grid grid-cols-3">
        <div>
          <div className="lg:hidden">
            <DrugHandle2></DrugHandle2>
          </div>
          <div className="hidden lg:block">
            {/* can be use Link tag and use '/'define path */}
            <Logo></Logo>
          </div>
        </div>

        <div className=" h-full">
          <div className="hidden lg:block h-full ">
            <ul className="flex justify-between items-center gap-5 text-xl leading-[26px] font-semibold  h-full">
              {settings.data.navigation.map(({ link, label }) => (
                <li key={label}>
                  <PrismicNextLink field={link} className="menu-link">
                    {label}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:hidden">
            <Rivian></Rivian>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className=" lg:flex lg:justify-end ">
            <div className="flex lg:gap-5 xl:gap-6 items-center">
              <div className="w-12 h-12 rounded-full border-2 border-[#000000] flex items-center justify-center">
                <JD></JD>
              </div>
              <DrugHandle></DrugHandle>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
