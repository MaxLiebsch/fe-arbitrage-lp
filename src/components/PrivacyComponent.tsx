import React from 'react'
import { privacy } from '@/static/privacy'
import { PrivacySection } from '@/types/Legal'

const Section = ({ section }: { section: PrivacySection }) => {
  return (
    <section id={section.title}>
      <h2 className="mb-2 text-2xl font-semibold text-gray-800">
        {section.title}
      </h2>
      {section.subHeadline && (
        <h4 className="mb-2 text-gray-800">{section.subHeadline}</h4>
      )}
      <div className="flex flex-col gap-4">
        {section.subSections.map((subSection, subSectionIndex) => {
          if (typeof subSection === 'string') {
            return (
              <p key={subSectionIndex} className="text-gray-700">
                {subSection}
              </p>
            )
          } else {
            return (
              <div key={subSectionIndex} className="flex flex-col gap-2">
                <h3 className="text-xl font-medium text-gray-800">
                  {subSection.title}
                </h3>
                {subSection.paragraphs && (
                  <ul className="ml-4 text-gray-700">
                    {subSection.paragraphs.map((subParagraph, index) => {
                      if (typeof subParagraph === 'string') {
                        return (
                          <li key={subSectionIndex + 'bull' + index}>
                            {subParagraph}
                          </li>
                        )
                      } else if (subParagraph.paragraphs) {
                        const subSubParagraph = subParagraph.paragraphs
                        return (
                          <div key={subSectionIndex + 'subsub' + index}>
                            <h4 className="text-lg font-medium text-gray-800">
                              {subParagraph.title}
                            </h4>
                            {subSubParagraph.map((subsubParagraph, index) => {
                              if (typeof subsubParagraph === 'string') {
                                return (
                                  <p key={subSectionIndex + 'bull' + index}>
                                    {subsubParagraph}
                                  </p>
                                )
                              } else {
                                return (
                                  <div key={subSectionIndex + 'bull' + index}>
                                    <>
                                      {subsubParagraph.paragraphs && (
                                        <div>
                                          <h4 className="mt-3 font-medium text-gray-800">
                                            <p>{subsubParagraph.title}</p>
                                          </h4>
                                          {subsubParagraph.paragraphs.map(
                                            (bullet, index) => {
                                              if (typeof bullet === 'string') {
                                                return (
                                                  <p key={index}>{bullet}</p>
                                                )
                                              } else {
                                                return (
                                                  <div
                                                    key={index + 'subbullet'}
                                                  >
                                                    <h5 className="mt-2 text-lg font-medium text-gray-800">
                                                      <p>{bullet.title}</p>
                                                    </h5>
                                                    <div>
                                                      {bullet.paragraphs &&
                                                        bullet.paragraphs.map(
                                                          (
                                                            subBullet,
                                                            index,
                                                          ) => {
                                                            if (
                                                              typeof subBullet ===
                                                              'string'
                                                            ) {
                                                              return (
                                                                <p key={index}>
                                                                  {subBullet}
                                                                </p>
                                                              )
                                                            } else {
                                                              return (
                                                                subBullet.bullets && (
                                                                  <ul
                                                                    key={index}
                                                                    className="ml-8 list-disc text-gray-700"
                                                                  >
                                                                    {subBullet.bullets.map(
                                                                      (
                                                                        subsubBullet,
                                                                        index,
                                                                      ) => {
                                                                        return (
                                                                          <li
                                                                            key={
                                                                              index
                                                                            }
                                                                          >
                                                                            {
                                                                              subsubBullet
                                                                            }
                                                                          </li>
                                                                        )
                                                                      },
                                                                    )}
                                                                  </ul>
                                                                )
                                                              )
                                                            }
                                                          },
                                                        )}
                                                    </div>
                                                  </div>
                                                )
                                              }
                                            },
                                          )}
                                        </div>
                                      )}
                                    </>
                                  </div>
                                )
                              }
                            })}
                          </div>
                        )
                      }
                    })}
                  </ul>
                )}
              </div>
            )
          }
        })}
      </div>
    </section>
  )
}

const PrivacyComponent = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8 break-words">
      <h1 className="mb-4 text-center text-2xl md:text-3xl font-bold text-gray-800">
        {privacy.title}
      </h1>
      <div>
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Inhaltsverzeichnis
          </h2>
          <ol className="mb-8 list-inside list-disc text-gray-700">
            {privacy.sections.map((section, i) => (
              <a key={'toc' + i} href={`#${section.title}`}>
                <li key={section.title}>{section.title}</li>
              </a>
            ))}
          </ol>
        </div>
      </div>
      <div className="space-y-6">
        {privacy.sections.map((section) => (
          <Section key={section.title + section.id} section={section} />
        ))}
      </div>
      <p className='mt-10'>
        Stand:{privacy.date} {privacy.version}
      </p>
    </div>
  )
}

export default PrivacyComponent
