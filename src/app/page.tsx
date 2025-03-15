"use client";

import { Button } from "@/components/Button";
import logo from "../assets/viparisrprond.png";
// import FDE from "../assets/fde.jpg";
import Image from "next/image";

export default function Home() {
	return (
		<main>
			<div className="relative isolate px-6 pt-8 lg:px-8">
				<div
					className="absolute inset-0 -z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-fixed bg-cover bg-center bg-no-repeat"
					style={{
						backgroundImage: `url(https://vi-los-santos-rp.fr/_app/immutable/assets/fde.D9_F04Dc.jpg)`,
					}}
				/>
				<div
					className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
					aria-hidden="true"
					style={{ backgroundColor: "rgba(20, 0, 54, 0.5)" }}
				>
					<div
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#140036] to-[#d6a1f1] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
					/>
				</div>
				<div className="mx-auto max-w-2xl py-32">
					<div className="mb-12 flex justify-center">
						<div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
							<Image className="h-44 w-auto" src={logo} alt="VI Los Santos RP" />
						</div>
					</div>
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
							Bienvenue sur le Catalogue Automobile de VI Paris RP
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-200">
							Un serveur FiveM créé par des joueurs pour les joueurs
						</p>
						<div className="mt-24 flex items-center justify-center gap-x-6">
							<Button>Rejoignez-nous</Button>
							{/* <!-- <a href="#" className="text-sm font-semibold leading-6 text-gray-900"
						>Learn more <span aria-hidden="true">→</span></a
					> --> */}
						</div>
					</div>
				</div>
				<div
					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
					aria-hidden="true"
					style={{ backgroundColor: "rgba(20, 0, 54, 0.5)" }}
				>
					<div
						className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#140036] to-[#d6a1f1] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
					/>
				</div>
				{/* <!-- <div className="hidden sm:block mx-auto max-w-3xl pb-40">
			<Carousel />
		</div> --> */}
			</div>
		</main>
	);
}
