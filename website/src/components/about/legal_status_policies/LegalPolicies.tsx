"use client"

import { Download } from "lucide-react"

const documents = [
  {
    title: "Code of Conduct (pdf)",
    file: "/docs/code-of-conduct.pdf"
  },
  {
    title: "Anti-Bribery Policy (pdf)",
    file: "/docs/anti-bribery.pdf"
  },
  {
    title: "Sexual Harassment Policy (pdf)",
    file: "/docs/harassment.pdf"
  },
  {
    title: "Conflict of Interest Policy (pdf)",
    file: "/docs/conflict.pdf"
  },
  {
    title: "Gifts & Entertainment Policy (pdf)",
    file: "/docs/gifts.pdf"
  },
  {
    title: "General Committee Rules (pdf)",
    file: "/docs/committee-rules.pdf"
  },
  {
    title: "Committee Access Rules (pdf)",
    file: "/docs/access-rules.pdf"
  }
]

export default function LegalPolicies() {
  return (
    <section className="py-20">

      <div className="max-w-5xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-sm tracking-[0.2em] text-[#103959] uppercase mb-10">
          Public Access to BENELUX Published Internal Policies
        </h2>


        {/* LIST */}
        <div className="space-y-4">

          {documents.map((doc, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-100 px-6 py-5 hover:bg-gray-200 transition"
            >

              {/* FILE NAME */}
              <p className="text-gray-800 font-medium">
                {doc.title}
              </p>


              {/* DOWNLOAD */}
              <a
                href={doc.file}
                download
                className="flex items-center gap-2 text-[#103959] font-medium hover:underline"
              >
                <Download size={18} />
                Download
              </a>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}