"use client";

import { Fragment, useState } from "react";
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	Popover,
	PopoverButton,
	PopoverGroup,
	PopoverPanel,
	Tab,
	TabGroup,
	TabList,
	TabPanel,
	TabPanels,
} from "@headlessui/react";
import {
	Bars3Icon,
	// MagnifyingGlassIcon,
	// ShoppingBagIcon,
	XMarkIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/viparisrprond.png";

const navigation = {
	categories: [
		{
			id: "autos",
			name: "Autos",
			featured: [
				{
					name: "New Arrivals",
					href: "#",
					imageSrc: "https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-01.jpg",
					imageAlt: "Models sitting back to back, wearing Basic Tee in black and bone.",
				},
			],
			sections: [
				{
					id: "all",
					name: "Toutes les voitures",
					items: [{ name: "Voir tous les véhicules", href: "/autos" }],
				},
				{
					id: "types",
					name: "Types",
					items: [
						{ name: "Compacts", href: "#" },
						{ name: "Coupés", href: "#" },
						{ name: "Muscle", href: "#" },
						{ name: "Off Road", href: "#" },
						{ name: "Sedans", href: "#" },
						{ name: "Sports", href: "#" },
						{ name: "Sports Classics", href: "#" },
						{ name: "Super", href: "#" },
						{ name: "SUVs", href: "#" },
						{ name: "Vans", href: "#" },
					],
				},
				{
					id: "marques",
					name: "Marques",
					items: [
						{ name: "Albany", href: "#" },
						{ name: "Annis", href: "#" },
						{ name: "Benefactor", href: "#" },
						{ name: "BF", href: "#" },
						{ name: "Bollokan", href: "#" },
						{ name: "Bravado", href: "#" },
						{ name: "Brute", href: "#" },
						{ name: "Canis", href: "#" },
						{ name: "Chariot", href: "#" },
						{ name: "Cheval", href: "#" },
						{ name: "Coil", href: "#" },
						{ name: "Declasse", href: "#" },
						{ name: "Dewbauchee", href: "#" },
						{ name: "Dinka", href: "#" },
						{ name: "Dundreary", href: "#" },
						{ name: "Emperor", href: "#" },
						{ name: "Enus", href: "#" },
					],
				},
				{
					id: "marques2",
					name: " ",
					items: [
						{ name: "Fathom", href: "#" },
						{ name: "Gallivanter", href: "#" },
						{ name: "Grotti", href: "#" },
						{ name: "Hijak", href: "#" },
						{ name: "HVY", href: "#" },
						{ name: "Imponte", href: "#" },
						{ name: "Invetero", href: "#" },
						{ name: "Karin", href: "#" },
						{ name: "Lampadati", href: "#" },
						{ name: "Maibatsu", href: "#" },
						{ name: "Mammoth", href: "#" },
						{ name: "Maxwell", href: "#" },
						{ name: "MTL", href: "#" },
						{ name: "Nagasaki", href: "#" },
						{ name: "Obey", href: "#" },
						{ name: "Ocelot", href: "#" },
						{ name: "Overflod", href: "#" },
					],
				},
				{
					id: "marques3",
					name: " ",
					items: [
						{ name: "Pegassi", href: "#" },
						{ name: "Pfister", href: "#" },
						{ name: "Principe", href: "#" },
						{ name: "Progen", href: "#" },
						{ name: "Rune", href: "#" },
						{ name: "Schyster", href: "#" },
						{ name: "Shitzu", href: "#" },
						{ name: "Truffade", href: "#" },
						{ name: "Ubermacht", href: "#" },
						{ name: "Vapid", href: "#" },
						{ name: "Vulcar", href: "#" },
						{ name: "Vysser", href: "#" },
						{ name: "Weeny", href: "#" },
						{ name: "Western Motorcyle Company", href: "#" },
						{ name: "Willard", href: "#" },
						{ name: "Zirconium", href: "#" },
					],
				},
			],
		},
		{
			id: "motos",
			name: "Motos",
			featured: [
				{
					name: "New Arrivals",
					href: "#",
					imageSrc:
						"https://tailwindui.com/plus/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
					imageAlt: "Drawstring top with elastic loop closure and textured interior padding.",
				},
			],
			sections: [
				{
					id: "clothing",
					name: "Clothing",
					items: [
						{ name: "Tops", href: "#" },
						{ name: "Pants", href: "#" },
						{ name: "Sweaters", href: "#" },
						{ name: "T-Shirts", href: "#" },
						{ name: "Jackets", href: "#" },
						{ name: "Activewear", href: "#" },
						{ name: "Browse All", href: "#" },
					],
				},
				{
					id: "accessories",
					name: "Accessories",
					items: [
						{ name: "Watches", href: "#" },
						{ name: "Wallets", href: "#" },
						{ name: "Bags", href: "#" },
						{ name: "Sunglasses", href: "#" },
						{ name: "Hats", href: "#" },
						{ name: "Belts", href: "#" },
					],
				},
				{
					id: "brands",
					name: "Brands",
					items: [
						{ name: "Re-Arranged", href: "#" },
						{ name: "Counterfeit", href: "#" },
						{ name: "Full Nelson", href: "#" },
						{ name: "My Way", href: "#" },
					],
				},
			],
		},
		{
			id: "quads",
			name: "Quads",
			featured: [
				{
					name: "New Arrivals",
					href: "#",
					imageSrc:
						"https://tailwindui.com/plus/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
					imageAlt: "Drawstring top with elastic loop closure and textured interior padding.",
				},
			],
			sections: [
				{
					id: "clothing",
					name: "Clothing",
					items: [
						{ name: "Tops", href: "#" },
						{ name: "Pants", href: "#" },
						{ name: "Sweaters", href: "#" },
						{ name: "T-Shirts", href: "#" },
						{ name: "Jackets", href: "#" },
						{ name: "Activewear", href: "#" },
						{ name: "Browse All", href: "#" },
					],
				},
				{
					id: "accessories",
					name: "Accessories",
					items: [
						{ name: "Watches", href: "#" },
						{ name: "Wallets", href: "#" },
						{ name: "Bags", href: "#" },
						{ name: "Sunglasses", href: "#" },
						{ name: "Hats", href: "#" },
						{ name: "Belts", href: "#" },
					],
				},
				{
					id: "brands",
					name: "Brands",
					items: [
						{ name: "Re-Arranged", href: "#" },
						{ name: "Counterfeit", href: "#" },
						{ name: "Full Nelson", href: "#" },
						{ name: "My Way", href: "#" },
					],
				},
			],
		},
		{
			id: "velos",
			name: "Vélos",
			featured: [
				{
					name: "New Arrivals",
					href: "#",
					imageSrc:
						"https://tailwindui.com/plus/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
					imageAlt: "Drawstring top with elastic loop closure and textured interior padding.",
				},
			],
			sections: [
				{
					id: "clothing",
					name: "Clothing",
					items: [
						{ name: "Tops", href: "#" },
						{ name: "Pants", href: "#" },
						{ name: "Sweaters", href: "#" },
						{ name: "T-Shirts", href: "#" },
						{ name: "Jackets", href: "#" },
						{ name: "Activewear", href: "#" },
						{ name: "Browse All", href: "#" },
					],
				},
				{
					id: "accessories",
					name: "Accessories",
					items: [
						{ name: "Watches", href: "#" },
						{ name: "Wallets", href: "#" },
						{ name: "Bags", href: "#" },
						{ name: "Sunglasses", href: "#" },
						{ name: "Hats", href: "#" },
						{ name: "Belts", href: "#" },
					],
				},
				{
					id: "brands",
					name: "Brands",
					items: [
						{ name: "Re-Arranged", href: "#" },
						{ name: "Counterfeit", href: "#" },
						{ name: "Full Nelson", href: "#" },
						{ name: "My Way", href: "#" },
					],
				},
			],
		},
	],
	// pages: [{ name: "Contact", href: "#" }],
};

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<div className="absolute inset-x-0 top-0 z-50 w-full bg-vprp">
			{/* Mobile menu */}
			<Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
				<DialogBackdrop
					transition
					className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
				/>

				<div className="fixed inset-0 z-40 flex">
					<DialogPanel
						transition
						className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
					>
						<div className="flex px-4 pt-5 pb-2">
							<button
								type="button"
								onClick={() => setOpen(false)}
								className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-fuchsia-400"
							>
								<span className="absolute -inset-0.5" />
								<span className="sr-only">Close menu</span>
								<XMarkIcon aria-hidden="true" className="size-6" />
							</button>
						</div>

						{/* Links */}
						<TabGroup className="mt-2">
							<div className="border-b border-fuchsia-200">
								<TabList className="-mb-px flex space-x-8 px-4">
									{navigation.categories.map((category) => (
										<Tab
											key={category.name}
											className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-fuchsia-900 data-selected:border-indigo-600 data-selected:text-indigo-600"
										>
											{category.name}
										</Tab>
									))}
								</TabList>
							</div>
							<TabPanels as={Fragment}>
								{navigation.categories.map((category) => (
									<TabPanel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
										<div className="flex gap-x-4">
											{category.featured.map((item) => (
												<div key={item.name} className="group relative text-sm">
													<Image
														alt={item.imageAlt}
														src={logo}
														className="aspect-square w-full rounded-lg bg-fuchsia-100 object-cover group-hover:opacity-75"
													/>
													<Link
														href={item.href}
														className="mt-6 block font-medium text-fuchsia-900"
													>
														<span aria-hidden="true" className="absolute inset-0 z-10" />
														{item.name}
													</Link>
													<p aria-hidden="true" className="mt-1">
														Shop now
													</p>
												</div>
											))}
										</div>
										{category.sections.map((section) => (
											<div key={section.name}>
												<p
													id={`${category.id}-${section.id}-heading-mobile`}
													className="font-medium text-fuchsia-900"
												>
													{section.name}
												</p>
												<ul
													role="list"
													aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
													className="mt-6 flex flex-col space-y-6"
												>
													{section.items.map((item) => (
														<li key={item.name} className="flow-root">
															<Link
																href={item.href}
																className="-m-2 block p-2 text-fuchsia-500"
															>
																{item.name}
															</Link>
														</li>
													))}
												</ul>
											</div>
										))}
									</TabPanel>
								))}
							</TabPanels>
						</TabGroup>

						{/* <div className="space-y-6 border-t border-fuchsia-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <Link
                    href={page.href}
                    className="-m-2 block p-2 font-medium text-fuchsia-900"
                  >
                    {page.name}
                  </Link>
                </div>
              ))}
            </div> */}

						<div className="space-y-6 border-t border-fuchsia-200 px-4 py-6">
							<div className="flow-root">
								<Link href="#" className="-m-2 block p-2 font-medium text-fuchsia-900">
									Contact
								</Link>
							</div>
						</div>
					</DialogPanel>
				</div>
			</Dialog>

			<header className="fixed w-full">
				<nav aria-label="Top" className=" w-full mx-auto px-4 sm:px-6 lg:px-8">
					<div className="border-b border-fuchsia-200">
						<div className="flex h-16 items-center">
							<button
								type="button"
								onClick={() => setOpen(true)}
								className="relative rounded-md bg-white p-2 text-fuchsia-400 lg:hidden"
							>
								<span className="absolute -inset-0.5" />
								<span className="sr-only">Ouvrir le menu</span>
								<Bars3Icon aria-hidden="true" className="size-6" />
							</button>

							{/* Logo */}
							<div className="ml-4 flex lg:ml-0">
								<Link href="/">
									<span className="sr-only">Catalogue VI Paris RP</span>
									<Image alt="" src={logo} className="h-8 w-auto" />
								</Link>
							</div>

							{/* Flyout menus */}
							<PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
								<div className="flex h-full space-x-8">
									{navigation.categories.map((category) => (
										<Popover key={category.name} className="flex">
											<div className="relative flex">
												<PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-white-500 transition-colors duration-200 ease-out hover:text-fuchsia-600 data-open:border-indigo-600 data-open:text-indigo-600">
													{category.name}
												</PopoverButton>
											</div>

											<PopoverPanel
												transition
												className="absolute inset-x-0 top-full text-sm text-fuchsia-500 transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
											>
												{/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
												<div
													aria-hidden="true"
													className="absolute inset-0 top-1/2 bg-white bg-transparent shadow-sm"
													style={{ backgroundColor: "rgba(20, 0, 54, 0.95)" }}
												/>

												<div
													className="relative bg-white bg-transparent"
													style={{ backgroundColor: "rgba(20, 0, 54, 0.95)" }}
												>
													<div className="mx-auto max-w-7xl px-8">
														<div className="grid grid-cols-1 gap-x-8 gap-y-10 py-6">
															{/* <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {category.featured.map((item) => (
                                  <div
                                    key={item.name}
                                    className="group relative text-base sm:text-sm"
                                  >
                                    <img
                                      alt={item.imageAlt}
                                      src={item.imageSrc}
                                      className="aspect-square w-full rounded-lg bg-fuchsia-100 object-cover group-hover:opacity-75"
                                    />
                                    <Link
                                      href={item.href}
                                      className="mt-6 block font-medium text-fuchsia-900"
                                    >
                                      <span
                                        aria-hidden="true"
                                        className="absolute inset-0 z-10"
                                      />
                                      {item.name}
                                    </Link>
                                    <p aria-hidden="true" className="mt-1">
                                      Shop now
                                    </p>
                                  </div>
                                ))}
                              </div> */}
															<div className="flex gap-x-16 gap-y-10 text-sm">
																{category.sections.map((section) => (
																	<div key={section.name}>
																		<p
																			id={`${section.name}-heading`}
																			className="font-medium text-fuchsia-600 underline font-semibold"
																		>
																			{section.name}
																		</p>
																		<ul
																			role="list"
																			aria-labelledby={`${section.name}-heading`}
																			className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
																		>
																			{section.items.map((item) => (
																				<li key={item.name} className="flex ">
																					<Link
																						href={item.href}
																						className="hover:text-fuchsia-700"
																					>
																						{item.name}
																					</Link>
																				</li>
																			))}
																		</ul>
																	</div>
																))}
															</div>
														</div>
													</div>
												</div>
											</PopoverPanel>
										</Popover>
									))}

									{/* {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-fuchsia-600 hover:text-fuchsia-800"
                    >
                      {page.name}
                    </Link>
                  ))} */}
								</div>
							</PopoverGroup>

							<div className="ml-auto flex items-center">
								<div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
									<Link
										href="#"
										className="text-sm font-medium text-white-600 hover:text-fuchsia-800"
									>
										Contact
									</Link>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
}
