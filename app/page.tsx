import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import styles from '@/app/ui/home.module.css';
import { lusi } from '@/app/ui/fonts';
import Image from 'next/image';

import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        <div className={styles.shape}/>
          <p className={`${lusi.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Feature 9 Updated.</strong> In this example, we load the page quicker by loading the most readily available components first.
          </p>
          <p className={`${lusi.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            The user can view/interact with other parts of the page while the rest of the parts are loading.
          </p>
          <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>To Dashboard</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <p>In this branch, render blocking of components have been dealt with by leveraging <span className="font-bold underline decoration-solid">Streaming</span> and <span className="font-bold underline decoration-solid">Suspense</span> in NextJS.</p>
          <ul class="list-disc">
            <li>By Streaming, you can prevent slow data requests from blocking your whole page.</li>
            <li>This allows the user to see and interact with parts of the page without waiting for all the data to load before any UI can be shown to the user.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
