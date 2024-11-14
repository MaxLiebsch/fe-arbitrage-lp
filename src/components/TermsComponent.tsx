import React from 'react'
import { terms } from '@/static/terms'
import { TermsSection } from '@/types/Legal'
const Section = ({ section }: { section: TermsSection }) => {
  return (
    <section id={`${section.title}`}>
      <h2 className="mb-2 text-2xl font-semibold text-gray-800">
        {section.title}
      </h2>
      <div className="flex flex-col gap-4">
        {section.paragraphs.map((paragraph, index) => {
          if (typeof paragraph === 'string') {
            return (
              <p key={index} className="text-gray-700">
                {paragraph}
              </p>
            )
          } else {
            return (
              <div key={index} className="flex flex-col gap-2">
                <h3 className="text-gray-800">{paragraph.title}</h3>
                {paragraph.bullets && (
                  <ul className="ml-4 list-disc text-gray-700">
                    {paragraph.bullets.map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>
                )}
                {paragraph.paragraphs && (
                  <div className="flex flex-col gap-2">
                    {paragraph.paragraphs.map((subParagraph, index) => {
                      if (typeof subParagraph === 'string') {
                        return (
                          <p key={'subsub' + index} className="text-gray-700">
                            {subParagraph}
                          </p>
                        )
                      } else {
                        return (
                          <p key={'subsub' + index}>
                            <h4 className="text-lg font-medium text-gray-800">
                              {paragraph.title}
                            </h4>
                            {paragraph.bullets && (
                              <ul className="ml-8 list-disc text-gray-700">
                                {paragraph.bullets.map((bullet, index) => (
                                  <li key={index}>{bullet}</li>
                                ))}
                              </ul>
                            )}
                          </p>
                        )
                      }
                    })}
                  </div>
                )}
              </div>
            )
          }
        })}
      </div>
    </section>
  )
}

const TermsComponent = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="mb-4 text-center text-3xl font-bold text-gray-800">
        {terms.title}
      </h1>
      {terms.subParagraphs.map((paragraph, index) => (
        <p key={'sub' + index} className="mb-4 text-lg text-gray-700">
          {paragraph}
        </p>
      ))}
      <div>
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Inhaltsverzeichnis
          </h2>
          <ol className="mb-8 list-inside list-disc text-gray-700">
            {terms.sections.map((section, i) => (
              <a key={'toc' + i} href={`#${section.title}`}>
                <li key={section.title}>{section.title}</li>
              </a>
            ))}
          </ol>
        </div>
      </div>
      <div className="space-y-6">
        {terms.sections.map((section) => (
          <Section key={section.title + section.id} section={section} />
        ))}
      </div>
      <p className='mt-10'>
        Stand:{terms.date} {terms.version}
      </p>
    </div>
  )
}

export default TermsComponent
