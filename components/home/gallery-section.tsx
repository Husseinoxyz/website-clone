"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";

const galleryImages = [
  {
    src: "/images/sym/home_g_1.jpg",
    alt: "International doctors at symposium",
  },
  {
    src: "/images/sym/home_g_2.jpg",
    alt: "Clinical discussion session",
  },
  {
    src: "/images/sym/home_g_3.jpg",
    alt: "Professional networking event",
  },
  {
    src: "/images/sym/home_g_4.jpg",
    alt: "Medical presentation",
  },
  {
    src: "/images/sym/home_g_5.jpg",
    alt: "Strategic collaboration meeting",
  },
  {
    src: "/images/sym/home_g_6.jpg",
    alt: "Symposium attendees",
  },
  {
    src: "/images/sym/home_g_7.jpg",
    alt: "Conference networking moment",
  },
  {
    src: "/images/sym/home_g_8.jpg",
    alt: "Clinical workshop session",
  },
  {
    src: "/images/sym/home_g_9.jpg",
    alt: "Panel discussion",
  },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#007A59] mb-6 text-balance">
            Past OXYZ International Symposiums
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A glimpse into our medical and professional community. The OXYZ
            International Symposium series brings together medical professionals,
            clinic owners, and healthcare leaders from different regions.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 mb-12 w-screen mx-[calc(50%-50vw)]">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={`relative overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                index === 0 || index === 5 ? "md:col-span-1 md:row-span-1" : ""
              }`}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  quality={100}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-teal-dark/0 group-hover:bg-teal-dark/60 transition-colors duration-300" />
              </div>
            </button>
          ))}
        </div>

        {/* Participants Info */}
        <div className="bg-muted rounded-lg p-8 mb-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-gold">6+</p>
              <p className="text-muted-foreground">Continents Represented</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gold">100+</p>
              <p className="text-muted-foreground">Medical Professionals</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gold">50+</p>
              <p className="text-muted-foreground">Clinical Topics Covered</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gold">20+</p>
              <p className="text-muted-foreground">Countries Attended</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/past-symposiums">
            <Button className="bg-teal hover:bg-teal-dark text-secondary-foreground font-semibold">
              View All Past Symposiums
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      {selectedImage ? (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              type="button"
              className="absolute -top-12 right-0 text-white hover:text-gold"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="relative w-full aspect-[4/3] bg-black">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                quality={100}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
