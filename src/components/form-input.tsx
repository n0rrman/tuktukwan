"use client";

import React from "react";
import { useState, useEffect } from "react";

interface FormInputProps {
  id: string;
  title: string;
  placeholder: string;
  errors?: string[] | undefined;
}

export default function FormInput({
  id,
  title,
  placeholder,
  errors,
}: FormInputProps) {
  useEffect(() => {
    setValue(window.localStorage.getItem(id) || "");
  }, [id]);

  const [value, setValue] = useState("");

  const props = {
    type: "text",
    placeholder: placeholder,
  };

  const recordChange = (e: any) => {
    setValue(e.target.value);
    window.localStorage.setItem(id, e.target.value);
  };

  const renderedInput = () => {
    const className = `
    ${
      !!errors
        ? "placeholder:text-red-600/40 border-red-600/65"
        : "placeholder:text-slate-950/50 border-slate-950/20"
    }
    ${
      !!value ? "placeholder:opacity-0" : "placeholder:opacity-100"
    } z-10 p-3 outline-none placeholder:tracking-widest focus:border-blue-400 focus:placeholder:-translate-y-[2.2rem] placeholder:opacity-100 focus:placeholder:opacity-0 placeholder:transition bg-transparent border-2 rounded-lg`;
    return (
      <input
        name={id}
        onChange={recordChange}
        value={value}
        {...props}
        className={`${className} peer`}
      />
    );
  };

  if (errors) {
    console.log(errors[0]);
  }

  return (
    <div className="group flex flex-col-reverse text-xs w-full">
      {renderedInput()}
      <label
        className={`
        ${!!errors && "text-red-600"}
        ${
          !!value || !!errors
            ? "translate-y-0 opacity-100"
            : "translate-y-[2.2rem] opacity-0"
        } peer-focus:translate-y-0 peer-focus:opacity-100 text-xs tracking-widest px-[0.85rem] z-0 transition`}
        htmlFor={title}
      >
        {title}
        {errors && <span className="text-[0.6rem]">{errors[0]}</span>}
      </label>
    </div>
  );
}
