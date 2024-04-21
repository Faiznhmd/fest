import Image from 'next/image';
import React from 'react';

const Timeline = () => {
  return (
    <main className="relative h-200 flex flex-col justify-center bg-slate-900 overflow-hidden">
      <h1 className="font-bold text-4xl my-4 justify-center items-center flex">
        Our Previous Sponsors
      </h1>
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
        <div className="text-center">
          <div
            x-data="{}"
            x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
            className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
          >
            <ul
              x-ref="logos"
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            >
              <li>
                <Image
                  src="/assets/sponser-11.png"
                  alt="Facebook"
                  height={100}
                  width={100}
                />
              </li>
              <li>
                <Image
                  src="/assets/sponser-22.png"
                  alt="Facebook"
                  height={100}
                  width={100}
                />
              </li>
              <li>
                <Image
                  src="/assets/sponser-33.png"
                  alt="Facebook"
                  height={100}
                  width={100}
                />
              </li>
              <li>
                <Image
                  src="/assets/sponser-44.png"
                  alt="Facebook"
                  height={100}
                  width={100}
                />
              </li>
              <li>
                <Image
                  src="/assets/sponser-55.jpg"
                  alt="Facebook"
                  height={100}
                  width={100}
                />
              </li>
              <li>
                <Image
                  src="/assets/sponser-11.png"
                  alt="Facebook"
                  height={100}
                  width={100}
                />
              </li>
              <li>
                <Image
                  src="/assets/sponser-22.png"
                  alt="Facebook"
                  height={100}
                  width={100}
                />
              </li>
              <li>
                <Image
                  src="/assets/sponser-33.png"
                  alt="Facebook"
                  height={100}
                  width={100}
                />
              </li>
              <li>
                <Image
                  src="/assets/sponser-44.png"
                  alt="Facebook"
                  height={100}
                  width={100}
                />
              </li>{' '}
              <li>
                <Image
                  src="/assets/sponser-55.jpg"
                  alt="Facebook"
                  height={100}
                  width={100}
                />
              </li>{' '}
              <li>
                <Image
                  src="/assets/Sponsers6.jpeg"
                  alt="Facebook"
                  height={100}
                  width={100}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Timeline;
