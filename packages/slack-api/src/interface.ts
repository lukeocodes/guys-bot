export interface Interface {
  issues: Array<Issues>
  searchUrl: string
  maxResults: number
}

interface Issues {
  key: string
  fields: Fields
  changelog: Changelog
}

interface Changelog {
  histories: Array<History>
}

interface History {
  items: Array<Item>
  created: Date
}

interface Item {
  toString: string
  fromString: string
  field: string
}

interface Fields {
  statuscategorychangedate: Date
  resolution: Resolution
  summary: string
  resolutiondate: string
  project: Project
  parent: Parent
  status: Status
  issuetype: Issuetype
}

interface Issuetype {
  name: string
}

interface Status {
  statusCategory: StatusCategory
  name: string
}

interface StatusCategory {
  key: string
  name: string
}

interface Parent {
  id: string
  key: string
  fields: ParentFields
}

interface ParentFields {
  resolution: Resolution
  summary: string
  resolutiondate: string
  project: Project
  issuetype: Issuetype
}

interface Issuetype {
  name: string
}

interface Resolution {
  description: string
}

interface Project {
  name: string
}