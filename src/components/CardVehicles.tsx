"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

export default function CardVehicles({
  marque,
  model,
  price,
  imgFront,
  imgBack,
  isNew,
}: Readonly<{
  marque: string;
  model: string;
  price: number;
  imgFront: StaticImageData;
  imgBack: StaticImageData;
  isNew: boolean;
}>) {
  const [image, setImage] = useState(imgFront);

  return (
    <div className="group lg:w-1/4 p-4 my-4">
      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7 relative">
        <Image
          className="h-full w-auto object-cover object-center group-hover:opacity-75 relative"
          src={image}
          alt=""
          width={500}
          height={500}
          loading="lazy"
          onMouseEnter={() => setImage(imgBack)}
          onMouseLeave={() => setImage(imgFront)}
        />
        {isNew ?? (
          <div className="bg-pink-100 rounded p-1 absolute top-5 left-5 text-black font-semibold tracking-wide text-sm">
            Nouveauté
          </div>
        )}
      </div>
      <h3 className="mt-4 text-sm text-white">{marque}</h3>
      <p className="mt-1 text-lg font-medium text-white">{model}</p>
      <p className="mt-1 text-lg font-medium text-white tracking-wider font-semibold">
        {new Intl.NumberFormat("us-US", {
          style: "currency",
          currency: "USD",
          maximumSignificantDigits: 3,
        }).format(price)}
      </p>
    </div>
  );
}
