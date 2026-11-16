"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../LanguageProvider";

export const CTA = () => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [formState, setFormState] = useState({
    status: "idle", // idle, loading, success, error
    errors: { name: false, email: false, phone: false, region: false },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const region = formData.get("governorate") as string;

    const errors = {
      name: !name.trim(),
      email: !email || !/^\S+@\S+\.\S+$/.test(email),
      phone: !phone.trim(),
      region: !region.trim(),
    };

    setFormState((prev) => ({ ...prev, errors }));

    if (Object.values(errors).some¶»§q«^