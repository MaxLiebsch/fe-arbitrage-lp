export interface Legal {
  terms: Terms
  privacy: Privacy
}

export interface Terms {
  title: string
  version: string
  date: string
  subParagraphs: string[]
  sections: TermsSection[]
}

export interface Paragraph {
  title: string
  type?: string
  bullets?: string[]
  paragraphs?: ParagraphType[]
}

export type SimpleParagraph = string

export type ParagraphType = SimpleParagraph | Paragraph

export interface TermsSection {
  id: number
  title: string
  paragraphs: ParagraphType[]
}

export interface Privacy {
  title: string
  version: string
  date: string
  sections: PrivacySection[]
}

export interface PrivacySection {
  id: number
  title: string
  subSections: SubSection[]
  subHeadline?: string
}

export interface SubSection {
  title: string
  paragraphs: ParagraphType[]
}
