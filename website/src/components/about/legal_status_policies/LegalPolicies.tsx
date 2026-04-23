"use client"

import { Download } from "lucide-react"

const documents = [
  {
    title: "Certificate of State Registration of a Non-Governmental Non-Commercial Organization",
    file: "/docs/certificate-uzbekistan.pdf"
  },
  {
    title: "Regulations on the Branch of the Association of Legal Entities \"Benelux Chamber of Commerce\" in Uzbekistan",
    file: "/docs/regulations-branch-uzbekistan.pdf"
  },
  {
    title: "Protocol No. 3 of the Vote of the Extraordinary General Meeting of Members of the Association of Legal Entities \"Benelux Chamber of Commerce\"",
    file: "/docs/protocol-no3-general-meeting.pdf"
  },
  {
    title: "Certificate of State Registration of a Non-Governmental Non-Commercial Organization in Kazakhstan",
    file: "/docs/certificate-kazakhstan.pdf"
  },
  {
    title: "Statutory document of Benelux Chamber of Commerce in Kazakhstan",
    file: "/docs/statutory-document-kazakhstan.pdf"
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